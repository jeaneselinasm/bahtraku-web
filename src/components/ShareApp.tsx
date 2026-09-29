"use client";

import { useState } from "react";
import { org } from "@/content/dictionary";
import { useLanguage } from "@/lib/i18n";

/** Link that gets shared: the setting in dictionary.ts, else Google Play, else this site's app section. */
function shareUrl() {
  const { share, android } = org.appLinks;
  if (share) return share;
  if (android) return android;
  const site = process.env.NEXT_PUBLIC_SITE_URL || (typeof window !== "undefined" ? window.location.origin : org.website);
  return `${site.replace(/\/$/, "")}/#app`;
}

export function ShareApp() {
  const { t } = useLanguage();
  const a = t.app;
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      /* clipboard blocked: nothing else to do */
    }
  }

  async function share() {
    const url = shareUrl();
    if (navigator.share) {
      try {
        await navigator.share({ title: "Bahtraku Bible", text: a.shareText, url });
      } catch {
        /* person closed the share sheet */
      }
      return;
    }
    copyLink(); // desktop browsers without a share menu
  }

  const whatsappHref = () => `https://wa.me/?text=${encodeURIComponent(`${a.shareText} ${shareUrl()}`)}`;

  return (
    <div className="app-share">
      <h3>{a.shareTitle}</h3>
      <p className="muted">{a.shareBody}</p>
      <div className="app-share-actions">
        <button type="button" className="btn btn-flame" onClick={share}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 3v12M7 8l5-5 5 5M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5" />
          </svg>
          {a.share}
        </button>
        <a
          className="btn btn-outline"
          href="https://wa.me/"
          onClick={(e) => { e.preventDefault(); window.open(whatsappHref(), "_blank", "noopener,noreferrer"); }}
        >
          {a.whatsapp}
        </a>
        <button type="button" className="btn btn-outline" onClick={copyLink} aria-live="polite">
          {copied ? a.copied : a.copy}
        </button>
      </div>
    </div>
  );
}
