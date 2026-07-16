import { createRoot } from "react-dom/client";
import App from "./App";

// Self-hosted fonts (Fontsource) — same families/weights as before
// (Playfair Display 600/700, Lora 400/500/600, Inter 400/500/600/700) but
// served from OUR OWN domain instead of Google. This removes the render-
// blocking third-party request and the GDPR/consent exposure, and keeps the
// exact same look. Each import bundles all unicode subsets (latin, latin-ext
// for FR/IT/DE accents, etc.) via @font-face with font-display: swap.
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/lora/400.css";
import "@fontsource/lora/500.css";
import "@fontsource/lora/600.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
