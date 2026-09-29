import "server-only";

export function midtransConfig() {
  const serverKey = process.env.MIDTRANS_SERVER_KEY;
  const isProduction = process.env.NEXT_PUBLIC_MIDTRANS_ENV === "production";
  if (!serverKey) throw new Error("MIDTRANS_SERVER_KEY is not set");
  return {
    serverKey,
    snapBase: isProduction ? "https://app.midtrans.com" : "https://app.sandbox.midtrans.com",
    authHeader: "Basic " + Buffer.from(serverKey + ":").toString("base64"),
  };
}
