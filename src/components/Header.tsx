"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { LogoMark } from "./Icons";
import { LanguageSwitch } from "./LanguageSwitch";

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/#about", label: t.nav.about },
    { href: "/#work", label: t.nav.work },
    { href: "/#progress", label: t.nav.progress },
    { href: "/#app", label: t.nav.app },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <header className="header">
      <div className="wrap header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <LogoMark />
          <span>
            <span className="brand-name">BAHTRAKU</span>
            <span className="brand-sub">Bahasa Transformasi Suku</span>
          </span>
        </Link>
        <nav className="nav" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <LanguageSwitch />
          <Link href="/donate" className="btn btn-flame">{t.nav.give}</Link>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.close : t.nav.menu}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      <nav id="mobile-nav" className="mobile-nav" data-open={open} aria-label="Mobile">
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <LanguageSwitch />
      </nav>
    </header>
  );
}
