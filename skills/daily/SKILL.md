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
3. **Read user defaults**: if `Fitness/User Profile.md` exists, read its logging
   defaults before asking clarifying questions.
4. **Preserve facts**: only treat details as facts when the user provided them
   or they already exist in the note being updated.
5. **Clarify before writing**: before drafting the note, run the Clarification
   Loop below for missing details that materially affect the Daily Note, later
   Weekly Review, or calorie estimates.
6. **Respect skipped answers**: if the user skips or cannot answer, stop asking
   that branch, continue with the facts available, and mark unresolved fields in
   the note.
7. **Structure the day**: write the Daily Note using [DAILY-NOTE.md](DAILY-NOTE.md).
8. **Link meals lightly**: link to Meal Notes when they are mentioned or already
   exist, but do not perform detailed Meal Analysis here.
9. **Mark estimates**: include calories in, exercise calories out, or other
   estimates only when useful, and label them as estimated with uncertainty.
10. **Capture stable habits**: when the user states a durable logging default,
    ask whether to save it to `Fitness/User Profile.md`.

## Rules

- A Daily Note is a day-level view, not the canonical place for detailed meal
  analysis.
- Do not invent sleep, activity, training, meal, weight, mood, nutrition, calorie,
  or recovery data.
- Keep inferred organization separate from user-provided facts.
- Missing information is not required, but the agent must ask for useful missing
  details before drafting when they would make the note, calorie estimates, or
  later Weekly Review better.
- Do not ask for a detail that is already answered by `User Profile.md`, unless
  the current note contradicts that default.
- For calories, distinguish `calories_in` from food and
  `exercise_calories_out` from activity. Do not present basal metabolic rate,
  total daily energy expenditure, or net balance unless the user provided enough
  profile/context or explicitly asked.
- If updating an existing Daily Note, preserve existing content unless the user
  asks to replace or reorganize it.
- Keep the tone neutral, concise, and useful.

## Clarification Loop

Before drafting, ask one question at a time and wait for the user's answer. Do
not ask a bundle of questions in one paragraph.

Pick the highest-leverage missing branch first:

1. Activity details that affect exercise calories or later Weekly Review.
2. Meal details that affect calorie intake or meal links.
3. Recovery/body context that affects interpretation of the day.

Use this exact shape:

```markdown
## Clarification 1/3 — <short topic>

Why it matters: <one sentence tied to this note>.

Question: <one concrete question>

Recommended: <what to answer if they know it, or `skip` if they do not>.

Reply with the answer, `skip`, or `done`.
```

If a likely stable habit would avoid future questions, add one final line:

```markdown
Profile: if this is your usual default, reply `save: <default>` and I will add it
to `User Profile.md`.
```

After each answer, decide whether another question would materially change the
note. Stop the loop and draft when:

- the user answers `skip` for the current branch and no higher-value branch
  remains;
- the user answers `done`;
- three clarification questions have been asked;
- no missing detail would materially improve the Daily Note.

If the user answers with partial details, incorporate them and ask the next
highest-leverage question only if it still matters. Keep skipped questions in
the note's `Optional Questions` section.

## User Profile

Use `Fitness/User Profile.md` for confirmed defaults only. Good defaults include:

- cooked vs dry weights for rice, lentils, pasta, oats, or similar staples;
- preferred units;
- usual interpretation of activity labels such as `EF`;
- whether calorie estimates should be included by default.

Never save sensitive body goals, medical context, or nutrition targets as a
default unless the user explicitly asks.
