import { useState } from 'react'
import ScrollAnimator from '../components/ScrollAnimator'
import { sendContactEmail } from '../api/contact'

const INQUIRY_OPTIONS = [
  'Partnership or Contract',
  'Service Information',
  'Indigenous Community Partnership',
  'General Inquiry',
]

const inputBase =
  'w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition-all duration-200 focus:border-[#006a89] focus:ring-2 focus:ring-[#006a89]/20 bg-white'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    inquiry: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Full name is required.'
    if (!form.organization.trim()) errs.organization = 'Organization is required.'
    if (!form.email.trim()) {
      errs.email = 'Email is required.'
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = 'Enter a valid email address.'
    }
    if (!form.inquiry) errs.inquiry = 'Please select a nature of inquiry.'
    if (!form.message.trim()) errs.message = 'Message is required.'
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setStatus('loading')
    try {
      await sendContactEmail(form)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a3d2b] pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="hero-line-1 text-4xl sm:text-5xl font-bold leading-tight mb-5">
            Let's work together to build better outcomes
          </h1>
          <p className="hero-line-2 text-lg text-green-200 max-w-2xl mx-auto">
            We welcome inquiries from housing agencies, social service providers, Indigenous communities, and partner organizations interested in collaboration or contracted supports.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Left — contact info */}
            <ScrollAnimator>
              <h2 className="text-3xl font-bold text-[#1a3d2b] mb-4">Get in touch</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you are looking to contract our services, explore a partnership, or simply learn more about what we do, we would love to hear from you. Fill out the form and we will get back to you shortly.
              </p>

              <div className="bg-[#e8f2ec] border-l-4 border-[#006a89] rounded-r-2xl p-7">
                <p className="text-[#1a3d2b] font-bold text-base mb-6">We would love to hear from you</p>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                      <svg className="w-5 h-5 text-[#006a89]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Email</p>
                      <a href="mailto:info@bridge2shore.ca" className="text-[#1a3d2b] font-medium hover:text-[#006a89] transition-colors">
                        info@bridge2shore.ca
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                      <svg className="w-5 h-5 text-[#006a89]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Phone</p>
                      <a href="tel:2505658594" className="text-[#1a3d2b] font-medium hover:text-[#006a89] transition-colors">
                        250-565-8594
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                      <svg className="w-5 h-5 text-[#006a89]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Location</p>
                      <p className="text-[#1a3d2b] font-medium">Prince George, BC</p>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollAnimator>

            {/* Right — form */}
            <ScrollAnimator delay={100}>
              <div className="border border-gray-200 rounded-2xl p-8">
                <h2 className="text-xl font-bold text-[#1a3d2b] mb-6">Send us a message</h2>

                {status === 'success' ? (
                  <div className="bg-[#e8f2ec] border border-[#a3c4b0] rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-[#1a3d2b] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-[#1a3d2b] mb-2">Message sent!</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Thank you for reaching out. We will get back to you within 1 to 2 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className={inputBase}
                        placeholder="Your full name"
                        value={form.name}
                        onChange={update('name')}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Organization <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className={inputBase}
                        placeholder="Your organization"
                        value={form.organization}
                        onChange={update('organization')}
                      />
                      {errors.organization && <p className="text-red-500 text-xs mt-1">{errors.organization}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          className={inputBase}
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={update('email')}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Phone <span className="text-gray-400 font-normal">(optional)</span>
                        </label>
                        <input
                          type="tel"
                          className={inputBase}
                          placeholder="250-000-0000"
                          value={form.phone}
                          onChange={update('phone')}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Nature of Inquiry <span className="text-red-500">*</span>
                      </label>
                      <select
                        className={`${inputBase} appearance-none`}
                        value={form.inquiry}
                        onChange={update('inquiry')}
                      >
                        <option value="">Select an option</option>
                        {INQUIRY_OPTIONS.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                      {errors.inquiry && <p className="text-red-500 text-xs mt-1">{errors.inquiry}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={5}
                        className={inputBase}
                        placeholder="Tell us how we can help..."
                        value={form.message}
                        onChange={update('message')}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    {status === 'error' && (
                      <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                        Something went wrong. Please try again or email us directly at info@bridge2shore.ca.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-[#1a3d2b] text-white font-semibold py-3.5 rounded-lg hover:bg-[#14302280] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200"
                    >
                      {status === 'loading' ? 'Sending…' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </ScrollAnimator>
          </div>
        </div>
      </section>
    </>
  )
}
