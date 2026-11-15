---
title: "Data science"
summary: "Since 2019 I have been turning data into decisions for large energy and telecom companies: forecasts, classification, text analysis, models that go into production. I work in Python and R, from the first exploration to the pipeline that runs every morning."
order: 1
skills:
  - label: "Languages"
    items: ["Python", "R", "SQL"]
  - label: "Data"
    items: ["pandas", "Polars", "NumPy"]
  - label: "Machine learning"
    items:
      ["scikit-learn", "PyTorch", "TensorFlow", "LightGBM", "CatBoost", "XGBoost", "Optuna", "SHAP"]
  - label: "Time series"
    items: ["Prophet", "Chronos", "AutoGluon", "TimesFM"]
  - label: "Data platforms"
    items: ["Oracle", "Hive", "PySpark", "PostgreSQL"]
  - label: "Deployment"
    items: ["GCP", "AWS", "Docker", "Linux", "Git", "CI"]
  - label: "Applications"
    items: ["R Shiny", "Dash", "Streamlit"]
  - label: "Foundations"
    items: ["Mathematics", "Statistics", "Econometrics", "Computer science", "Finance"]
---

### Time series

Forecasting is at the heart of my work. I deal with what makes real-world series hard:

- **Trend changes**, **seasonality** and the influence of **external factors**.
- **Outlier detection**, so that a single abnormal period does not distort the whole model.
- **Models and frameworks**: [Prophet](https://github.com/meta/prophet), [Chronos](https://github.com/amazon-science/chronos-forecasting), [AutoGluon](https://auto.gluon.ai/stable/index.html) and [TimesFM](https://github.com/google-research/timesfm).
- **Evaluation**: MAE, MAPE, MSE and RMSE, plus **custom metrics** built around the problem at hand, because over-forecasting and under-forecasting rarely cost the same.

### Machine learning and deep learning

The models I use, chosen for the problem rather than out of habit:

- **Libraries**: scikit-learn, PyTorch, TensorFlow, LightGBM, CatBoost and XGBoost.
- **Classification on tabular data**: logistic regression, random forest, gradient boosting (LightGBM, CatBoost, XGBoost) and NGBoost for probabilistic predictions.
- **Deep learning**: dense networks (MLP), TabNet, recurrent networks (RNN, LSTM), Transformers and attention, entity embeddings, and CNNs for computer vision (classification, object detection, segmentation).
- **Learning to rank**: LambdaRank, YetiRank and XGBRanker, when candidates must be ordered against each other rather than judged one by one.
- **Probabilistic ranking models**: Plackett-Luce and Harville to turn scores into finishing-order probabilities, Elo and TrueSkill ratings.
- **Reliable probabilities**: calibration (isotonic, beta), conformal intervals (MAPIE) and out-of-distribution detection.
- **Tuning and interpretation**: Optuna for hyperparameters, SHAP to explain predictions.

### Other modelling areas

- **Classification and scoring**: calibrated probabilities, metrics chosen from the real cost of each kind of error.
- **NLP**: text classification, information extraction, automatic email processing.
- **Reinforcement learning**: sequential decisions where an agent learns from the consequences of its actions.
- **Econometrics and finance**: causal questions, panel data, market data. Backtests without look-ahead, with costs modelled and an out-of-sample period kept untouched until the end.

### Data exploration and preparation

Before any model, understanding the data and what it says:

- **Understanding the business**: where the data comes from, how it is produced and what teams expect from it, by talking to the people who know it best.
- **Exploratory data analysis (EDA)**: distributions, missing values, correlations, breaks and anomalies, with visualisations that expose problems before they distort a model.
- **Cleaning**: incomplete or heterogeneous data, duplicates, domain-specific edge cases, missing values imputed without using future information.
- **Interpretation**: linking each finding to its context and reporting it clearly, so that the analysis supports a decision.
- **Preparing for modelling**: feature engineering from history and context, stable feature selection, always limited to the information available at decision time.

### Deployment

- **Cloud**: putting models into production on GCP and AWS.
- **Servers**: deployment on Linux servers, containerised with Docker.
- **Pipelines**: scheduled, automated processing and continuous integration.
- **Datamarts**: ready-to-use analytical tables for business teams.

### Applications

Web applications that put models and analyses in the hands of people who do not code:

- **R Shiny** in R.
- **Dash** and **Streamlit** in Python.
