import ScrollAnimator from '../components/ScrollAnimator'
import { Link } from 'react-router-dom'

const SERVICES_BG =
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=80'

const SERVICES = [
  {
    title: 'Intensive 12-Step Facilitation',
    subtitle: 'Any and All Addictions',
    details: ['30 hours', '15 sessions of 2 hours each'],
    price: '$3,000',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'SMART Recovery Facilitation',
    subtitle: null,
    details: ['20 hours', '10 sessions of 2 hours each'],
    price: '$2,000',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Wellbriety 12-Step Facilitation',
    subtitle: null,
    details: ['30 hours', '15 sessions of 2 hours each'],
    price: '$3,000',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Customized Recovery Facilitation',
    subtitle: null,
    details: ['20 hours', '10 sessions of 2 hours each'],
    price: '$2,000',
    desc: 'Utilizing the lived experience of both facilitators with 10+ years experience facilitating recovery workshops, we are able to customize workshops based on client and provider needs.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: 'Wilderness Retreats',
    subtitle: null,
    details: ['3 to 5 days', 'Camp near Prince George'],
    price: 'Cost varies by group size',
    desc: '12 step retreats located at a camp near Prince George.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Recovery Capital Management Assessments',
    subtitle: null,
    details: ['1 year contract', 'Monthly individual assessments'],
    price: '$1,500',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

const INCLUDES = [
  'One-on-One Peer Support Sessions',
  'Group Well-being Sessions',
  'Bridging to social services including housing and counseling',
  'Employment services including Career Decision Making and employment counseling',
  'Aftercare follow-up — 6 months',
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center"
        style={{
          backgroundImage: `url(${SERVICES_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '420px',
        }}
      >
        <div className="absolute inset-0 bg-[#1a3d2b]/70" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-white text-center w-full">
          <h1 className="hero-line-1 text-4xl sm:text-5xl font-bold leading-tight mb-5">
            Structured recovery support,<br className="hidden sm:block" /> contract and package based
          </h1>
          <p className="hero-line-2 text-lg text-green-100 max-w-2xl mx-auto">
            Flexible service packages allowing agencies to scale support based on need. All packages can be embedded within existing programming or delivered as independent contracted supports.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            {SERVICES.map((s, i) => (
              <ScrollAnimator key={s.title} delay={Math.floor(i / 2) * 120 + (i % 2) * 60}>
                <div className="border border-gray-200 rounded-2xl p-8 h-full hover:-translate-y-1 transition-transform duration-300 bg-white hover:shadow-md">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#e6f4f8] flex items-center justify-center text-[#006a89] shrink-0">
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1a3d2b] leading-snug">{s.title}</h3>
                      {s.subtitle && (
                        <p className="text-sm text-[#006a89] font-medium mt-0.5">{s.subtitle}</p>
                      )}
                    </div>
                  </div>
                  {s.desc && (
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{s.desc}</p>
                  )}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {s.details.map((d) => (
                      <span
                        key={d}
                        className="text-xs bg-[#e8f2ec] text-[#1a3d2b] font-medium px-3 py-1 rounded-full"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <span className="text-2xl font-bold text-[#006a89]">{s.price}</span>
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>

          {/* All Packages Include */}
          <ScrollAnimator>
            <div className="bg-[#e8f2ec] border-l-4 border-[#1a3d2b] rounded-r-2xl p-8">
              <h3 className="text-xl font-bold text-[#1a3d2b] mb-6">All Packages Include</h3>
              <div className="flex flex-wrap gap-3">
                {INCLUDES.map((item) => (
                  <span
                    key={item}
                    className="bg-white text-[#1a3d2b] text-sm font-medium px-4 py-2 rounded-full shadow-sm border border-[#c5dece]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a3d2b] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimator>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-green-200 mb-8">
              Reach out to discuss which packages best fit your organization's needs.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3.5 bg-[#006a89] text-white font-semibold rounded-lg hover:bg-[#005a75] transition-colors duration-200"
            >
              Contact Us
            </Link>
          </ScrollAnimator>
        </div>
      </section>
    </>
  )
}
