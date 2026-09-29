import { fundIds, type FundId } from "@/content/dictionary";

export type Method = "midtrans" | "trustbridge";
export type Frequency = "once" | "monthly";

export const presets: Record<Method, number[]> = {
  midtrans: [100_000, 250_000, 500_000, 1_000_000],
  trustbridge: [25, 50, 100, 250],
};

export const defaults: Record<Method, number> = { midtrans: 250_000, trustbridge: 50 };

/** Midtrans charges in IDR; TrustBridge gifts are in USD. */
export const minimum: Record<Method, number> = { midtrans: 10_000, trustbridge: 10 };
export const MAX_IDR = 500_000_000;

export function formatAmount(amount: number, method: Method) {
  if (method === "midtrans") return "Rp " + Math.round(amount).toLocaleString("id-ID");
  return "$" + amount.toLocaleString("en-US");
}

export function isFundId(value: unknown): value is FundId {
  return typeof value === "string" && (fundIds as readonly string[]).includes(value);
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
