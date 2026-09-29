"use client";

import { useLanguage } from "@/lib/i18n";

export function LanguageSwitch() {
  const { lang, setLang, t } = useLanguage();
  return (
    <div className="lang" role="group" aria-label={t.nav.language}>
      <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</button>
      <button type="button" aria-pressed={lang === "id"} onClick={() => setLang("id")}>ID</button>
    </div>
  );
}
