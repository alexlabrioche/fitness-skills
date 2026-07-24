# Product Requirements Document

## Vision

Create the best open collection of reusable AI skills for fitness, nutrition and endurance athletes.

The project should become for fitness what Matt Pocock's repository is for TypeScript.

---

# Target users

- runners
- cyclists
- hikers
- strength athletes
- people losing weight
- quantified-self enthusiasts

They already use an AI coding agent.

---

# User story

> I already chat with my AI agent.

> Instead of writing the same prompt every day, I install reusable fitness skills.

---

# MVP

## Daily Log

Transforms free-form text into structured Markdown.

---

## Meal Analysis

Summarizes meals.

Highlights:

- protein
- carbohydrates
- fats
- fiber

Detects missing information instead of hallucinating.

---

## Weekly Review

Reads multiple journal entries.

Produces:

- progress summary
- strengths
- issues
- next week's priorities

---

## Weight Trend

Uses historical measurements.

Produces:

- trend
- moving average
- plateau detection

Never comments on a single day's fluctuation.

---

## Coach

Produces coaching feedback.

Must:

- stay encouraging
- avoid judgment
- explain recommendations

---

# Repository

```text
skills/

    daily-log/
        SKILL.md
        README.md
        examples/

    meal-analysis/
        SKILL.md
        README.md
        examples/

    weekly-review/

    weight-trend/

docs/

LICENSE

README.md
```

---

# Quality requirements

Every skill must include:

- purpose
- expected inputs
- expected outputs
- examples
- edge cases
- limitations

---

# Design principles

- Markdown-first
- Local-first
- Human editable
- No hallucinated data
- Small focused skills
- Composable

---

# Future

Potential skill packs:

- Running
- Cycling
- Marathon
- Trail Running
- Hiking
- Nutrition
- Strength Training
- Recovery
- Sleep
- Race Preparation
- Trek Preparation

The repository grows through domain-specific skills rather than application features.
