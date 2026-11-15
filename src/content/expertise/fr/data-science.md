---
title: "Data science"
summary: "Depuis 2019, je transforme des données en décisions pour de grands groupes de l'énergie et des télécoms : prévisions, classification, analyse de texte, modèles mis en production. Je travaille en Python et en R, de la première exploration au pipeline qui tourne chaque matin."
order: 1
skills:
  - label: "Langages"
    items: ["Python", "R", "SQL"]
  - label: "Données"
    items: ["pandas", "Polars", "NumPy"]
  - label: "Machine learning"
    items:
      ["scikit-learn", "PyTorch", "TensorFlow", "LightGBM", "CatBoost", "XGBoost", "Optuna", "SHAP"]
  - label: "Séries temporelles"
    items: ["Prophet", "Chronos", "AutoGluon", "TimesFM"]
  - label: "NLP et RAG"
    items: ["LangChain", "BGE-M3", "Qdrant"]
  - label: "Plateformes de données"
    items: ["Oracle", "Hive", "PySpark", "PostgreSQL"]
  - label: "Déploiement"
    items: ["Docker", "AWS", "GCP", "Git", "CI", "R Shiny"]
  - label: "Fondamentaux"
    items: ["Mathématiques", "Statistiques", "Économétrie", "Informatique", "Finance"]
---

### Séries temporelles

La prévision est au cœur de mon travail. Je traite ce qui rend les séries réelles difficiles :

- **Changements de tendance**, **saisonnalité** et influence des **facteurs externes**.
- **Détection des valeurs aberrantes**, pour qu'une période anormale ne fausse pas tout le modèle.
- **Modèles et frameworks** : [Prophet](https://github.com/meta/prophet), [Chronos](https://github.com/amazon-science/chronos-forecasting), [AutoGluon](https://auto.gluon.ai/stable/index.html) et [TimesFM](https://github.com/google-research/timesfm).
- **Évaluation** : MAE, MAPE, MSE et RMSE, ainsi que des **métriques sur mesure** construites pour la problématique, car surestimer et sous-estimer coûtent rarement la même chose.

### Machine learning et deep learning

Les modèles que j'utilise, choisis selon le problème plutôt que par habitude :

- **Bibliothèques** : scikit-learn, PyTorch, TensorFlow, LightGBM, CatBoost et XGBoost.
- **Classification sur données tabulaires** : régression logistique, random forest, gradient boosting (LightGBM, CatBoost, XGBoost) et NGBoost pour des prédictions probabilistes.
- **Deep learning** : réseaux denses (MLP), TabNet, réseaux récurrents (RNN, LSTM), Transformers et mécanismes d'attention, embeddings d'entités, et CNN pour la vision par ordinateur (classification, détection d'objets, segmentation).
- **Learning to rank** : LambdaRank, YetiRank et XGBRanker, quand il faut ordonner des candidats entre eux plutôt que les juger un par un.
- **Modèles de classement probabilistes** : Plackett-Luce et Harville pour passer de scores à des probabilités d'ordre d'arrivée, notations Elo et TrueSkill.
- **Probabilités fiables** : calibration (isotonique, bêta), intervalles conformes (MAPIE) et détection des cas hors distribution.
- **Réglage et interprétation** : Optuna pour les hyperparamètres, SHAP pour expliquer les prédictions.

### NLP et RAG

Exploiter le texte, des e-mails aux PDF et aux articles scientifiques :

- **Traitement du texte** : classification de textes, extraction d'informations, traitement automatique des e-mails.
- **RAG** : des assistants qui répondent à partir d'une base documentaire (PDF, articles) et citent leurs sources.
- **Ingestion** : extraction, nettoyage, découpage sémantique (chunking), enrichissement des métadonnées et calcul des embeddings.
- **Recherche** : recherche sémantique et hybride, qui combine embeddings et mots-clés, puis reranking des passages les plus pertinents.
- **Évaluation** : pertinence de la recherche, fidélité des réponses aux documents (faithfulness) et qualité des réponses.
- **Outils** : [LangChain](https://github.com/langchain-ai/langchain), les embeddings [BGE-M3](https://huggingface.co/BAAI/bge-m3) et la base vectorielle [Qdrant](https://github.com/qdrant/qdrant).

### Autres domaines de modélisation

- **Classification et scoring** : probabilités calibrées, métriques choisies selon le coût réel de chaque type d'erreur.
- **Apprentissage par renforcement** : décisions séquentielles où un agent apprend des conséquences de ses actions.
- **Économétrie et finance** : questions causales, données de panel, données de marché. Des backtests sans fuite temporelle, avec les coûts modélisés et une période hors échantillon gardée intacte jusqu'à la fin.

### Exploration et préparation des données

Avant tout modèle, comprendre les données et ce qu'elles racontent :

- **Compréhension du métier** : d'où viennent les données, comment elles sont produites et ce que les équipes en attendent, en échangeant avec ceux qui les connaissent le mieux.
- **Analyse exploratoire (EDA)** : distributions, valeurs manquantes, corrélations, ruptures et anomalies, avec des visualisations qui font apparaître les problèmes avant qu'ils ne faussent un modèle.
- **Nettoyage** : données incomplètes ou hétérogènes, doublons, cas particuliers métier, valeurs manquantes imputées sans utiliser d'information future.
- **Interprétation** : relier chaque constat à son contexte et le restituer clairement, pour que l'analyse serve une décision.
- **Préparation pour la modélisation** : feature engineering à partir de l'historique et du contexte, sélection de variables stable, toujours limitée à l'information disponible au moment de la décision.

### Du notebook à la production

- **Pipelines de production** planifiés, testés, surveillés et reproductibles.
- **Chaînes de bout en bout** : collecte, contrôles, calcul des variables, prédictions et restitution, enchaînés automatiquement chaque jour. Une nouvelle version n'est mise en service qu'après comparaison avec celle en place.
- **Datamarts** : conception et construction de tables d'analyse que les équipes métier interrogent en autonomie.
- **Applications** R Shiny et Python qui mettent les modèles entre les mains de personnes qui ne codent pas.
- **Conception logicielle** : un code lisible, typé et testé, qu'un collègue peut maintenir sans moi.

### Comment je valide

- Des découpages apprentissage / test qui respectent le temps : aucune information future ne fuit dans l'entraînement.
- Une référence simple d'abord ; un modèle complexe n'est gardé que s'il la bat nettement.
- Chaque chiffre que j'annonce vient avec la commande qui l'a produit, y compris quand le résultat déçoit.
