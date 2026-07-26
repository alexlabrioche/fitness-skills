import {
  mkdirSync,
  mkdtempSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { requiredSkills, validateSkillLibrary } from "./validate-skills.mjs";

const cases = [
  {
    name: "passes with the completed MVP shape",
    arrange(root) {
      writeValidLibrary(root);
    },
    expectedErrors: [],
  },
  {
    name: "fails when a required skill directory is missing",
    arrange(root) {
      writeValidLibrary(root, { omitSkill: "daily" });
    },
    expectedErrors: ["Missing required skill directory:"],
  },
  {
    name: "fails when a required SKILL.md is missing",
    arrange(root) {
      writeValidLibrary(root, { omitSkillFile: "setup" });
    },
    expectedErrors: ["Missing required skill file:"],
  },
  {
    name: "fails when frontmatter is missing a name field",
    arrange(root) {
      writeValidLibrary(root, { omitName: "setup" });
    },
    expectedErrors: ["frontmatter is missing 'name'"],
  },
  {
    name: "fails when frontmatter is missing a description field",
    arrange(root) {
      writeValidLibrary(root, { omitDescription: "meal-analysis" });
    },
    expectedErrors: ["frontmatter is missing 'description'"],
  },
  {
    name: "fails when a required reference file is missing",
    arrange(root) {
      writeValidLibrary(root, { omitReference: "weekly-review" });
    },
    expectedErrors: ["Missing required skill file:"],
  },
  {
    name: "fails when an unexpected MVP skill directory exists",
    arrange(root) {
      writeValidLibrary(root);
      mkdirSync(join(root, "skills", "coach"), { recursive: true });
      writeFileSync(
        join(root, "skills", "coach", "SKILL.md"),
        frontmatter("coach", "Out of scope for the MVP."),
      );
    },
    expectedErrors: ["Unexpected skill directory for MVP:"],
  },
];

let failures = 0;

for (const testCase of cases) {
  const root = mkdtempSync(join(tmpdir(), "fitness-skills-validation-"));

  try {
    testCase.arrange(root);
    const errors = validateSkillLibrary(root);

    for (const expectedError of testCase.expectedErrors) {
      if (!errors.some((error) => error.includes(expectedError))) {
        failures += 1;
        console.error(`Self-test failed: ${testCase.name}`);
        console.error(`Expected error containing: ${expectedError}`);
        console.error(`Actual errors: ${JSON.stringify(errors)}`);
      }
    }

    if (testCase.expectedErrors.length === 0 && errors.length > 0) {
      failures += 1;
      console.error(`Self-test failed: ${testCase.name}`);
      console.error(`Expected no errors, got: ${JSON.stringify(errors)}`);
    }
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

if (failures > 0) {
  process.exit(1);
}

console.log("Skill validation self-tests passed.");

function writeValidLibrary(root, options = {}) {
  for (const skill of requiredSkills) {
    if (options.omitSkill === skill.name) {
      continue;
    }

    const skillDir = join(root, "skills", skill.name);
    mkdirSync(skillDir, { recursive: true });

    if (options.omitSkillFile !== skill.name) {
      writeFileSync(
        join(skillDir, "SKILL.md"),
        frontmatter(
          options.omitName === skill.name ? null : skill.name,
          options.omitDescription === skill.name
            ? null
            : `Use ${skill.name} in the Fitness Skills MVP.`,
        ),
      );
    }

    for (const requiredFile of skill.requiredFiles) {
      if (requiredFile === "SKILL.md" || options.omitReference === skill.name) {
        continue;
      }

      writeFileSync(join(skillDir, requiredFile), `# ${requiredFile}\n`);
    }
  }
}

function frontmatter(name, description) {
  const nameLine = name === null ? "" : `name: ${name}\n`;
  const descriptionLine =
    description === null ? "" : `description: ${description}\n`;

  return `---\n${nameLine}${descriptionLine}---\n\n# ${name ?? "missing-name"}\n`;
}
