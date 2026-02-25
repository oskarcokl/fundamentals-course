# Start Here

This file tells you exactly what to do in each phase.

If technical wording is unclear, use `docs/glossary.md` for plain-language definitions and project examples.

## Step 1: Pick Current Phase
Open the phase file you are working on:
- `curriculum/02-phase-1-system-framing-and-contracts.md`
- `curriculum/03-phase-2-data-integrity-and-consistency.md`
- `curriculum/04-phase-3-reliability-under-failure.md`
- `curriculum/05-phase-4-observability-and-operations.md`
- `curriculum/06-phase-5-security-and-privacy-baseline.md`
- `curriculum/07-phase-6-performance-and-capacity.md`
- `curriculum/08-phase-7-delivery-and-change-safety.md`
- `curriculum/09-phase-8-architecture-evolution-and-extensibility.md`

### Important Phase 1 Scope Note
Phase 1 is intentionally narrow: implement the serving API boundary (`/decision`, `/impression`, `/click`) plus contracts, validation, and contract tests. Treat adjacent product areas (admin UI, campaign management UI, reporting UI) as external and document assumptions/interfaces instead of fully implementing them.

## Step 2: Produce Required Files
For phase `N`, create and maintain:
- `docs/phaseN/research.md`
- `docs/phaseN/design.md`
- `docs/phaseN/runbook.md`
- `tests/phaseN/`
- `evidence/phaseN/results.md`

If these files do not exist, you are not ready for evaluation.

## Step 3: Complete Phase Work
In the phase file:
1. Complete all research topics.
2. Complete all build tasks.
3. Satisfy all 4 AI-verifiable requirements (`P<N>-R1..R4`).
4. Run tests and capture outputs in `evidence/phaseN/results.md`.

## Step 4: Run Practical Evaluation
Use `curriculum/10-practical-evaluator-prompt-template.md`.

Rules:
- Practical score must be at least 90.
- Any requirement scored 0 is a fail.
- Fix issues and re-run until pass.

## Step 5: Run Theory Evaluation
Use `curriculum/11-theory-quiz-prompt-template.md`.

Rules:
- Theory score must be at least 90.
- If below 90, study weak topics, then retake.

## Step 6: Mark Phase Pass
Update `curriculum/12-master-phase-checklist.md`:
- Mark each requirement done
- Record practical score and theory score
- Mark phase status as PASS only if both scores are at least 90

## Final Completion Rule
You are done with the curriculum only when all 8 phases are marked PASS in `curriculum/12-master-phase-checklist.md`.
