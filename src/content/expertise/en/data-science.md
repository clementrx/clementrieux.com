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

### Case study: predicting horse races

A personal project I have been running in production since 2020. Every morning, a system estimates, for every horse in every French race, its probability of winning or finishing near the front, to help choose which bets to place. It is a demanding field: six disciplines with different rules (harness and mounted trotting, flat, hurdles, steeplechase, cross-country), incomplete data and a very efficient betting market.

- **Data**: automated daily collection into PostgreSQL, about 4.7 million rows (one horse in one race) since 2019.
- **Cleaning**: non-runners removed, some thirty codes for falls, pull-ups and disqualifications handled, imputations that only look backwards, foreign races used for historical records but not for training.
- **Features**: 722 variables in thirteen families (horse, jockey, trainer, race, Elo ratings…), all computed from information available before the start. No odds among them, so the model stays independent of the market.
- **Selection**: one selection per discipline and per target, in two steps: a shortlist based on LightGBM importance, then a stability test over five block bootstrap resamples. A variable is kept only if it comes out in at least 60% of them.
- **Models**: 28 gradient boosting models (7 segments × 4 targets: winner, top 2, top 3, top 4), averaged over several seeds, with calibrated probabilities, conformal intervals and out-of-distribution detection.
- **Validation**: time-based splits, at least three seeds before claiming a gain, results per discipline and never as a global average, replay on a disjoint period, and automated tests that block any leak of future information.
- **Production**: a single command each morning chains data sync, safety checks, feature computation, predictions and a results page readable on a phone. A new version goes live only after an automatic comparison with the one in service.

**Stack**: Python, Polars, NumPy, scikit-learn, LightGBM, CatBoost, PostgreSQL, Parquet, pandera, Streamlit, pytest.

**What I take from it**: most attractive ideas do not survive an honest test. Out of 556 bet combinations that looked profitable on historical data, none held up when replayed on a different period. Being able to measure that, and to write it down, is part of the job.

### From notebook to production

- **Production pipelines** that are scheduled, tested, monitored and reproducible.
- **Datamarts**: designing and building analytical tables that business teams can query on their own.
- **Applications** in R Shiny and Python that put models in the hands of people who do not code.
- **Software design**: readable, typed and tested code that a colleague can maintain without me.

### How I validate

- Train and test splits that respect time, so no future information leaks into training.
- A simple baseline first; a complex model is kept only if it clearly beats it.
- Every number I report comes with the command that produced it, including when the result is disappointing.
