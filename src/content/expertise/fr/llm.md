---
title: "LLM et agents de code"
summary: "J'utilise chaque jour des assistants IA comme Claude Code et Codex, avec la même exigence que pour n'importe quel outil. Ils écrivent le code plus vite, mais ce sont les tests, les relectures et les résultats mesurés qui décident de ce qu'on garde. Quand les données sont confidentielles, je fais tourner les modèles de langage sur ma propre machine."
order: 4
---

### Une méthode de travail, pas un raccourci

- **La conception avant le code** : l'agent part d'un design écrit et d'un plan pas à pas que je relis.
- **Des garde-fous** : tests, vérification des types, linters et hooks de pré-commit tournent à chaque modification, pour que les erreurs soient détectées automatiquement.
- **La vérification** : aucun résultat n'est accepté sans la commande qui l'a produit. Les chiffres sont mesurés, pas devinés par le modèle.
- **Des règles métier explicites** : les instructions du projet disent ce que l'assistant ne doit jamais faire, comme utiliser des données futures dans un backtest.

### Modèles locaux

Des modèles open-weight qui tournent sur mon ordinateur (Ollama, MLX sur Apple Silicon) quand les données ne doivent pas en sortir : extraction, classification, résumé, sans coût à la requête.

### Évaluer les sorties d'un LLM

Jeux de test annotés, comparaison avec une méthode classique, analyse des erreurs. Un modèle qui a l'air juste n'est pas un modèle qui a juste.
