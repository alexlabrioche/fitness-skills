---
name: weekly-review
description: Read Daily Notes and Meal Notes for a target week and produce a Weekly Review with observations, gaps, strengths, issues, and light priorities.
---

# Weekly Review

Produce a Weekly Review from available Daily Notes and Meal Notes.

Use this Skill when the user asks to review a week, summarize recent fitness or
nutrition notes, identify patterns, or choose light priorities for next week.

## Process

1. **Identify the week**: use the ISO week, date range, or dates provided by the
   user. If the target week is missing, ask or use the current week and say so.
2. **Find notes**: prefer Daily Notes under `Fitness/Daily/` and Meal Notes under
   `Fitness/Meals/`. If the Fitness Note Structure is unavailable, work from the
   notes or text the user provided.
3. **Read evidence first**: separate observations from assumptions. Treat missing
   days, missing meals, and estimated nutrition as evidence limits.
4. **Write the review**: use [WEEKLY-REVIEW.md](WEEKLY-REVIEW.md).
5. **Keep priorities light**: suggest focus areas, not full training or diet
   plans.

## Rules

- Review what is observable in the notes.
- Call out incomplete input when it weakens the review.
- Do not prescribe a full training plan, diet plan, medical recommendation, or
  aggressive goal.
- Keep the tone encouraging, non-judgmental, and specific.
- If only partial notes are available, still produce a useful partial review and
  label it as partial.
