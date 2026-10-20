import { NextResponse } from "next/server";

const DELIVERY_EMAIL = "fshomeimprovements@hotmail.com";

export async function POST(req: Request) {
  let data: {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
    service?: string;
    page?: string;
  };
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const { name, email, phone, message, service, page } = data;
  if (!name?.trim() || !email?.trim() || !phone?.trim()) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Log every lead before attempting delivery — recoverable from Vercel
  // function logs even if the email forward fails.
  console.log(
    "LEAD",
    JSON.stringify({ name, email, phone, message, service, page, at: new Date().toISOString() })
  );

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${DELIVERY_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // FormSubmit attributes submissions to a site via these; without them
        // a server-side request is rejected outright.
        Origin: "https://fshome-improvements.co.uk",
        Referer: page
          ? `https://fshome-improvements.co.uk${page}`
          : "https://fshome-improvements.co.uk/",
      },
      body: JSON.stringify({
        _subject: `New quote request — ${service || "General Enquiry"} — ${name}`,
        _template: "table",
        _captcha: "false",
        Name: name,
        Phone: phone,
        Email: email,
        Service: service || "General Enquiry",
        Message: message?.trim() || "(none)",
        "Sent from": page || "fshome-improvements.co.uk",
      }),
    });
    const body = (await res.json().catch(() => null)) as { success?: string | boolean } | null;
    const delivered = res.ok && body != null && String(body.success) === "true";
    if (!delivered) {
      console.error("LEAD DELIVERY FAILED", res.status, JSON.stringify(body));
      return NextResponse.json({ ok: false }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("LEAD DELIVERY ERROR", err);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
