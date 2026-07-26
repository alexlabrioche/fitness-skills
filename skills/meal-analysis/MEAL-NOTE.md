# Meal Note

Meal Notes use this path when the Fitness Note Structure exists:

```text
Fitness/Meals/YYYY-MM-DD-<meal>.md
```

Use standalone Markdown with the same shape when the structure is unavailable.

## Frontmatter

```yaml
---
type: meal
date: YYYY-MM-DD
meal: breakfast | lunch | dinner | snack | unknown
estimated: true | false
---
```

Set `estimated: true` when any nutrition value is inferred rather than provided
by the user or read from a source the user supplied.

## Shape

```markdown
# YYYY-MM-DD <meal>

## Meal

- Foods and portions the user provided.

## Nutrition

| Macro | Amount | Confidence |
| --- | ---: | --- |
| Protein | unknown | missing portion detail |
| Carbohydrates | unknown | missing portion detail |
| Fat | unknown | missing portion detail |
| Fiber | unknown | missing portion detail |

## Notes

- Preparation details, context, or user-provided observations.

## Links

- Daily Note: [[YYYY-MM-DD]]

## Missing Information

- Details that would materially improve the analysis.
```

## Estimation Rules

- If the user provides exact macros, record them as provided and set confidence
  to `provided`.
- If the user provides enough food and portion detail for a reasonable estimate,
  use a range and confidence of `low`, `medium`, or `high`.
- If the user provides foods without useful quantities, summarize the meal and
  mark macro amounts as `unknown`.
- If only some macros are supportable, fill those and mark the others as
  `unknown`.
- Do not calculate calories unless the user asks; the MVP focuses on protein,
  carbohydrates, fat, and fiber.
