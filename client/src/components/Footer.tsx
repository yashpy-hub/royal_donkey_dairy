import { Link } from "wouter";
import { Mail, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";

/**
 * Footer Component - Rudra Dairy & Farm
 * - Forest green background (#2D5016)
 * - Golden cream text (#F5E6D3)
 * - Contact information and social links
 * - Dark mode support with animations
 */
export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-900 dark:from-green-950 to-green-800 dark:to-green-900 text-amber-50 mt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 animate-slide-in-up">
          {/* Brand */}
          <div className="hover:scale-105 transition-transform duration-300">
            <div className="text-2xl font-display font-bold mb-2">
              Rudra Dairy & Farm
            </div>
            <p className="text-amber-100 text-sm font-serif">
              Most trusted suppliers of premium donkey milk and powder since 2022. Serving multiple businesses with excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-amber-100 hover:text-amber-50 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/who-we-are"
                  className="text-amber-100 hover:text-amber-50 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-amber-100 hover:text-amber-50 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/applications-detail"
                  className="text-amber-100 hover:text-amber-50 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Applications
                </Link>
              </li>
              <li>
                <Link
                  href="/markets"
                  className="text-amber-100 hover:text-amber-50 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Markets
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-amber-100 hover:text-amber-50 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/certifications"
                  className="text-amber-100 hover:text-amber-50 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Certifications
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Models */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">We Serve</h4>
            <ul className="space-y-2 text-amber-100 text-sm">
              <li className="hover:text-white transition-colors">✓ B2B Partnerships</li>
              <li className="hover:text-white transition-colors">✓ B2C Retail</li>
              <li className="hover:text-white transition-colors">✓ Wholesale Distributors</li>
              <li className="hover:text-white transition-colors">✓ Direct Retailers</li>
              <li className="hover:text-white transition-colors">✓ Cosmetic Industry</li>
              <li className="hover:text-white transition-colors">✓ Pharmaceutical</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <MessageCircle className="w-4 h-4" />
                <a href="https://wa.me/919112327322" target="_blank" rel="noopener noreferrer" className="text-sm">
                  +91 9112327322
                </a>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@rudradairyandfarm.shop" className="text-sm break-all font-semibold">
                  info@rudradairyandfarm.shop
                </a>
              </div>
              <div className="text-sm text-amber-200 mt-2">
                <strong>Website:</strong> rudradairyandfarm.shop
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://instagram.com/rudradairyandform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-all duration-300 hover:scale-125"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/rudradairyandform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-all duration-300 hover:scale-125"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-800 dark:border-green-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-amber-100 text-sm">
            <p>
              © 2026 Rudra Dairy & Farm. Most Trusted Suppliers Since 2022. All rights reserved.
            </p>
            <p className="text-amber-200 text-xs mt-2 md:mt-0">
              Executive Partner of Rudra Dairy and Farms
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
