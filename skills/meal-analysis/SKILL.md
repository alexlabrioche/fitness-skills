---
name: meal-analysis
description: Create or enrich a dated Meal Note from free-form meal input, reporting supported macros and clearly marking uncertain Nutrition Estimates.
---

# Meal Analysis

Create or enrich a Meal Note from free-form meal input.

Use this Skill when the user describes a meal, asks for meal analysis, wants
protein/carbohydrate/fat/fiber summarized, or wants a meal saved into the
Fitness Note Structure.

## Process

1. **Find the date and meal**: use the date and meal identity provided by the
   user. If the date is missing, use today's date and say so. If the meal
   identity is missing, use `unknown` or ask when the filename would matter.
2. **Find the target**: prefer `Fitness/Meals/YYYY-MM-DD-<meal>.md` when the
   Fitness Note Structure exists. If it does not, produce standalone Markdown.
3. **Extract provided facts**: list foods, portions, brands, preparation details,
   and user-provided macros separately from estimates.
4. **Analyze only what is supportable**: report protein, carbohydrates, fat, and
   fiber when the input supports it.
5. **Mark uncertainty**: write Nutrition Estimates using [MEAL-NOTE.md](MEAL-NOTE.md).
6. **Link the day**: when the Fitness Note Structure is present, include a link
   back to the relevant Daily Note.
7. **Name missing information**: list details that would materially improve the
   analysis.

## Rules

- Never present inferred nutrition as exact.
- Use ranges or confidence language when a single number would imply false
  precision.
- Use `unknown` for unsupported values rather than inventing data.
- Preserve existing Meal Note content unless the user asks to replace or
  reorganize it.
- Keep the tone practical and non-judgmental.
