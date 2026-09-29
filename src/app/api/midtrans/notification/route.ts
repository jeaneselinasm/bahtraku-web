import { NextResponse } from "next/server";
import { createHash } from "crypto";

/**
 * Midtrans payment notification (webhook).
 * Set this URL in Midtrans Dashboard > Settings > Payment > Notification URL:
 *   https://YOUR-DOMAIN/api/midtrans/notification
 */
export async function POST(request: Request) {
  const serverKey = process.env.MIDTRANS_SERVER_KEY;
  if (!serverKey) return NextResponse.json({ error: "Not configured" }, { status: 500 });

  let n: Record<string, string>;
  try {
    n = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const expected = createHash("sha512")
    .update(`${n.order_id}${n.status_code}${n.gross_amount}${serverKey}`)
    .digest("hex");
  if (expected !== n.signature_key) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
  }

  const status = n.transaction_status;
  const paid =
    (status === "capture" && n.fraud_status === "accept") || status === "settlement";
  const failed = ["deny", "cancel", "expire", "failure"].includes(status);

  // TODO: update the donation with n.order_id in your database, then send the receipt email.
  console.info("Midtrans notification", {
    orderId: n.order_id,
    status,
    paid,
    failed,
    amount: n.gross_amount,
    method: n.payment_type,
  });

  return NextResponse.json({ received: true });
}
