---
title: "AI agents & LLMs"
summary: "I design, build and deploy tools based on language models: agents that carry out multi-step tasks, assistants connected to internal data, automations that save hours every week. I use them daily in my own work, with the safeguards that make them reliable."
order: 2
showCertifications: true
skills:
  - label: "Models and platforms"
    items: ["Claude API", "Claude Code", "Codex", "Ollama", "MLX"]
  - label: "Building blocks"
    items: ["Tool use", "MCP", "Agent skills", "Structured outputs", "Evaluation"]
  - label: "RAG"
    items: ["LangChain", "BGE-M3", "Qdrant"]
  - label: "Frameworks"
    items: ["Superpowers", "BMAD Method", "GSD", "Spec Kit"]
---

### What I build

- **Agent-based tools**: agents that plan, call tools and check their own results, deployed for real users rather than left as demos.
- **LLM applications**: integrations with the Claude API using tool use, structured outputs, prompt caching and retrieval over internal documents.
- **Skills, tools and MCP servers**: packaging domain knowledge as agent skills, and writing tools and Model Context Protocol servers that connect agents to databases, APIs and files.
- **Private setups**: open-weight models running on a laptop (Ollama, MLX) when data must stay in-house.

### RAG

Assistants that answer from a document collection (PDFs, articles) and cite their sources:

- **Ingestion**: extraction, cleaning, semantic chunking, metadata and embeddings.
- **Retrieval**: semantic and hybrid search, reranking.
- **Evaluation**: retrieval relevance, answer faithfulness, answer quality.
- **Tools**: [LangChain](https://github.com/langchain-ai/langchain), [BGE-M3](https://huggingface.co/BAAI/bge-m3) embeddings and the [Qdrant](https://github.com/qdrant/qdrant) vector database.

### Agentic development frameworks

Spec-driven development methods I use with Claude Code and Codex:

- [Superpowers](https://github.com/obra/superpowers): agent skills and a complete development methodology, from design to review.
- [BMAD Method](https://github.com/bmad-code-org/BMAD-METHOD): agile development driven by specialised agents.
- [GSD (Get Shit Done)](https://github.com/gsd-build/get-shit-done): meta-prompting, context engineering and spec-driven development.
- [Spec Kit](https://github.com/github/spec-kit): GitHub's toolkit for spec-driven development.

### How I keep agents reliable

- **Design before code**: the agent starts from a written design and a step-by-step plan that I review.
- **Guardrails**: tests, type checkers, linters and pre-commit hooks run on every change, so mistakes are caught automatically.
- **Verification**: no result is accepted without the command that produced it. Numbers are measured, not guessed by the model.
- **Explicit rules**: project instructions state what the agent must never do, such as using future data in a backtest.
- **Evaluation**: labelled test sets, comparison with a classical baseline, error analysis. A model that sounds right is not the same as a model that is right.
