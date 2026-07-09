import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

/**
 * Theme Toggle Component
 * Advanced animation with smooth transitions
 * Provides dark/light mode switching
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        {/* Sun Icon - Light Mode */}
        <Sun
          className={`absolute w-6 h-6 text-amber-700 dark:text-amber-400 transition-all duration-300 ${
            theme === "light"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-90 scale-0"
          }`}
        />
        {/* Moon Icon - Dark Mode */}
        <Moon
          className={`absolute w-6 h-6 text-amber-700 dark:text-amber-400 transition-all duration-300 ${
            theme === "dark"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-0"
          }`}
        />
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-lg bg-amber-400 dark:bg-amber-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur" />
    </button>
  );
}
