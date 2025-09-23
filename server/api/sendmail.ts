import { defineEventHandler, readBody } from 'h3'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export default defineEventHandler(async (event) => {
  try {
    const { name, email, message } = await readBody<{ name: string; email: string; message: string }>(event)

    const msg = {
      to: 'bbtrdene@yahoo.com',
      from: 'baterdeneb186@gmail.com',
      subject: `New Contact from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    }

    await sgMail.send(msg)
    return { success: true }
  } catch (error) {
    return { error: 'Failed to send email' }
  }
})