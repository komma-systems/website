import { NextResponse } from "next/server"

export const maxDuration = 15
export const dynamic = "force-dynamic"

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

    const validatedScriptUrl = (() => {
      try {
        return new URL(googleScriptUrl).toString()
      } catch {
        return null
      }
    })()

    if (!validatedScriptUrl) {
      return NextResponse.json(
        { error: "CONTACT_FORM_SCRIPT_URL is not a valid URL" },
        { status: 500 }
      )
    }

    const payload = {
      name: String(name),
      email: String(email),
      message: String(message),
      source: "website-contact-form",
      sentAt: new Date().toISOString(),
    }

    let scriptResponse: Response
    try {
      scriptResponse = await fetch(validatedScriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        signal: AbortSignal.timeout(12000),
        body: JSON.stringify(payload),
      })
    } catch (fetchError) {
      const isTimeout =
        fetchError instanceof DOMException && fetchError.name === "TimeoutError"
      const isAbort = fetchError instanceof DOMException && fetchError.name === "AbortError"
      return NextResponse.json(
        {
          error: isTimeout || isAbort
            ? "Google Script request timed out"
            : "Failed to reach Google Script endpoint",
        },
        { status: isTimeout || isAbort ? 504 : 502 }
      )
    }

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
