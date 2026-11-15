---
title: "Agents IA et LLM"
summary: "Je conçois, développe et déploie des outils fondés sur les modèles de langage : des agents qui enchaînent des tâches en plusieurs étapes, des assistants branchés sur les données internes, des automatisations qui font gagner des heures chaque semaine. Je les utilise tous les jours dans mon propre travail, avec les garde-fous qui les rendent fiables."
order: 2
showCertifications: true
skills:
  - label: "Modèles et plateformes"
    items: ["Claude API", "Claude Code", "Codex", "Ollama", "MLX"]
  - label: "Briques techniques"
    items: ["Tool use", "MCP", "Skills d'agent", "Sorties structurées", "Évaluation"]
  - label: "RAG"
    items: ["LangChain", "BGE-M3", "Qdrant"]
  - label: "Frameworks"
    items: ["Superpowers", "BMAD Method", "GSD", "Spec Kit"]
---

### Ce que je construis

- **Des outils à base d'agents** : des agents qui planifient, appellent des outils et vérifient leurs propres résultats, déployés pour de vrais utilisateurs plutôt que laissés à l'état de démo.
- **Des applications LLM** : des intégrations de l'API Claude avec tool use, sorties structurées, mise en cache des prompts et recherche dans des documents internes.
- **Des skills, des tools et des serveurs MCP** : transformer un savoir métier en skills d'agent, écrire des outils et des serveurs Model Context Protocol qui relient les agents aux bases de données, aux API et aux fichiers.
- **Des installations privées** : des modèles open-weight qui tournent sur un ordinateur portable (Ollama, MLX) quand les données doivent rester en interne.

### RAG

Des assistants qui répondent à partir d'une base documentaire (PDF, articles) et citent leurs sources :

- **Ingestion** : extraction, nettoyage, découpage sémantique (chunking), métadonnées et embeddings.
- **Recherche** : recherche sémantique et hybride, reranking.
- **Évaluation** : pertinence de la recherche, fidélité des réponses (faithfulness), qualité des réponses.
- **Outils** : [LangChain](https://github.com/langchain-ai/langchain), les embeddings [BGE-M3](https://huggingface.co/BAAI/bge-m3) et la base vectorielle [Qdrant](https://github.com/qdrant/qdrant).

### Frameworks de développement avec agents

Des méthodes de développement piloté par les spécifications, que j'utilise avec Claude Code et Codex :

- [Superpowers](https://github.com/obra/superpowers) : skills d'agent et méthode de développement complète, de la conception à la revue.
- [BMAD Method](https://github.com/bmad-code-org/BMAD-METHOD) : développement agile piloté par des agents spécialisés.
- [GSD (Get Shit Done)](https://github.com/gsd-build/get-shit-done) : méta-prompting, ingénierie de contexte et développement piloté par les specs.
- [Spec Kit](https://github.com/github/spec-kit) : le kit de GitHub pour le spec-driven development.

### Comment je rends les agents fiables

- **La conception avant le code** : l'agent part d'un design écrit et d'un plan pas à pas que je relis.
- **Des garde-fous** : tests, vérification des types, linters et hooks de pré-commit tournent à chaque modification, pour que les erreurs soient détectées automatiquement.
- **La vérification** : aucun résultat n'est accepté sans la commande qui l'a produit. Les chiffres sont mesurés, pas devinés par le modèle.
- **Des règles explicites** : les instructions du projet disent ce que l'agent ne doit jamais faire, comme utiliser des données futures dans un backtest.
- **L'évaluation** : jeux de test annotés, comparaison avec une méthode classique, analyse des erreurs. Un modèle qui a l'air juste n'est pas un modèle qui a juste.
