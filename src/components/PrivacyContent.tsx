"use client";

import { org } from "@/content/dictionary";
import { useLanguage } from "@/lib/i18n";

export function PrivacyContent() {
    const { t } = useLanguage();
    const p = t.privacy;

    return (
        <main id="main" className="section">
            <article className="wrap privacy">
                <h1 className="h2">{p.title}</h1>
                <p className="muted privacy-updated">{p.updated}</p>
                <p className="lead privacy-intro">{p.intro}</p>

                {p.sections.map((section) => (
                    <section key={section.heading}>
                        <h2>{section.heading}</h2>
                        {section.body.map((para) => (
                            <p key={para}>{para}</p>
                        ))}
                        {section.items && (
                            <ul>
                                {section.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </section>
                ))}

                <section>
                    <h2>{p.contactHeading}</h2>
                    <p>{p.contactBody}</p>
                    <p>
                        {org.legalName}
                        <br />
                        {org.mainOffice}
                        <br />
                        <a href={`mailto:${org.email}`}>{org.email}</a>
                    </p>
                </section>
            </article>
        </main>
    );
}