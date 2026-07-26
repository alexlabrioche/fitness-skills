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
missing_info:
  - optional_field_key
---
```

Use `missing_info` for useful unresolved gaps. Keep keys stable and queryable
when possible, such as `sleep`, `energy`, `mood_stress`, `recovery_feel`,
`run_duration`, `run_pace`, `run_heart_rate`, or `run_feel`. Omit
`missing_info` when there are no useful gaps.

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

## Optional Questions

- [ ] A concise question for the user. [field:: field_key] [optional:: true]
```

## Section Rules

- Omit a section when it would be empty, except `Missing Information` when
  important gaps affect the usefulness of the note.
- Use `Not provided` only when a field is expected by the user or relevant to the
  request. Do not create a checklist of every possible fitness variable.
- Add `Optional Questions` when useful missing details should be asked. These are
  not requirements; they are prompts the user can answer later.
- Ask the same optional questions in chat after producing the note. If the user
  answers, update the note and remove resolved questions.
- Link Meal Notes with wikilinks when the meal is known. Do not invent meal note
  filenames for meals that were not mentioned.
- Keep nutrition at summary level. Detailed protein, carbohydrate, fat, and
  fiber analysis belongs in the Meal Analysis Skill.

## Dataview-Friendly Guidance

- Put stable, queryable facts in frontmatter when they are known.
- Use dotted prose in the body for readability, not as the only place important
  values live.
- Prefer numeric values with dot decimals in frontmatter, for example
  `weight_kg: 77.6`.
- Use `Optional Questions` task lines for unresolved fields that the user can
  answer later.
- Keep the format adaptable. Do not force every user to track every field.
