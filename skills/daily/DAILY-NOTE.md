# Daily Note

Daily Notes use this path when the Fitness Note Structure exists:

```text
Fitness/Daily/YYYY-MM-DD.md
```

Use standalone Markdown with the same shape when the structure is unavailable.

## Frontmatter

```yaml
---
type: daily
date: YYYY-MM-DD
---
```

## Shape

```markdown
# YYYY-MM-DD

## Summary

- One to three bullets summarizing the day from provided facts.

## Activity

- Training, movement, or exercise details the user provided.

## Nutrition

- Day-level nutrition summary from provided facts.
- Linked Meal Notes when relevant: [[YYYY-MM-DD-lunch]]

## Recovery

- Sleep, soreness, energy, mood, stress, or recovery details the user provided.

## Missing Information

- Important information that was not provided.
```

## Section Rules

- Omit a section when it would be empty, except `Missing Information` when
  important gaps affect the usefulness of the note.
- Use `Not provided` only when a field is expected by the user or relevant to the
  request. Do not create a checklist of every possible fitness variable.
- Link Meal Notes with wikilinks when the meal is known. Do not invent meal note
  filenames for meals that were not mentioned.
- Keep nutrition at summary level. Detailed protein, carbohydrate, fat, and
  fiber analysis belongs in the Meal Analysis Skill.
