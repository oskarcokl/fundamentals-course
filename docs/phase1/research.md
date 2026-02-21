# Request lifecycle
```mermaid
sequenceDiagram
    participant P as Publisher
    participant REQ as Request
    participant D as Decisioning
    participant RES as Response
    participant I as Impression
    participant V as View
    participant C as Click
    participant L as Logging
    P->>REQ: User lands on publisher, Publishers requests ads from adserer
    REQ->>D: Request data get forwarded to Decisioning endpoint
    D->>Response: Decisioning endpoint selects ad based on request data
    Response->>P: Adserver returns to Publisher
    P->>I: When ad is served Impression endpoint is called from publisher
    I->>L: Impression is logged into the system
    P->>V: When ad is 50% visible for 1s View endpoint is called from publisher
    V->>L: View is logged into the system
    P->>C: When use clicks on Ad he first gets routed to our adserver to log click and then redirected to landing of ad
    C->>L: Click is logged into the system.
```

# Request error paths
| Step | Failure scenario | Detection | API response | Retry? | Logged fields |
| ---- | ---------------- | --------- | ------------ | ------ | ------------- |
| /request | Missing required field | Schema validation fails | Status code: 400,error_code, error_msg  | No | request_id, error_code, request_body |
| /impression | Impression call without valid request_id |

Endpoint | Method | Why this method | 2xx | 4xx cases | 5xx cases