import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const googleScriptUrl =
      process.env.CONTACT_FORM_SCRIPT_URL || process.env.NEXT_PUBLIC_CONTACT_FORM_SCRIPT_URL

    if (!googleScriptUrl) {
      return NextResponse.json(
        { error: "Missing CONTACT_FORM_SCRIPT_URL environment variable" },
        { status: 500 }
      )
    }

    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, message" },
        { status: 400 }
      )
    }

    const payload = new URLSearchParams({
      name: String(name),
      email: String(email),
      message: String(message),
      source: "website-contact-form",
      sentAt: new Date().toISOString(),
    })

    const scriptResponse = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: payload.toString(),
    })

    if (!scriptResponse.ok) {
      const errorText = await scriptResponse.text()
      return NextResponse.json(
        { error: `Google Script request failed (${scriptResponse.status}): ${errorText}` },
        { status: 502 }
      )
    }

    const scriptRaw = await scriptResponse.text()
    const scriptResult = (() => {
      try {
        return JSON.parse(scriptRaw) as unknown
      } catch {
        return scriptRaw
      }
    })()

    return NextResponse.json({ success: true, scriptResult }, { status: 200 })
  } catch (error) {
    console.error("Error handling contact form:", error)
    return NextResponse.json(
      { error: "Failed to send contact message" },
      { status: 500 }
    )
  }
}
