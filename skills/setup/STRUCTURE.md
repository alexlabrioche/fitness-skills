# Fitness Note Structure

The Setup Skill creates or verifies this local Markdown structure:

```text
Fitness/
|-- Daily/
|-- Meals/
|-- Reviews/
|-- Templates/
|-- Dashboards/
`-- Fitness Index.md
```

Use the user's chosen target folder if they do not want the root folder named
`Fitness`.

## Starter Notes

Create `Fitness Index.md` only when it does not already exist:

```markdown
# Fitness Index

## Areas

- [[Daily]]
- [[Meals]]
- [[Reviews]]
- [[Dashboards]]

## Start Here

- Use the Daily Skill for day-level notes.
- Use the Meal Analysis Skill for detailed meal notes.
- Use the Weekly Review Skill for weekly summaries.
```

## Dated Fitness Notes

Daily Notes:

```text
Daily/YYYY-MM-DD.md
```

```yaml
---
type: daily
date: YYYY-MM-DD
---
```

Meal Notes:

```text
Meals/YYYY-MM-DD-<meal>.md
```

```yaml
---
type: meal
date: YYYY-MM-DD
meal: breakfast | lunch | dinner | snack | unknown
estimated: false
---
```

Weekly Reviews:

```text
Reviews/YYYY-Www.md
```

```yaml
---
type: weekly-review
week: YYYY-Www
start: YYYY-MM-DD
end: YYYY-MM-DD
---
```

## Template Notes

The `Templates/` folder is reserved for optional user-editable templates. The
Setup Skill may create starter templates only when the user asks for templates
or the folder is empty and the user confirms they want starter files.

## Dashboards

The `Dashboards/` folder is reserved for future Markdown or Dataview-friendly
views. Do not require Dataview, install plugins, or create plugin-specific
queries unless the user explicitly asks.
