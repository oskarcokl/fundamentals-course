# System design
## In scope
1. /decision
    - picks an ad to serve based on request params
2. /impression
    - logs ad impression, is idempotent
3. /click
    - logs ad click, is idempotent

## Non-goals
1. No support for interstitial or any custom ad formats
2. No fraud detection
3. No user geotargeting
4. No user segmentation
5. No AdServer administration for campaign management
6. No dashboard for campaign performance
7. No ad serving script for rendering ads on publishers site

## System Boundary
- This service owns selecting ads based on request params and logging ad related statistics like impression and click.

## Externals
- AdServer Administration GUI for managing campaigns (The system servers ads added from this gui)
- Ad serving scripts (The system return the ad and creative that these script render to the publisher page)
- AdServer campaign monitoring (This service generates downstream data that the monitoring and report software uses.)

## Top failure modes
| Step | Failure scenario | Detection | API response | Retry? | Logged fields |
| ---- | ---------------- | --------- | ------------ | ------ | ------------- |
| /decision | Missing required field | Schema validation fails | Status code: 400, error_code, error_msg | No | request_id, error_code, request_body |
| /decision | Request parameter type mismatch | Schema validation catches incorrect type | Status code: 400, error_code, error_msg | No | request_id, error_code, request_body |
| /decision | Malformed JSON in request payload | Server error middleware catches parsing error | 400, error_code, error_msg | No | request_id, error_code, request_body |
| /impression | Missing required field | Schema validation fails | Status code: 400, error_code, error_msg | No | request_id, error_code, request_body |
| /impression | Invalid request_id | request_id checkup fails | Status code: 400, error_code, error_msg | No | request_id, error_code, request_body |
| /impression | Request parameter type mismatch | Schema validation catches incorrect type | Status code: 400, error_code, error_msg | No | request_id, error_code, request_body |
| /impression | Malformed JSON in request payload | Server error middleware catches parsing error | 400, error_code, error_msg | No | request_id, error_code, request_body |
| /click | Missing required field | Schema validation fails | Status code: 400, error_code, error_msg | No | request_id, error_code, request_body |
| /click | Invalid request_id | request_id checkup fails | Status code: 400, error_code, error_msg | No | request_id, error_code, request_body |
| /click | Request parameter type mismatch | Schema validation catches incorrect type | Status code: 400, error_code, error_msg | No | request_id, error_code, request_body |
| /click | Malformed JSON in request payload | Server error middleware catches parsing error | 400, error_code, error_msg | No | request_id, error_code, request_body |