---
title: "Quantitative research"
summary: "In finance, most strategies that look profitable on paper lose money once they meet real markets. My job is to test ideas with a protocol strict enough to tell the difference, and to say plainly when an idea does not survive."
order: 2
---

### Method

- **Hypotheses written down before looking at the data**, together with the test that will decide them.
- **No look-ahead**: every feature, filter and fitted transform uses only information available at decision time.
- **Costs first**: fees, spread and slippage are modelled before any strategy is evaluated. An edge smaller than its costs is not an edge.
- **Sealed out-of-sample period**: a final test window stays untouched until the end and is used once.
- **Multiple testing taken into account**: the more variants are tried, the higher the bar for calling one significant.
- **Negative results are results**: a well-documented "no" saves money.

### Tools

Python, Polars, PostgreSQL, gradient boosting, walk-forward backtests on equity and crypto market data.
