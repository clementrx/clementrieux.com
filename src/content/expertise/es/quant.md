---
title: "Finanzas cuantitativas"
summary: "En finanzas, la mayoría de las estrategias rentables sobre el papel pierden dinero frente al mercado real. Mi trabajo consiste en probar las ideas con un protocolo lo bastante estricto para distinguirlas, y en decir claramente cuándo una idea no se sostiene."
order: 2
---

### Método

- **Hipótesis escritas antes de mirar los datos**, junto con la prueba que las decidirá.
- **Sin fugas temporales**: cada variable, filtro o transformación ajustada usa solo la información disponible en el momento de la decisión.
- **Primero los costes**: comisiones, spread y deslizamiento se modelan antes de evaluar cualquier estrategia. Una ventaja menor que sus costes no es una ventaja.
- **Periodo fuera de muestra sellado**: una última ventana de prueba permanece intacta hasta el final y se usa una sola vez.
- **Pruebas múltiples tenidas en cuenta**: cuantas más variantes se prueban, más alto es el listón para declarar una significativa.
- **Un resultado negativo es un resultado**: un «no» bien documentado ahorra dinero.

### Herramientas

Python, Polars, PostgreSQL, gradient boosting, backtests walk-forward con datos de mercado de acciones y criptomonedas.
