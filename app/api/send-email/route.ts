import { NextResponse } from "next/server"

export const maxDuration = 15
export const dynamic = "force-dynamic"

/** Safe, user-facing message when the Apps Script web app returns a non-OK HTTP status. */
function messageForGoogleScriptFailure(status: number, rawText: string): string {
  const trimmed = rawText.trim()
  if (trimmed.startsWith("{")) {
    try {
      const parsed = JSON.parse(trimmed) as Record<string, unknown>
      const fromScript =
        (typeof parsed.error === "string" && parsed.error) ||
        (typeof parsed.message === "string" && parsed.message) ||
        ""
      const text = fromScript.trim()
      if (
        text.length > 0 &&
        text.length <= 280 &&
        !/<[a-z][\s\S]*>/i.test(text)
      ) {
        return text
      }
    } catch {
      // fall through to status-based message
    }
  }

  switch (status) {
    case 401:
    case 403:
      return "The contact form could not reach the mail service (access denied). If this persists, email us directly."
    case 404:
      return "The contact form endpoint was not found. The mail integration URL may need to be updated."
    case 429:
      return "Too many messages were sent in a short time. Please wait a moment and try again."
    case 502:
    case 503:
      return "The mail service is temporarily unavailable. Please try again in a few minutes."
    default:
      return "We could not send your message through the mail service. Please try again or email us directly."
  }
}

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

    // Read body once — needed for logging and safe JSON handling
    const rawText = await scriptResponse.text()
    console.log("RAW GOOGLE RESPONSE:", rawText)

    if (!scriptResponse.ok) {
      const error = messageForGoogleScriptFailure(scriptResponse.status, rawText)
      console.error("Google Apps Script non-OK response:", {
        status: scriptResponse.status,
        bodyPreview: rawText.slice(0, 500),
      })
      return NextResponse.json(
        {
          error,
          status: scriptResponse.status,
        },
        { status: 502 }
      )
    }

    try {
      const result = JSON.parse(rawText) as unknown
      return NextResponse.json({ success: true, scriptResult: result }, { status: 200 })
    } catch {
      console.error("Failed to parse Google response as JSON")
      return NextResponse.json(
        {
          error: "Invalid JSON from Google",
          rawText,
        },
        { status: 502 }
      )
    }
  } catch (error) {
    console.error("Error handling contact form:", error)
    return NextResponse.json(
      { error: "Failed to send contact message" },
      { status: 500 }
    )
  }
}
