import { defineEventHandler, readBody } from 'h3'
import sgMail from '@sendgrid/mail'

// Set API key with bearer token
sgMail.setApiKey('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')

export default defineEventHandler(async (event) => {
  try {
    const { name, email, message } = await readBody<{ name: string; email: string; message: string }>(event)

    const to = 'bbtrdene@yahoo.com'
    const from = 'baterdeneb186@gmail.com'

    const msg = {
      to: to,
      from: from, // must be a verified sender in SendGrid
      replyTo: email,
      subject: `New Contact from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    }

    await sgMail.send(msg)
    return { success: true, message: 'Mail sent' }
  } catch (error: any) {
    console.error('MAIL ERROR:', error?.response?.body || error)
    return { success: false, message: 'Failed to send email' }
  }
})


