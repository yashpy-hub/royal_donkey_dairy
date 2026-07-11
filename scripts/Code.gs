/**
 * Rudra Dairy & Farm — Lead Logger (Google Apps Script)
 * ======================================================
 * Deploys as a Web App that receives lead submissions from the website
 * (client/src/lib/sheetLogger.ts) and appends them to the correct tab
 * of the shared Google Sheet.
 *
 * SETUP (one-time):
 *   1. Open the target Sheet:
 *        https://docs.google.com/spreadsheets/d/1oRBfyHHDEplpGpMdQ82HbM0SnLP8ak8rS1VsOefj8fQ
 *   2. Extensions > Apps Script.
 *   3. Paste this entire file, replacing the default code.
 *   4. Deploy > New deployment > type "Web app":
 *        - Execute as:   Me (<your account>)
 *        - Who has access: Anyone (the public website needs to POST)
 *   5. Authorize the script (it needs Spreadsheet access).
 *   6. Copy the Web app URL it gives you (looks like
 *        https://script.google.com/macros/s/AKfyc.../exec )
 *   7. Put it in the site's .env as:
 *        VITE_GAS_SHEET_WEBAPP_URL=https://script.google.com/macros/s/.../exec
 *
 * The first submission to each tab auto-creates the column headers from the
 * exact form fields it receives, so the sheet always matches the form.
 */

// The shared Rudra Dairy & Farm lead spreadsheet.
const SHEET_ID = "1oRBfyHHDEplpGpMdQ82HbM0SnLP8ak8rS1VsOefj8fQ";

// Tab gids (visible in the sheet URL after "#gid=").
const TAB = {
  quote: 0,          // "Request Quotation" tab
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

function appendRow(type, data) {
  const sheet = getTargetSheet(type);
  const headers = Object.keys(data); // insertion order preserved

  // Read any existing header row.
  const headerMap = {};
  const lastCol = sheet.getLastColumn();
  if (lastCol > 0) {
    const existing = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
    existing.forEach(function (h, i) {
      if (h !== "") headerMap[h] = i;
    });
  }

  // Append any headers we haven't seen yet (auto-create on first run).
  const missing = headers.filter(function (h) {
    return !(h in headerMap);
  });
  if (missing.length) {
    const startCol = sheet.getLastColumn() + 1;
    sheet.getRange(1, startCol, 1, missing.length).setValues([missing]);
    missing.forEach(function (h, i) {
      headerMap[h] = startCol + i - 1;
    });
  }

  // Build the row to match the current column count.
  const totalCols = sheet.getLastColumn();
  const row = new Array(totalCols).fill("");
  headers.forEach(function (h) {
    var idx = headerMap[h];
    if (typeof idx === "number") row[idx] = data[h];
  });
  sheet.appendRow(row);
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("No payload received");
    }
    var payload = JSON.parse(e.postData.contents);
    if (!payload || !payload.type || !payload.data) {
      throw new Error("Invalid payload shape");
    }
    appendRow(payload.type, payload.data);
    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Verification mode: open the sheet and report its tabs. Hit the web-app
  // URL with ?test=1 to confirm (a) the deployment is the CURRENT version and
  // (b) it has spreadsheet access. If this returns tab names, POST will work.
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
