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
  - label: "NLP and RAG"
    items: ["LangChain", "BGE-M3", "Qdrant"]
  - label: "Data platforms"
    items: ["Oracle", "Hive", "PySpark", "PostgreSQL"]
  - label: "Deployment"
    items: ["Docker", "AWS", "GCP", "Git", "CI", "R Shiny"]
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
- **Tuning and interpretation**: Optuna for hyperparameters, SHAP to explain predictions.

### Other modelling areas

- **Classification and scoring**: calibrated probabilities, metrics chosen from the real cost of each kind of error.
- **NLP and RAG**: text classification, information extraction, assistants that query document collections (PDFs, articles), with semantic chunking, embeddings, hybrid search, reranking and evaluation of answer faithfulness, built with [LangChain](https://github.com/langchain-ai/langchain), [BGE-M3](https://huggingface.co/BAAI/bge-m3) embeddings and the [Qdrant](https://github.com/qdrant/qdrant) vector database.
- **Reinforcement learning**: sequential decisions where an agent learns from the consequences of its actions.
- **Econometrics and finance**: causal questions, panel data, market data. Backtests without look-ahead, with costs modelled and an out-of-sample period kept untouched until the end.

### From raw data to model

- **Cleaning**: incomplete or heterogeneous data, domain-specific edge cases, missing values imputed without ever using future information.
- **Feature engineering**: variables built from historical records, time-based aggregates, Elo-style ratings, always limited to the information available at decision time.
- **Feature selection**: model importance and resampling stability tests, to keep what holds and drop what is noise.
- **Reliable probabilities**: calibration (isotonic, beta), conformal intervals (MAPIE) and out-of-distribution detection.

### From notebook to production

- **Production pipelines** that are scheduled, tested, monitored and reproducible.
- **End-to-end pipelines**: collection, checks, feature computation, predictions and reporting, chained automatically every day. A new version goes live only after a comparison with the one in service.
- **Datamarts**: designing and building analytical tables that business teams can query on their own.
- **Applications** in R Shiny and Python that put models in the hands of people who do not code.
- **Software design**: readable, typed and tested code that a colleague can maintain without me.

### How I validate

- Train and test splits that respect time, so no future information leaks into training.
- A simple baseline first; a complex model is kept only if it clearly beats it.
- Every number I report comes with the command that produced it, including when the result is disappointing.
