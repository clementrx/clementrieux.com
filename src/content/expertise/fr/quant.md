---
title: "Finance quantitative"
summary: "En finance, la plupart des stratégies rentables sur le papier perdent de l'argent face au marché réel. Mon travail consiste à tester les idées avec un protocole assez strict pour faire la différence, et à dire clairement quand une idée ne tient pas."
order: 2
---

### Méthode

- **Hypothèses écrites avant de regarder les données**, avec le test qui les tranchera.
- **Aucune fuite temporelle** : chaque variable, filtre ou transformation ajustée n'utilise que l'information disponible au moment de la décision.
- **Les coûts d'abord** : frais, spread et glissement sont modélisés avant d'évaluer la moindre stratégie. Un avantage plus petit que ses coûts n'en est pas un.
- **Période hors échantillon scellée** : une dernière fenêtre de test reste intacte jusqu'à la fin et ne sert qu'une fois.
- **Tests multiples pris en compte** : plus on essaie de variantes, plus la barre pour en déclarer une significative est haute.
- **Un résultat négatif est un résultat** : un « non » bien documenté fait économiser de l'argent.

### Outils

Python, Polars, PostgreSQL, gradient boosting, backtests walk-forward sur des données de marché actions et crypto.
