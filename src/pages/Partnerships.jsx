import { Link } from 'react-router-dom'
import ScrollAnimator from '../components/ScrollAnimator'

const PARTNERS = [
  {
    name: 'Northern BC Therapeutic Community',
    tag: 'Residential Treatment',
    tagColor: 'bg-[#e6f4f8] text-[#006a89]',
    desc: `Northern BC Therapeutic Community provides structured, long-term residential treatment rooted in accountability, community, and personal responsibility. Their program supports individuals in building strong recovery foundations through daily routines, peer support, and therapeutic interventions.

NBCTC plays a critical role in helping individuals move from early recovery into stable, values-driven living. Their emphasis on structure and community aligns closely with our belief that recovery is built through consistent action, honesty, and connection with others who understand the journey.`,
  },
  {
    name: "Olive's Branch Sober Living Community",
    tag: 'Sober Living',
    tagColor: 'bg-[#e8f2ec] text-[#1a3d2b]',
    desc: `Olive's Branch offers compassionate, peer-driven recovery support grounded in lived experience. Their programs focus on meeting individuals where they are at, providing guidance, connection, and practical tools for navigating early and ongoing recovery.

With a strong understanding of the realities of addiction, Olive's Branch creates a space where people can be honest, challenged, and supported without judgment. Their work complements ours by reinforcing the importance of accountability, community, and continued growth beyond initial treatment.`,
  },
]

export default function Partnerships() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a3d2b] pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="hero-line-1 text-4xl sm:text-5xl font-bold leading-tight mb-5">
            Working alongside trusted organizations<br className="hidden sm:block" /> across Northern BC
          </h1>
          <p className="hero-line-2 text-lg text-green-200 max-w-2xl mx-auto">
            Bridge to Shore Recovery Services is proud to provide Recovery Programs at the following partner organizations, building a stronger and more connected recovery ecosystem.
          </p>
        </div>
      </section>

      {/* Partner cards */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PARTNERS.map((p, i) => (
              <ScrollAnimator key={p.name} delay={i * 150}>
                <div className="rounded-2xl border border-gray-200 p-8 h-full hover:-translate-y-1 transition-transform duration-300 bg-white hover:shadow-md">
                  <div className="mb-5">
                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${p.tagColor}`}>
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1a3d2b] mb-4">{p.name}</h3>
                  <div className="space-y-3">
                    {p.desc.split('\n\n').map((para, j) => (
                      <p key={j} className="text-gray-600 leading-relaxed text-sm">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Interested in Partnering */}
      <section className="bg-[#1a3d2b] py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimator>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">Let's work together</h2>
            <p className="text-green-200 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              We welcome inquiries from housing agencies, social service providers, Indigenous communities, and partner organizations interested in collaboration or contracted supports.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3.5 bg-[#006a89] text-white font-semibold rounded-lg hover:bg-[#005a75] transition-colors duration-200"
            >
              Reach Out
            </Link>
          </ScrollAnimator>
        </div>
      </section>
    </>
  )
}
