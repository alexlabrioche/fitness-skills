# Fitness Note Structure

The Setup Skill creates or verifies this local Markdown structure:

```text
Fitness/
|-- Daily/
|-- Meals/
|-- Reviews/
|-- Templates/
|-- Dashboards/
|-- Fitness Skills.md
|-- User Profile.md
`-- Fitness Index.md
```

Use the user's chosen target folder if they do not want the root folder named
`Fitness`.

## Structure Version

The current Fitness Note Structure version is `0.3`.

Setup must be safe to rerun in an existing vault. Each run should create missing
pieces, verify existing pieces, and record what happened in `Fitness Skills.md`.

## Starter Notes

Create `Fitness Skills.md` only when it does not already exist:

```markdown
---
type: fitness-skills-manifest
structure_version: "0.3"
---

# Fitness Skills

## Installed Structure

- Version: 0.3
- Last setup run: YYYY-MM-DD

## Migration Log

- YYYY-MM-DD: Created manifest.

## Managed Areas

- [[Fitness Index]]
- [[User Profile]]
- [[Daily]]
- [[Meals]]
- [[Reviews]]
- [[Templates]]
- [[Dashboards]]
```

If `Fitness Skills.md` already exists, update `structure_version` and append one
Migration Log entry only when a real migration or verification happened. Do not
duplicate existing log entries from the same setup run.

Create `Fitness Index.md` only when it does not already exist:

```markdown
# Fitness Index

## Areas

- [[Daily]]
- [[Meals]]
- [[Reviews]]
- [[Dashboards]]

## Start Here

- Use the Daily Skill for day-level notes.
- Use the Meal Analysis Skill for detailed meal notes.
- Use the Weekly Review Skill for weekly summaries.
```

Create `User Profile.md` only when it does not already exist:

```markdown
---
type: user-profile
---

# User Profile

## Logging Defaults

- Lentils weight: unknown
- Rice weight: unknown
- Pasta weight: unknown
- Preferred units: metric

## Nutrition Defaults

- Calorie estimates: ask first
- Cooking oil: ask when relevant

## Activity Defaults

- Running intensity labels: user-defined

## Notes

- Add stable habits only when the user explicitly confirms them.
```

The User Profile stores stable user habits that prevent repeated clarification
questions. Examples: "lentils are always cooked weight", "rice is cooked weight
unless stated otherwise", or "use metric units". Do not infer a permanent
default from one log entry.

## Rerun And Migration Rules

Safe automatic changes:

- Create missing top-level folders.
- Create missing starter notes.
- Add `Fitness Skills.md` when absent.
- Add `User Profile.md` when absent.
- Update the manifest's `structure_version`.
- Append a migration log entry to `Fitness Skills.md`.

User confirmation required:

- Rename folders or notes.
- Move existing notes.
- Delete files or folders.
- Rewrite existing note frontmatter.
- Normalize historical field formats.
- Replace content inside `Fitness Index.md`, `User Profile.md`, or any user note.

When a historical note uses an old convention, leave it intact and report a
suggested migration. Example: if old Daily Notes use `pace: "6:20/km"`, suggest
normalizing future entries to `pace: 6:20` and only rewrite old notes after user
confirmation. Do not add derived fields such as `speed_kmh` during setup.

Version upgrades should be additive and generic. A user on any older structure
version should be able to install a newer skill version, rerun Setup, and
continue using the same vault. Setup should detect the recorded
`structure_version`, compare it with the current structure, add missing managed
pieces, update the manifest, and report any migrations that require consent.

## Version History

- `0.3`: Adds `Fitness Skills.md` manifest, `User Profile.md`, and clearer
  rerun-safe migration rules.

## Dated Fitness Notes

Daily Notes:

```text
Daily/YYYY-MM-DD.md
```

```yaml
---
type: daily
date: YYYY-MM-DD
---
```

Daily note frontmatter should store source facts rather than dashboard-only
derived values. Use numbers with units in the field name for simple numeric
facts, such as `distance_km: 9`, `duration_min: 57`, and
`heart_rate_bpm: 145`. Store pace as the compact logged value, e.g.
`pace: 6:20`; dashboards can derive alternate representations later.

Meal Notes:

```text
Meals/YYYY-MM-DD-<meal>.md
```

```yaml
---
type: meal
date: YYYY-MM-DD
meal: breakfast | lunch | dinner | snack | unknown
estimated: false
---
```

Weekly Reviews:

```text
Reviews/YYYY-Www.md
```

```yaml
---
type: weekly-review
week: YYYY-Www
start: YYYY-MM-DD
end: YYYY-MM-DD
---
```

## Template Notes

The `Templates/` folder is reserved for optional user-editable templates. The
Setup Skill may create starter templates only when the user asks for templates
or the folder is empty and the user confirms they want starter files.

## Dashboards

The `Dashboards/` folder is reserved for future Markdown or Dataview-friendly
views. Do not require Dataview, install plugins, or create plugin-specific
queries unless the user explicitly asks.
