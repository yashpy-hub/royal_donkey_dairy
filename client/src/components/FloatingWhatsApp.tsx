import { MessageCircle } from "lucide-react";
import { useState } from "react";

/**
 * FloatingWhatsApp Component
 * - Floating button in bottom-right corner
 * - Pulsing animation to attract attention
 * - Dark mode support
 * - Smooth hover effects
 * - Opens WhatsApp chat on click
 */
export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappNumber = "919112327322";
  const whatsappMessage =
    "Hello! I'm interested in Rudra Dairy & Farm's donkey milk and powder products.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed bottom-6 right-6 z-40 group"
        aria-label="Chat with us on WhatsApp"
      >
        {/* Pulsing Background Ring */}
        <div className="absolute inset-0 rounded-full bg-green-500 dark:bg-green-600 animate-pulse opacity-75 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Secondary Pulse Ring */}
        <div className="absolute inset-0 rounded-full bg-green-500 dark:bg-green-600 animate-ping opacity-50" />

        {/* Main Button */}
        <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110">
          <MessageCircle
            className="w-8 h-8 text-white animate-bounce"
            style={{ animationDuration: "1.5s" }}
          />
        </div>

        {/* Tooltip on Hover */}
        {isHovered && (
          <div
            className="absolute bottom-20 right-0 bg-gray-900 dark:bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm font-sans animate-slide-in-up"
            style={{ animationDuration: "0.2s" }}
          >
            Chat with us!
            <div className="absolute bottom-0 right-4 transform translate-y-full">
              <div className="border-4 border-transparent border-t-gray-900 dark:border-t-gray-800" />
            </div>
          </div>
        )}
      </a>

      {/* Mobile-optimized version with label */}
      <div className="fixed bottom-6 right-6 z-30 md:hidden">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 font-sans font-medium text-sm"
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}
