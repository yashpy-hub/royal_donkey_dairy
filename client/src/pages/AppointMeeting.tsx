import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  CalendarCheck,
  Mail,
  Phone,
  MessageCircle,
  Clock,
  Handshake,
  Building2,
  MapPin,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { sendMeetingRequestEmail } from "@/lib/emailService";
import { BUSINESS } from "@shared/business";
import Seo from "@/components/Seo";

/**
 * Appoint a Meeting — Business Collaboration
 * Lets a prospective B2B buyer / partner request a meeting (in-person,
 * video, or phone) with Rudra Dairy & Farm. Submissions are emailed to all
 * active business mailboxes via EmailJS.
 */
export default function AppointMeeting() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    date: "",
    timeSlot: "morning",
    mode: "in-person",
    purpose: "b2b",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.date ||
      !formData.message
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    try {
      const success = await sendMeetingRequestEmail({
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        timeSlot: formData.timeSlot,
        mode: formData.mode,
        purpose: formData.purpose,
        message: formData.message,
      });

      if (success) {
        toast.success(
          "Meeting request sent! Our team will confirm your appointment shortly."
        );
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          date: "",
          timeSlot: "morning",
          mode: "in-person",
          purpose: "b2b",
          message: "",
        });
      } else {
        toast.error("Failed to send request. Please try again.");
      }
    } catch (error) {
      console.error("Error sending meeting request:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Seo
        title="Appoint a Meeting — Business Collaboration | Rudra Dairy & Farm"
        description="Book a business collaboration meeting with Rudra Dairy & Farm. Discuss B2B donkey milk & powder supply, private label, export, and long-term partnerships. In-person, video, or phone."
        path="/appoint-meeting"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Appoint a Meeting — Business Collaboration | Rudra Dairy & Farm",
            url: "https://rudradairyandfarm.shop/appoint-meeting",
            isPartOf: { "@id": "https://rudradairyandfarm.shop/#website" },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://rudradairyandfarm.shop/" },
                { "@type": "ListItem", position: 2, name: "Appoint a Meeting", item: "https://rudradairyandfarm.shop/appoint-meeting" },
              ],
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "B2B Donkey Milk & Powder Supply Consultation",
            serviceType: "Business collaboration & supply consultation",
            provider: { "@id": "https://rudradairyandfarm.shop/#organization" },
            areaServed: BUSINESS.areaServed,
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://rudradairyandfarm.shop/appoint-meeting",
              availableLanguage: ["en", "hi"],
              serviceSmsNumber: BUSINESS.phone,
            },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "INR",
              description: "Free consultation for qualified B2B buyers and partners.",
            },
          },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 dark:from-gray-900 to-green-50 dark:to-gray-900 py-16 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-slide-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-sm font-semibold mb-4">
              <Handshake className="w-4 h-4" /> Business Collaboration
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Appoint a Meeting
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Schedule a one-on-one discussion for B2B supply, private label,
              export, or long-term partnership. We are committed to
              relationships built on{" "}
              <strong className="text-green-700 dark:text-green-400">
                trust and faith
              </strong>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Contact quick links */}
      <section className="py-10 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-gradient-to-br from-green-50 dark:from-green-900/20 to-white dark:to-gray-800 border border-green-200 dark:border-green-900/30 rounded-xl hover:shadow-lg hover:scale-105 transition-all text-center"
            >
              <MessageCircle className="w-10 h-10 text-green-700 dark:text-green-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                WhatsApp
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {BUSINESS.phone.replace("+91 ", "")}
              </p>
            </a>
            <a
              href={`mailto:${BUSINESS.emails.primary}`}
              className="p-6 bg-gradient-to-br from-orange-50 dark:from-orange-900/20 to-white dark:to-gray-800 border border-orange-200 dark:border-orange-900/30 rounded-xl hover:shadow-lg hover:scale-105 transition-all text-center"
            >
              <Mail className="w-10 h-10 text-orange-700 dark:text-orange-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                Email
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 break-all">
                {BUSINESS.emails.primary}
              </p>
            </a>
            <div className="p-6 bg-gradient-to-br from-blue-50 dark:from-blue-900/20 to-white dark:to-gray-800 border border-blue-200 dark:border-blue-900/30 rounded-xl hover:shadow-lg hover:scale-105 transition-all text-center">
              <Phone className="w-10 h-10 text-blue-700 dark:text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                Phone
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {BUSINESS.phone.replace("+91 ", "")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting form */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
              Request Your Meeting
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
              Pick a mode, date, and time that works for you. Our team confirms
              within 24 hours.
            </p>

            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm space-y-6"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
                  required
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXXXXXXX"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
                  required
                />
              </div>

              {/* Meeting mode */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Meeting Mode
                </label>
                <select
                  name="mode"
                  value={formData.mode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
                >
                  <option value="in-person">In-person (at our office)</option>
                  <option value="video">Video Call</option>
                  <option value="phone">Phone Call</option>
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
                  required
                />
              </div>

              {/* Time slot */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Preferred Time
                </label>
                <select
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
                >
                  <option value="morning">Morning (9 AM – 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM – 4 PM)</option>
                  <option value="evening">Evening (4 PM – 7 PM)</option>
                </select>
              </div>

              {/* Purpose */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Purpose of Collaboration
                </label>
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600 transition-all"
                >
                  <option value="b2b">B2B Bulk Supply</option>
                  <option value="private-label">Private Label / OEM</option>
                  <option value="export">Export Partnership</option>
                  <option value="cosmetic">Cosmetic Industry</option>
                  <option value="pharma">Pharmaceutical</option>
                  <option value="distribution">Distribution / Wholesale</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements, volumes, and timelines..."
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600 transition-all resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <CalendarCheck className="w-4 h-4" /> Request Meeting
                  </>
                )}
              </Button>

              <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                Your request goes to:{" "}
                <strong>{BUSINESS.emails.all.join(", ")}</strong>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Addresses + PAN India network */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
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
          <div className="max-w-4xl mx-auto mt-8 p-8 bg-gradient-to-br from-green-50 to-amber-50 dark:from-gray-800 dark:to-gray-800 rounded-xl border border-green-200 dark:border-green-900/30">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-green-700 dark:text-green-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                PAN India Storage & Logistics Network
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {BUSINESS.panIndiaNetwork.summary}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 dark:text-gray-300">
              {BUSINESS.panIndiaNetwork.facilities.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Trust statement */}
          <div className="max-w-4xl mx-auto mt-8 text-center">
            <p className="text-lg font-semibold text-green-700 dark:text-green-400">
              {BUSINESS.trustStatement}
            </p>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-gradient-to-br from-amber-50 to-green-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Explore More
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/products"
              className="block p-6 rounded-lg bg-white dark:bg-slate-800 shadow hover:shadow-lg transition-all text-center"
            >
              <p className="font-semibold text-green-600 dark:text-green-400 mb-1">
                Products
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Fresh donkey milk & powder for bulk supply
              </p>
            </Link>
            <Link
              href="/contact"
              className="block p-6 rounded-lg bg-white dark:bg-slate-800 shadow hover:shadow-lg transition-all text-center"
            >
              <p className="font-semibold text-green-600 dark:text-green-400 mb-1">
                Contact
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                General inquiries & bulk quotes
              </p>
            </Link>
            <Link
              href="/certifications"
              className="block p-6 rounded-lg bg-white dark:bg-slate-800 shadow hover:shadow-lg transition-all text-center"
            >
              <p className="font-semibold text-green-600 dark:text-green-400 mb-1">
                Certifications
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                FSSAI, ISO, IEC & HACCP certified
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
