import { Link } from "wouter";
import { Mail, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";
import { useT } from "@/i18n";

/**
 * Footer Component - Rudra Dairy & Farm
 * - Forest green background (#2D5016)
 * - Golden cream text (#F5E6D3)
 * - Contact information and social links
 * - Centered layout, dark mode support with animations
 */
export default function Footer() {
  const t = useT();
  return (
    <footer className="bg-gradient-to-br from-green-900 dark:from-green-950 to-green-800 dark:to-green-900 text-amber-50 mt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center animate-slide-in-up">
          {/* Brand */}
          <div className="hover:scale-105 transition-transform duration-300 flex flex-col items-center">
            <div className="text-2xl font-display font-bold mb-2">
              Rudra Dairy &amp; Farm
            </div>
            <p className="text-amber-100 text-sm font-serif max-w-xs">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="font-display font-bold text-lg mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-amber-100 hover:text-amber-50 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/who-we-are"
                  className="text-amber-100 hover:text-amber-50 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  {t("nav.whoWeAre")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-amber-100 hover:text-amber-50 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  {t("nav.products")}
                </Link>
              </li>
              <li>
                <Link
                  href="/applications-detail"
                  className="text-amber-100 hover:text-amber-50 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  {t("nav.applications")}
                </Link>
              </li>
              <li>
                <Link
                  href="/markets"
                  className="text-amber-100 hover:text-amber-50 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  {t("nav.markets")}
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-amber-100 hover:text-amber-50 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  {t("footer.linkResources")}
                </Link>
              </li>
              <li>
                <Link
                  href="/money"
                  className="text-amber-100 hover:text-amber-50 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  {t("footer.linkCommercial")}
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="text-amber-100 hover:text-amber-50 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  {t("footer.linkResearch")}
                </Link>
              </li>
              <li>
                <Link
                  href="/downloads"
                  className="text-amber-100 hover:text-amber-50 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  {t("footer.linkDownloads")}
                </Link>
              </li>
              <li>
                <Link
                  href="/why-us"
                  className="text-amber-100 hover:text-amber-50 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  {t("footer.linkWhyUs")}
                </Link>
              </li>
              <li>
                <Link
                  href="/certifications"
                  className="text-amber-100 hover:text-amber-50 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  {t("nav.certifications")}
                </Link>
              </li>
              <li>
                <Link
                  href="/appoint-meeting"
                  className="text-amber-100 hover:text-amber-50 transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  {t("nav.appointMeeting")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Models */}
          <div className="flex flex-col items-center">
            <h4 className="font-display font-bold text-lg mb-4">
              {t("footer.weServe")}
            </h4>
            <ul className="space-y-2 text-amber-100 text-sm">
              <li className="hover:text-white transition-colors">
                ✓ {t("footer.serveB2B")}
              </li>
              <li className="hover:text-white transition-colors">
                ✓ {t("footer.serveB2C")}
              </li>
              <li className="hover:text-white transition-colors">
                ✓ {t("footer.serveWholesale")}
              </li>
              <li className="hover:text-white transition-colors">
                ✓ {t("footer.serveRetailers")}
              </li>
              <li className="hover:text-white transition-colors">
                ✓ {t("footer.serveCosmetic")}
              </li>
              <li className="hover:text-white transition-colors">
                ✓ {t("footer.servePharma")}
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center">
            <h4 className="font-display font-bold text-lg mb-4">
              {t("footer.contactUs")}
            </h4>
            <div className="space-y-3 flex flex-col items-center">
              <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <MessageCircle className="w-4 h-4" />
                <a
                  href="https://wa.me/919112327322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                >
                  +91 9112327322
                </a>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <div className="text-sm text-center">
                  <a
                    href="mailto:info@rudradairyandfarm.shop"
                    className="font-semibold block break-all hover:text-white"
                  >
                    info@rudradairyandfarm.shop
                  </a>
                  <a
                    href="mailto:donkeyfarm79@gmail.com"
                    className="block break-all hover:text-white"
                  >
                    donkeyfarm79@gmail.com
                  </a>
                  <a
                    href="mailto:donkeyfarm79@outlook.com"
                    className="block break-all hover:text-white"
                  >
                    donkeyfarm79@outlook.com
                  </a>
                </div>
              </div>
              <div className="text-xs text-amber-200 mt-2 max-w-xs text-center leading-relaxed">
                <strong>{t("footer.office")}:</strong> Rudra Dairy and Milks,
                Near VIT College, Bibwewadi, Pune - 411037
              </div>
              <div className="text-xs text-amber-200 max-w-xs text-center leading-relaxed">
                <strong>{t("footer.farm")}:</strong> Street Road, Jategao Road,
                PAT Vasti, Pune, Maharashtra - 412208
              </div>
              <div className="text-xs text-amber-100 mt-1 max-w-xs text-center leading-relaxed">
                {t("footer.panIndia")}
              </div>
              <div className="text-sm text-amber-200 mt-2">
                <strong>{t("footer.websiteLabel")}</strong>{" "}
                rudradairyandfarm.shop
              </div>
              <div className="flex gap-4 mt-4 justify-center">
                <a
                  href="https://instagram.com/rudradairyandfarm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-all duration-300 hover:scale-125"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/rudradairyandfarm"
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
          <div className="flex flex-col md:flex-row justify-center items-center text-center text-amber-100 text-sm gap-2 md:gap-4">
            <p>{t("footer.rights")}</p>
            <p className="text-amber-200 text-xs md:mt-0">
              {t("footer.executive")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
