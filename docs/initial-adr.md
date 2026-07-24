# ADR-0001 — Publish a fitness-focused AI skills library

## Status

Accepted

## Context

Modern AI coding agents support reusable skills that encapsulate domain expertise.

Today, most public skill libraries focus on software engineering:

- TypeScript
- React
- Git
- Testing
- DevOps

There is almost no high-quality collection of reusable skills dedicated to personal fitness, nutrition and endurance sports.

The initial idea was to build a dedicated fitness application.

However, the real value appears to be the knowledge itself rather than the application.

## Decision

The project will be a repository of reusable AI skills.

Each skill is:

- self-contained
- versioned
- documented
- testable
- platform agnostic

The repository does not implement an application.

It only provides reusable capabilities that can be consumed by AI agents supporting skills.

## Scope

Examples:

- Daily Log
- Meal Analysis
- Protein Estimator
- Weekly Review
- Weight Trend Analysis
- Training Review
- Race Preparation
- Grocery Planning

## Non-goals

The project will not provide:

- a mobile application
- a backend
- a database
- user accounts
- dashboards
- synchronization
- workout tracking

Those concerns belong to the user's preferred tooling.

## Principles

### Markdown-first

Skills should generate or consume Markdown whenever possible.

### Local-first

User data should remain local.

### Platform agnostic

Skills should not depend on:

- VS Code
- Obsidian
- Cursor
- Claude Code

Any agent capable of loading reusable skills should be able to use them.

### Composable

Skills should remain focused.

Complex workflows emerge from composing multiple skills rather than creating one large prompt.

## Consequences

The project becomes a knowledge library rather than an application.

Maintenance focuses on improving prompts, examples and domain expertise instead of building UI.
