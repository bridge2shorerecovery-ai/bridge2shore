export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, organization, email, phone, inquiry, message } = req.body
  const apiKey = process.env.VITE_RESEND_API_KEY

  const visitorHtml = `
    <div style="font-family: Inter, system-ui, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <div style="background: #1a3d2b; padding: 32px 40px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #fff; margin: 0; font-size: 22px;">Bridge to Shore Recovery Services</h1>
      </div>
      <div style="background: #fff; padding: 32px 40px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
        <h2 style="color: #1a3d2b; margin-top: 0;">Thank you for reaching out</h2>
        <p style="line-height: 1.6; color: #555;">
          Thank you for reaching out to Bridge to Shore Recovery Services. We have received your message and will get back to you within 1 to 2 business days.
        </p>
        <p style="line-height: 1.6; color: #555;">
          If you have any urgent inquiries, please contact us directly at <a href="mailto:info@bridge2shore.ca" style="color: #006a89;">info@bridge2shore.ca</a> or by phone at 250-565-8594.
        </p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
        <p style="font-size: 13px; color: #999; margin: 0;">
          Bridge to Shore Recovery Services &bull; Prince George, BC &bull; info@bridge2shore.ca &bull; 250-565-8594
        </p>
      </div>
    </div>
  `

  const adminHtml = `
    <div style="font-family: Inter, system-ui, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <div style="background: #1a3d2b; padding: 32px 40px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #fff; margin: 0; font-size: 22px;">New Website Inquiry</h1>
      </div>
      <div style="background: #fff; padding: 32px 40px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; font-weight: 600; color: #1a3d2b; width: 160px;">Full Name</td>
            <td style="padding: 10px 0; color: #555;">${escapeHtml(name)}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; font-weight: 600; color: #1a3d2b;">Organization</td>
            <td style="padding: 10px 0; color: #555;">${escapeHtml(organization)}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; font-weight: 600; color: #1a3d2b;">Email</td>
            <td style="padding: 10px 0; color: #555;">${escapeHtml(email)}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; font-weight: 600; color: #1a3d2b;">Phone</td>
            <td style="padding: 10px 0; color: #555;">${phone ? escapeHtml(phone) : 'Not provided'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 10px 0; font-weight: 600; color: #1a3d2b;">Nature of Inquiry</td>
            <td style="padding: 10px 0; color: #555;">${escapeHtml(inquiry)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; color: #1a3d2b; vertical-align: top;">Message</td>
            <td style="padding: 10px 0; color: #555; white-space: pre-wrap;">${escapeHtml(message)}</td>
          </tr>
        </table>
      </div>
    </div>
  `

  const send = (payload) =>
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    })

  try {
    const [r1, r2] = await Promise.all([
      send({
        from: 'info@bridge2shore.ca',
        to: email,
        subject: 'We received your message — Bridge to Shore Recovery Services',
        html: visitorHtml,
      }),
      send({
        from: 'info@bridge2shore.ca',
        to: 'info@bridge2shore.ca',
        subject: `New inquiry from website — ${name}`,
        html: adminHtml,
      }),
    ])

    if (!r1.ok || !r2.ok) {
      const failed = r1.ok ? r2 : r1
      const status = failed.status
      const body = await failed.text().catch(() => '(could not read body)')
      console.error('Resend API error — status:', status)
      console.error('Resend API error — body:', body)
      let parsed = {}
      try { parsed = JSON.parse(body) } catch (_) {}
      return res.status(500).json({ message: parsed.message || `Failed to send email (status ${status})` })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Unexpected error:', err)
    return res.status(500).json({ message: err.message || 'Unexpected error' })
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
