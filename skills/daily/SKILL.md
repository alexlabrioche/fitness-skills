---
name: daily
description: Turn free-form daily fitness, activity, and nutrition input into an adaptive dated Daily Note, then ask optional follow-up questions for useful missing data.
---

# Daily

Turn free-form daily fitness, activity, and nutrition input into a Daily Note.

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
4. **Structure the day**: write the Daily Note using [DAILY-NOTE.md](DAILY-NOTE.md).
5. **Link meals lightly**: link to Meal Notes when they are mentioned or already
   exist, but do not perform detailed Meal Analysis here.
6. **Decide useful gaps**: infer which missing details would materially improve
   this specific note. Do not ask for a generic checklist.
7. **Ask optional follow-ups**: after writing the note, ask concise optional
   questions for useful missing details. Make clear that answering is optional.
8. **Update if answered**: if the user answers, update the Daily Note with the
   new facts and remove resolved questions.

## Rules

- A Daily Note is a day-level view, not the canonical place for detailed meal
  analysis.
- Do not invent sleep, activity, training, meal, weight, mood, or nutrition data.
- Keep inferred organization separate from user-provided facts.
- Missing information is not required, but the agent must ask for useful missing
  details when they would make the note or later Weekly Review better.
- Adapt questions to the user and the note. For a run, duration, pace, heart
  rate, and perceived effort may matter. For a rest day, sleep, soreness, energy,
  or stress may matter more.
- If updating an existing Daily Note, preserve existing content unless the user
  asks to replace or reorganize it.
- Keep the tone neutral, concise, and useful.
