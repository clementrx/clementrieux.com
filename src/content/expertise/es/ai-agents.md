---
title: "Agentes de IA y LLM"
summary: "Diseño, desarrollo y despliego herramientas basadas en modelos de lenguaje: agentes que encadenan tareas de varios pasos, asistentes conectados a los datos internos, automatizaciones que ahorran horas cada semana. Las uso a diario en mi propio trabajo, con las salvaguardas que las hacen fiables."
order: 2
showCertifications: true
skills:
  - label: "Modelos y plataformas"
    items: ["Claude API", "Claude Code", "Codex", "Ollama", "MLX"]
  - label: "Componentes"
    items: ["Tool use", "MCP", "Skills de agente", "RAG", "Salidas estructuradas", "Evaluación"]
---

### Lo que construyo

- **Herramientas basadas en agentes**: agentes que planifican, llaman a herramientas y comprueban sus propios resultados, desplegados para usuarios reales y no solo como demostración.
- **Aplicaciones LLM**: integraciones con la API de Claude con tool use, salidas estructuradas, caché de prompts y búsqueda en documentos internos.
- **Skills, tools y servidores MCP**: convertir el conocimiento de negocio en skills de agente y escribir herramientas y servidores Model Context Protocol que conectan los agentes con bases de datos, API y archivos.
- **Entornos privados**: modelos open-weight que funcionan en un portátil (Ollama, MLX) cuando los datos deben quedarse en casa.

### Cómo hago fiables a los agentes

- **El diseño antes que el código**: el agente parte de un diseño escrito y de un plan paso a paso que reviso.
- **Salvaguardas**: tests, comprobación de tipos, linters y hooks de pre-commit se ejecutan en cada cambio, para detectar los errores automáticamente.
- **Verificación**: ningún resultado se acepta sin el comando que lo produjo. Las cifras se miden, no las adivina el modelo.
- **Reglas explícitas**: las instrucciones del proyecto indican lo que el agente nunca debe hacer, como usar datos futuros en un backtest.
- **Evaluación**: conjuntos de test etiquetados, comparación con un método clásico, análisis de errores. Un modelo que parece acertar no es lo mismo que un modelo que acierta.
