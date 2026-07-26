---
name: setup
description: Initialize or verify a Markdown-first, Obsidian-friendly Fitness Note Structure for daily, meal, and weekly review notes.
---

# Setup

Initialize or verify the user's local Fitness Note Structure.

Use this Skill when the user wants to start using Fitness Skills, create a local
fitness journal, prepare a folder for Daily Notes, Meal Notes, and Weekly
Reviews, or check whether an existing folder already matches the expected shape.

## Process

1. **Choose the target**: if the user did not provide a folder, ask where to
   create or verify the Fitness Note Structure. Prefer a `Fitness/` folder, but
   work inside the user's chosen location.
2. **Inspect first**: list the target folder if it exists. Treat existing files
   as user data.
3. **Create missing structure**: create only missing folders and starter notes
   from [STRUCTURE.md](STRUCTURE.md).
4. **Preserve content**: never overwrite, rename, delete, or move existing user
   files unless the user explicitly asks for that exact change.
5. **Report the result**: summarize what was created, what already existed, and
   what still needs the user's decision.

## Rules

- Keep the structure Markdown-first and local-first.
- Keep Obsidian and Dataview optional. Wikilinks and YAML frontmatter are
  allowed because plain Markdown readers still show them as text.
- Use Dated Fitness Note conventions from [STRUCTURE.md](STRUCTURE.md).
- If a file exists with different content, leave it alone and tell the user what
  would be changed rather than editing it.
