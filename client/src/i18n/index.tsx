import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { DEFAULT_LANG, isLang, LANG_STORAGE_KEY, type Lang } from "./languages";

type Dict = Record<string, any>;

// Per-language dictionaries are code-split so only the active language is
// downloaded. The old single file held all 4 languages (~243 KB); a single
// language is ~60 KB. English (the default + most visitors) is the one kept
// in the entry chunk so first paint never waits on a network fetch — other
// languages lazy-load on first use and are cached after.
import enDict from "./translations/en";
const dictLoaders: Record<Lang, Dict | (() => Promise<Dict>)> = {
  en: enDict,
  fr: () => import("./translations/fr").then((m) => m.default),
  it: () => import("./translations/it").then((m) => m.default),
  de: () => import("./translations/de").then((m) => m.default),
};

async function getDict(lang: Lang): Promise<Dict> {
  const d = dictLoaders[lang];
  return typeof d === "function" ? await (d as () => Promise<Dict>)() : d;
}

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (path: string, vars?: Record<string, string | number>) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

/**
 * Read the initial language from (in priority order):
 *  1. ?lang=xx query param (so Google/Bing can crawl distinct language URLs)
 *  2. localStorage (rememered choice from a previous visit)
 *  3. browser navigator.language
 *  4. English default
 */
function getInitialLang(): Lang {
  if (typeof window === "undefined") return DEFAULT_LANG;
  try {
    const sp = new URLSearchParams(window.location.search);
    const q = sp.get("lang");
    if (isLang(q)) return q;
  } catch {
    /* ignore */
  }
  const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
  if (isLang(stored)) return stored;
  const nav = window.navigator.language?.slice(0, 2);
  if (isLang(nav)) return nav;
  return DEFAULT_LANG;
}

function resolve(dict: Dict, path: string): string | undefined {
  return path.split(".").reduce<any>((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) return acc[key];
    return undefined;
  }, dict);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);
  // The resolved dictionary for the active language (English is sync; others
  // populate after their chunk loads, falling back to English until then).
  const [dict, setDict] = useState<Dict>(enDict);

  // Load (and switch to) the correct language dictionary.
  useEffect(() => {
    let cancelled = false;
    if (lang === "en") {
      setDict(enDict);
      return;
    }
    getDict(lang).then((d) => {
      if (!cancelled) setDict(d);
    });
    return () => {
      cancelled = true;
    };
  }, [lang]);

  useEffect(() => {
    window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    // Keep ?lang= in the URL so the language is crawlable & shareable.
    try {
      const sp = new URLSearchParams(window.location.search);
      if (sp.get("lang") !== lang) {
        sp.set("lang", lang);
        const newUrl = `${window.location.pathname}?${sp.toString()}${window.location.hash}`;
        window.history.replaceState({}, "", newUrl);
      }
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);

  const t = useCallback(
    (path: string, vars?: Record<string, string | number>) => {
      const localized = resolve(dict, path);
      const en = resolve(enDict, path);
      let value: string = localized ?? en ?? path;
      if (vars) {
        for (const [k, v] of Object.entries(vars)) {
          value = value.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
        }
      }
      return value;
    },
    [dict]
  );

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    // Safe fallback so components don't crash outside the provider.
    return {
      lang: DEFAULT_LANG,
      setLang: () => {},
      t: (path: string) => path,
    };
  }
  return ctx;
}

export function useT() {
  return useI18n().t;
}
