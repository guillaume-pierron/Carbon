import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const fields = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      serviceType: formData.get("serviceType"),
      vehicle: formData.get("vehicle"),
      partDescription: formData.get("partDescription"),
      finish: formData.get("finish"),
      budget: formData.get("budget"),
      deadline: formData.get("deadline"),
      message: formData.get("message"),
    };

    const images = formData.getAll("images") as File[];

    // Validate required fields
    if (!fields.firstName || !fields.lastName || !fields.email || !fields.partDescription) {
      return NextResponse.json(
        { error: "Champs requis manquants" },
        { status: 400 }
      );
    }

    // Log for development — replace with email service (nodemailer, resend, etc.)
    console.log("New devis request:", {
      ...fields,
      imagesCount: images.length,
      imagesNames: images.map((f) => f.name),
    });

    /*
     * To enable email sending, integrate a service like:
     * - Resend (https://resend.com): npm install resend
     * - Nodemailer with SMTP
     * - SendGrid
     *
     * Example with Resend:
     * import { Resend } from 'resend';
     * const resend = new Resend(process.env.RESEND_API_KEY);
     * await resend.emails.send({
     *   from: 'devis@bbcarbon.fr',
     *   to: 'contact@bbcarbon.fr',
     *   subject: `Nouveau devis - ${fields.firstName} ${fields.lastName}`,
     *   html: `<p>...</p>`,
     * });
     */

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("API devis error:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
