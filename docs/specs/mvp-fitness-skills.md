# MVP Fitness Skills Library

Labels: `ready-for-agent`

## Problem Statement

People who already use AI coding agents for personal workflows repeatedly write the same fitness and nutrition prompts: structure my daily notes, summarize meals, review my week, and keep the data readable. They want reusable Skill instructions that turn free-form fitness input into local, human-editable Markdown without creating an app, backend, account system, or database.

The project needs an MVP that proves the repository shape, the Fitness Note Structure, and the first composable skills. The MVP must be close in spirit to `mattpocock/skills`: small Markdown-first Skill folders, operational `SKILL.md` files, and extra Markdown references only when a convention is important enough to share across prompts.

## Solution

Build a minimal fitness-focused Skill library with four Skills: Setup Skill, Daily Skill, Meal Analysis, and Weekly Review.

The Setup Skill initializes an Obsidian-friendly local Markdown structure without requiring Obsidian or Dataview. The Daily Skill turns free-form daily input into a Daily Note. Meal Analysis creates or enriches Meal Notes while marking Nutrition Estimates clearly. Weekly Review reads Daily Notes and Meal Notes to produce a Weekly Review that observes, summarizes, and suggests light priorities without becoming a full coach plan.

The Skills should work best as the Recommended Fitness Flow but remain usable individually. The repository should also include lightweight Skill Validation so future additions keep the basic Matt-Style Skill Structure intact.

## User Stories

1. As a fitness-focused AI agent user, I want to install reusable fitness Skills, so that I do not rewrite the same prompts every day.
2. As a runner, I want a Daily Skill to turn messy daily notes into structured Markdown, so that I can keep a consistent training journal.
3. As a cyclist, I want the Skills to preserve local Markdown files, so that my fitness data stays under my control.
4. As a hiker, I want the notes to be readable without special software, so that the system does not depend on a particular app.
5. As an Obsidian user, I want the note structure to be friendly to Obsidian, so that I can browse and link my fitness notes naturally.
6. As a future Dataview user, I want notes to use stable filenames and minimal YAML frontmatter, so that dashboards can query the notes later.
7. As a quantified-self user, I want daily, meal, and weekly notes to use predictable date conventions, so that historical data is easy to scan.
8. As a person losing weight, I want meal analysis to identify missing information, so that the agent does not invent nutrition data.
9. As a strength athlete, I want nutrition estimates to be clearly marked as uncertain, so that I do not mistake them for exact tracking data.
10. As an endurance athlete, I want weekly summaries from multiple notes, so that I can notice patterns without reading every entry manually.
11. As a user with inconsistent logging habits, I want weekly review to call out missing days or weak evidence, so that I understand the limits of the review.
12. As a privacy-conscious user, I want the repository to avoid databases, accounts, and sync, so that my preferred local tooling remains in charge.
13. As a repository maintainer, I want a Setup Skill to define the shared Fitness Note Structure, so that other Skills have stable conventions.
14. As a repository maintainer, I want each Skill to be small and focused, so that future domain-specific packs can compose them.
15. As a Skill author, I want Matt-Style Skill Structure, so that each Skill is easy for agents to load and easy for humans to inspect.
16. As a Skill author, I want extra Markdown references only when useful, so that the repo does not accumulate ceremonial files.
17. As a contributor, I want lightweight validation of Skill folders, so that structural regressions are caught early.
18. As a contributor, I want validation to avoid AI output evaluation for now, so that the MVP stays simple and maintainable.
19. As a user, I want the Daily Skill to summarize the day rather than own detailed meal analysis, so that the note stays compact.
20. As a user, I want Meal Notes to be linkable from Daily Notes, so that detailed nutrition can live separately while staying connected.
21. As a user, I want Weekly Review to suggest light priorities, so that I get useful next steps without a rigid plan.
22. As a user, I want Weekly Review to avoid medical advice and aggressive goal setting, so that the feedback stays safe and encouraging.
23. As a maintainer, I want the MVP to exclude Weight Trend and Coach, so that the first release proves the core workflow before expanding.
24. As a future maintainer, I want the root README to explain the library and list available Skills, so that users can discover the flow quickly.
25. As a user with an existing notes folder, I want Setup Skill to create or verify structure without requiring a fresh vault, so that I can adopt it gradually.
26. As a user who does not use Obsidian, I want the same Markdown structure to work in ordinary folders, so that Obsidian remains optional.
27. As a user, I want the Skills to preserve user-provided facts separately from inferred estimates, so that trust in the notes stays high.
28. As a user, I want the agent to ask for missing inputs when needed, so that incomplete notes are improved rather than hallucinated.
29. As a maintainer, I want the Skill names to stay stable, so that future tickets and docs do not drift back to older names.
30. As a maintainer, I want the project to remain a knowledge library rather than an application, so that maintenance focuses on Skill quality.

## Implementation Decisions

- The MVP Skill Set is exactly Setup Skill, Daily Skill, Meal Analysis, and Weekly Review.
- Weight Trend, Coach, and other future domain packs are excluded from the MVP.
- The repository follows Matt-Style Skill Structure: every Skill has a `SKILL.md` with `name` and `description` frontmatter; additional Markdown references are added only when they carry reusable conventions.
- Per-Skill README files and mandatory examples directories are not required for the MVP.
- The root README explains the repository purpose, installation/use model, and the Recommended Fitness Flow.
- The Setup Skill initializes a Fitness Note Structure rather than a mandatory Obsidian vault.
- The Fitness Note Structure is Markdown-first and Obsidian-friendly, with sections for Daily Notes, Meal Notes, Weekly Reviews, templates, dashboards, and an index note.
- The Setup Skill should create or verify structure without overwriting user content.
- Dated Fitness Notes use stable date-based names and minimal YAML frontmatter.
- Daily Notes use a day-level date convention and represent a summary of the day.
- Meal Notes use a date-plus-meal convention and represent detailed meal analysis.
- Weekly Reviews use ISO week-style naming and summarize a week range.
- Daily Notes may link to Meal Notes using wikilinks when those Meal Notes exist.
- Daily Skill creates or updates a Daily Note from free-form input and should distinguish what the user said from what the agent inferred.
- Meal Analysis creates or enriches Meal Notes and reports protein, carbohydrates, fats, and fiber where supportable.
- Nutrition Estimates are allowed only when clearly marked as estimated and uncertain.
- Meal Analysis must list missing information instead of inventing unsupported nutrition data.
- Weekly Review reads available Daily Notes and Meal Notes, summarizes observable patterns, names strengths and issues, and suggests light priorities.
- Weekly Review does not prescribe a full training plan, diet plan, medical recommendation, or aggressive goal.
- The Recommended Fitness Flow is Setup Skill, then Daily Skill, then Meal Analysis, then Weekly Review.
- The Skills should remain individually usable when the full Fitness Note Structure is unavailable.
- Skill Validation is structural only in the MVP.
- Skill Validation is exposed through the repository's normal test command.
- Skill Validation checks that all required MVP Skills exist and that each has valid frontmatter.
- Skill Validation may reject unexpected MVP drift, such as missing required Skills or missing required Skill metadata.
- The project remains local-first, Markdown-first, human-editable, small, focused, and composable.

## Testing Decisions

- The primary test seam is the repository as a Skill library, exercised through the top-level test command.
- Tests should validate external repository behavior: required Skills exist, required metadata exists, and the library has the expected MVP shape.
- Tests should not evaluate AI output quality, prompt performance, coaching accuracy, or nutrition correctness in the MVP.
- Tests should not depend on Obsidian, Dataview, network access, GitHub, or any user-specific vault.
- Tests should be readable enough that a contributor can understand which Skill convention failed.
- Structural validation should be implemented as a small local script using standard runtime APIs.
- The validation script should fail with actionable messages when a required Skill folder or `SKILL.md` frontmatter field is missing.
- Manual review remains the acceptance path for Skill instruction quality in the MVP.
- Future evals can be added later around representative inputs and expected Markdown behavior, but that is outside this spec.

## Out of Scope

- Building a mobile app, web app, backend, database, sync system, account system, or dashboard application.
- Requiring Obsidian, Dataview, or any Obsidian plugin.
- Creating full Dataview dashboards beyond placeholder-friendly structure.
- Implementing Weight Trend.
- Implementing Coach.
- Implementing detailed training plans or diet plans.
- Providing medical advice.
- Providing exact nutrition tracking from incomplete meal descriptions.
- Building AI evals for generated output quality.
- Publishing package/plugin release infrastructure beyond the minimal repository setup.
- Copying the full release/plugin machinery of `mattpocock/skills` before it is needed.

## Further Notes

The initial ADR says the project should remain platform agnostic. For the MVP, this means agent-portable content packaged in a concrete Matt-style Skill format first. The repository should avoid inventing a generic Skill abstraction before the first Skills are useful.

This spec should be published as a GitHub issue with the `ready-for-agent` label.
