/**
 * Rudra Dairy & Farm — Lead Logger (Google Apps Script)  [v5]
 * ======================================================
 * Deploys as a Web App that receives lead submissions from the website
 * (client/src/lib/sheetLogger.ts) and appends them to the correct tab of the
 * shared Google Sheet.
 *
 * PAYLOAD SHAPE (what sheetLogger.ts actually sends — FLAT):
 *   {
 *     "type": "quote" | "contact",
 *     "name": "...", "company": "...", "email": "...", "phone": "...",
 *     "country": "...", "companyWebsite": "...", "product": "...",
 *     "application": "...", "quantity": "...", "timeline": "...",
 *     "message": "...", "source": "...", "business": "...", "submittedAt": "..."
 *   }
 * (Legacy nested {type, data:{...}} is also accepted.)
 *
 * COLUMN CONTRACT — the "quote" tab gets exactly these headers, in this order
 * (Timestamp first). Missing fields are written as blank, never dropped, so
 * every submission fills the same 11 columns:
 *   Timestamp | Full Name | Company Name | Email | Phone / WhatsApp | Country
 *   | Company Website | Product | Application | Quantity Required
 *   | Timeline | Message
 *
 * SETUP (one-time):
 *   1. Open the target Sheet:
 *        https://docs.google.com/spreadsheets/d/1oRBfyHHDEplpGpMdQ82HbM0SnLP8ak8rS1VsOefj8fQ
 *   2. Extensions > Apps Script.
 *   3. Paste this ENTIRE file, replacing the default code.
 *   4. Deploy > Manage deployments > (your existing "Web app" deployment) >
 *      Redeploy.  — the Web app URL stays the SAME, so no .env change needed.
 *   5. Authorize the script (it needs Spreadsheet + Gmail access).
 *   6. Verify: open the Web app URL with ?test=1 — it should list the tabs.
 */

// The shared Rudra Dairy & Farm lead spreadsheet.
const SHEET_ID = "1oRBfyHHDEplpGpMdQ82HbM0SnLP8ak8rS1VsOefj8fQ";

// Tab gids (visible in the sheet URL after "#gid=").
const TAB = {
  quote: 0,           // "Request Quotation" tab (gid 0)
  contact: 1968821310 // "Get in touch" tab
};

function getTargetSheet(type) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const gid = TAB[type] !== undefined ? TAB[type] : TAB.quote;
  const sheets = ss.getSheets();
  for (let i = 0; i < sheets.length; i++) {
    if (sheets[i].getSheetId() === gid) return sheets[i];
  }
  throw new Error("Target tab not found for type: " + type);
}

/**
 * Build an ordered [header, value] layout for a submission.
 * - quote: the canonical 11 columns (+ Timestamp) the business expects.
 * - everything else (contact, etc.): keep every key, humanised, + Timestamp.
 */
function buildLayout(type, data) {
  if (type === "quote") {
    return [
      ["Timestamp", new Date()],
      ["Full Name", data.name || ""],
      ["Company Name", data.company || ""],
      ["Email", data.email || ""],
      ["Phone / WhatsApp", data.phone || ""],
      ["Country", data.country || data.destination || ""],
      ["Company Website", data.companyWebsite || ""],
      ["Product", data.product || ""],
      ["Application", data.application || ""],
      ["Quantity Required", data.quantity || data.volume || ""],
      ["Timeline", data.timeline || ""],
      ["Message", data.message || ""]
    ];
  }
  // contact / generic: preserve whatever fields arrived.
  const layout = [["Timestamp", new Date()]];
  Object.keys(data).forEach(function (k) {
    layout.push([prettyHeader(k), data[k] !== undefined ? data[k] : ""]);
  });
  return layout;
}

function prettyHeader(k) {
  const map = {
    name: "Full Name", company: "Company Name", email: "Email",
    phone: "Phone / WhatsApp", country: "Country", destination: "Country",
    companyWebsite: "Company Website", product: "Product",
    application: "Application", quantity: "Quantity Required",
    volume: "Quantity Required", timeline: "Timeline", message: "Message",
    page: "Page", subject: "Subject", inquiry: "Inquiry",
    source: "Source", business: "Business", submittedAt: "Submitted At"
  };
  return map[k] || (k.charAt(0).toUpperCase() + k.slice(1));
}

function appendRow(type, data) {
  const sheet = getTargetSheet(type);
  const layout = buildLayout(type, data);
  const headers = layout.map(function (x) { return x[0]; });
  const values = layout.map(function (x) { return x[1]; });

  // Sync headers: keep any existing columns, append the ones we're missing.
  const headerMap = {};
  const lastCol = sheet.getLastColumn();
  if (lastCol > 0) {
    const existing = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
    existing.forEach(function (h, i) {
      if (h !== "") headerMap[h] = i;
    });
  }
  const missing = headers.filter(function (h) { return !(h in headerMap); });
  if (missing.length) {
    const startCol = sheet.getLastColumn() + 1;
    sheet.getRange(1, startCol, 1, missing.length).setValues([missing]);
    missing.forEach(function (h, i) { headerMap[h] = startCol + i - 1; });
  }

  // Build the row aligned to the (now complete) column count.
  const totalCols = sheet.getLastColumn();
  const row = new Array(totalCols).fill("");
  headers.forEach(function (h, i) {
    const idx = headerMap[h];
    if (typeof idx === "number") row[idx] = values[i];
  });
  sheet.appendRow(row);
}

/**
 * Email-notify on every entry — server-side (Google), independent of the
 * website's EmailJS call. Best-effort: a mail error must never break the sheet
 * write, so it is wrapped in try/catch.
 */
function notifyByEmail(type, data) {
  const TO =
    "info@rudradairyandfarm.shop, donkeyfarm79@gmail.com, donkeyfarm79@outlook.com";
  const typeLabel =
    type === "quote" ? "Quote Request"
      : type === "contact" ? "Contact Inquiry"
        : type;
  const subject = "[RDF Lead] New " + typeLabel + " from " + (data.name || "Unknown");

  let body = "New " + typeLabel + " received via rudradairyandfarm.shop\n";
  body += "==========================================\n\n";
  for (const k in data) {
    if (Object.prototype.hasOwnProperty.call(data, k)) {
      body += prettyHeader(k) + ": " + (data[k] || "-") + "\n";
    }
  }
  body += "\n------------------------------------------\n";
  body += "Received at: " + new Date().toString() + "\n";
  body += "Automated notification from the Rudra Dairy & Farm lead logger.\n";

  try {
    GmailApp.sendEmail(TO, subject, body);
    Logger.log("notifyByEmail: sent for " + type);
  } catch (e) {
    Logger.log("notifyByEmail failed: " + e);
  }
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("No payload received");
    }
    var payload = JSON.parse(e.postData.contents);
    // Accept both flat {type, ...fields} and nested {type, data:{...}}.
    var type = payload.type || "quote";
    var data = payload.data ? payload.data : payload;
    delete data.type;
    appendRow(type, data);
    // Owner notification is handled client-side via EmailJS (single source of
    // truth) so the business gets exactly ONE lead email per submission — the
    // previous server-side Gmail notifyByEmail caused a duplicate "my own
    // mail" + EmailJS pair. Sheet write remains the reliable data store.
    // notifyByEmail(type, data); // intentionally disabled to avoid double emails
    return ContentService.createTextOutput(
      JSON.stringify({ status: "success", message: type + " request submitted successfully." })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", error: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  var p = e && e.parameter ? e.parameter : {};
  if (p.test === "1") {
    try {
      var ss = SpreadsheetApp.openById(SHEET_ID);
      var names = ss.getSheets().map(function (s) {
        return { name: s.getName(), gid: s.getSheetId() };
      });
      return ContentService.createTextOutput(
        JSON.stringify({ ok: true, sheet: ss.getName(), tabs: names })
      ).setMimeType(ContentService.MimeType.JSON);
    } catch (err) {
      return ContentService.createTextOutput(
        JSON.stringify({ ok: false, error: String(err) })
      ).setMimeType(ContentService.MimeType.JSON);
    }
  }
  return ContentService.createTextOutput(
    JSON.stringify({ ok: true, message: "Rudra Dairy sheet logger ready" })
  ).setMimeType(ContentService.MimeType.JSON);
}
