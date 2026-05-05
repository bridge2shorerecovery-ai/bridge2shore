export default function Privacy() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a3d2b] pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
          <p className="text-green-200">Last updated: January 1, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <div className="space-y-8 text-gray-600 leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-[#1a3d2b] mb-3">Introduction</h2>
              <p>
                Bridge to Shore Recovery Services ("we", "us", or "our") is committed to protecting the privacy of individuals who visit our website and contact us through it. This Privacy Policy describes what information we collect, how we use it, and your rights with respect to that information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1a3d2b] mb-3">Information We Collect</h2>
              <p>We collect information that you voluntarily provide to us through our contact form, including:</p>
              <ul className="list-disc list-inside mt-3 space-y-1 ml-2">
                <li>Full name</li>
                <li>Organization name</li>
                <li>Email address</li>
                <li>Phone number (optional)</li>
                <li>Nature of inquiry</li>
                <li>Message content</li>
              </ul>
              <p className="mt-3">
                We do not use cookies, tracking pixels, or any analytics tools that collect personally identifiable information. We do not automatically collect IP addresses, device information, or browsing history beyond what is necessary for the basic operation of the website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1a3d2b] mb-3">How We Use Your Information</h2>
              <p>The information you provide through our contact form is used solely to:</p>
              <ul className="list-disc list-inside mt-3 space-y-1 ml-2">
                <li>Respond to your inquiry or message</li>
                <li>Provide you with information about our services or partnerships</li>
                <li>Follow up on any requests you have made</li>
              </ul>
              <p className="mt-3">
                We will not send you unsolicited marketing communications. Any follow-up communication will be directly related to your original inquiry.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1a3d2b] mb-3">Sharing of Information</h2>
              <p>
                We do not sell, rent, trade, or otherwise share your personal information with any third parties for marketing or commercial purposes. Your information may only be shared in the following limited circumstances:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 ml-2">
                <li>With service providers who assist us in operating our website and delivering our services (e.g., email delivery services), under strict confidentiality obligations</li>
                <li>When required by law, regulation, court order, or other legal process</li>
                <li>To protect the rights, safety, or property of Bridge to Shore Recovery Services, our staff, or others</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1a3d2b] mb-3">Data Retention</h2>
              <p>
                We retain the information you provide only as long as is necessary to respond to your inquiry and fulfill the purpose for which it was collected, or as required by applicable law. Inquiry records are generally retained for up to 2 years.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1a3d2b] mb-3">Security</h2>
              <p>
                We take reasonable precautions to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1a3d2b] mb-3">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside mt-3 space-y-1 ml-2">
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Withdraw consent for any future communications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#1a3d2b] mb-3">Contact Us</h2>
              <p>
                For any questions, concerns, or requests related to this Privacy Policy or how we handle your personal information, please contact us:
              </p>
              <div className="mt-3 bg-[#e8f2ec] rounded-xl p-5 text-sm">
                <p className="font-semibold text-[#1a3d2b]">Bridge to Shore Recovery Services</p>
                <p className="mt-1">Prince George, BC</p>
                <p>Email: <a href="mailto:info@bridge2shore.ca" className="text-[#006a89] hover:underline">info@bridge2shore.ca</a></p>
                <p>Phone: <a href="tel:2505658594" className="text-[#006a89] hover:underline">250-565-8594</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
