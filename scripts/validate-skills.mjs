import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

export const requiredSkills = [
  {
    name: "setup",
    requiredFiles: ["SKILL.md", "STRUCTURE.md"],
  },
  {
    name: "daily",
    requiredFiles: ["SKILL.md", "DAILY-NOTE.md"],
  },
  {
    name: "meal-analysis",
    requiredFiles: ["SKILL.md", "MEAL-NOTE.md"],
  },
  {
    name: "weekly-review",
    requiredFiles: ["SKILL.md", "WEEKLY-REVIEW.md"],
  },
];

export function validateSkillLibrary(rootDir = ".") {
  const skillsDir = join(rootDir, "skills");
  const errors = [];

  if (!existsSync(skillsDir)) {
    errors.push("Missing skills/ directory.");
    return errors;
  }

  const actualSkillDirs = readdirSync(skillsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  for (const skill of requiredSkills) {
    const skillDir = join(skillsDir, skill.name);
    const skillFile = join(skillDir, "SKILL.md");

    if (!existsSync(skillDir)) {
      errors.push(`Missing required skill directory: ${skillDir}`);
      continue;
    }

    if (!existsSync(skillFile)) {
      errors.push(`Missing required skill file: ${skillFile}`);
      continue;
    }

    for (const requiredFile of skill.requiredFiles) {
      const requiredPath = join(skillDir, requiredFile);
      if (!existsSync(requiredPath)) {
        errors.push(`Missing required skill file: ${requiredPath}`);
      }
    }

    const contents = readFileSync(skillFile, "utf8");
    const frontmatter = getFrontmatter(contents);

    if (!frontmatter) {
      errors.push(`${skillFile} is missing YAML frontmatter.`);
      continue;
    }

    const declaredName = getFrontmatterValue(frontmatter, "name");
    if (declaredName !== skill.name) {
      errors.push(
        `${skillFile} frontmatter name must be '${skill.name}', found '${declaredName ?? "missing"}'.`,
      );
    }

    for (const field of ["name", "description"]) {
      if (!hasFrontmatterField(frontmatter, field)) {
        errors.push(`${skillFile} frontmatter is missing '${field}'.`);
      }
    }
  }

  for (const actual of actualSkillDirs) {
    if (!requiredSkills.some((skill) => skill.name === actual)) {
      errors.push(`Unexpected skill directory for MVP: ${join(skillsDir, actual)}`);
    }
  }

  return errors;
}

export function printValidationResult(errors) {
  if (errors.length === 0) {
    console.log("Skill validation passed.");
    return;
  }

  console.error("Skill validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
}

if (isMainModule()) {
  const errors = validateSkillLibrary(".");
  printValidationResult(errors);

  if (errors.length > 0) {
    process.exit(1);
  }
}

function isMainModule() {
  return process.argv[1] === fileURLToPath(import.meta.url);
}

function getFrontmatterValue(frontmatter, field) {
  const fieldPattern = new RegExp(`^${field}:\\s*(.+?)\\s*$`, "m");
  return frontmatter.match(fieldPattern)?.[1] ?? null;
}

function getFrontmatter(contents) {
  const match = contents.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  return match?.[1] ?? null;
}

function hasFrontmatterField(frontmatter, field) {
  const fieldPattern = new RegExp(`^${field}:\\s*\\S`, "m");
  return fieldPattern.test(frontmatter);
}
