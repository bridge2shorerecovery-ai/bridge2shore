import { useEffect, useRef, useState } from 'react'
import ScrollAnimator from '../components/ScrollAnimator'

const ABOUT_BG =
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80'

const CERTS = [
  'BC Peer Support Certification',
  'SMART Recovery Facilitation',
  'Wellbriety Training',
  'Grief Walk Facilitation',
  'Addiction Care and Treatment',
  'Trauma-Informed Practice Certification',
  'ASSIST',
  'Crisis Prevention and Intervention',
]

const DIFFERENTIATORS = [
  'We can hear what is being said and what is not being said.',
  'We understand the patterns and resistance because we have been there.',
  'Both empathy and accountability — not one without the other.',
]

function AnimatedBullets() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <ul ref={ref} className="space-y-4 mt-6">
      {DIFFERENTIATORS.map((item, i) => (
        <li
          key={item}
          className={`flex items-start gap-3 transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
          }`}
          style={{ transitionDelay: visible ? `${i * 150}ms` : '0ms' }}
        >
          <span className="mt-1 w-5 h-5 rounded-full bg-[#006a89] flex items-center justify-center shrink-0">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-gray-700 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center"
        style={{
          backgroundImage: `url(${ABOUT_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          minHeight: '420px',
        }}
      >
        <div className="absolute inset-0 bg-[#1a3d2b]/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-white text-center w-full">
          <h1 className="hero-line-1 text-4xl sm:text-5xl font-bold leading-tight mb-5">
            Built by people who lived it,<br className="hidden sm:block" /> not just studied it
          </h1>
          <p className="hero-line-2 text-lg text-green-100 max-w-2xl mx-auto">
            We know what it looks like when things fall apart, and we know what it takes to come back from it.
          </p>
        </div>
      </section>

      {/* Story + Certs */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Left — Our Story */}
            <ScrollAnimator>
              <h2 className="text-2xl font-bold text-[#1a3d2b] mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
                <p>
                  Bridge to Shore Recovery Services was built by people who have lived the reality of addiction, not just studied it. We know what it looks like when things fall apart, and we know what it takes to come back from it.
                </p>
                <p>
                  Our approach is simple, but not easy. We combine proven recovery frameworks like the 12 Steps, SMART Recovery, and Wellbriety with real-world accountability and a social service and employment-focused structure. Recovery does not happen in theory, it happens in action. It is built through consistency, responsibility, and learning how to show up differently, day after day.
                </p>
                <p>
                  Our team is formally trained and certified in multiple recovery and support modalities, including BC Peer Support Certification, SMART Recovery Facilitation, Wellbriety Training, Grief Walk facilitation, and Addiction Care and Treatment. These certifications strengthen what we already bring through lived experience, giving us both the clinical understanding and the real-world insight to support meaningful change.
                </p>
                <p>
                  We work with individuals who are serious about change. That does not mean perfect, it means willing. Willing to be honest, willing to be challenged, and willing to take direction when it matters. Because the truth is, most of us did not struggle from a lack of knowledge, we struggled from a lack of follow-through.
                </p>
                <p>
                  What sets us apart is our lived experience. We can hear what is being said and what is not being said. We understand the patterns, the resistance, and the justifications, because we have been there. That allows us to meet people with both empathy and accountability.
                </p>
                <p className="font-medium text-[#1a3d2b]">
                  At Bridge to Shore, we do not just talk about recovery — we live it, and we build it together.
                </p>
              </div>
            </ScrollAnimator>

            {/* Right — Certifications + What Sets Us Apart */}
            <div>
              <ScrollAnimator>
                <h2 className="text-2xl font-bold text-[#1a3d2b] mb-6">Our Certifications</h2>
                <div className="space-y-3 mb-10">
                  {CERTS.map((cert) => (
                    <div
                      key={cert}
                      className="bg-[#e8f2ec] border-l-4 border-[#1a3d2b] rounded-r-lg px-5 py-3 text-sm font-medium text-[#1a3d2b]"
                    >
                      {cert}
                    </div>
                  ))}
                </div>
              </ScrollAnimator>

              <ScrollAnimator delay={100}>
                <h2 className="text-2xl font-bold text-[#1a3d2b] mb-2">What Sets Us Apart</h2>
                <AnimatedBullets />
              </ScrollAnimator>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
