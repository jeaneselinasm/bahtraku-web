import { NextResponse } from "next/server";
import { randomBytes } from "crypto";
import { midtransConfig } from "@/lib/midtrans";
import { EMAIL_RE, MAX_IDR, minimum, isFundId } from "@/lib/donation";

const fundNames = {
  most: "Where most needed",
  translation: "Bible translation",
  community: "Community development",
  discipleship: "Discipleship",
} as const;

/** Creates a Midtrans Snap transaction and returns its token to the browser. */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const amount = Math.round(Number(body.amount));
  const name = String(body.name ?? "").trim().slice(0, 80);
  const email = String(body.email ?? "").trim().slice(0, 120);
  const fund = body.fund;
  const frequency = body.frequency === "monthly" ? "monthly" : "once";

  if (!Number.isFinite(amount) || amount < minimum.midtrans || amount > MAX_IDR) {
    return NextResponse.json({ error: "Amount out of range" }, { status: 400 });
  }
  if (!name || !EMAIL_RE.test(email) || !isFundId(fund)) {
    return NextResponse.json({ error: "Missing or invalid donor details" }, { status: 400 });
  }

  const orderId = `BTK-${Date.now()}-${randomBytes(3).toString("hex")}`;
  const [firstName, ...rest] = name.split(" ");
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";

  const payload = {
    transaction_details: { order_id: orderId, gross_amount: amount },
    item_details: [
      { id: fund, price: amount, quantity: 1, name: `Donation: ${fundNames[fund]}`.slice(0, 50) },
    ],
    customer_details: { first_name: firstName, last_name: rest.join(" "), email },
    custom_field1: frequency,
    custom_field2: fund,
    ...(siteUrl ? { callbacks: { finish: `${siteUrl}/donate` } } : {}),
  };

  try {
    const { snapBase, authHeader } = midtransConfig();
    const res = await fetch(`${snapBase}/snap/v1/transactions`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    const data = await res.json();
    if (!res.ok || !data.token) {
      console.error("Midtrans error", res.status, data);
      return NextResponse.json({ error: "Payment could not be created" }, { status: 502 });
    }
    // TODO: save { orderId, amount, fund, frequency, name, email, status: "created" } to your database.
    return NextResponse.json({ token: data.token, orderId });
  } catch (err) {
    console.error("Midtrans request failed", err);
    return NextResponse.json({ error: "Payment service unavailable" }, { status: 502 });
  }
}
