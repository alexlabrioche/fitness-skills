---
name: setup
description: Initialize, verify, or safely migrate a Markdown-first, Obsidian-friendly Fitness Note Structure for daily, meal, and weekly review notes.
---

# Setup

Initialize, verify, or migrate the user's local Fitness Note Structure.

Use this Skill when the user wants to start using Fitness Skills, create a local
fitness journal, prepare a folder for Daily Notes, Meal Notes, and Weekly
Reviews, check whether an existing folder already matches the expected shape, or
upgrade an existing vault after installing a newer version of these Skills.

## Process

1. **Choose the target**: if the user did not provide a folder, ask where to
   create or verify the Fitness Note Structure. Prefer a `Fitness/` folder, but
   work inside the user's chosen location.
2. **Inspect first**: list the target folder if it exists. Treat existing files
   as user data.
3. **Read the manifest**: if `Fitness Skills.md` exists, read its version and
   migration log. If it does not exist, treat the vault as pre-manifest.
4. **Plan changes**: compare the existing vault to [STRUCTURE.md](STRUCTURE.md)
   and produce a short plan: create, leave unchanged, propose migration, or
   needs user decision.
5. **Apply safe changes**: create only missing folders, missing starter notes,
   and missing manifest sections. Append to starter notes only where
   [STRUCTURE.md](STRUCTURE.md) explicitly says appending is safe.
6. **Ask before migrations**: before renaming, moving, deleting, rewriting
   frontmatter, or changing existing note content, ask for confirmation with the
   exact files affected.
7. **Update the manifest**: record the installed structure version and any
   migration notes in `Fitness Skills.md`.
8. **Report the result**: summarize what was created, what already existed, what
   was migrated, and what still needs the user's decision.

## Rules

- Keep the structure Markdown-first and local-first.
- Keep Obsidian and Dataview optional. Wikilinks and YAML frontmatter are
  allowed because plain Markdown readers still show them as text.
- Use Dated Fitness Note conventions from [STRUCTURE.md](STRUCTURE.md).
- Create `User Profile.md` from [STRUCTURE.md](STRUCTURE.md) so other Skills can
  remember confirmed logging defaults. Add a default only when the user
  explicitly confirms it.
- Create or update `Fitness Skills.md` from [STRUCTURE.md](STRUCTURE.md) so
  future runs can migrate the vault without forcing the user to delete anything.
- If a file exists with different content, leave it alone and tell the user what
  would be changed rather than editing it.
- Setup must be idempotent: running it twice on the same vault should not
  duplicate sections, duplicate links, or rewrite user content.
- Version upgrades must be additive by default. Prefer adding new notes, fields,
  or documented suggestions over mutating historical notes.
