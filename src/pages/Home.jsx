import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import ScrollAnimator from '../components/ScrollAnimator'

const HERO_BG =
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=80'

function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0)
  const [running, setRunning] = useState(false)

  const trigger = useCallback(() => {
    setRunning(true)
  }, [])

  useEffect(() => {
    if (!running) return
    let frame
    let startTs = null

    const step = (ts) => {
      if (!startTs) startTs = ts
      const progress = Math.min((ts - startTs) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [running, target, duration])

  return [count, trigger]
}

const CARDS = [
  {
    title: 'Peer-Based Accountability',
    desc: 'We can hear what is being said and what is not being said. We understand the patterns, the resistance, and the justifications, because we have been there. That allows us to meet people with both empathy and accountability.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Certified and Trained',
    desc: 'Formally certified in BC Peer Support, SMART Recovery, Wellbriety, Grief Walk facilitation, Addiction Care and Treatment, Trauma-Informed Practice, ASSIST, and Crisis Prevention and Intervention. This combination of certification and lived experience allows us to engage clients in ways that improve trust, retention, and follow-through.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'System-Strengthening',
    desc: 'We do not replace existing services, we strengthen them. Our work improves client engagement, retention, and accountability across housing, treatment, and community programs.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

export default function Home() {
  const statsRef = useRef(null)
  const [years, triggerYears] = useCountUp(12)
  const [modalities, triggerModalities] = useCountUp(8)
  const [partners, triggerPartners] = useCountUp(2)

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerYears()
          triggerModalities()
          triggerPartners()
          observer.unobserve(el)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [triggerYears, triggerModalities, triggerPartners])

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#1a3d2b]/70" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-white text-center w-full">
          <h1 className="hero-line-1 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Recovery built on lived experience<br className="hidden sm:block" /> and real accountability
          </h1>
          <p className="hero-line-2 text-lg sm:text-xl text-green-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            We provide structured, outcome-focused recovery and support services designed to strengthen existing systems, reduce repeat crisis cycles, and improve long-term client stability.
          </p>
          <div className="hero-line-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block px-8 py-3.5 bg-[#006a89] text-white font-semibold rounded-lg hover:bg-[#005a75] transition-colors duration-200"
            >
              Work With Us
            </Link>
            <Link
              to="/services"
              className="inline-block px-8 py-3.5 bg-white/10 border border-white/40 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-200"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section ref={statsRef} className="bg-[#006a89] py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">{years}+</div>
              <div className="text-blue-100 text-sm font-medium">Years of lived recovery experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">{modalities}</div>
              <div className="text-blue-100 text-sm font-medium">Certified recovery modalities</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">{partners}</div>
              <div className="text-blue-100 text-sm font-medium">Active partner organizations</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimator className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3d2b] mb-3">What We Do</h2>
            <div className="w-14 h-1 bg-[#006a89] mx-auto" />
          </ScrollAnimator>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CARDS.map((card, i) => (
              <ScrollAnimator key={card.title} delay={i * 130}>
                <div className="bg-[#e8f2ec] rounded-2xl p-8 h-full hover:-translate-y-1 transition-transform duration-300 cursor-default">
                  <div className="w-11 h-11 rounded-full bg-[#e6f4f8] flex items-center justify-center mb-5 text-[#006a89]">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#1a3d2b] mb-3">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{card.desc}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="bg-[#1a3d2b] py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimator>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Who We Work With</h2>
            <p className="text-green-200 text-lg leading-relaxed mb-10">
              We actively work alongside housing agencies, social service providers, Indigenous bands and community leadership, and treatment and transition programs. Our role is to enhance existing services by providing consistent engagement, peer-based accountability, and structured recovery support that improves outcomes for high-barrier and high-risk populations.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3.5 bg-[#006a89] text-white font-semibold rounded-lg hover:bg-[#005a75] transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </ScrollAnimator>
        </div>
      </section>
    </>
  )
}
