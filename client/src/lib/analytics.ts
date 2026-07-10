// Lightweight analytics helper for the Rudra Dairy & Farm SPA.
//
// Why both gtag AND dataLayer?
//   - GA4 is loaded via gtag.js (id G-DZ15RLBDY0)
//   - GTM is loaded separately (id GTM-5M2L6SXC)
// Firing both means the event lands in GA4 directly AND in the GTM dataLayer
// (so you can also build GTM triggers / tags off the same events).
//
// Every call is guarded so the app never crashes if the tags are blocked,
// consent-rejected, or absent (e.g. in tests / ad-blockers).

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function trackEvent(action: string, params: EventParams = {}): void {
  try {
    if (typeof window === "undefined") return;
    if (typeof window.gtag === "function") {
      window.gtag("event", action, params);
    }
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: action, ...params });
    }
  } catch {
    /* analytics must never break the UI */
  }
}

/** GA4 recommended ecommerce-style lead events for B2B tracking. */
export const AnalyticsEvents = {
  /** Contact / quote form submitted successfully. */
  leadSubmit: (params: EventParams = {}) =>
    trackEvent("generate_lead", { method: "contact_form", ...params }),
  /** Meeting-request form submitted successfully. */
  meetingSubmit: (params: EventParams = {}) =>
    trackEvent("generate_lead", { method: "meeting_request", ...params }),
  /** A quote-request form was submitted successfully (high-intent lead). */
  quoteSubmit: (params: EventParams = {}) =>
    trackEvent("request_quote", { method: "quote_form", ...params }),
  /** A high-intent CTA was clicked (Book Meeting / Request Quote / Get in Touch). */
  ctaClick: (label: string, params: EventParams = {}) =>
    trackEvent("cta_click", { label, ...params }),
  /** WhatsApp / phone / email contact clicked. */
  contactClick: (method: string, params: EventParams = {}) =>
    trackEvent("contact_click", { method, ...params }),
  /** Language switched by a visitor. */
  langSwitch: (lang: string) =>
    trackEvent("language_switch", { language: lang }),
  /** Generic SPA page view (fired on client-side route changes). */
  pageView: (path: string, title?: string) =>
    trackEvent("page_view", {
      page_path: path,
      page_title: title ?? document.title,
      page_location: typeof window !== "undefined" ? window.location.href : "",
    }),
} as const;
