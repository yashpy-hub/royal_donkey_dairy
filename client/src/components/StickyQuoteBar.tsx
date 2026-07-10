import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { AnalyticsEvents } from "@/lib/analytics";

type Props = {
  /** Label for the CTA, e.g. "Get a Bulk Quote". */
  label?: string;
};

/**
 * Aggressive, non-intrusive sticky CTA. Hidden until the visitor scrolls past
 * the hero, then pins to the bottom and drives them to the inline #quote form.
 * Dismissible; never overlaps the floating WhatsApp bubble (bottom-right).
 */
export default function StickyQuoteBar({ label = "Get a Bulk Quote" }: Props) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600 && !dismissed);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:bottom-4 md:left-auto md:right-4 md:w-[360px]">
      <div className="flex items-center gap-2 bg-slate-900 text-white shadow-xl px-4 py-3 md:rounded-xl md:max-w-[360px]">
        <a
          href="#quote"
          onClick={() => AnalyticsEvents.ctaClick("sticky_quote_bar")}
          className="flex-1 flex items-center justify-between gap-2 text-sm font-semibold hover:text-orange-300 transition-colors"
        >
          <span>{label}</span>
          <ArrowRight className="w-4 h-4" />
        </a>
        <button
          aria-label="Dismiss"
          onClick={() => setDismissed(true)}
          className="text-slate-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
