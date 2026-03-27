import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Navigation Component
 * Premium Artisanal Heritage Design
 * - Warm terracotta primary color (#C17A5C)
 * - Forest green accents (#2D5016)
 * - Elegant serif typography with Playfair Display
 * - Responsive mobile menu with smooth transitions
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About Founder" },
    { href: "/trust", label: "Trust & Values" },
    { href: "/certifications", label: "Certifications" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-amber-100 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-2xl font-display font-bold text-amber-700 group-hover:text-amber-800 transition-colors">
              🐴
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-display font-bold text-amber-700">
                Royal Donkey Dairy
              </div>
              <div className="text-xs text-amber-600 font-sans">
                Premium Artisanal Milk
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-sans font-medium text-gray-700 hover:text-amber-700 transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Button
              asChild
              className="bg-amber-700 hover:bg-amber-800 text-white font-sans"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-amber-50 rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-amber-700" />
            ) : (
              <Menu className="w-6 h-6 text-amber-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-amber-100 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm font-sans text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-amber-700 hover:bg-amber-800 text-white font-sans mt-2"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
