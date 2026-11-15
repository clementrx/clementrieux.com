---
title: "LLM y agentes de código"
summary: "Uso cada día asistentes de IA como Claude Code y Codex, con la misma exigencia que cualquier otra herramienta. Escriben código más rápido, pero son los tests, las revisiones y los resultados medidos los que deciden qué se conserva. Cuando los datos son confidenciales, ejecuto los modelos de lenguaje en mi propio ordenador."
order: 4
---

### Un método de trabajo, no un atajo

- **El diseño antes que el código**: el agente parte de un diseño escrito y de un plan paso a paso que reviso.
- **Salvaguardas**: tests, comprobación de tipos, linters y hooks de pre-commit se ejecutan en cada cambio, para detectar los errores automáticamente.
- **Verificación**: ningún resultado se acepta sin el comando que lo produjo. Las cifras se miden, no las adivina el modelo.
- **Reglas de negocio explícitas**: las instrucciones del proyecto indican lo que el asistente nunca debe hacer, como usar datos futuros en un backtest.

### Modelos locales

Modelos open-weight que funcionan en mi propio ordenador (Ollama, MLX en Apple Silicon) cuando los datos no deben salir de él: extracción, clasificación, resumen, sin coste por petición.

### Evaluar las respuestas de un LLM

Conjuntos de test etiquetados, comparación con un método clásico, análisis de errores. Un modelo que parece acertar no es lo mismo que un modelo que acierta.
