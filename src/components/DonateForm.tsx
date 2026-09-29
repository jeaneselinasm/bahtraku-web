"use client";

import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
import { fundIds, org, type FundId } from "@/content/dictionary";
import { useLanguage } from "@/lib/i18n";
import {
  EMAIL_RE,
  defaults,
  formatAmount,
  minimum,
  presets,
  type Frequency,
  type Method,
} from "@/lib/donation";
import { Flame } from "./Icons";

type SnapResult = Record<string, unknown>;
declare global {
  interface Window {
    snap?: {
      pay: (
        token: string,
        callbacks: {
          onSuccess?: (r: SnapResult) => void;
          onPending?: (r: SnapResult) => void;
          onError?: (r: SnapResult) => void;
          onClose?: () => void;
        },
      ) => void;
    };
  }
}

const SNAP_URL =
  process.env.NEXT_PUBLIC_MIDTRANS_ENV === "production"
    ? "https://app.midtrans.com/snap/snap.js"
    : "https://app.sandbox.midtrans.com/snap/snap.js";
const CLIENT_KEY = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY ?? "";
const TRUSTBRIDGE_URL = process.env.NEXT_PUBLIC_TRUSTBRIDGE_URL ?? "";

type Outcome = null | "success" | "pending";

export function DonateForm() {
  const { t } = useLanguage();
  const d = t.donate;

  const [method, setMethod] = useState<Method>("midtrans");
  const [frequency, setFrequency] = useState<Frequency>("once");
  const [amount, setAmount] = useState<number>(defaults.midtrans);
  const [custom, setCustom] = useState("");
  const [fund, setFund] = useState<FundId>("most");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [outcome, setOutcome] = useState<Outcome>(null);

  const customNum = Number(custom);
  const total = custom && customNum > 0 ? customNum : amount;
  const totalLabel = formatAmount(total, method);
  const trustReady = /^https?:\/\//.test(TRUSTBRIDGE_URL);

  // Manual transfer shows the account in the same currency as the chosen option:
  // Midtrans gifts are in rupiah, TrustBridge gifts are in US dollars.
  const manualCurrency = method === "midtrans" ? "IDR" : "USD";
  const manualBank = org.banks[manualCurrency];
  const manualLine = `${d.manual} ${manualBank.name} (${manualCurrency}), ${org.legalName}, ${d.accountWord} ${
    manualBank.account || `[${manualCurrency} account number]`
  }.`;

  function chooseMethod(next: Method) {
    setMethod(next);
    setAmount(defaults[next]);
    setCustom("");
    setError("");
  }

  function validateAmount() {
    if (total < minimum[method]) {
      setError(`${d.errors.amount} ${formatAmount(minimum[method], method)}.`);
      return false;
    }
    return true;
  }

  async function payWithMidtrans() {
    if (!validateAmount()) return;
    if (!name.trim()) return setError(d.errors.name);
    if (!EMAIL_RE.test(email)) return setError(d.errors.email);
    setError("");
    setBusy(true);
    try {
      const res = await fetch("/api/midtrans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Math.round(total), frequency, fund, name, email }),
      });
      const data = await res.json();
      if (!res.ok || !data.token || !window.snap) throw new Error(data.error ?? "no token");
      window.snap.pay(data.token, {
        onSuccess: () => setOutcome("success"),
        onPending: () => setOutcome("pending"),
        onError: () => setError(d.errors.failed),
        onClose: () => setBusy(false),
      });
    } catch {
      setError(d.errors.payment);
    } finally {
      setBusy(false);
    }
  }

  function continueToTrustBridge() {
    if (!validateAmount()) return;
    if (!trustReady) return setError(d.trustMissing);
    setError("");
    window.open(TRUSTBRIDGE_URL, "_blank", "noopener,noreferrer");
  }

  function reset() {
    setOutcome(null);
    setCustom("");
    setError("");
  }

  if (outcome) {
    const first = name.trim().split(" ")[0];
    return (
      <main id="main" className="wrap done">
        <Flame size={64} />
        <h1 className="display">
          {outcome === "success" ? `${d.done.successTitle}${first ? `, ${first}` : ""}` : d.done.pendingTitle}
        </h1>
        <p className="lead">{outcome === "success" ? d.done.successBody : d.done.pendingBody}</p>
        <div className="done-actions">
          <Link href="/" className="btn btn-ink btn-lg">{d.back}</Link>
          <button type="button" className="btn btn-outline btn-lg" onClick={reset}>{d.done.again}</button>
        </div>
      </main>
    );
  }

  return (
    <main id="main">
      {CLIENT_KEY && <Script src={SNAP_URL} data-client-key={CLIENT_KEY} strategy="afterInteractive" />}
      <div className="wrap grid12 donate">
        <div className="donate-form">
          <div>
            <h1 className="display">{d.title}</h1>
            <p className="lead">{d.body}</p>
          </div>

          <fieldset className="step">
            <legend>{d.step1}</legend>
            <div className="choice-grid">
              {(["midtrans", "trustbridge"] as Method[]).map((m) => {
                const info = d.methods[m];
                return (
                  <button
                    key={m}
                    type="button"
                    className="choice method"
                    aria-pressed={method === m}
                    onClick={() => chooseMethod(m)}
                  >
                    <span className="method-head">
                      <span className="choice-title">{info.label}</span>
                      <span className="badge">{info.via}</span>
                    </span>
                    <span style={{ fontSize: 15, color: "var(--body)" }}>{info.note}</span>
                    <span className="choice-note" style={{ fontSize: 14 }}>{info.best}</span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <fieldset className="step">
            <legend>{d.step2}</legend>
            {method === "midtrans" && (
              <div className="segmented" role="group" aria-label={d.step2}>
                <button type="button" aria-pressed={frequency === "once"} onClick={() => setFrequency("once")}>{d.once}</button>
                <button type="button" aria-pressed={frequency === "monthly"} onClick={() => setFrequency("monthly")}>{d.monthly}</button>
              </div>
            )}
            <div className="amount-grid">
              {presets[method].map((v) => (
                <button
                  key={v}
                  type="button"
                  className="choice amount"
                  aria-pressed={!custom && amount === v}
                  onClick={() => { setAmount(v); setCustom(""); setError(""); }}
                >
                  {formatAmount(v, method)}
                </button>
              ))}
            </div>
            <label className="field">
              {d.other} ({method === "midtrans" ? "IDR" : "USD"})
              <input
                type="number"
                inputMode="numeric"
                min={minimum[method]}
                placeholder={d.otherPlaceholder}
                value={custom}
                onChange={(e) => { setCustom(e.target.value); setError(""); }}
              />
            </label>
          </fieldset>

          <fieldset className="step">
            <legend>{d.step3}</legend>
            <div className="choice-grid">
              {fundIds.map((id) => (
                <button key={id} type="button" className="choice" aria-pressed={fund === id} onClick={() => setFund(id)}>
                  <span className="choice-title">{d.funds[id].label}</span>
                  <span className="choice-note">{d.funds[id].note}</span>
                </button>
              ))}
            </div>
          </fieldset>

          {method === "midtrans" ? (
            <fieldset className="step">
              <legend>{d.step4}</legend>
              <div className="fields">
                <label className="field">
                  {d.name}
                  <input type="text" autoComplete="name" value={name} onChange={(e) => { setName(e.target.value); setError(""); }} />
                </label>
                <label className="field">
                  {d.email}
                  <input type="email" autoComplete="email" value={email} onChange={(e) => { setEmail(e.target.value); setError(""); }} />
                </label>
              </div>
              {frequency === "monthly" && <p className="muted" style={{ fontSize: 15 }}>{d.monthlyNote}</p>}
            </fieldset>
          ) : (
            <div className="info">
              <strong>TrustBridge Global Foundation</strong>
              {d.trustInfo}
            </div>
          )}

          <p className="muted" style={{ fontSize: 15 }}>{manualLine}</p>
        </div>

        <aside className="summary" aria-live="polite">
          <h2>{d.summary}</h2>
          <div className="summary-total">{totalLabel}</div>
          <div className="summary-meta">
            {method === "midtrans" && frequency === "monthly" ? d.everyMonth : d.oneTime} {d.to} {d.funds[fund].label.toLowerCase()}
          </div>
          <hr />
          <p>{d.impact[fund]}</p>
          {error && <p className="alert" role="alert">{error}</p>}
          {method === "midtrans" ? (
            <button type="button" className="btn btn-flame btn-lg" onClick={payWithMidtrans} disabled={busy}>
              {busy ? d.paying : d.payMidtrans}
            </button>
          ) : (
            <button type="button" className="btn btn-flame btn-lg" onClick={continueToTrustBridge}>
              {d.payTrust}
            </button>
          )}
          <p className="small">{d.registeredNote}</p>
        </aside>
      </div>

      {/* Phone / tablet: pay bar always in reach */}
      <div className="paybar">
        {error && <p className="paybar-error" role="alert">{error}</p>}
        <div className="paybar-total">
          <span>{method === "midtrans" && frequency === "monthly" ? d.everyMonth : d.oneTime}</span>
          <strong>{totalLabel}</strong>
        </div>
        {method === "midtrans" ? (
          <button type="button" className="btn btn-flame" onClick={payWithMidtrans} disabled={busy}>
            {busy ? d.paying : d.payMidtrans}
          </button>
        ) : (
          <button type="button" className="btn btn-flame" onClick={continueToTrustBridge}>
            {d.payTrust}
          </button>
        )}
      </div>
    </main>
  );
}
