/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Deployed Google Apps Script web-app URL that logs leads to the sheet. */
  readonly VITE_GAS_SHEET_WEBAPP_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
