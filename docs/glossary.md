# AdTech Fundamentals Glossary (Plain Language)

Use this file when a term in the curriculum feels unclear. Definitions are intentionally simple.

| Term | Plain meaning | Example in this project |
|---|---|---|
| System boundary | What this service is responsible for, and what it is not responsible for | The service owns `/decision`, `/impression`, `/click` behavior; admin UI is outside |
| Contract | Exact rules for request, response, and errors | `/decision` requires specific fields and returns a defined schema |
| Endpoint | One API path + method | `POST /impression` |
| External actor | A user or system outside this service | Publisher page script calling `/decision` |
| Service-owned logic | Behavior this service must implement and guarantee | Validation, idempotency handling, consistent error responses |
| Upstream | A system that sends requests/data to this service | Publisher script sending an impression event |
| Downstream | A system that reads data produced by this service | Reporting job reading logged click events later |
| In scope | Work you will do in the current phase | Contracts + validation + contract tests in Phase 1 |
| Out of scope / non-goal | Work intentionally not done in the current phase | Fraud scoring engine in Phase 1 |
| Invariant | Rule that must always be true | Accepted impressions must reference an existing `decision_id` |
| Idempotency | Sending the same event again must not create duplicate effects | Same idempotency key should not create a second click record |
| Deduplication (dedupe) | Detecting and ignoring duplicates | Keep a dedupe key store for event endpoints |
| SLI | What you measure about system behavior | p95 latency for `/decision` |
| SLO | Target level for an SLI | p95 latency under 200ms |
| Schema validation | Checking payload shape and types | Reject missing required fields with structured `4xx` |
| Error model | Consistent format for API errors | `code`, `message`, and optional `details` fields |
| Happy path | Normal success flow | Valid `/decision` request returns 200 + ad payload |
| Failure path | What happens when something goes wrong | Timeout to dependency returns `503` with error code |
| Retry | Try request again after transient failure | Client retries `503` with backoff |
| Backoff | Waiting longer between retries | 100ms, 200ms, 400ms delays |
| Timeout | Maximum wait time for a dependency | Stop waiting after 150ms and fail safely |
| Correlation ID / request ID | Identifier used to trace one request across logs | Include `request_id` in logs and error responses |
| Cardinality | How many of one thing can relate to another | One decision can have many clicks (if your model allows) |
| Event ordering | Rules for out-of-order events | Click arrives before impression; decide accept/reject policy |
| Max lateness | Oldest allowed event age | Reject events older than 24h |
| Expiry | When IDs/keys are no longer valid | `decision_id` valid for 24h; dedupe keys kept 7 days |

## How to use this glossary
1. If a term is unclear, use this plain meaning in your phase docs.
2. Prefer simple wording over jargon in your own writing.
3. If you add a new technical term, add it here with a project-specific example.
