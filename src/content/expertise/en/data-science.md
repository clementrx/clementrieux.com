---
title: "Data science"
summary: "Since 2019 I have been turning data into decisions for large energy and telecom companies: forecasts, classification, text analysis, models that go into production. I work in Python and R, from the first exploration to the pipeline that runs every morning."
order: 1
skills:
  - label: "Languages"
    items: ["Python", "R", "SQL"]
  - label: "Libraries"
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
  - label: "Data platforms"
    items: ["Oracle", "Hive", "PySpark", "PostgreSQL"]
  - label: "Deployment"
    items: ["Docker", "AWS", "GCP", "Git", "CI"]
  - label: "Foundations"
    items: ["Mathematics", "Statistics", "Econometrics", "Computer science", "Finance"]
---

### Time series

Forecasting is at the heart of my work. I deal with what makes real-world series hard:

- **Trend changes**, **seasonality** and the influence of **external factors**.
- **Outlier detection**, so that a single abnormal period does not distort the whole model.
- **Models and frameworks**: [Prophet](https://github.com/meta/prophet), [Chronos](https://github.com/amazon-science/chronos-forecasting), [AutoGluon](https://auto.gluon.ai/stable/index.html) and [TimesFM](https://github.com/google-research/timesfm).
- **Evaluation**: MAE, MAPE, MSE and RMSE, plus **custom metrics** built around the problem at hand, because over-forecasting and under-forecasting rarely cost the same.

### Modelling

- **Classification and scoring**: calibrated probabilities, metrics chosen from the real cost of each kind of error.
- **NLP and RAG**: text classification, information extraction, retrieval-augmented generation over internal documents.
- **Machine learning and deep learning**: gradient boosting on tabular data, neural networks for computer vision (classification, object detection, segmentation).
- **Reinforcement learning**: sequential decisions where an agent learns from the consequences of its actions.
- **Econometrics and finance**: causal questions, panel data, market data. Backtests without look-ahead, with costs modelled and an out-of-sample period kept untouched until the end.

### From notebook to production

- **Production pipelines** that are scheduled, tested, monitored and reproducible.
- **Datamarts**: designing and building analytical tables that business teams can query on their own.
- **Applications** in R Shiny and Python that put models in the hands of people who do not code.
- **Software design**: readable, typed and tested code that a colleague can maintain without me.

### How I validate

- Train and test splits that respect time, so no future information leaks into training.
- A simple baseline first; a complex model is kept only if it clearly beats it.
- Every number I report comes with the command that produced it, including when the result is disappointing.
