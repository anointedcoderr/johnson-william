"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { primaryNav } from "@/data/nav";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out-soft",
          scrolled
            ? "bg-ivory/95 backdrop-blur-sm border-b border-border"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-5 sm:px-6 lg:px-8 h-[72px]">
          <Logo />
          <nav className="hidden lg:block" aria-label="Primary">
            <ul className="flex items-center gap-9">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[14px] text-navy/85 hover:text-gold transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <Button
              href="/book-consultation"
              variant="primary"
              className="hidden md:inline-flex px-5 py-3 text-[14px]"
            >
              Book a Consultation
            </Button>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center border border-navy/20 text-navy hover:border-gold hover:text-gold transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
