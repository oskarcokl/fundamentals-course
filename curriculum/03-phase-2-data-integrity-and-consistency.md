# Phase 2: Data Integrity and Consistency

## Objective
Guarantee correctness for event ingestion, pacing, and frequency logic under concurrency.

## Research
Document in `docs/phase2/research.md`:
- Relational modeling for ad serving entities
- Constraints and indexing strategy
- Transaction isolation and common anomalies
- Race conditions in budget and frequency updates
- Why "exactly once" is usually an approximation
- Reconciliation patterns

## Build Tasks
Complete these tasks:
1. Create schema migrations with constraints and indexes.
2. Implement deduplication for event ingestion by stable event ID.
3. Implement safe budget/frequency updates under concurrent traffic.
4. Add reconciliation job for count and spend mismatches.
5. Add concurrency tests and duplicate-event tests.

## Required Artifacts
- `docs/phase2/design.md`
- `docs/phase2/research.md`
- `docs/phase2/runbook.md`
- `tests/phase2/`
- `evidence/phase2/results.md`

## AI-Verifiable Requirements
- `P2-R1` Migrations include primary keys, foreign keys, unique dedup keys, and performance indexes.
- `P2-R2` Concurrency tests demonstrate no budget overspend and no frequency-cap violation.
- `P2-R3` Duplicate event handling by `event_id` is deterministic and tested.
- `P2-R4` Reconciliation report or job exists and detects mismatches.

## Exit Condition
Phase passes only with:
- Practical score `>= 90`
- Theory score `>= 90`

