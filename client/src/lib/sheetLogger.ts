/**
 * Best-effort, non-blocking logger that pushes lead submissions into the
 * Rudra Dairy & Farm Google Sheet via a deployed Google Apps Script web app.
 *
 * Why a GAS web app: this is a static Vite SPA with no secret-safe backend.
 * A GAS web app (deployed "Anyone") accepts cross-origin POSTs and writes
 * straight into the spreadsheet — no API keys, no server to maintain.
 *
 * Routing (set in scripts/Code.gs by tab gid):
 *   - type "quote"   -> Request Quotation tab  (gid 0)
 *   - type "contact" -> Get in touch tab       (gid 1968821310)
 *
 * The web app auto-creates headers from the form fields on first submission,
 * so the sheet stays in sync with whatever fields we send.
 *
 * NOTE: the request is sent with mode:"no-cors" + text/plain so it counts as
 * a "simple" request and bypasses CORS preflight (GAS web apps reject
 * preflights). The response is therefore opaque and intentionally not awaited
 * for — sheet logging must never block or break the user's form success flow.
 */
import { BUSINESS } from "@shared/business";

const SHEET_WEBAPP_URL = import.meta.env.VITE_GAS_SHEET_WEBAPP_URL;

export type SheetRow = Record<string, string | number>;

export async function logToSheet(
  type: "quote" | "contact",
  data: SheetRow
): Promise<void> {
  if (!SHEET_WEBAPP_URL) {
    console.warn(
      "[sheetLogger] VITE_GAS_SHEET_WEBAPP_URL is not set — skipping sheet log."
    );
    return;
  }

  // The Apps Script (scripts/Code.gs v4) reads fields FLAT off the parsed
  // body (data.name, data.company, data.volume, data.destination, …), so we
  // spread the row fields to the top level alongside `type`. Unknown keys
  // (source/business/submittedAt) are ignored by the script.
  const payload = {
    type,
    ...data,
    source: "website",
    business: BUSINESS.name,
    submittedAt: new Date().toISOString(),
  };

  try {
    await fetch(SHEET_WEBAPP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    // Non-fatal: form success has already happened; never surface this to user.
    console.warn("[sheetLogger] sheet log failed (non-fatal):", err);
  }
}
