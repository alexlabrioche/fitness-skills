# Weekly Review

Weekly Reviews use this path when the Fitness Note Structure exists:

```text
Fitness/Reviews/YYYY-Www.md
```

Use standalone Markdown with the same shape when the structure is unavailable.

## Frontmatter

```yaml
---
type: weekly-review
week: YYYY-Www
start: YYYY-MM-DD
end: YYYY-MM-DD
---
```

## Inputs To Consider

- Daily Notes in the target week.
- Meal Notes linked from those Daily Notes or dated inside the target week.
- Missing days.
- Missing Meal Notes.
- Nutrition Estimates and low-confidence nutrition notes.

## Shape

```markdown
# YYYY-Www Weekly Review

## Summary

- Three to five bullets describing the week from available evidence.

## Progress

- Observable progress or consistency from Daily Notes and Meal Notes.

## Strengths

- What went well.

## Issues

- Friction, gaps, inconsistent logging, recovery concerns, or nutrition patterns.

## Evidence Gaps

- Missing days, missing meals, low-confidence estimates, or weak evidence.

## Next Week Priorities

- One to three light priorities.

## Notes Reviewed

- [[YYYY-MM-DD]]
- [[YYYY-MM-DD-lunch]]
```

## Review Rules

- Use `Evidence Gaps` whenever the week is incomplete or the notes are too thin
  to support strong claims.
- Make priorities small and behaviour-focused, such as "log lunch more
  consistently" or "protect one recovery day".
- Avoid exact weekly nutrition conclusions when meal data is sparse or mostly
  estimated.
- Do not moralize missed workouts, missed logs, food choices, weight, or body
  composition.
- Do not create a full program. If the user wants one, say that is outside this
  Skill and ask what kind of planning support they want.
