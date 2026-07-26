---
name: daily
description: Turn free-form daily fitness, activity, nutrition, and body metric input into an adaptive Dataview-friendly Daily Note after asking useful clarification questions for missing data.
---

# Daily

Turn free-form daily fitness, activity, nutrition, and body metric input into a
Daily Note.

Use this Skill when the user gives a messy day recap, asks to log today, wants a
daily fitness note, or needs an existing day note cleaned into the Fitness Note
Structure.

## Process

1. **Find the date**: use the date provided by the user. If no date is provided,
   use today's date and say so. If the date is ambiguous, ask.
2. **Find the target**: prefer `Fitness/Daily/YYYY-MM-DD.md` when the Fitness
   Note Structure exists. If it does not, produce standalone Markdown.
3. **Preserve facts**: only treat details as facts when the user provided them
   or they already exist in the note being updated.
4. **Clarify before writing**: before drafting the note, ask concise questions
   for missing details that materially affect the Daily Note, later Weekly
   Review, or calorie estimates. Make clear the user can skip any question.
5. **Respect skipped answers**: if the user skips or cannot answer, continue
   with the facts available and mark unresolved fields in the note.
6. **Structure the day**: write the Daily Note using [DAILY-NOTE.md](DAILY-NOTE.md).
7. **Link meals lightly**: link to Meal Notes when they are mentioned or already
   exist, but do not perform detailed Meal Analysis here.
8. **Mark estimates**: include calories in, exercise calories out, or other
   estimates only when useful, and label them as estimated with uncertainty.

## Rules

- A Daily Note is a day-level view, not the canonical place for detailed meal
  analysis.
- Do not invent sleep, activity, training, meal, weight, mood, nutrition, calorie,
  or recovery data.
- Keep inferred organization separate from user-provided facts.
- Missing information is not required, but the agent must ask for useful missing
  details before drafting when they would make the note, calorie estimates, or
  later Weekly Review better.
- Adapt questions to the user and the note. For a run, duration, pace, heart
  rate, and perceived effort may matter. For a rest day, sleep, soreness, energy,
  or stress may matter more.
- For calories, distinguish `calories_in` from food and
  `exercise_calories_out` from activity. Do not present basal metabolic rate,
  total daily energy expenditure, or net balance unless the user provided enough
  profile/context or explicitly asked.
- If updating an existing Daily Note, preserve existing content unless the user
  asks to replace or reorganize it.
- Keep the tone neutral, concise, and useful.
