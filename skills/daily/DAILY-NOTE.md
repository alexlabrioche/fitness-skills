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
weight_kg: 77.6
sleep_hours: 7.5
energy_level_1_5: 3
activities:
  - type: run
    distance_km: 9
    duration_min: 57
    pace_sec_per_km: 380
    heart_rate_bpm: 145
    rpe_1_10: 3
meals:
  - name: breakfast
    note: "[[YYYY-MM-DD-breakfast]]"
calories_in_kcal_min: 1650
calories_in_kcal_max: 2100
exercise_calories_out_kcal_min: 630
exercise_calories_out_kcal_max: 760
estimated:
  calories_in: true
  exercise_calories_out: true
missing_info:
  - recovery_feel
---
```

Use only fields that fit the user's data. Omit unknown frontmatter fields when
they would create clutter, except `missing_info` when useful gaps remain.

Use `missing_info` for unresolved gaps. Keep keys stable and queryable when
possible, such as `sleep`, `energy`, `mood_stress`, `recovery_feel`,
`run_duration`, `run_pace`, `run_heart_rate`, `run_feel`, `meal_portions`,
`body_weight`, or `calorie_context`.

Do not include a key in `missing_info` when the value is covered by a confirmed
default in `Fitness/User Profile.md`. For example, if the profile says lentils
are logged as cooked weight unless stated otherwise, do not keep
`lentils_cooked_or_dry` open.

## Shape

```markdown
# YYYY-MM-DD

## Summary

- One to three bullets summarizing the day from provided facts.

## Body Metrics

| Metric | Value | Source |
| --- | ---: | --- |
| Weight | 77.6 kg | provided |

## Activity

| Type | Distance | Duration | Pace | HR | RPE | Notes |
| --- | ---: | ---: | --- | ---: | ---: | --- |
| run | 9 km | unknown | unknown | unknown | unknown | Provided facts only. |

## Nutrition

| Meal | Contents | Linked note |
| --- | --- | --- |
| breakfast | Foods the user provided. | [[YYYY-MM-DD-breakfast]] |

## Energy Estimate

| Metric | Estimate | Confidence | Basis |
| --- | ---: | --- | --- |
| Calories in | unknown | missing | Meal analysis not detailed enough. |
| Exercise calories out | unknown | missing | Activity details not detailed enough. |

## Recovery

- Sleep, soreness, energy, mood, stress, or recovery details the user provided.

## Missing Information

- Important information that was not provided.

## Optional Questions

- [ ] A concise skipped question for the user. [field:: field_key] [optional:: true]
```

## Section Rules

- Omit a section when it would be empty, except `Missing Information` when
  important gaps affect the usefulness of the note.
- Use `Not provided` only when a field is expected by the user or relevant to the
  request. Do not create a checklist of every possible fitness variable.
- Ask useful optional questions in chat before drafting. Add `Optional Questions`
  to the note only for useful questions the user skipped or left unresolved.
- Link Meal Notes with wikilinks when the meal is known. Do not invent meal note
  filenames for meals that were not mentioned.
- Keep nutrition at summary level. Detailed protein, carbohydrate, fat, and
  fiber analysis belongs in the Meal Analysis Skill.
- Put meals in a table instead of prose when the user provided enough detail.
- Put activity in a table instead of prose when the user provided structured
  details.
- Put calorie estimates in `Energy Estimate`, separated into calories in and
  exercise calories out. Use ranges and confidence. Use `unknown` when the input
  is too thin.
- Never calculate net balance unless the user asks and enough context exists.

## Dataview-Friendly Guidance

- Put stable, queryable facts in frontmatter when they are known.
- Every field intended for future dataviz should be calculable. Store numeric
  values as numbers, not display strings.
- Treat frontmatter as the analytics layer and the Markdown body as the display
  layer.
- Use prose in the body for readability, not as the only place important values
  live.
- Prefer numeric values with dot decimals in frontmatter, for example
  `weight_kg: 77.6`.
- Store pace as `pace_sec_per_km`, not `"6:20/km"`. Display `6:20/km` in the
  Markdown table if useful for humans.
- Store derived fields like `speed_kmh` only when the user or device provides
  them, or when the dashboard explicitly needs denormalized values. Otherwise,
  let Dataview compute them from `distance_km` and `duration_min`.
- Omit unknown numeric fields from frontmatter. Track the gap in `missing_info`
  instead of writing `unknown`.
- Prefer `*_min` and `*_max` fields for uncertain numeric ranges.
- Use `estimated` flags for inferred values.
- Use `Optional Questions` task lines only for unresolved fields that the user
  can answer later.
- Keep the format adaptable. Do not force every user to track every field.

## Numeric Field Conventions

- Distances: kilometers as numbers, e.g. `distance_km: 9`.
- Durations: minutes as numbers, e.g. `duration_min: 57`.
- Pace: seconds per kilometer as a number, e.g. `pace_sec_per_km: 380` for
  `6:20/km`.
- Speed: kilometers per hour as a number, e.g. `speed_kmh: 9.47`.
- Heart rate: beats per minute as a number, e.g. `heart_rate_bpm: 145`.
- RPE: number on the user's chosen scale, usually `rpe_1_10`.
- Subjective scores: use explicit numeric scales, e.g. `energy_level_1_5: 3`,
  not broad text labels.
- Calories: kcal as numbers, using `_min` and `_max` for ranges.
- Weight: kilograms as a number, e.g. `weight_kg: 77.6`.

Human-readable strings like `6:20/km`, `57 min`, or `77.6 kg` belong in Markdown
tables or prose, not as the only queryable value.

## Calculable Field Examples

Prefer this:

```yaml
activities:
  - type: run
    distance_km: 9
    duration_min: 57
    pace_sec_per_km: 380
    heart_rate_bpm: 145
    rpe_1_10: 3
missing_info:
  - recovery_feel
```

Avoid this:

```yaml
activities:
  - type: run
    distance: "9 km"
    duration: "57 min"
    pace: "6:20/km"
    heart_rate: "145 bpm"
    rpe: "easy"
    recovery: unknown
```

## Clarification Guidance

Before drafting, ask one clarification question at a time. Use the format from
`SKILL.md` and wait for the user's answer before asking another question or
writing the note.

Read `Fitness/User Profile.md` first when it exists. User Profile defaults answer
clarification questions only when they directly cover the current ambiguity.

Choose questions by leverage, not by checklist coverage. Examples:

- For a run: duration, pace, average heart rate, perceived effort, or elevation
  if relevant.
- For calorie intake: portion sizes, cooking fat, brands, sauces, drinks, or
  whether the user wants calories estimated at all.
- For calorie output: activity duration, body weight if absent, intensity, heart
  rate, or device-reported calories if the user has them.
- For recovery: sleep duration, energy, soreness, stress, mood, or recovery feel.

Do not block forever. Ask at most three clarification questions. If the user
answers `skip` or `done`, write the note with `unknown`, ranges, `estimated`
flags, `missing_info`, and unresolved `Optional Questions` as appropriate.

When the user gives a durable default, ask whether to save it to
`Fitness/User Profile.md`. Example: "I usually give lentils cooked weight."
