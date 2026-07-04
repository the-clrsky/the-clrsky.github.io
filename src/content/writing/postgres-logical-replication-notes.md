---
title: "Notes on Logical Replication in Postgres"
description: "Placeholder notes on setting up logical replication, and the failure modes that show up once real traffic hits it."
date: 2026-05-28
category: postgres
draft: false
---

Placeholder text for a post on Postgres logical replication. The plan is to start with the basics — publications, subscriptions, and how they differ from streaming (physical) replication — before getting into where things actually go wrong.

A middle section will cover schema changes: what happens to a subscription when a column is added upstream, and why DDL isn't replicated automatically.

The last part will probably be a short case study on replication lag, including which system views to check first (`pg_stat_replication`, `pg_replication_slots`) when a subscriber starts falling behind.
