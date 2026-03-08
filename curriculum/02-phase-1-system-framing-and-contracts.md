# Phase 1: System Framing and Contracts

## Objective
Define a clear AdTech system boundary and lock API contracts before deeper implementation.

## Research
Document in `docs/phase1/research.md`:
- Ad-serving request lifecycle from request to logging
- HTTP semantics for method choice and status codes
- Idempotency concepts for event endpoints
- Service-level indicators and service-level objectives
- At least 12 system invariants and why each matters

## Build Tasks
Complete these tasks:
1. Define system scope and explicit non-goals.
2. Define architecture boundaries and major components.
3. Create API contracts for `/decision`, `/impression`, `/click`.
4. Implement schema validation and error model.
5. Add contract tests for valid and invalid requests.

## Required Artifacts
- `docs/phase1/design.md`
- `docs/phase1/research.md`
- `docs/phase1/runbook.md`
- `tests/phase1/`
- `evidence/phase1/results.md`

## AI-Verifiable Requirements
- `P1-R1` `docs/phase1/design.md` contains scope, non-goals, boundaries, and top failure modes.
- `P1-R2` OpenAPI spec exists for `/decision`, `/impression`, `/click`, including error schemas.
- `P1-R3` `docs/phase1/research.md` includes at least 12 invariants with rationale.
- `P1-R4` `tests/phase1/` includes contract tests for happy path and invalid input.

## Exit Condition
Phase passes only with:
- Practical score `>= 90`
- Theory score `>= 90`

