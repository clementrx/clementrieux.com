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
- **NLP y RAG**: clasificación de textos, extracción de información, generación aumentada por recuperación sobre documentos internos.
- **Machine learning y deep learning**: gradient boosting con datos tabulares, redes neuronales para visión por computadora (clasificación, detección de objetos, segmentación).
- **Aprendizaje por refuerzo**: decisiones secuenciales en las que un agente aprende de las consecuencias de sus acciones.
- **Econometría y finanzas**: preguntas causales, datos de panel, datos de mercado. Backtests sin fugas temporales, con los costes modelizados y un periodo fuera de muestra intacto hasta el final.

### Caso práctico: predecir carreras de caballos

Un proyecto personal que mantengo en producción desde 2020. Cada mañana, un sistema estima para cada caballo de cada carrera francesa su probabilidad de ganar o de terminar entre los primeros, para ayudar a elegir las apuestas. Es un terreno exigente: seis disciplinas con reglas distintas (trote enganchado y montado, liso, vallas, steeple, cross), datos incompletos y un mercado de apuestas muy eficiente.

- **Datos**: recogida automática diaria en PostgreSQL, unos 4,7 millones de filas (un caballo en una carrera) desde 2019.
- **Limpieza**: eliminación de los no participantes, tratamiento de una treintena de códigos de abandono y descalificación, imputaciones que solo miran al pasado, carreras extranjeras usadas para los historiales pero no para el entrenamiento.
- **Variables**: 722 features en trece familias (caballo, jinete, entrenador, carrera, clasificaciones Elo…), todas calculadas con la información disponible antes de la salida. Ninguna cuota entre ellas, para que el modelo sea independiente del mercado.
- **Selección**: una selección por disciplina y por objetivo, en dos pasos: preselección según la importancia en un modelo LightGBM y después una prueba de estabilidad sobre cinco remuestreos por bloques. Una variable solo se conserva si aparece en al menos el 60 % de ellos.
- **Modelos**: 28 modelos de gradient boosting (7 segmentos × 4 objetivos: ganador, top 2, top 3, top 4), promediados sobre varias semillas, con probabilidades calibradas, intervalos conformes y detección de casos fuera de distribución.
- **Validación**: divisiones temporales, al menos tres semillas antes de anunciar una mejora, resultados por disciplina y nunca como media global, repetición sobre un periodo distinto y tests automáticos que bloquean cualquier fuga de información futura.
- **Producción**: un solo comando, cada mañana, encadena la sincronización de los datos, los controles de seguridad, el cálculo de variables, las predicciones y una página de resultados legible en el móvil. Una nueva versión solo entra en servicio tras una comparación automática con la que está en marcha.

**Stack**: Python, Polars, NumPy, scikit-learn, LightGBM, CatBoost, PostgreSQL, Parquet, pandera, Streamlit, pytest.

**Lo que aprendí**: la mayoría de las ideas atractivas no sobreviven a una prueba honesta. De 556 combinaciones de apuestas que parecían rentables con los datos históricos, ninguna resistió al repetirlas sobre otro periodo. Saber medirlo, y dejarlo por escrito, forma parte del trabajo.

### Caso práctico: un asistente RAG en ciencias del deporte

Un asistente que responde a preguntas de preparación física apoyándose en una base documental especializada: cursos de preparación física, protocolos de entrenamiento, publicaciones científicas, fichas de ejercicios y documentos de formación. El objetivo: respuestas precisas y con fuentes, basadas en la literatura, en lugar de las generalidades de un modelo de lenguaje dejado a su suerte.

- **Ingesta**: extracción del texto de los PDF y artículos, limpieza, segmentación semántica (chunking), enriquecimiento de metadatos y cálculo de embeddings.
- **Búsqueda**: búsqueda semántica e híbrida, que combina la similitud de los embeddings con la búsqueda por palabras clave, seguida de un reranking de los pasajes más relevantes.
- **Generación**: un LLM redacta la respuesta a partir de los pasajes recuperados y cita sus fuentes.
- **Evaluación**: pertinencia de la búsqueda, aporte del reranking, fidelidad de las respuestas a los documentos (faithfulness) y calidad de las respuestas, medidas para guiar cada optimización.

### Del notebook a producción

- **Pipelines de producción** programados, probados, supervisados y reproducibles.
- **Datamarts**: diseño y construcción de tablas analíticas que los equipos de negocio consultan de forma autónoma.
- **Aplicaciones** en R Shiny y Python que ponen los modelos en manos de personas que no programan.
- **Diseño de software**: código legible, tipado y probado, que un compañero puede mantener sin mí.

### Cómo valido

- Divisiones entre entrenamiento y test que respetan el tiempo: ninguna información futura se filtra en el entrenamiento.
- Primero una referencia sencilla; un modelo complejo solo se conserva si la supera con claridad.
- Cada cifra que presento va acompañada del comando que la produjo, también cuando el resultado decepciona.
