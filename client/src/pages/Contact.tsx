import {
  Mail,
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
  MapPin,
  Building2,
  Clock,
  CalendarCheck,
  Handshake,
  Loader2,
} from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { toast } from "sonner";
import { sendContactEmail } from "@/lib/emailService";
import { AnalyticsEvents, trackAdsConversion } from "@/lib/analytics";
import { logToSheet } from "@/lib/sheetLogger";
import { BUSINESS } from "@shared/business";
import { useT } from "@/i18n";
import { usePageKeywords } from "@/i18n/seoKeywords";

/**
 * Contact Page - Rudra Dairy & Farm
 * Contact information and inquiry form with EmailJS integration
 * All emails sent to: info@rudradairyandfarm.shop
 */
export default function Contact() {
  const t = useT();
  const kw = usePageKeywords();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    businessType: "b2b",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast.error(t("products.c_toastRequired"));
      return;
    }

    setIsLoading(true);

    try {
      const success = await sendContactEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject:
          formData.subject ||
          `Inquiry - ${formData.businessType.toUpperCase()}`,
        message: formData.message,
        businessType: formData.businessType,
      });

      if (success) {
        AnalyticsEvents.leadSubmit({
          business_type: formData.businessType || "unspecified",
          page: "/contact",
        });
        // Google Ads conversion — Submit lead form (fires only on success)
        trackAdsConversion("AW-11092553327/-BKnCIugo84cEO_cq6kp", {
          business_type: formData.businessType || "unspecified",
          page: "/contact",
        });
        // Best-effort backup of the lead to the Google Sheet (tab: gid 1968821310).
        logToSheet("contact", {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject:
            formData.subject ||
            `Inquiry - ${formData.businessType.toUpperCase()}`,
          businessType: formData.businessType,
          message: formData.message,
        });
        toast.success(t("products.c_toastSuccess"));
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          businessType: "b2b",
          message: "",
        });
      } else {
        toast.error(t("products.c_toastFail"));
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error(t("products.c_toastError"));
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen">
      <Seo
        title={t("products.c_title")}
        description={t("products.c_desc")}
        path="/contact"
        keywords={kw}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: t("products.c_title"),
            url: "https://rudradairyandfarm.shop/contact",
            isPartOf: { "@id": "https://rudradairyandfarm.shop/#website" },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: t("nav.home"),
                  item: "https://rudradairyandfarm.shop/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: t("nav.contact"),
                  item: "https://rudradairyandfarm.shop/contact",
                },
              ],
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://rudradairyandfarm.shop/#organization",
            name: BUSINESS.name,
            image: "https://rudradairyandfarm.shop/og-image.png",
            url: "https://rudradairyandfarm.shop",
            email: BUSINESS.emails.all,
            telephone: BUSINESS.phone,
            priceRange: BUSINESS.priceRange,
            address: [
              {
                "@type": "PostalAddress",
                "@id": "https://rudradairyandfarm.shop/#office",
                streetAddress: BUSINESS.officeAddress.streetAddress,
                addressLocality: BUSINESS.officeAddress.locality,
                addressRegion: BUSINESS.officeAddress.region,
                postalCode: BUSINESS.officeAddress.postalCode,
                addressCountry: BUSINESS.officeAddress.country,
              },
              {
                "@type": "PostalAddress",
                "@id": "https://rudradairyandfarm.shop/#farm",
                streetAddress: BUSINESS.farmAddress.streetAddress,
                addressLocality: BUSINESS.farmAddress.locality,
                addressRegion: BUSINESS.farmAddress.region,
                postalCode: BUSINESS.farmAddress.postalCode,
                addressCountry: BUSINESS.farmAddress.country,
              },
            ],
            geo: {
              "@type": "GeoCoordinates",
              latitude: BUSINESS.geo.office.latitude,
              longitude: BUSINESS.geo.office.longitude,
            },
            openingHoursSpecification: BUSINESS.openingHoursSpecification,
            areaServed: BUSINESS.areaServed,
            sameAs: [BUSINESS.social.instagram, BUSINESS.social.facebook],
          },
        ]}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 dark:from-gray-900 to-green-50 dark:to-gray-900 py-16 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-slide-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t("products.c_getInTouch")}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              {t("products.c_sub")}
            </p>
            <div className="mt-8">
              <Link
                href="/appoint-meeting"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold h-12 px-8 rounded-lg transition-colors"
              >
                <CalendarCheck className="w-5 h-5" />{" "}
                {t("products.c_appointCta")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-slide-in-up">
            {t("products.c_contactInfo")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {/* WhatsApp */}
            <div
              className="p-8 bg-gradient-to-br from-green-50 dark:from-green-900/20 to-white dark:to-gray-800 border border-green-200 dark:border-green-900/30 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <MessageCircle className="w-12 h-12 text-green-700 dark:text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                {t("products.c_whatsapp")}
              </h3>
              <a
                href="https://wa.me/917057270238"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium text-center block"
              >
                +91 70572 70238
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
                {t("products.c_businessWhatsapp")}
              </p>
            </div>

            {/* Email */}
            <div
              className="p-8 bg-gradient-to-br from-orange-50 dark:from-orange-900/20 to-white dark:to-gray-800 border border-orange-200 dark:border-orange-900/30 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Mail className="w-12 h-12 text-orange-700 dark:text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                {t("products.c_email")}
              </h3>
              <div className="text-center space-y-1">
                <a
                  href="mailto:info@rudradairyandfarm.shop"
                  className="text-orange-700 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 font-medium block break-all"
                >
                  info@rudradairyandfarm.shop
                </a>
                <a
                  href="mailto:donkeyfarm79@gmail.com"
                  className="text-orange-700 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 font-medium block break-all"
                >
                  donkeyfarm79@gmail.com
                </a>
                <a
                  href="mailto:donkeyfarm79@outlook.com"
                  className="text-orange-700 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 font-medium block break-all"
                >
                  donkeyfarm79@outlook.com
                </a>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
                {t("products.c_allMonitored")}
              </p>
            </div>

            {/* Phone */}
            <div
              className="p-8 bg-gradient-to-br from-blue-50 dark:from-blue-900/20 to-white dark:to-gray-800 border border-blue-200 dark:border-blue-900/30 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Phone className="w-12 h-12 text-blue-700 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                {t("products.c_phone")}
              </h3>
              <a
                href="tel:+919112327322"
                className="text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-center block"
              >
                +91 9112327322
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
                {t("products.c_businessHours")}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://instagram.com/rudradairyandfarm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-br from-pink-500 to-orange-500 text-white rounded-full hover:scale-110 transition-transform"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/yash-pawar-4a9130421/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-700 text-white rounded-full hover:scale-110 transition-transform"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com/rudradairyandfarm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
              {t("products.c_sendMsg")}
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
              {t("products.c_sendMsgSub")}
            </p>

            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              {/* Name */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  {t("products.c_fullName")}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("products.c_namePh")}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  {t("products.c_emailAddr")}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("products.c_emailPh")}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all"
                  required
                />
              </div>

              {/* Phone */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  {t("products.c_phoneNum")}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t("products.c_phonePh")}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all"
                  required
                />
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  {t("products.c_subject")}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t("products.c_subjectPh")}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all"
                />
              </div>

              {/* Business Type */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  {t("products.c_businessType")}
                </label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all"
                >
                  <option value="b2b">{t("products.c_optB2B")}</option>
                  <option value="b2c">{t("products.c_optB2C")}</option>
                  <option value="wholesale">
                    {t("products.c_optWholesale")}
                  </option>
                  <option value="industrial">
                    {t("products.c_optIndustrial")}
                  </option>
                  <option value="pharmaceutical">
                    {t("products.c_optPharma")}
                  </option>
                  <option value="cosmetic">
                    {t("products.c_optCosmetic")}
                  </option>
                  <option value="other">{t("products.c_optOther")}</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  {t("products.c_message")}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("products.c_messagePh")}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {t("products.c_sending")}
                  </>
                ) : (
                  t("products.c_sendBtn")
                )}
              </Button>

              <p className="text-xs text-gray-600 dark:text-gray-400 text-center mt-4">
                {t("products.c_allMonitored")}:{" "}
                <strong>{BUSINESS.emails.all.join(", ")}</strong>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Addresses + PAN India network + trust */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              {t("products.c_ourPresence")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Office */}
              <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8 text-orange-600" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {BUSINESS.officeAddress.label}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 flex gap-2">
                  <MapPin className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  {BUSINESS.officeAddress.full}
                </p>
              </div>

              {/* Farm */}
              <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {BUSINESS.farmAddress.label}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 flex gap-2">
                  <MapPin className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  {BUSINESS.farmAddress.full}
                </p>
              </div>
            </div>

            {/* PAN India network */}
            <div className="p-8 bg-gradient-to-br from-green-50 to-amber-50 dark:from-gray-800 dark:to-gray-800 rounded-xl border border-green-200 dark:border-green-900/30 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-8 h-8 text-green-700 dark:text-green-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {t("products.c_panIndia")}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {BUSINESS.panIndiaNetwork.summary}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 dark:text-gray-300">
                {BUSINESS.panIndiaNetwork.facilities.map(f => (
                  <li key={f} className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Long-term trust statement */}
            <div className="p-8 bg-green-600 dark:bg-green-700 text-white rounded-xl text-center">
              <Handshake className="w-10 h-10 mx-auto mb-3" />
              <p className="text-xl font-semibold">{BUSINESS.trustStatement}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages — internal links for SEO + conversion */}
      <section className="py-12 bg-gradient-to-br from-amber-50 to-green-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            {t("products.c_exploreMore")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/products"
              className="block p-6 rounded-lg bg-white dark:bg-slate-800 shadow hover:shadow-lg transition-all text-center"
            >
              <p className="font-semibold text-orange-600 dark:text-orange-400 mb-1">
                {t("products.c_relProducts")}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t("products.c_relProductsSub")}
              </p>
            </Link>
            <Link
              href="/markets"
              className="block p-6 rounded-lg bg-white dark:bg-slate-800 shadow hover:shadow-lg transition-all text-center"
            >
              <p className="font-semibold text-orange-600 dark:text-orange-400 mb-1">
                {t("products.c_relMarkets")}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t("products.c_relMarketsSub")}
              </p>
            </Link>
            <Link
              href="/certifications"
              className="block p-6 rounded-lg bg-white dark:bg-slate-800 shadow hover:shadow-lg transition-all text-center"
            >
              <p className="font-semibold text-orange-600 dark:text-orange-400 mb-1">
                {t("products.c_relCert")}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t("products.c_relCertSub")}
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
