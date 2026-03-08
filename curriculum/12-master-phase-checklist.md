# Master Phase Checklist

Use this file as your official progress and gate tracker.

## Global Gate
- [ ] Practical score is at least 90
- [ ] Theory score is at least 90
- [ ] No critical missing requirement

## Phase 1 Checklist
- [ ] `P1-R1` Scope, non-goals, boundaries, failure modes documented
- [ ] `P1-R2` OpenAPI for `/decision`, `/impression`, `/click` with error schemas
- [ ] `P1-R3` At least 12 invariants with rationale
- [ ] `P1-R4` Contract tests for valid and invalid input
- [ ] Practical score >= 90
- [ ] Theory score >= 90
- [ ] Phase status: PASS

## Phase 2 Checklist
- [ ] `P2-R1` Migrations include keys, dedup constraints, and indexes
- [ ] `P2-R2` Concurrency tests show no overspend and no frequency violations
- [ ] `P2-R3` Duplicate event handling by event ID is deterministic
- [ ] `P2-R4` Reconciliation job or report detects mismatches
- [ ] Practical score >= 90
- [ ] Theory score >= 90
- [ ] Phase status: PASS

## Phase 3 Checklist
- [ ] `P3-R1` Explicit timeouts and bounded retries on dependencies
- [ ] `P3-R2` Fault injection covers latency and 5xx errors
- [ ] `P3-R3` Degraded mode exists and is tested
- [ ] `P3-R4` Incident triage and recovery runbook exists
- [ ] Practical score >= 90
- [ ] Theory score >= 90
- [ ] Phase status: PASS

## Phase 4 Checklist
- [ ] `P4-R1` Structured logs include correlation ID and decision reason
- [ ] `P4-R2` Metrics include request rate, error rate, p95, p99, and backlog lag
- [ ] `P4-R3` Tracing covers the core decision pipeline
- [ ] `P4-R4` Incident simulation with timeline, RCA, and preventive actions
- [ ] Practical score >= 90
- [ ] Theory score >= 90
- [ ] Phase status: PASS

## Phase 5 Checklist
- [ ] `P5-R1` Authentication and authorization tests for allow and deny
- [ ] `P5-R2` Validation tests for malformed and injection-like payloads
- [ ] `P5-R3` Security scans show no unresolved critical findings
- [ ] `P5-R4` Retention and deletion workflow with test evidence
- [ ] Practical score >= 90
- [ ] Theory score >= 90
- [ ] Phase status: PASS

## Phase 6 Checklist
- [ ] `P6-R1` Reproducible load-test setup exists
- [ ] `P6-R2` Benchmark report includes p50, p95, p99, and resource usage
- [ ] `P6-R3` Optimization includes before-and-after measurements
- [ ] `P6-R4` Capacity model is compared to measured results
- [ ] Practical score >= 90
- [ ] Theory score >= 90
- [ ] Phase status: PASS

## Phase 7 Checklist
- [ ] `P7-R1` CI gates include lint, tests, migration checks, and security checks
- [ ] `P7-R2` Canary or gradual rollout with rollback criteria
- [ ] `P7-R3` Kill switch or feature flag for high-risk logic
- [ ] `P7-R4` Failed-release drill documented with recovery evidence
- [ ] Practical score >= 90
- [ ] Theory score >= 90
- [ ] Phase status: PASS

## Phase 8 Checklist
- [ ] `P8-R1` Module boundaries are documented and enforced
- [ ] `P8-R2` New feature added via extension points
- [ ] `P8-R3` At least 5 ADRs with alternatives and tradeoffs
- [ ] `P8-R4` Backward compatibility tests for old clients
- [ ] Practical score >= 90
- [ ] Theory score >= 90
- [ ] Phase status: PASS

