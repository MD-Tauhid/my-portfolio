import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactFormData
    const { name, email, message } = body
     
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Replace with your verified domain if you have one
      to: process.env.CONTACT_RECEIVER_EMAIL || "",
      subject: `New message from ${name}`,
      reply_to: email,
      text: `From: ${name} (${email})\n\n${message}`,
    })

    if (data.error) {
      console.error('Email send error:', data.error)
      return NextResponse.json({ error: 'Email sending failed' }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
