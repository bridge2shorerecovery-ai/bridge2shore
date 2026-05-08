export async function sendContactEmail({ name, organization, email, phone, inquiry, message }) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, organization, email, phone, inquiry, message }),
  })

  if (!res.ok) {
    const body = await res.text().catch(() => '(could not read body)')
    console.error('Contact API error — status:', res.status)
    console.error('Contact API error — body:', body)
    let parsed = {}
    try { parsed = JSON.parse(body) } catch (_) {}
    throw new Error(parsed.message || `Failed to send email (status ${res.status})`)
  }

  return { success: true }
}
