import { Link } from "wouter";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";

/**
 * Footer Component
 * Premium Artisanal Heritage Design
 * - Forest green background (#2D5016)
 * - Golden cream text (#F5E6D3)
 * - Contact information and social links
 */
export default function Footer() {
  return (
    <footer className="bg-green-900 text-amber-50 mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-display font-bold mb-2">
              Royal Donkey Dairy
            </div>
            <p className="text-amber-100 text-sm font-serif">
              Premium artisanal donkey milk from trusted heritage farming
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-amber-100 hover:text-amber-50 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-amber-100 hover:text-amber-50 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-amber-100 hover:text-amber-50 transition-colors"
                >
                  About Founder
                </Link>
              </li>
              <li>
                <Link
                  href="/trust"
                  className="text-amber-100 hover:text-amber-50 transition-colors"
                >
                  Trust & Values
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Models */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">We Serve</h4>
            <ul className="space-y-2 text-amber-100 text-sm">
              <li>✓ B2B Partnerships</li>
              <li>✓ B2C Retail</li>
              <li>✓ Wholesale Distributors</li>
              <li>✓ Direct Retailers</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 96571 42020</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">yashpawar.py@gmail.com</span>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://instagram.com/royaldonkeydairy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-50 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/royaldonkeydairy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-50 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-amber-100 text-sm">
            <p>
              © 2024 Royal Donkey Dairy. All rights reserved. | Founder: Yash
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/certifications" className="hover:text-amber-50">
                Certifications
              </Link>
              <Link href="/contact" className="hover:text-amber-50">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
