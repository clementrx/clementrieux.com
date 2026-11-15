---
title: "LLMs & coding agents"
summary: "I use AI assistants such as Claude Code and Codex every day, with the same discipline as any other tool. They write code faster, but tests, reviews and measured results decide what is kept. When data is confidential, I run language models on my own machine."
order: 4
---

### A working method, not a shortcut

- **Design before code**: the agent starts from a written design and a step-by-step plan that I review.
- **Guardrails**: tests, type checkers, linters and pre-commit hooks run on every change, so mistakes are caught automatically.
- **Verification**: no result is accepted without the command that produced it. Numbers are measured, not guessed by the model.
- **Explicit domain rules**: project instructions state what the assistant must never do, such as using future data in a backtest.

### Local models

Open-weight models running on my own computer (Ollama, MLX on Apple Silicon) when data must not leave it: extraction, classification, summarisation, with no per-request cost.

### Evaluating LLM output

Labelled test sets, comparison with a classical baseline, error analysis. A model that sounds right is not the same as a model that is right.
