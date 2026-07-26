import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const requiredSkills = ["setup", "daily", "meal-analysis", "weekly-review"];
const skillsDir = "skills";

const errors = [];

if (!existsSync(skillsDir)) {
  errors.push("Missing skills/ directory.");
} else {
  const actualSkillDirs = readdirSync(skillsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  for (const skill of requiredSkills) {
    const skillDir = join(skillsDir, skill);
    const skillFile = join(skillDir, "SKILL.md");

    if (!existsSync(skillDir)) {
      errors.push(`Missing required skill directory: ${skillDir}`);
      continue;
    }

    if (!existsSync(skillFile)) {
      errors.push(`Missing required skill file: ${skillFile}`);
      continue;
    }

    const contents = readFileSync(skillFile, "utf8");
    const frontmatter = getFrontmatter(contents);

    if (!frontmatter) {
      errors.push(`${skillFile} is missing YAML frontmatter.`);
      continue;
    }

    for (const field of ["name", "description"]) {
      if (!hasFrontmatterField(frontmatter, field)) {
        errors.push(`${skillFile} frontmatter is missing '${field}'.`);
      }
    }
  }

  for (const actual of actualSkillDirs) {
    if (!requiredSkills.includes(actual)) {
      errors.push(`Unexpected skill directory for MVP: ${join(skillsDir, actual)}`);
    }
  }
}

if (errors.length > 0) {
  console.error("Skill validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Skill validation passed.");

function getFrontmatter(contents) {
  const match = contents.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
  return match?.[1] ?? null;
}

function hasFrontmatterField(frontmatter, field) {
  const fieldPattern = new RegExp(`^${field}:\\s*\\S`, "m");
  return fieldPattern.test(frontmatter);
}
