# Phase 4: Observability and Operations

## Objective
Make system behavior explainable, measurable, and actionable in production-like conditions.

## Research
Document in `docs/phase4/research.md`:
- Structured logging principles
- RED metrics and latency percentiles
- Basic distributed tracing and correlation IDs
- SLO-driven alerting and incident response
- Root cause analysis and post-incident follow-up

## Build Tasks
Complete these tasks:
1. Add structured logs with correlation IDs.
2. Emit key service metrics for traffic, errors, and latency.
3. Add traces across core serving flow.
4. Define alerts aligned with chosen SLOs.
5. Run one incident simulation and document full timeline and RCA.

## Required Artifacts
- `docs/phase4/design.md`
- `docs/phase4/research.md`
- `docs/phase4/runbook.md`
- `tests/phase4/`
- `evidence/phase4/results.md`

## AI-Verifiable Requirements
- `P4-R1` Logs include request correlation ID and decision reason fields.
- `P4-R2` Metrics include request rate, error rate, p95, p99, and queue or backlog lag.
- `P4-R3` Traces cover major spans in the decision pipeline.
- `P4-R4` Incident simulation is documented with timeline, root cause, and prevention action.

## Exit Condition
Phase passes only with:
- Practical score `>= 90`
- Theory score `>= 90`

