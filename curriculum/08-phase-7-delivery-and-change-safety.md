# Phase 7: Delivery and Change Safety

## Objective
Ship changes safely with automated quality controls and fast rollback.

## Research
Document in `docs/phase7/research.md`:
- CI and quality gates
- Deployment strategies and rollout controls
- Rollback and recovery criteria
- Feature flags and kill switches
- Change failure rate and operational quality signals

## Build Tasks
Complete these tasks:
1. Implement CI pipeline gates for lint, tests, migration checks, and security checks.
2. Implement staged rollout strategy and rollback procedure.
3. Add high-risk logic kill switch or feature flag.
4. Run and document one failed-release drill.
5. Update runbook with release and rollback decision tree.

## Required Artifacts
- `docs/phase7/design.md`
- `docs/phase7/research.md`
- `docs/phase7/runbook.md`
- `tests/phase7/`
- `evidence/phase7/results.md`

## AI-Verifiable Requirements
- `P7-R1` CI pipeline gates include lint, tests, migration checks, and security checks.
- `P7-R2` Rollout strategy supports canary or gradual release with explicit rollback criteria.
- `P7-R3` Kill switch or feature flag exists for high-risk decision logic.
- `P7-R4` Failed-release drill is documented with recovery evidence.

## Exit Condition
Phase passes only with:
- Practical score `>= 90`
- Theory score `>= 90`

