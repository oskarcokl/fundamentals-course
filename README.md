# SWE Fundamentals for Effective AI Coding

> What do you do if you want to leverage AI coding agents effectively 
> but don't have decades of senior engineering experience? This repo 
> attempts to answer that question.

It's becoming clear that the engineers who get the most out of coding 
agents are those with strong fundamentals. People who can evaluate 
AI output critically, catch bad patterns, and steer agents toward 
good solutions. This curriculum is my attempt to build those fundamentals 
deliberately, without waiting years for them to accumulate naturally.

## How it was built

I collected tweets and posts from senior engineers describing what 
fundamentals they consider essential. I fed these to an LLM and asked 
it to construct a structured curriculum covering those topics. Each 
module includes theory, hands-on exercises, and evaluation prompts I 
can use to test my own understanding.

## What's covered

- **Phase 1 — System Framing and Contracts:** OpenAPI design,
  HTTP semantics, idempotency, system invariants, SLIs/SLOs
- **Phase 2 — Data Integrity and Consistency:** Transaction
  isolation, concurrency, deduplication, reconciliation
- **Phase 3 — Reliability Under Failure:** Timeouts, retries,
  circuit breakers, degraded mode, fault injection
- **Phase 4 — Observability and Operations:** Structured logging,
  distributed tracing, RED metrics, incident response, RCA
- **Phase 5 — Security and Privacy:** AuthN/AuthZ, input
  validation, secrets management, data retention and deletion
- **Phase 6 — Performance and Capacity:** Load testing,
  benchmarking, tail latency, caching, capacity planning
- **Phase 7 — Delivery and Change Safety:** CI pipelines,
  feature flags, canary deploys, rollback drills
- **Phase 8 — Architecture Evolution:** Module boundaries,
  ADRs, backward compatibility, technical debt management

## Structure

- `curriculum/` — course modules and exercises
- `docs/` — theory and reference material
- `tests/` — evaluation exercises
- `openapi.yaml` — sample API spec used in exercises

## How evaluation works

Each phase uses AI-assisted evaluation via two prompt templates
included in the curriculum:

- **Practical evaluator** — inspects artifacts and test evidence,
  scores 4 requirements at 0/15/25 each (max 100)
- **Theory quiz** — 20 questions on engineering judgment and
  tradeoffs (5 points each, max 100)

A phase only passes when both scores reach 90 or above.

## Status

Active and in progress. This is a living curriculum, I'm working 
through it and adding to it as I go.
