export type HttpStatusCode = 200 | 400 | 500;

export const HttpStatus: Record<"OK" | "BAD_REQUEST" | "INTERNAL_SERVER_ERROR", HttpStatusCode> =
  {
    OK: 200,
    BAD_REQUEST: 400,
    INTERNAL_SERVER_ERROR: 500,
  };
