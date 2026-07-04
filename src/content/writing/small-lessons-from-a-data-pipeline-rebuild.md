---
title: "Small Lessons from a Data Pipeline Rebuild"
description: "Placeholder retrospective on rebuilding a batch pipeline, and the small decisions that mattered more than expected."
date: 2026-06-10
category: data
draft: false
---

This is placeholder text for a retrospective on rebuilding a batch data pipeline from scratch. It will open with the reasons for the rebuild — mainly accumulated complexity in the scheduling layer rather than any single outage.

A middle section will cover idempotency: how reruns were made safe by keying every job on a deterministic watermark instead of wall-clock time.

The closing section will likely touch on observability — what got logged, what got alerted on, and which of those turned out to be noise in practice.
