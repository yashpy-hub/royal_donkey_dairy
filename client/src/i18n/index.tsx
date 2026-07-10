import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { DEFAULT_LANG, isLang, LANG_STORAGE_KEY, type Lang } from "./languages";

type Dict = Record<string, any>;

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (path: string, vars?: Record<string, string | number>) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

/** Read the initial language from (in priority order):
 *  1. ?lang=xx query param (so Google/Bing can crawl distinct language URLs)
 *  2. localStorage (remembered choice from a previous visit)
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

// Lazy-loaded so the heavy dictionary only loads when the provider mounts.
import { translations } from "./translations";

function resolve(dict: Dict, path: string): string | undefined {
  return path.split(".").reduce<any>((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) return acc[key];
    return undefined;
  }, dict);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

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
      const en = resolve(translations.en, path);
      const localized = resolve(translations[lang] ?? translations.en, path);
      let value: string = localized ?? en ?? path;
      if (vars) {
        for (const [k, v] of Object.entries(vars)) {
          value = value.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
        }
      }
      return value;
    },
    [lang]
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
