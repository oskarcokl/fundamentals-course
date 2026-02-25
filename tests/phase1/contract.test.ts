import assert from "node:assert/strict";
import { after, before, describe, it } from "node:test";
import type { Server } from "node:http";
import type { AddressInfo } from "node:net";

import app from "../../app";
import { HttpStatus } from "../../httpStatus";

type HttpResult = {
  status: number;
  body: unknown;
};

let server: Server;
let baseUrl = "";

async function postJson(path: string, payload: unknown): Promise<HttpResult> {
  const response = await fetch(`${baseUrl}${path}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  const text = await response.text();
  return {
    status: response.status,
    body: text ? JSON.parse(text) : null,
  };
}

async function postMalformedJson(path: string): Promise<HttpResult> {
  const response = await fetch(`${baseUrl}${path}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: '{"broken": true',
  });
  const text = await response.text();
  return {
    status: response.status,
    body: text ? JSON.parse(text) : null,
  };
}

before(async () => {
  server = app.listen(0);
  await new Promise<void>((resolve) => {
    server.once("listening", resolve);
  });
  const address = server.address() as AddressInfo;
  baseUrl = `http://127.0.0.1:${address.port}`;
});

after(async () => {
  await new Promise<void>((resolve, reject) => {
    server.close((err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
});

describe("POST /decision", () => {
  it("happy path returns 200 and ad payload", async () => {
    const payload = {
      requestId: "req-1",
      placementId: "placement-1",
      referer: "https://publisher.example/article/1",
      country: "US",
      context: { slot: "top-banner" },
    };
    const result = await postJson("/decision", payload);
    const body = result.body as Record<string, unknown>;

    assert.equal(result.status, HttpStatus.OK);
    assert.equal(body.requestId, payload.requestId);
    assert.equal(typeof body.ad, "object");
    assert.ok(body.ad);
    assert.equal(typeof (body.ad as Record<string, unknown>).adId, "string");
    assert.equal(typeof (body.ad as Record<string, unknown>).creativeUrl, "string");
    assert.equal(typeof (body.ad as Record<string, unknown>).clickUrl, "string");
    assert.equal(
      typeof (body.ad as Record<string, unknown>).impressionUrl,
      "string",
    );
  });

  it("missing required field returns 400", async () => {
    const result = await postJson("/decision", {
      requestId: "req-1",
      placementId: "placement-1",
    });
    const body = result.body as Record<string, unknown>;

    assert.equal(result.status, HttpStatus.BAD_REQUEST);
    assert.equal(body.code, "INVALID_REQUEST");
    assert.equal(body.message, "Request validation failed");
    assert.ok(Array.isArray(body.details));
    assert.equal(
      (body.details as Array<{ field: string }>).some(
        (detail) => detail.field === "referer",
      ),
      true,
    );
  });

  it("wrong type returns 400", async () => {
    const result = await postJson("/decision", {
      requestId: 123,
      placementId: "placement-1",
      referer: "https://publisher.example/article/1",
    });
    const body = result.body as Record<string, unknown>;

    assert.equal(result.status, HttpStatus.BAD_REQUEST);
    assert.equal(body.code, "INVALID_REQUEST");
    assert.ok(Array.isArray(body.details));
    assert.equal(
      (body.details as Array<{ field: string }>).some(
        (detail) => detail.field === "requestId",
      ),
      true,
    );
  });

  it("malformed JSON returns 400", async () => {
    const result = await postMalformedJson("/decision");
    const body = result.body as Record<string, unknown>;

    assert.equal(result.status, HttpStatus.BAD_REQUEST);
    assert.equal(body.code, "MALFORMED_JSON");
  });
});

describe("POST /impression", () => {
  it("happy path returns 200 and accepted status", async () => {
    const result = await postJson("/impression", {
      requestId: "req-1",
      adId: "ad-1",
      referer: "https://publisher.example/article/1",
      placementId: "placement-1",
      campaignId: "campaign-1",
      creativeId: "creative-1",
      occurredAt: "2026-02-22T00:00:00Z",
    });
    const body = result.body as Record<string, unknown>;

    assert.equal(result.status, HttpStatus.OK);
    assert.equal(body.status, "accepted");
    assert.equal(typeof body.eventId, "string");
  });

  it("missing required field returns 400", async () => {
    const result = await postJson("/impression", {
      requestId: "req-1",
      adId: "ad-1",
      referer: "https://publisher.example/article/1",
      placementId: "placement-1",
    });
    const body = result.body as Record<string, unknown>;

    assert.equal(result.status, HttpStatus.BAD_REQUEST);
    assert.equal(body.code, "INVALID_REQUEST");
    assert.ok(Array.isArray(body.details));
    assert.equal(
      (body.details as Array<{ field: string }>).some(
        (detail) => detail.field === "campaignId",
      ),
      true,
    );
  });

  it("wrong type returns 400", async () => {
    const result = await postJson("/impression", {
      requestId: "req-1",
      adId: 99,
      referer: "https://publisher.example/article/1",
      placementId: "placement-1",
      campaignId: "campaign-1",
    });
    const body = result.body as Record<string, unknown>;

    assert.equal(result.status, HttpStatus.BAD_REQUEST);
    assert.equal(body.code, "INVALID_REQUEST");
    assert.ok(Array.isArray(body.details));
    assert.equal(
      (body.details as Array<{ field: string }>).some(
        (detail) => detail.field === "adId",
      ),
      true,
    );
  });

  it("malformed JSON returns 400", async () => {
    const result = await postMalformedJson("/impression");
    const body = result.body as Record<string, unknown>;

    assert.equal(result.status, HttpStatus.BAD_REQUEST);
    assert.equal(body.code, "MALFORMED_JSON");
  });
});

describe("POST /click", () => {
  it("happy path returns 200 and accepted status", async () => {
    const result = await postJson("/click", {
      requestId: "req-1",
      adId: "ad-1",
      referer: "https://publisher.example/article/1",
      placementId: "placement-1",
      campaignId: "campaign-1",
      creativeId: "creative-1",
      occurredAt: "2026-02-22T00:00:00Z",
      targetUrl: "https://advertiser.example/landing-page",
    });
    const body = result.body as Record<string, unknown>;

    assert.equal(result.status, HttpStatus.OK);
    assert.equal(body.status, "accepted");
    assert.equal(typeof body.eventId, "string");
  });

  it("missing required field returns 400", async () => {
    const result = await postJson("/click", {
      requestId: "req-1",
      adId: "ad-1",
      placementId: "placement-1",
      campaignId: "campaign-1",
    });
    const body = result.body as Record<string, unknown>;

    assert.equal(result.status, HttpStatus.BAD_REQUEST);
    assert.equal(body.code, "INVALID_REQUEST");
    assert.ok(Array.isArray(body.details));
    assert.equal(
      (body.details as Array<{ field: string }>).some(
        (detail) => detail.field === "referer",
      ),
      true,
    );
  });

  it("wrong type returns 400", async () => {
    const result = await postJson("/click", {
      requestId: 123,
      adId: "ad-1",
      referer: "https://publisher.example/article/1",
      placementId: "placement-1",
      campaignId: "campaign-1",
    });
    const body = result.body as Record<string, unknown>;

    assert.equal(result.status, HttpStatus.BAD_REQUEST);
    assert.equal(body.code, "INVALID_REQUEST");
    assert.ok(Array.isArray(body.details));
    assert.equal(
      (body.details as Array<{ field: string }>).some(
        (detail) => detail.field === "requestId",
      ),
      true,
    );
  });

  it("malformed JSON returns 400", async () => {
    const result = await postMalformedJson("/click");
    const body = result.body as Record<string, unknown>;

    assert.equal(result.status, HttpStatus.BAD_REQUEST);
    assert.equal(body.code, "MALFORMED_JSON");
  });
});
