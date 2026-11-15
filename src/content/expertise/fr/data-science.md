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
- **Réglage et interprétation** : Optuna pour les hyperparamètres, SHAP pour expliquer les prédictions.

### Autres domaines de modélisation

- **Classification et scoring** : probabilités calibrées, métriques choisies selon le coût réel de chaque type d'erreur.
- **NLP et RAG** : classification de textes, extraction d'informations, assistants qui interrogent des bases documentaires (PDF, articles), avec découpage sémantique, embeddings, recherche hybride, reranking et évaluation de la fidélité des réponses, construits avec [LangChain](https://github.com/langchain-ai/langchain), les embeddings [BGE-M3](https://huggingface.co/BAAI/bge-m3) et la base vectorielle [Qdrant](https://github.com/qdrant/qdrant).
- **Apprentissage par renforcement** : décisions séquentielles où un agent apprend des conséquences de ses actions.
- **Économétrie et finance** : questions causales, données de panel, données de marché. Des backtests sans fuite temporelle, avec les coûts modélisés et une période hors échantillon gardée intacte jusqu'à la fin.

### De la donnée brute au modèle

- **Nettoyage** : données incomplètes ou hétérogènes, cas particuliers métier, valeurs manquantes imputées sans jamais utiliser d'information future.
- **Feature engineering** : variables construites à partir de l'historique, agrégations temporelles, classements de type Elo, toujours limitées à l'information disponible au moment de la décision.
- **Sélection de variables** : importance dans les modèles et tests de stabilité par rééchantillonnage, pour garder ce qui tient et écarter ce qui relève du hasard.
- **Probabilités fiables** : calibration (isotonique, bêta), intervalles conformes (MAPIE) et détection des cas hors distribution.

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
