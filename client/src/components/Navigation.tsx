import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

/**
 * Navigation Component
 * Premium Artisanal Heritage Design
 * - Warm terracotta primary color (#C17A5C)
 * - Forest green accents (#2D5016)
 * - Elegant serif typography with Playfair Display
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
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-amber-100 dark:border-amber-900/30 shadow-sm dark:shadow-lg transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-2xl font-display font-bold text-amber-700 group-hover:text-amber-800 dark:text-amber-400 dark:group-hover:text-amber-300 transition-colors">
              🐴
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-display font-bold text-amber-700 dark:text-amber-400">
                Rudra Dairy & Farm
              </div>
              <div className="text-xs text-amber-600 dark:text-amber-500 font-sans">
                Trusted Suppliers Since 2022
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-sans font-medium text-gray-700 dark:text-amber-100 hover:text-amber-700 dark:hover:text-amber-300 transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 dark:bg-amber-400 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <ThemeToggle />
            <Button
              asChild
              className="bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-700 text-white font-sans"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-amber-50 dark:hover:bg-amber-900/30 rounded-lg transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-amber-700 dark:text-amber-400 animate-spin" />
              ) : (
                <Menu className="w-6 h-6 text-amber-700 dark:text-amber-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-amber-100 dark:border-amber-900/30 pt-4 animate-slide-in-down" style={{animationDuration: '0.3s'}}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm font-sans text-gray-700 dark:text-amber-100 hover:bg-amber-50 dark:hover:bg-amber-900/30 hover:text-amber-700 dark:hover:text-amber-300 rounded-lg transition-all duration-200 hover:translate-x-1"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-700 text-white font-sans mt-2 transition-all duration-300 hover:shadow-lg"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
