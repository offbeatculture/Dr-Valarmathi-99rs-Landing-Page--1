import type { Handler } from "@netlify/functions";

const b64 = (s: string) => Buffer.from(s).toString("base64");

export const handler: Handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: corsHeaders(event), body: "ok" };
  }
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { amount, currency = "INR", receipt = `rcpt_${Date.now()}`, notes = {} } =
      JSON.parse(event.body || "{}");
      console.log("KEY_ID:", process.env.RAZORPAY_KEY_ID);
       console.log("KEY_SECRET:", process.env.RAZORPAY_KEY_SECRET ? "*****" : "MISSING");
 

    if (!amount || !Number.isInteger(amount) || amount <= 0) {
      return resp(400, { error: "amount (paise) required" }, event);
    }

    const res = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          b64(`${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}`),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount, currency, receipt, notes }),
    });

    const data = await res.json();
    return resp(res.status, data, event);
  } catch (e: any) {
    return resp(500, { error: e?.message || "create failed" }, event);
  }
  
};

function corsHeaders(event: any) {
  const origin = event?.headers?.origin || "";
  const allowed = (process.env.ALLOWED_ORIGINS || "")
    .split(",").map(s => s.trim());
  const allow = allowed.includes(origin) ? origin : "";

  return {
    "Access-Control-Allow-Origin": allow || "*", // tighten in prod
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
    "Content-Type": "application/json",
  };
}
function resp(status: number, body: any, event: any) {
  return { statusCode: status, headers: corsHeaders(event), body: JSON.stringify(body) };
}
