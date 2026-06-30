import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

/**
 * Navigation Component
 * Modern Interactive Design
 * - Vibrant orange primary (#FF6B35)
 * - Deep ocean blue (#004E89)
 * - Cyan accents (#00D9FF)
 * - Responsive mobile menu with smooth transitions
 * - Dark/Light mode support with advanced animations
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/who-we-are", label: "Who We Are" },
    { href: "/products", label: "Products" },
    { href: "/applications", label: "Applications" },
    { href: "/certifications", label: "Certifications" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-white via-blue-50 to-white dark:from-slate-900 dark:via-blue-900/30 dark:to-slate-900 border-b-2 border-gradient-to-r from-orange-400 via-cyan-400 to-orange-400 dark:border-orange-600/50 shadow-lg transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="text-3xl font-display font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent group-hover:from-orange-600 group-hover:to-red-600 transition-all">
              🐴
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-display font-bold bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent">
                Rudra Dairy & Farm
              </div>
              <div className="text-xs bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent font-sans font-bold">
                Trusted Suppliers Since 2022
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-sans font-semibold text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-cyan-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}
            <ThemeToggle />
            <Button
              asChild
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-sans font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-orange-100 dark:hover:bg-orange-900/30 rounded-lg transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-orange-600 dark:text-orange-400 animate-spin" />
              ) : (
                <Menu className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-orange-200 dark:border-orange-900/30 pt-4 animate-slide-in-down">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm font-sans font-medium text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-orange-100 hover:to-cyan-100 dark:hover:from-orange-900/30 dark:hover:to-cyan-900/30 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-sans font-bold mt-4"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
