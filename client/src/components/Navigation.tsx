import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useT } from "@/i18n";
import { AnalyticsEvents } from "@/lib/analytics";

/**
 * Navigation Component
 * Clean & Attractive Minimalist Design
 * - Warm orange primary (#D97706)
 * - Dark gray accents (#1F2937)
 * - Simple, professional styling
 * - Responsive mobile menu
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useT();

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/who-we-are", label: t("nav.whoWeAre") },
    { href: "/products", label: t("nav.products") },
    { href: "/applications-detail", label: t("nav.applications") },
    { href: "/markets", label: t("nav.markets") },
    { href: "/certifications", label: t("nav.certifications") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-2xl font-bold text-orange-600 group-hover:text-orange-700 dark:group-hover:text-orange-500 transition-colors">
              🐴
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-gray-900 dark:text-white">
                Rudra Dairy & Farm
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Trusted Suppliers Since 2022
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            <LanguageSwitcher />
            <Button
              asChild
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors"
            >
              <Link
                href="/contact"
                onClick={() => AnalyticsEvents.ctaClick("get_in_touch")}
              >
                {t("common.getInTouch")}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-900 dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-gray-200 dark:border-gray-800 pt-4">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold mt-4 rounded-lg"
            >
              <Link
                href="/contact"
                onClick={() => AnalyticsEvents.ctaClick("get_in_touch")}
              >
                {t("common.getInTouch")}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
