---
title: "Ciencia de datos"
summary: "Desde 2019 convierto datos en decisiones para grandes empresas de energía y telecomunicaciones: previsiones, clasificación, análisis de texto, modelos que llegan a producción. Trabajo en Python y R, desde la primera exploración hasta el pipeline que se ejecuta cada mañana."
order: 1
skills:
  - label: "Lenguajes"
    items: ["Python", "R", "SQL"]
  - label: "Librerías"
    items:
      [
        "pandas",
        "Polars",
        "NumPy",
        "scikit-learn",
        "Prophet",
        "Chronos",
        "AutoGluon",
        "TimesFM",
        "R Shiny",
      ]
  - label: "Plataformas de datos"
    items: ["Oracle", "Hive", "PySpark", "PostgreSQL"]
  - label: "Despliegue"
    items: ["Docker", "AWS", "GCP", "Git", "CI"]
  - label: "Fundamentos"
    items: ["Matemáticas", "Estadística", "Econometría", "Informática", "Finanzas"]
---

### Series temporales

La previsión está en el centro de mi trabajo. Me ocupo de lo que hace difíciles las series reales:

- **Cambios de tendencia**, **estacionalidad** e influencia de **factores externos**.
- **Detección de valores atípicos**, para que un periodo anómalo no distorsione todo el modelo.
- **Modelos y frameworks**: [Prophet](https://github.com/meta/prophet), [Chronos](https://github.com/amazon-science/chronos-forecasting), [AutoGluon](https://auto.gluon.ai/stable/index.html) y [TimesFM](https://github.com/google-research/timesfm).
- **Evaluación**: MAE, MAPE, MSE y RMSE, además de **métricas a medida** construidas para cada problema, porque sobrestimar e infraestimar rara vez cuestan lo mismo.

### Modelización

- **Clasificación y scoring**: probabilidades calibradas, métricas elegidas según el coste real de cada tipo de error.
- **NLP y RAG**: clasificación de textos, extracción de información, asistentes que consultan bases documentales (PDF, artículos), con segmentación semántica, embeddings, búsqueda híbrida, reranking y evaluación de la fidelidad de las respuestas.
- **Machine learning y deep learning**: gradient boosting con datos tabulares, redes neuronales para visión por computadora (clasificación, detección de objetos, segmentación).
- **Aprendizaje por refuerzo**: decisiones secuenciales en las que un agente aprende de las consecuencias de sus acciones.
- **Econometría y finanzas**: preguntas causales, datos de panel, datos de mercado. Backtests sin fugas temporales, con los costes modelizados y un periodo fuera de muestra intacto hasta el final.

### De los datos brutos al modelo

- **Limpieza**: datos incompletos o heterogéneos, casos particulares del negocio, valores ausentes imputados sin usar nunca información futura.
- **Feature engineering**: variables construidas a partir del historial, agregaciones temporales, clasificaciones tipo Elo, siempre limitadas a la información disponible en el momento de la decisión.
- **Selección de variables**: importancia en los modelos y pruebas de estabilidad por remuestreo, para conservar lo que se sostiene y descartar lo que es azar.
- **Probabilidades fiables**: calibración, intervalos conformes y detección de casos fuera de distribución.

### Del notebook a producción

- **Pipelines de producción** programados, probados, supervisados y reproducibles.
- **Cadenas de extremo a extremo**: recogida, controles, cálculo de variables, predicciones y presentación de resultados, encadenados automáticamente cada día. Una nueva versión solo entra en servicio tras compararla con la que está en marcha.
- **Datamarts**: diseño y construcción de tablas analíticas que los equipos de negocio consultan de forma autónoma.
- **Aplicaciones** en R Shiny y Python que ponen los modelos en manos de personas que no programan.
- **Diseño de software**: código legible, tipado y probado, que un compañero puede mantener sin mí.

### Cómo valido

- Divisiones entre entrenamiento y test que respetan el tiempo: ninguna información futura se filtra en el entrenamiento.
- Primero una referencia sencilla; un modelo complejo solo se conserva si la supera con claridad.
- Cada cifra que presento va acompañada del comando que la produjo, también cuando el resultado decepciona.
