import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing RESEND_API_KEY environment variable" },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)
    const { to, from, subject, html } = await request.json()

    if (!to || !from || !subject || !html) {
      return NextResponse.json(
        { error: "Missing required fields: to, from, subject, or html" },
        { status: 400 }
      )
    }

    const data = await resend.emails.send({
      from,
      to,
      subject,
      html,
    })

    if (data.error) {
      return NextResponse.json(
        { error: data.error.message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
} 