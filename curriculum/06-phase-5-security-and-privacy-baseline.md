# Phase 5: Security and Privacy Baseline

## Objective
Establish secure defaults and privacy protections for critical system surfaces.

## Research
Document in `docs/phase5/research.md`:
- Authentication and authorization models
- Input validation and injection risk reduction
- Secrets management basics
- Dependency and supply-chain risk fundamentals
- Data minimization, retention, and deletion policy

## Build Tasks
Complete these tasks:
1. Protect sensitive endpoints with authentication.
2. Implement authorization checks and negative tests.
3. Harden input validation for all public payloads.
4. Add dependency scanning and address critical findings.
5. Implement and test retention and deletion workflow.

## Required Artifacts
- `docs/phase5/design.md`
- `docs/phase5/research.md`
- `docs/phase5/runbook.md`
- `tests/phase5/`
- `evidence/phase5/results.md`

## AI-Verifiable Requirements
- `P5-R1` Protected endpoints require authentication; allow and deny authorization tests exist.
- `P5-R2` Validation tests include malformed payloads and injection-like cases.
- `P5-R3` Security or dependency scan output exists with no unresolved critical findings.
- `P5-R4` Data retention and deletion workflow exists with tests and audit evidence.

## Exit Condition
Phase passes only with:
- Practical score `>= 90`
- Theory score `>= 90`

