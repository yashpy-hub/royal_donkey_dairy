import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import AppServer from "./App.server";

/**
 * Server render of a single route. Used by scripts/prerender.mjs to emit
 * static HTML for every page. wouter's <Router ssrPath> pins the initial
 * location so the right page renders; React reads ssrPath instead of the
 * browser history.
 *
 * Head tags are collected by the <Seo>/<EntitySeo> components into the
 * module-level `ssrHead` object (see components/Seo.tsx) during render, which
 * the prerender script reads after this call returns.
 */
export function render(url: string) {
  const html = renderToString(
    <Router ssrPath={url}>
      <AppServer />
    </Router>
  );
  return { html };
}
