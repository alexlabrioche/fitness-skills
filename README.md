# Fitness Skills

Reusable AI skills for fitness, nutrition, and endurance workflows.

This repository is a Markdown-first, local-first Skill library inspired by
`mattpocock/skills`. It is not a fitness app: there is no backend, database,
dashboard, account system, or sync layer. The Skills help an AI agent create and
maintain human-editable fitness notes in the user's own local files.

## MVP Skill Set

- `setup` initializes the Fitness Note Structure.
- `daily` turns free-form daily input into a Daily Note.
- `meal-analysis` creates or enriches Meal Notes.
- `weekly-review` summarizes Daily Notes and Meal Notes into a Weekly Review.

## Recommended Fitness Flow

1. Run `setup` to create or verify the local Markdown note structure.
2. Use `daily` to keep a day-level fitness note.
3. Use `meal-analysis` when a meal needs detailed nutrition analysis.
4. Use `weekly-review` to summarize the week and identify light priorities.

Each Skill should remain usable on its own, but the flow works best when the
Setup Skill has established the shared note conventions.

## Validation

Run the structural validation with:

```bash
npm test
```

The validation checks the MVP Skill folders and required `SKILL.md`
frontmatter. It does not evaluate AI output quality.
