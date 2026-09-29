"use client";

import { org } from "@/content/dictionary";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer id="contact" className="footer">
      <div className="wrap">
        <div className="grid12 footer-grid">
          <div className="footer-brand">
            <div className="display">Bahtraku</div>
            <p>{t.footer.tagline}</p>
          </div>
          <div className="footer-col">
            <h3>{t.footer.main}</h3>
            <address style={{ fontStyle: "normal" }}>{org.mainOffice}</address>
          </div>
          <div className="footer-col">
            <h3>{t.footer.branch}</h3>
            <address style={{ fontStyle: "normal" }}>{org.branchOffice}</address>
          </div>
          <div className="footer-col narrow">
            <h3>{t.footer.contact}</h3>
            <a href={`mailto:${org.email}`} style={{ display: "block" }}>{org.email}</a>
            <a href={org.website} style={{ display: "block" }}>bahtraku.org</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t.footer.rights}</span>
          <a href="/privacy">{t.footer.privacy}</a>
        </div>
      </div>
    </footer>
  );
}
