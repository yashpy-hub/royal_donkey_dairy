import { useState } from "react";
import { LANGUAGES } from "../i18n/languages";
import { useI18n } from "../i18n";

export default function LanguageSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setOpen(o => !o)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        className="flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors rounded-lg px-2 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Select language"
      >
        <span className="hidden sm:inline">
          {LANGUAGES.find(l => l.code === lang)?.native}
        </span>
        <svg
          className="w-3.5 h-3.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg py-1 z-50 overflow-hidden">
          {LANGUAGES.map(l => (
            <li key={l.code}>
              <button
                onMouseDown={e => {
                  e.preventDefault();
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  l.code === lang
                    ? "text-orange-600 dark:text-orange-400 font-semibold"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                <span>{l.native}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
