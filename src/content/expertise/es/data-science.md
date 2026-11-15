---
title: "Ciencia de datos"
summary: "Desde 2019 convierto datos en decisiones para grandes empresas de energía y telecomunicaciones: previsiones, clasificación, análisis de texto, modelos que llegan a producción. Trabajo en Python y R, desde la primera exploración hasta el pipeline que se ejecuta cada mañana."
order: 1
skills:
  - label: "Lenguajes"
    items: ["Python", "R", "SQL"]
  - label: "Datos"
    items: ["pandas", "Polars", "NumPy"]
  - label: "Machine learning"
    items:
      ["scikit-learn", "PyTorch", "TensorFlow", "LightGBM", "CatBoost", "XGBoost", "Optuna", "SHAP"]
  - label: "Series temporales"
    items: ["Prophet", "Chronos", "AutoGluon", "TimesFM"]
  - label: "Plataformas de datos"
    items: ["Oracle", "Hive", "PySpark", "PostgreSQL"]
  - label: "Despliegue"
    items: ["GCP", "AWS", "Docker", "Linux", "Git", "CI"]
  - label: "Aplicaciones"
    items: ["R Shiny", "Dash", "Streamlit"]
  - label: "Fundamentos"
    items: ["Matemáticas", "Estadística", "Econometría", "Informática", "Finanzas"]
---

### Series temporales

La previsión está en el centro de mi trabajo. Me ocupo de lo que hace difíciles las series reales:

- **Cambios de tendencia**, **estacionalidad** e influencia de **factores externos**.
- **Detección de valores atípicos**, para que un periodo anómalo no distorsione todo el modelo.
- **Modelos y frameworks**: [Prophet](https://github.com/meta/prophet), [Chronos](https://github.com/amazon-science/chronos-forecasting), [AutoGluon](https://auto.gluon.ai/stable/index.html) y [TimesFM](https://github.com/google-research/timesfm).
- **Evaluación**: MAE, MAPE, MSE y RMSE, además de **métricas a medida** construidas para cada problema, porque sobrestimar e infraestimar rara vez cuestan lo mismo.

### Machine learning y deep learning

Los modelos que uso, elegidos según el problema y no por costumbre:

- **Librerías**: scikit-learn, PyTorch, TensorFlow, LightGBM, CatBoost y XGBoost.
- **Clasificación con datos tabulares**: regresión logística, random forest, gradient boosting (LightGBM, CatBoost, XGBoost) y NGBoost para predicciones probabilísticas.
- **Deep learning**: redes densas (MLP), TabNet, redes recurrentes (RNN, LSTM), Transformers y mecanismos de atención, embeddings de entidades, y CNN para visión por computadora (clasificación, detección de objetos, segmentación).
- **Learning to rank**: LambdaRank, YetiRank y XGBRanker, cuando hay que ordenar candidatos entre sí en lugar de juzgarlos uno a uno.
- **Modelos probabilísticos de clasificación**: Plackett-Luce y Harville para pasar de puntuaciones a probabilidades de orden de llegada, puntuaciones Elo y TrueSkill.
- **Probabilidades fiables**: calibración (isotónica, beta), intervalos conformes (MAPIE) y detección de casos fuera de distribución.
- **Ajuste e interpretación**: Optuna para los hiperparámetros, SHAP para explicar las predicciones.

### Otras áreas de modelización

- **Clasificación y scoring**: probabilidades calibradas, métricas elegidas según el coste real de cada tipo de error.
- **NLP**: clasificación de textos, extracción de información, tratamiento automático de correos electrónicos.
- **Aprendizaje por refuerzo**: decisiones secuenciales en las que un agente aprende de las consecuencias de sus acciones.
- **Econometría y finanzas**: preguntas causales, datos de panel, datos de mercado. Backtests sin fugas temporales, con los costes modelizados y un periodo fuera de muestra intacto hasta el final.

### Exploración y preparación de datos

Antes de cualquier modelo, entender los datos y lo que cuentan:

- **Comprensión del negocio**: de dónde vienen los datos, cómo se producen y qué esperan de ellos los equipos, hablando con quienes mejor los conocen.
- **Análisis exploratorio (EDA)**: distribuciones, valores ausentes, correlaciones, rupturas y anomalías, con visualizaciones que revelan los problemas antes de que distorsionen un modelo.
- **Limpieza**: datos incompletos o heterogéneos, duplicados, casos particulares del negocio, valores ausentes imputados sin usar información futura.
- **Interpretación**: relacionar cada hallazgo con su contexto y comunicarlo con claridad, para que el análisis sirva a una decisión.
- **Preparación para la modelización**: feature engineering a partir del historial y del contexto, selección de variables estable, siempre limitada a la información disponible en el momento de la decisión.

### Despliegue

- **Cloud**: puesta en producción en GCP y AWS.
- **Servidores**: despliegue en servidores Linux, en contenedores Docker.
- **Pipelines**: procesos programados y automatizados, integración continua.
- **Datamarts**: tablas analíticas listas para usar por los equipos de negocio.

### Aplicaciones

Aplicaciones web que ponen modelos y análisis en manos de personas que no programan:

- **R Shiny** en R.
- **Dash** y **Streamlit** en Python.
