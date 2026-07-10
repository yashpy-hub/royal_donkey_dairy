export type Lang = "en" | "fr" | "it" | "de";

export interface LanguageMeta {
  code: Lang;
  label: string;
  native: string;
  flag: string;
  /** Open Graph locale tag for this language (used in og:locale alternates). */
  ogLocale: string;
}

export const LANGUAGES: LanguageMeta[] = [
  {
    code: "en",
    label: "English",
    native: "English",
    flag: "",
    ogLocale: "en_US",
  },
  {
    code: "fr",
    label: "French",
    native: "Français",
    flag: "",
    ogLocale: "fr_FR",
  },
  {
    code: "it",
    label: "Italian",
    native: "Italiano",
    flag: "",
    ogLocale: "it_IT",
  },
  {
    code: "de",
    label: "German",
    native: "Deutsch",
    flag: "",
    ogLocale: "de_DE",
  },
];

export const DEFAULT_LANG: Lang = "en";

export const LANG_STORAGE_KEY = "rudra-lang";

export function isLang(value: string | null): value is Lang {
  return value === "en" || value === "fr" || value === "it" || value === "de";
}
