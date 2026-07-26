# Fitness Skills

Reusable AI skills for fitness, nutrition, and endurance coaching.

## Language

**Skill**:
A reusable, self-contained agent capability packaged like `mattpocock/skills`: a folder with operational Markdown instructions and supporting human documentation/examples. The MVP targets this concrete packaging first while keeping the fitness guidance portable across agents.
_Avoid_: prompt, app feature, generic framework module

**Setup Skill**:
The `skills/setup/` skill that initializes the user's local fitness note structure. It creates a Markdown-first, Obsidian-friendly folder and note layout without requiring Obsidian or Dataview.
_Avoid_: setup-fitness, installer app

**Fitness Note Structure**:
The local Markdown structure initialized by the Setup Skill: `Fitness/`, with `Daily/`, `Meals/`, `Reviews/`, `Templates/`, `Dashboards/`, `User Profile.md`, and `Fitness Index.md`. MVP skills read from and write to this structure.
_Avoid_: app database, mandatory Obsidian vault

**User Profile**:
A local Markdown note for explicit, stable user defaults that make future Fitness Skills more adaptive, such as preferred units or whether common foods are logged cooked or dry. It stores confirmed habits, not guesses from a single note.
_Avoid_: hidden memory, inferred personal profile

**Dated Fitness Note**:
A Markdown note named with a stable date-based convention and minimal YAML frontmatter so notes are readable by humans and queryable by tools like Dataview. Daily notes use `YYYY-MM-DD.md`, meal notes use `YYYY-MM-DD-<meal>.md`, and weekly reviews use `YYYY-Www.md`.
_Avoid_: free-form filename, opaque generated id

**Calculable Field**:
A frontmatter field intended for Dataview, charts, or later analysis. Calculable fields use predictable types and units in the field name, such as `weight_kg`, `duration_min`, `pace_sec_per_km`, or `calories_in_kcal_min`. Human display strings like `6:20/km` or `77.6 kg` belong in Markdown prose or tables, not as the only stored value.
_Avoid_: unit-bearing string, unknown numeric placeholder

**Daily Skill**:
The `skills/daily/` skill that turns a user's free-form daily fitness/nutrition note into structured Markdown compatible with the local note structure.
_Avoid_: daily-log

**Daily Note**:
A Dated Fitness Note under `Fitness/Daily/` that summarizes a day and links to detailed meal notes when meals are captured separately. It is the day-level view, not the canonical place for detailed meal analysis.
_Avoid_: meal detail note, all-in-one nutrition log

**Optional Follow-Up**:
A question the agent asks before drafting when missing information would materially improve a note, calorie estimate, or later review, without making the answer mandatory. Optional Follow-Ups should be adapted to the user's actual note and tracked in queryable Markdown when still unresolved.
_Avoid_: required form field, generic checklist

**Energy Estimate**:
A clearly marked calorie estimate in a Daily Note that separates calories in from food and exercise calories out from activity. It should use ranges, confidence, and estimated flags when inputs are incomplete.
_Avoid_: exact calorie balance, hidden TDEE assumption

**Meal Note**:
A Dated Fitness Note under `Fitness/Meals/` that captures one meal's details and nutrition analysis. Meal notes can be linked from Daily Notes.
_Avoid_: daily note section

**Nutrition Estimate**:
A clearly marked, uncertain macro or nutrition value inferred from incomplete meal details. It must identify uncertainty, use ranges when appropriate, and never present inferred values as exact user-provided facts.
_Avoid_: exact macro count, hallucinated nutrition data

**Weekly Review**:
A weekly note that summarizes Daily Notes and Meal Notes, identifies observable trends, names strengths and issues, and suggests light priorities for the next week. It does not prescribe a full training or diet plan.
_Avoid_: coach plan, medical advice, aggressive goal setting

**MVP Skill Set**:
The initial repository scope: `setup`, `daily`, `meal-analysis`, and `weekly-review`.
_Avoid_: weight-trend, coach, full fitness pack

**Matt-Style Skill Structure**:
The repository convention for each skill: `SKILL.md` is mandatory, and additional Markdown files are added only when a convention or reference would make `SKILL.md` too long or less reusable. Per-skill `README.md` and `examples/` directories are not required for the MVP.
_Avoid_: mandatory examples folder, per-skill README requirement

**Recommended Fitness Flow**:
The natural user path through the MVP skills: `setup` initializes the Fitness Note Structure, `daily` creates Daily Notes, `meal-analysis` creates or enriches Meal Notes, and `weekly-review` summarizes Daily Notes and Meal Notes. Skills should support this flow while remaining usable on their own.
_Avoid_: hard workflow dependency, monolithic coach skill

**Skill Validation**:
Lightweight repository checks that validate skill structure rather than judging AI output quality. The MVP validation confirms required skill folders exist and that each `SKILL.md` has `name` and `description` frontmatter.
_Avoid_: AI eval suite, exhaustive prompt testing
