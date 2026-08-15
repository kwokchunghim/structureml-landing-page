import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

import vercelConfig from "../../vercel.json";

describe("production configuration", () => {
  it("uses a static Vite build without a catch-all rewrite", () => {
    expect(vercelConfig.framework).toBe("vite");
    expect(vercelConfig.buildCommand).toBe("npm run build");
    expect(vercelConfig.outputDirectory).toBe("dist");
    expect(vercelConfig).not.toHaveProperty("rewrites");
  });

  it("sets conservative security headers without loosening scripts", () => {
    const headers = Object.fromEntries(
      vercelConfig.headers[0].headers.map(({ key, value }) => [key, value]),
    );

    expect(headers["Content-Security-Policy"]).toContain("script-src 'self'");
    expect(headers["Content-Security-Policy"]).not.toContain("'unsafe-inline'");
    expect(headers["Content-Security-Policy"]).toContain("frame-ancestors 'none'");
    expect(headers["X-Content-Type-Options"]).toBe("nosniff");
    expect(headers["X-Frame-Options"]).toBe("DENY");
  });

  it("keeps deployment automation secret-free", () => {
    const workflow = readFileSync(".github/workflows/ci.yml", "utf8");

    expect(workflow).not.toMatch(/secrets\./u);
    expect(workflow).not.toMatch(/vercel deploy/iu);
  });
});
