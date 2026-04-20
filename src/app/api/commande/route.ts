import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { customer, items, total } = await req.json();

  // TODO: envoyer un email via Resend / Nodemailer / SendGrid
  console.log("=== NOUVELLE COMMANDE ===");
  console.log("Client :", customer);
  console.log("Articles :", items);
  console.log("Total :", total, "€");
  console.log("=========================");

  return NextResponse.json({ ok: true });
}
