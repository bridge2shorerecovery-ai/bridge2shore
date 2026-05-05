import { Link } from 'react-router-dom'
import ScrollAnimator from '../components/ScrollAnimator'

const PARTNERS = [
  {
    name: 'Northern BC Therapeutic Community',
    location: 'Prince George, BC',
    tag: 'Residential Treatment',
    tagColor: 'bg-[#e6f4f8] text-[#006a89]',
    desc: `Northern BC Therapeutic Community provides structured, long-term residential treatment rooted in accountability, community, and personal responsibility. Their program supports individuals in building strong recovery foundations through daily routines, peer support, and therapeutic interventions.

NBCTC plays a critical role in helping individuals move from early recovery into stable, values-driven living. Their emphasis on structure and community aligns closely with our belief that recovery is built through consistent action, honesty, and connection with others who understand the journey.`,
  },
  {
    name: "Olive's Branch Sober Living Community",
    location: 'Prince George, BC',
    tag: 'Sober Living',
    tagColor: 'bg-[#e8f2ec] text-[#1a3d2b]',
    desc: `Olive's Branch offers compassionate, peer-driven recovery support grounded in lived experience. Their programs focus on meeting individuals where they are at, providing guidance, connection, and practical tools for navigating early and ongoing recovery.

With a strong understanding of the realities of addiction, Olive's Branch creates a space where people can be honest, challenged, and supported without judgment. Their work complements ours by reinforcing the importance of accountability, community, and continued growth beyond initial treatment.`,
  },
]

const MapPin = () => (
  <svg className="w-4 h-4 text-[#006a89] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

export default function Partnerships() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a3d2b] pt-36 pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="hero-line-1 text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Working alongside trusted organizations<br className="hidden sm:block" /> across Northern BC
          </h1>
          <p className="hero-line-2 text-lg text-green-200 max-w-2xl mx-auto leading-relaxed">
            Bridge to Shore Recovery Services is proud to provide Recovery Programs at the following partner organizations, building a stronger and more connected recovery ecosystem.
          </p>
        </div>
      </section>

      {/* Intro strip */}
      <section className="bg-[#e8f2ec] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimator>
            <p className="text-[#1a3d2b] text-lg sm:text-xl font-medium leading-relaxed">
              We believe recovery is strengthened through community. Our partnerships extend our reach and deepen our impact across Northern BC.
            </p>
          </ScrollAnimator>
        </div>
      </section>

      {/* Partner cards */}
      <section className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PARTNERS.map((p, i) => (
              <ScrollAnimator key={p.name} delay={i * 150}>
                <div className="rounded-2xl overflow-hidden h-full flex flex-col hover:-translate-y-1 transition-transform duration-300 bg-[#f8fffe] hover:shadow-lg border border-gray-200">
                  <div className="h-1 w-full" style={{ background: 'linear-gradient(to right, #1a3d2b, #006a89)' }} />
                  <div className="p-10 flex flex-col flex-1 rounded-b-2xl">
                    <div className="mb-5">
                      <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${p.tagColor}`}>
                        {p.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#1a3d2b] mb-2 leading-snug">{p.name}</h3>

                    <div className="flex items-start gap-1.5 mb-6">
                      <MapPin />
                      <span className="text-sm text-gray-500">{p.location}</span>
                    </div>

                    <div className="space-y-4 flex-1">
                      {p.desc.split('\n\n').map((para, j) => (
                        <p key={j} className="text-gray-600 leading-relaxed text-sm">
                          {para}
                        </p>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <span className="inline-block bg-[#e6f4f8] text-[#006a89] text-xs font-semibold px-3 py-1.5 rounded-full">
                        Recovery Program Provider
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Interested in Partnering */}
      <section className="bg-[#1a3d2b] py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimator>
            <div className="inline-block bg-[#006a89]/30 text-[#7ecfe8] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Partnerships
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Let's work together
            </h2>
            <p className="text-green-200 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
              We welcome inquiries from housing agencies, social service providers, Indigenous communities, and partner organizations interested in collaboration or contracted supports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block px-10 py-4 bg-[#006a89] text-white font-semibold rounded-lg hover:bg-[#005a75] transition-colors duration-200 text-base"
              >
                Reach Out
              </Link>
              <Link
                to="/services"
                className="inline-block px-10 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-200 text-base"
              >
                View Our Services
              </Link>
            </div>
          </ScrollAnimator>
        </div>
      </section>
    </>
  )
}
