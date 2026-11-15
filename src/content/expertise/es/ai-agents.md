---
title: "Agentes de IA y LLM"
summary: "Diseño, desarrollo y despliego herramientas basadas en modelos de lenguaje: agentes que encadenan tareas de varios pasos, asistentes conectados a los datos internos, automatizaciones que ahorran horas cada semana. Las uso a diario en mi propio trabajo, con las salvaguardas que las hacen fiables."
order: 2
showCertifications: true
skills:
  - label: "Modelos y plataformas"
    items: ["Claude API", "Claude Code", "Codex", "Gemini", "DeepSeek", "Ollama", "MLX"]
  - label: "Componentes"
    items: ["Tool use", "MCP", "Skills", "Salidas estructuradas", "Evaluación"]
  - label: "RAG"
    items: ["LangChain", "BGE-M3", "Qdrant"]
  - label: "Frameworks"
    items: ["Superpowers", "BMAD Method", "GSD", "Spec Kit"]
---

### Lo que construyo

- **Herramientas basadas en agentes**: agentes que planifican, llaman a herramientas y comprueban sus propios resultados, desplegados para usuarios reales y no solo como demostración.
- **Aplicaciones LLM**: integraciones con la API de Claude con tool use, salidas estructuradas, caché de prompts y búsqueda en documentos internos.
- **Skills, tools y servidores MCP**: convertir el conocimiento de negocio en skills de agente y escribir herramientas y servidores Model Context Protocol que conectan los agentes con bases de datos, API y archivos.
- **Entornos privados**: modelos open-weight que funcionan en un portátil (Ollama, MLX) cuando los datos deben quedarse en casa.

### RAG

Asistentes que responden a partir de una base documental (PDF, artículos) y citan sus fuentes:

- **Ingesta**: extracción, limpieza, segmentación semántica (chunking), metadatos y embeddings.
- **Búsqueda**: búsqueda semántica e híbrida, reranking.
- **Evaluación**: pertinencia de la búsqueda, fidelidad de las respuestas (faithfulness), calidad de las respuestas.
- **Herramientas**: [LangChain](https://github.com/langchain-ai/langchain), los embeddings [BGE-M3](https://huggingface.co/BAAI/bge-m3) y la base vectorial [Qdrant](https://github.com/qdrant/qdrant).

### Frameworks de desarrollo con agentes

Métodos de desarrollo guiado por especificaciones que uso con Claude Code y Codex:

- [Superpowers](https://github.com/obra/superpowers): skills de agente y una metodología de desarrollo completa, del diseño a la revisión.
- [BMAD Method](https://github.com/bmad-code-org/BMAD-METHOD): desarrollo ágil guiado por agentes especializados.
- [GSD (Get Shit Done)](https://github.com/gsd-build/get-shit-done): meta-prompting, ingeniería de contexto y desarrollo guiado por especificaciones.
- [Spec Kit](https://github.com/github/spec-kit): el kit de GitHub para el spec-driven development.

### Cómo hago fiables a los agentes

- **El diseño antes que el código**: el agente parte de un diseño escrito y de un plan paso a paso que reviso.
- **Salvaguardas**: tests, comprobación de tipos, linters y hooks de pre-commit se ejecutan en cada cambio, para detectar los errores automáticamente.
- **Verificación**: ningún resultado se acepta sin el comando que lo produjo. Las cifras se miden, no las adivina el modelo.
- **Reglas explícitas**: las instrucciones del proyecto indican lo que el agente nunca debe hacer, como usar datos futuros en un backtest.
- **Evaluación**: conjuntos de test etiquetados, comparación con un método clásico, análisis de errores. Un modelo que parece acertar no es lo mismo que un modelo que acierta.
