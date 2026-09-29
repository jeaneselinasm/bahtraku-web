"use client";

import Link from "next/link";
import { org } from "@/content/dictionary";
import { useLanguage } from "@/lib/i18n";
import { Flame, LogoMark, Wave } from "./Icons";
import { Photo } from "./Photo";
import { ShareApp } from "./ShareApp";

export function HomePage() {
  const { t, lang } = useLanguage();
  const [feature, education, community] = t.work.items;

  // English visitors see the USD account, Indonesian visitors the IDR account.
  const bankCurrency = lang === "id" ? "IDR" : "USD";
  const bank = org.banks[bankCurrency];

  return (
    <main id="main">
      {/* Hero */}
      <section className="hero">
        <div className="wrap grid12">
          <div className="hero-copy">
            <p className="kicker">{t.hero.kicker}</p>
            <h1 className="display">{t.hero.title}</h1>
            <p className="lead">{t.hero.body}</p>
            <div className="hero-actions">
              <Link href="/donate" className="btn btn-flame btn-lg">{t.hero.primary}</Link>
              <a href="#progress" className="btn btn-outline btn-lg">{t.hero.secondary}</a>
            </div>
          </div>
          <Photo className="hero-photo" label={t.hero.photo} src="/images/hero.jpeg" />
        </div>
        <Wave />
      </section>

      {/* Progress */}
      <section id="progress" className="progress" aria-labelledby="progress-title">
        <div className="wrap">
          <div className="progress-head">
            <h2 id="progress-title" className="h2">{t.progress.title}</h2>
            <p>{t.progress.asOf}</p>
          </div>
          <div>
            {t.progress.groups.map((g) => (
              <div className="ledger-row" key={g.title}>
                <h3>{g.title}</h3>
                {g.stats.map((s) => (
                  <div key={s.label}>
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="wrap grid12">
          <div className="about-intro">
            <h2 className="h2">{t.about.title}</h2>
            <p className="lead">{t.about.body}</p>
            <div className="vision">
              <div className="vision-label">{t.about.visionLabel}</div>
              <p>{t.about.vision}</p>
            </div>
          </div>
          <div className="missions">
            <h3>{t.about.missionTitle}</h3>
            <ul>
              {t.about.missions.map((m) => (
                <li key={m}><Flame />{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="work">
        <div className="wrap">
          <h2 className="h2">{t.work.title}</h2>
          <div className="work-grid">
            <article className="work-card work-feature">
              <Photo label={feature.photo ?? feature.title} src="/images/work.jpg" />
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </div>
            </article>
            <article className="work-card work-plain">
              <h3>{education.title}</h3>
              <p>{education.body}</p>
            </article>
            <article className="work-card work-warm">
              <h3>{community.title}</h3>
              <p>{community.body}</p>
            </article>
          </div>
        </div>
      </section>

      {/* Bible app */}
      <section id="app" className="app" aria-labelledby="app-title">
        <div className="wrap grid12">
          <div className="app-visual" aria-hidden="true">
            <div className="phone">
              <div className="phone-screen">
                <div className="phone-top">
                  <LogoMark size={28} />
                  <span>{t.app.screenLang}</span>
                </div>
                <div className="phone-book">{t.app.screenBook}</div>
                <div className="phone-lines">
                  {[92, 100, 84, 96, 70, 100, 88, 60, 94, 78].map((w, i) => (
                    <span key={i} style={{ width: `${w}%` }} />
                  ))}
                </div>
                <div className="phone-bar">
                  <span /><span /><span />
                </div>
              </div>
            </div>
          </div>
          <div className="app-copy">
            <h2 id="app-title" className="h2">{t.app.title}</h2>
            <p className="lead">{t.app.body}</p>
            <ul className="app-features">
              {t.app.features.map((f) => (
                <li key={f}><Flame size={20} />{f}</li>
              ))}
            </ul>
            <div className="app-stores">
              <StoreButton href={org.appLinks.android} label={t.app.android} icon="android" />
              {/* <StoreButton href={org.appLinks.android} label={t.app.android} soon={t.app.soon} icon="android" /> */}
              {/* <StoreButton href={org.appLinks.ios} label={t.app.ios} soon={t.app.soon} icon="ios" />
              <StoreButton href={org.appLinks.web} label={t.app.web} soon={t.app.soon} icon="web" /> */}
            </div>
            {/* <ShareApp /> */}
          </div>
        </div>
      </section>

      {/* Give */}
      <section id="give" className="wrap">
        <div className="grid12 give">
          <div className="give-copy">
            <h2 className="h2">{t.give.title}</h2>
            <p className="lead" style={{ color: "var(--sand-ink)" }}>{t.give.body}</p>
            <div className="give-actions">
              <Link href="/donate" className="btn btn-ink btn-lg">{t.give.online}</Link>
            </div>
          </div>
          <div className="bank">
            <div style={{ flexGrow: 1 }}>
              <div className="bank-label">{t.give.bankLabel}</div>
              <div style={{ fontWeight: 600 }}>{org.legalName}</div>
              <div className="muted">
                {bank.name}, {bankCurrency === "IDR" ? t.give.idrLine : t.give.usdLine}
              </div>
              <div className="bank-number">{bank.account || `[${bankCurrency} account number]`}</div>
            </div>
            {/* <div className="qr">[{t.give.qr}]</div> */}
          </div>
        </div>
      </section>

      {/* Registered */}
      <section className="section registered">
        <div className="wrap grid12">
          <div className="registered-intro">
            <h2 className="display">{t.registered.title}</h2>
            <p className="muted">{t.registered.body}</p>
          </div>
          <ul>
            {t.registered.items.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>
      </section>
    </main>
  );
}

function StoreButton({ href, label, icon }: { href: string; label: string; icon: "android" | "ios" | "web" }) {
  const glyph =
    icon === "web" ? (
      <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm-9 9h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
    ) : (
      <path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 20h14" />
    );
  const svg = (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {glyph}
    </svg>
  );
  if (!href) {
    // return (
    //   <span className="store store-soon" aria-disabled="true">
    //     {svg}
    //     <span><small>{soon}</small>{label}</span>
    //   </span>
    // );
  }
  return (
    <a className="store" href={href} target="_blank" rel="noopener noreferrer">
      {svg}
      <span>{label}</span>
    </a>
  );
}
