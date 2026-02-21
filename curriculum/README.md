# AdTech Software Engineering Fundamentals Curriculum

This is a self-paced, phase-based curriculum to build production software engineering fundamentals in an AdTech domain.

Use this order:
1. `curriculum/00-start-here.md`
2. `curriculum/01-how-evaluation-works.md`
3. `curriculum/02-phase-1-system-framing-and-contracts.md`
4. `curriculum/03-phase-2-data-integrity-and-consistency.md`
5. `curriculum/04-phase-3-reliability-under-failure.md`
6. `curriculum/05-phase-4-observability-and-operations.md`
7. `curriculum/06-phase-5-security-and-privacy-baseline.md`
8. `curriculum/07-phase-6-performance-and-capacity.md`
9. `curriculum/08-phase-7-delivery-and-change-safety.md`
10. `curriculum/09-phase-8-architecture-evolution-and-extensibility.md`
11. `curriculum/10-practical-evaluator-prompt-template.md`
12. `curriculum/11-theory-quiz-prompt-template.md`
13. `curriculum/12-master-phase-checklist.md`

## Project Context
Build one system and evolve it across all phases:
- A mini AdTech serving platform with `/decision`, `/impression`, `/click`
- Budget pacing and frequency capping
- Reporting endpoint
- Operational controls and release safety

## Standard Workspace Layout
Create this structure in your repo:

```text
docs/phase1/
docs/phase2/
docs/phase3/
docs/phase4/
docs/phase5/
docs/phase6/
docs/phase7/
docs/phase8/
tests/phase1/
tests/phase2/
tests/phase3/
tests/phase4/
tests/phase5/
tests/phase6/
tests/phase7/
tests/phase8/
evidence/phase1/
evidence/phase2/
evidence/phase3/
evidence/phase4/
evidence/phase5/
evidence/phase6/
evidence/phase7/
evidence/phase8/
```

## Phase Gate
You pass a phase only when both are true:
1. Practical score is `>= 90/100`
2. Theory score is `>= 90/100`

If either score is below 90, the phase is not complete.
