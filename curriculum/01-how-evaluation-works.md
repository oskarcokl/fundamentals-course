# How Evaluation Works

This curriculum uses strict, AI-verifiable pass/fail gates.

## Required Artifact Contract (every phase)
For each phase `N`, you must maintain:
- `docs/phaseN/research.md`
- `docs/phaseN/design.md`
- `docs/phaseN/runbook.md`
- `tests/phaseN/` (automated tests and checks)
- `evidence/phaseN/results.md` (test runs, notes, final verdict)

## Scoring Model
Each phase has 4 requirements (`P<N>-R1..R4`).

Practical scoring:
- 25 points per requirement when fully satisfied
- 15 points when partially satisfied
- 0 points when missing or unverifiable
- Total practical score is out of 100

Theory scoring:
- 20 questions
- 5 points per correct answer
- Total theory score is out of 100

## Pass Criteria
You pass only when:
1. Practical score is `>= 90`
2. Theory score is `>= 90`
3. No critical requirement is missing

## Evaluation Flow Per Phase
1. Complete all required artifacts for the phase.
2. Run your phase tests and collect evidence.
3. Run the practical evaluator prompt from `curriculum/10-practical-evaluator-prompt-template.md`.
4. Fix all issues until practical score reaches at least 90.
5. Run the theory quiz prompt from `curriculum/11-theory-quiz-prompt-template.md`.
6. Retake after remediation until theory score reaches at least 90.
7. Mark the phase as passed in `curriculum/12-master-phase-checklist.md`.

## Definition of Complete Phase
A phase is complete only when:
- All 4 phase requirements are satisfied with evidence
- Practical score is at least 90
- Theory score is at least 90
- Open issues are resolved or explicitly documented with mitigation

