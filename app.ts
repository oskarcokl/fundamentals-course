import express, {
  type ErrorRequestHandler,
  type Request,
  type Response,
} from "express";
import { fileURLToPath } from "node:url";
import { ErrorCode } from "./errorTypes";
import { HttpStatus, type HttpStatusCode } from "./httpStatus";

type ValidationDetail = {
  field: string;
  message: string;
};

type ErrorBody = {
  code: string;
  message: string;
  details?: ValidationDetail[];
};

function isPlainObject(value: unknown): value is Record<string, unknown> {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return false;
  }
  return Object.getPrototypeOf(value) === Object.prototype;
}

function validationError(field: string, message: string): ValidationDetail {
  return { field, message };
}

function sendError(
  res: Response,
  status: HttpStatusCode,
  code: ErrorCode,
  message: string,
  details?: ValidationDetail[],
): Response<ErrorBody> {
  const payload: ErrorBody = {
    code,
    message,
  };
  if (details && details.length > 0) {
    payload.details = details;
  }
  return res.status(status).json(payload);
}

function validateRequiredString(
  body: Record<string, unknown>,
  field: string,
  errors: ValidationDetail[],
): void {
  if (!(field in body)) {
    errors.push(validationError(field, "is required"));
    return;
  }
  if (typeof body[field] !== "string") {
    errors.push(validationError(field, "must be a string"));
  }
}

function validateOptionalString(
  body: Record<string, unknown>,
  field: string,
  errors: ValidationDetail[],
): void {
  if (field in body && typeof body[field] !== "string") {
    errors.push(validationError(field, "must be a string"));
  }
}

function validateDecisionRequest(body: unknown): ValidationDetail[] {
  if (!isPlainObject(body)) {
    return [validationError("body", "must be a JSON object")];
  }

  const errors: ValidationDetail[] = [];
  validateRequiredString(body, "requestId", errors);
  validateRequiredString(body, "placementId", errors);
  validateRequiredString(body, "referer", errors);
  validateOptionalString(body, "country", errors);

  if ("context" in body) {
    if (!isPlainObject(body.context)) {
      errors.push(validationError("context", "must be an object"));
    }
  }

  return errors;
}

function validateTrackRequest(
  body: unknown,
  includeTargetUrl: boolean,
): ValidationDetail[] {
  if (!isPlainObject(body)) {
    return [validationError("body", "must be a JSON object")];
  }

  const errors: ValidationDetail[] = [];
  const requiredFields = [
    "requestId",
    "adId",
    "referer",
    "placementId",
    "campaignId",
  ];

  for (const field of requiredFields) {
    validateRequiredString(body, field, errors);
  }

  validateOptionalString(body, "creativeId", errors);
  validateOptionalString(body, "occurredAt", errors);

  if (includeTargetUrl) {
    validateOptionalString(body, "targetUrl", errors);
  }

  return errors;
}

function isMalformedJsonError(err: unknown): boolean {
  if (!(err instanceof Error)) {
    return false;
  }
  const parseError = err as Error & { status?: number; type?: string };
  return parseError.status === 400 && parseError.type === "entity.parse.failed";
}

const app = express();
app.use(express.json());

app.post("/decision", (req: Request, res: Response) => {
  const errors = validateDecisionRequest(req.body);
  if (errors.length > 0) {
    return sendError(
      res,
      HttpStatus.BAD_REQUEST,
      "INVALID_REQUEST",
      "Request validation failed",
      errors,
    );
  }

  const requestBody = req.body as Record<string, string>;
  return res.status(200).json({
    requestId: requestBody.requestId,
    ad: {
      adId: "ad-demo-1",
      creativeUrl: "https://cdn.adserver.com/creative/ad-demo-1.html",
      clickUrl: `https://api.adserver.com/click?requestId=${encodeURIComponent(
        requestBody.requestId,
      )}&adId=ad-demo-1`,
      impressionUrl: `https://api.adserver.com/impression?requestId=${encodeURIComponent(
        requestBody.requestId,
      )}&adId=ad-demo-1`,
      campaignId: "cmp-demo-1",
      priceCpm: 1.23,
      creativeId: "creative-demo-1",
    },
  });
});

app.post("/impression", (req: Request, res: Response) => {
  const errors = validateTrackRequest(req.body, false);
  if (errors.length > 0) {
    return sendError(
      res,
      HttpStatus.BAD_REQUEST,
      "INVALID_REQUEST",
      "Request validation failed",
      errors,
    );
  }

  const requestBody = req.body as Record<string, string>;
  return res.status(200).json({
    status: "accepted",
    eventId: `imp-${requestBody.requestId}-${requestBody.adId}`,
  });
});

app.post("/click", (req: Request, res: Response) => {
  const errors = validateTrackRequest(req.body, true);
  if (errors.length > 0) {
    return sendError(
      res,
      HttpStatus.BAD_REQUEST,
      "INVALID_REQUEST",
      "Request validation failed",
      errors,
    );
  }

  const requestBody = req.body as Record<string, string>;
  return res.status(200).json({
    status: "accepted",
    eventId: `clk-${requestBody.requestId}-${requestBody.adId}`,
  });
});

// Error middleware #1: map malformed JSON parse errors to the 400 contract.
const malformedJsonErrorHandler: ErrorRequestHandler = (err, _req, res, next) => {
  if (isMalformedJsonError(err)) {
    sendError(
      res,
      HttpStatus.BAD_REQUEST,
      "MALFORMED_JSON",
      "Malformed JSON request body",
    );
    return;
  }
  next(err);
};

// Error middleware #2: final fallback for all unhandled errors.
const fallbackErrorHandler: ErrorRequestHandler = (_err, _req, res) => {
  sendError(
    res,
    HttpStatus.INTERNAL_SERVER_ERROR,
    "INTERNAL_ERROR",
    "Internal server error",
  );
};

app.use(malformedJsonErrorHandler);
app.use(fallbackErrorHandler);

export function startServer(port = Number(process.env.PORT ?? 3000)) {
  return app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`AdServer API listening on http://localhost:${port}`);
  });
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  startServer();
}

export default app;
