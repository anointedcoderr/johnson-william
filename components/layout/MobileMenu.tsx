"use client";

import Link from "next/link";
import { useEffect } from "react";
import { primaryNav } from "@/data/nav";
import { firm } from "@/data/firm";
import { Button } from "@/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] bg-navy text-ivory"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="flex h-[72px] items-center justify-between px-5 sm:px-6">
            <span className="font-serif text-[17px]">{firm.shortName}</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center border border-ivory/30 hover:border-gold hover:text-gold"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
          <nav className="px-5 sm:px-6 pt-6 pb-10" aria-label="Mobile primary">
            <ul className="space-y-5 border-t border-ivory/10 pt-6">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block font-serif text-[26px] text-ivory hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button
                href="/book-consultation"
                onClick={onClose}
                variant="gold"
                className="w-full"
              >
                Book a Consultation
              </Button>
            </div>
            <div className="mt-12 space-y-2 border-t border-ivory/10 pt-6 text-[14px] text-ivory/65">
              <p>{firm.phone}</p>
              <p>{firm.email}</p>
              <p className="text-ivory/45">{firm.address.city}</p>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
