# Phase 3: Reliability Under Failure

## Objective
Ensure serving stays safe and useful during dependency failures and latency spikes.

## Research
Document in `docs/phase3/research.md`:
- Timeouts and failure budgets for dependencies
- Retry policy design and exponential backoff
- Circuit breaker patterns and failure isolation
- Degraded mode and graceful fallback behavior
- Backpressure concepts for queue and ingestion paths

## Build Tasks
Complete these tasks:
1. Add explicit timeouts on dependency calls.
2. Add bounded retry policy with backoff and jitter.
3. Implement circuit-break or equivalent failure guard.
4. Implement degraded-mode response behavior.
5. Add fault-injection tests for high latency and dependency errors.

## Required Artifacts
- `docs/phase3/design.md`
- `docs/phase3/research.md`
- `docs/phase3/runbook.md`
- `tests/phase3/`
- `evidence/phase3/results.md`

## AI-Verifiable Requirements
- `P3-R1` All dependency calls enforce explicit timeout and bounded retries.
- `P3-R2` Fault-injection tests cover latency and 5xx failure paths.
- `P3-R3` Degraded-mode path exists and is validated by tests.
- `P3-R4` `docs/phase3/runbook.md` includes incident triage and recovery procedure.

## Exit Condition
Phase passes only with:
- Practical score `>= 90`
- Theory score `>= 90`

