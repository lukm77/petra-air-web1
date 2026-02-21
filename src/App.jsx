import { useState, useEffect, useRef } from 'react'
import {
  Menu, X, ChevronDown, ExternalLink, ArrowRight,
  Brain, Users, Scale, Coins, Globe, Star, Award,
  PlayCircle, Mail, Phone, MapPin, Send, Heart,
  Plane, Wind, Compass, Shield, Zap, BookOpen,
  Instagram, Youtube, Linkedin, ChevronRight
} from 'lucide-react'

// ─── Utility: useScrollReveal ────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .underline-gold')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Programs', 'Expedition', 'Podcast', 'Support']

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex flex-col leading-none">
          <span className="font-serif font-bold text-white text-lg tracking-wide">PETRA AIR</span>
          <span className="font-sans font-semibold text-gold text-[10px] uppercase tracking-[0.3em]">Foundation</span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <a href="#support" className="hidden sm:block btn-gold text-xs py-3 px-6">
            Donate
          </a>
          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-navy-dark border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="nav-link text-sm py-2"
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
          <a href="#support" className="btn-gold text-center mt-2" onClick={() => setMenuOpen(false)}>
            Donate Now
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
      {/* Background - navy gradient simulating sky */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(160deg, #061729 0%, #0A2240 40%, #0d3a6e 70%, #1a5276 100%)',
        }}
      />

      {/* Geometric decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #1a5276 0%, transparent 70%)' }} />

        {/* Diagonal lines */}
        <div className="absolute top-20 right-20 w-px h-64 bg-gold/20 rotate-12" />
        <div className="absolute top-40 right-32 w-px h-40 bg-gold/10 rotate-12" />

        {/* Horizon line */}
        <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center pt-24">
        <div className="hero-text-1">
          <span className="section-label text-gold tracking-[0.4em]">
            ✦ Petra Air Foundation ✦
          </span>
        </div>

        <h1 className="hero-text-2 font-serif font-black text-white mt-6 leading-[1.05]"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>
          Bridging the Gap<br />
          <span className="italic text-gold">in Aerospace</span>
        </h1>

        <div className="hero-text-3 max-w-2xl mx-auto mt-8">
          <p className="font-sans text-white/75 text-base lg:text-lg leading-relaxed font-light">
            Supporting Women in Aviation and Space Industry.{' '}
            <span className="text-white/90 font-medium">We respect men and women equally.</span>{' '}
            Empowering the next generation of professionals.
          </p>
        </div>

        <div className="hero-text-4 flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a href="#support" className="btn-gold">
            Join Our Mission
          </a>
          <a href="#about" className="btn-ghost">
            Our Mission
          </a>
        </div>

        {/* Award badge */}
        <div className="hero-text-4 mt-16 inline-flex items-center gap-3 border border-gold/30 bg-gold/5 px-6 py-3 backdrop-blur-sm">
          <Award size={16} className="text-gold flex-shrink-0" />
          <span className="font-sans text-white/70 text-xs uppercase tracking-widest">
            Finalist — Women Changing the World 2025 · Diversity & Inclusion
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/30 font-sans text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown size={16} className="text-gold/50" />
      </div>
    </section>
  )
}

// ─── Stats / The Problem ──────────────────────────────────────────────────────
function TheProblem() {
  return (
    <section id="about" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label reveal">The Problem</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-navy leading-tight reveal reveal-delay-1">
              The Aerospace<br />
              <span className="italic">Gender Gap</span>
            </h2>
            <div className="gold-line mt-6 mb-8 reveal reveal-delay-2" />
            <p className="font-sans text-gray-600 leading-relaxed reveal reveal-delay-2">
              The aerospace industry faces a global shortage of skilled workers — yet half of humanity
              remains largely excluded. We are here to change the numbers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Stat 1 */}
            <div className="reveal reveal-delay-1 bg-navy p-8 diagonal-accent relative">
              <div className="flex items-start gap-6">
                <div className="text-6xl font-serif font-black text-gold leading-none stat-number">&lt;5%</div>
                <div>
                  <div className="font-sans font-bold text-white text-lg leading-snug">
                    of airline workers worldwide are women
                  </div>
                  <div className="font-sans text-white/50 text-sm mt-2">Global aviation industry, 2024</div>
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="reveal reveal-delay-2 bg-gray-50 border border-gray-100 p-8 diagonal-accent relative">
              <div className="flex items-start gap-6">
                <div className="text-6xl font-serif font-black text-navy leading-none stat-number">40%</div>
                <div>
                  <div className="font-sans font-bold text-navy text-lg leading-snug">
                    of medical doctors are women
                  </div>
                  <div className="font-sans text-gray-400 text-sm mt-2">
                    The capability has always been there — it's time to remove the barriers
                  </div>
                </div>
              </div>
            </div>

            {/* Goal */}
            <div className="reveal reveal-delay-3 bg-gold p-8 relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-32 h-32 rounded-full bg-white/10" />
              <div className="flex items-start gap-6 relative">
                <div className="text-6xl font-serif font-black text-navy leading-none stat-number">1,000</div>
                <div>
                  <div className="font-sans font-bold text-navy text-lg leading-snug">
                    Women — our mission goal
                  </div>
                  <div className="font-sans text-navy/60 text-sm mt-2">
                    Helping over 1,000 women enter aerospace as pilots, engineers, and leaders
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Barriers ────────────────────────────────────────────────────────────────
function Barriers() {
  const barriers = [
    {
      icon: Brain,
      title: 'Low Self-Esteem & Self-Efficacy',
      desc: 'Many aspiring female pilots face internal barriers. We help build the right mindset from day one.',
    },
    {
      icon: Users,
      title: 'Lack of Role Models',
      desc: "You can't be what you can't see. We create the role models the industry is missing.",
    },
    {
      icon: Scale,
      title: 'Work-Life Integration',
      desc: 'Shift work, management roles, and family life create unique pressures. We help women navigate all of it.',
    },
    {
      icon: Coins,
      title: 'Financial Barriers',
      desc: 'Pilot training is expensive. We provide financial coaching and guidance to make it achievable.',
    },
  ]

  return (
    <section className="bg-navy py-28 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="section-label reveal">Why We Exist</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mt-2 reveal reveal-delay-1">
            Barriers We <span className="italic text-gold">Address</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {barriers.map((b, i) => (
            <div
              key={b.title}
              className={`pillar-card card-hover bg-white/5 border border-white/10 p-8 reveal reveal-delay-${i + 1}`}
            >
              <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-6">
                <b.icon size={22} className="text-gold" />
              </div>
              <h3 className="font-serif font-bold text-white text-xl mb-4 leading-tight">{b.title}</h3>
              <p className="font-sans text-white/50 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Solution / 3 Pillars ────────────────────────────────────────────────────
function Solution() {
  const pillars = [
    {
      num: '01',
      icon: Users,
      label: 'The Community',
      title: 'Aerospace Family',
      desc: 'A professional, supportive community of like-minded people. Monthly online meetings in English, built on mutual respect.',
      cta: 'Join the Community',
      href: '#support',
    },
    {
      num: '02',
      icon: Brain,
      label: 'The Mindset',
      title: 'Mindset Coaching',
      desc: "Specialized cognitive training and mindset coaching for success in high-stakes environments. Using Napoleon Hill's 13 Principles.",
      cta: 'Apply for Coaching',
      href: '#programs',
    },
    {
      num: '03',
      icon: Plane,
      label: 'The Inspiration',
      title: '@PetraONAIR',
      desc: 'Real stories from real aviators — through the podcast, we provide the role models the industry is missing.',
      cta: 'Listen Now',
      href: '#podcast',
    },
  ]

  return (
    <section id="programs" className="bg-gray-50 py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <span className="section-label reveal">How We Help</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-navy mt-2 reveal reveal-delay-1">
            A Complete<br />
            <span className="italic">Support System</span>
          </h2>
          <div className="gold-line mt-6 reveal reveal-delay-2" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <div
              key={p.num}
              className={`pillar-card card-hover bg-white p-10 reveal reveal-delay-${i + 1}`}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 bg-navy flex items-center justify-center">
                  <p.icon size={24} className="text-gold" />
                </div>
                <span className="font-serif font-black text-5xl text-gray-100">{p.num}</span>
              </div>

              <span className="section-label text-gold">{p.label}</span>
              <h3 className="font-serif font-bold text-navy text-2xl mt-2 mb-4">{p.title}</h3>
              <p className="font-sans text-gray-500 text-sm leading-relaxed mb-8">{p.desc}</p>

              <a href={p.href} className="inline-flex items-center gap-2 font-sans font-semibold text-navy text-sm uppercase tracking-widest hover:text-gold transition-colors group">
                {p.cta}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Expedition Teaser ───────────────────────────────────────────────────────
function Expedition() {
  return (
    <section id="expedition" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #061729 0%, #0A2240 50%, #0d3a6e 100%)' }} />

      {/* Decorative compass rose */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5">
        <Compass size={500} className="text-white" strokeWidth={0.3} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label text-gold tracking-[0.4em] reveal">✦ Upcoming Expedition ✦</span>
            <h2 className="font-serif font-black text-white text-4xl lg:text-6xl leading-tight mt-4 reveal reveal-delay-1">
              Petra LN<br />
              <span className="italic text-gold">Florida</span><br />
              Expedition 2025
            </h2>
            <div className="gold-line mt-8 mb-8 reveal reveal-delay-2" />
            <p className="font-sans text-white/65 leading-relaxed reveal reveal-delay-2">
              A high-stakes solo flight through the Caribbean — applying Napoleon Hill's 13 Principles
              of success in real time. Including a landing at one of the world's most dangerous airports:{' '}
              <span className="text-white/90 font-medium">St. Maarten</span>.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10 reveal reveal-delay-3">
              {[
                { label: 'Route', value: 'Florida → Caribbean → St. Maarten' },
                { label: 'Partner', value: 'Flying Revue Media' },
                { label: 'Purpose', value: '13 Principles in Action' },
              ].map(item => (
                <div key={item.label} className="border-t border-gold/30 pt-4">
                  <div className="font-sans text-gold/70 text-[10px] uppercase tracking-widest mb-1">{item.label}</div>
                  <div className="font-sans text-white text-sm font-medium leading-tight">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-12 reveal reveal-delay-4">
              <a href="#expedition" className="btn-gold">Follow the Expedition</a>
              <a href="#support" className="btn-ghost">Become a Sponsor</a>
            </div>
          </div>

          {/* Visual card */}
          <div className="reveal reveal-delay-2">
            <div className="relative border border-gold/20 p-8 bg-white/3 backdrop-blur-sm">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/50" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold/50" />

              <div className="text-center py-8">
                <Plane size={64} className="text-gold/40 mx-auto mb-6" strokeWidth={1} />
                <p className="font-serif italic text-white/60 text-lg mb-6">
                  "Definiteness of Purpose — every waypoint on this journey was chosen intentionally."
                </p>
                <div className="font-sans text-gold text-xs uppercase tracking-widest">
                  Napoleon Hill · 13 Principles Applied
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Shield, text: 'St. Maarten Approach' },
                    { icon: Wind, text: 'Caribbean Route' },
                    { icon: BookOpen, text: '13 Principles Live' },
                    { icon: PlayCircle, text: 'Flying Revue Media' },
                  ].map(item => (
                    <div key={item.text} className="flex items-center gap-3">
                      <item.icon size={14} className="text-gold/60 flex-shrink-0" />
                      <span className="font-sans text-white/50 text-xs">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Podcast ─────────────────────────────────────────────────────────────────
function Podcast() {
  const episodes = [
    {
      num: 'EP 01',
      title: 'Breaking Barriers at 30,000 Feet',
      guest: 'Commercial Airline Pilot',
      desc: 'From flight school doubts to captain stripes — a raw and honest conversation about perseverance.',
    },
    {
      num: 'EP 02',
      title: 'Engineering the Future of Space',
      guest: 'Aerospace Engineer',
      desc: 'How one engineer navigated a male-dominated field and rose to lead a satellite project.',
    },
    {
      num: 'EP 03',
      title: 'The Mindset of a Test Pilot',
      guest: 'Flight Test Engineer',
      desc: 'High-pressure decisions, cognitive resilience, and what it really takes to fly the edge.',
    },
  ]

  return (
    <section id="podcast" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <span className="section-label reveal">@PetraONAIR</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-navy mt-2 leading-tight reveal reveal-delay-1">
              Real Stories<br />
              <span className="italic">from the Sky</span>
            </h2>
            <div className="gold-line mt-6 reveal reveal-delay-2" />
          </div>
          <div className="lg:pt-12">
            <p className="font-sans text-gray-500 leading-relaxed reveal reveal-delay-2">
              Every episode features an authentic conversation with a pilot, engineer, or aviation leader.
              At the end of each episode, we invite listeners to apply and become part of our story.
            </p>
            <div className="flex gap-4 mt-8 reveal reveal-delay-3">
              <a
                href="https://youtube.com/@PetraONAIR"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2"
              >
                <Youtube size={16} />
                Watch on YouTube
              </a>
              <a href="#contact" className="btn-ghost-gold inline-flex items-center gap-2">
                Share Your Story
              </a>
            </div>
          </div>
        </div>

        {/* YouTube embed placeholder */}
        <div className="reveal mb-10">
          <div className="relative w-full bg-navy" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed?listType=user_uploads&list=PetraONAIR"
              title="@PetraONAIR – Latest Episode"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            {/* Overlay if no embed loads */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy/95 pointer-events-none select-none">
              <Youtube size={64} className="text-gold/40 mb-4" strokeWidth={1} />
              <p className="font-sans text-white/40 text-sm">Latest episodes from @PetraONAIR</p>
              <p className="font-sans text-white/25 text-xs mt-1">youtube.com/@PetraONAIR</p>
            </div>
          </div>
        </div>

        {/* Episode cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {episodes.map((ep, i) => (
            <a
              key={ep.num}
              href="https://youtube.com/@PetraONAIR"
              target="_blank"
              rel="noopener noreferrer"
              className={`card-hover group bg-gray-50 border border-gray-100 p-8 reveal reveal-delay-${i + 1} block`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-sans font-bold text-gold text-xs uppercase tracking-widest">{ep.num}</span>
                <PlayCircle size={20} className="text-navy/30 group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-serif font-bold text-navy text-xl mb-2 leading-tight group-hover:text-gold transition-colors">
                {ep.title}
              </h3>
              <p className="font-sans text-gray-400 text-xs uppercase tracking-wider mb-4">{ep.guest}</p>
              <p className="font-sans text-gray-500 text-sm leading-relaxed">{ep.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Founder ──────────────────────────────────────────────────────────────────
function Founder() {
  const credentials = [
    { icon: Plane, text: '500+ Total Flight Hours' },
    { icon: Wind, text: '100+ Hours as Certified Glider Instructor' },
    { icon: Brain, text: 'Certified Aerospace Mind Coach' },
    { icon: Award, text: 'Finalist — Women Changing the World 2025' },
    { icon: Globe, text: 'Flying Revue Expedition Pilot since 2024' },
  ]

  return (
    <section id="about-founder" className="bg-navy relative overflow-hidden py-28">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)', backgroundSize: '48px 48px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <span className="section-label text-gold reveal">About the Founder</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mt-2 leading-tight reveal reveal-delay-1">
              Petra Sováková
            </h2>
            <div className="gold-line mt-6 mb-8 reveal reveal-delay-2" />

            <p className="font-sans text-white/60 leading-relaxed mb-8 reveal reveal-delay-2">
              Petra is an experienced pilot, certified Aerospace Mind Coach, and the driving force behind
              the Petra Air Foundation. Having lived the challenges of entering a male-dominated industry
              firsthand, she channelled that experience into building the support system she wished had
              existed — for herself, and for the thousands of women who will come after her.
            </p>

            {/* Credentials */}
            <div className="space-y-3 reveal reveal-delay-3">
              {credentials.map(c => (
                <div key={c.text} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <c.icon size={14} className="text-gold" />
                  </div>
                  <span className="font-sans text-white/75 text-sm">{c.text}</span>
                </div>
              ))}
            </div>

            <a href="#support" className="btn-gold mt-10 inline-block reveal reveal-delay-4">
              Meet Petra's Mission
            </a>
          </div>

          {/* Award + WWII side */}
          <div className="space-y-6 reveal reveal-delay-2">
            {/* Award card */}
            <div className="border border-gold/30 bg-gold/5 p-8 backdrop-blur-sm relative">
              <div className="absolute top-4 right-4">
                <Star size={16} className="text-gold" />
              </div>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <Award size={28} className="text-gold" />
                </div>
                <div>
                  <div className="font-sans text-gold text-xs uppercase tracking-widest mb-2">Award Recognition</div>
                  <h3 className="font-serif font-bold text-white text-xl leading-tight">
                    Women Changing the World 2025
                  </h3>
                  <p className="font-sans text-white/50 text-sm mt-2">
                    Finalist — Diversity & Inclusion Category<br />
                    Czech & Slovak Edition
                  </p>
                </div>
              </div>
              <div className="mt-6 border-t border-gold/20 pt-4">
                <p className="font-sans text-white/40 text-xs italic leading-relaxed">
                  Award certificate photo to be placed here — client to provide high-resolution image.
                </p>
              </div>
            </div>

            {/* WWII Historical context */}
            <div className="bg-white/5 border border-white/10 p-8">
              <div className="section-label text-gold mb-4">Historical Legacy</div>
              <h3 className="font-serif font-bold text-white text-xl mb-4">Standing on the Shoulders of Giants</h3>
              <p className="font-sans text-white/55 text-sm leading-relaxed">
                During World War II, women were an indispensable part of aviation. They served as pilots,
                engineers, and logistical backbones — and their contribution was crucial to the outcome
                of the war. We draw direct inspiration from that legacy.{' '}
                <span className="text-white/75">The capability has always been there.</span>{' '}
                It's time to remove the barriers that remain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Partners ────────────────────────────────────────────────────────────────
function Partners() {
  const partners = [
    { name: 'Flying Revue', role: 'Media Partner since 2024', icon: Globe },
    { name: 'Partner 2', role: 'Flight School Partner', icon: Plane },
    { name: 'Partner 3', role: 'Corporate Sponsor', icon: Shield },
    { name: 'Partner 4', role: 'Training Partner', icon: Wind },
    { name: 'Partner 5', role: 'Technology Sponsor', icon: Zap },
  ]

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <span className="section-label reveal">Our Partners</span>
          <h2 className="font-serif text-3xl font-bold text-navy mt-2 reveal reveal-delay-1">
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-8 marquee-track" style={{ width: 'max-content' }}>
            {[...partners, ...partners].map((p, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-48 border border-gray-200 bg-white p-6 flex flex-col items-center gap-3 hover:border-gold/50 transition-colors"
              >
                <div className="w-12 h-12 bg-navy/5 flex items-center justify-center">
                  <p.icon size={20} className="text-navy/40" />
                </div>
                <div className="text-center">
                  <div className="font-sans font-semibold text-navy text-sm">{p.name}</div>
                  <div className="font-sans text-gray-400 text-[10px] uppercase tracking-wider mt-1">{p.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center font-sans text-gray-400 text-xs mt-8 reveal">
          Partner logos to be replaced with actual high-resolution assets upon handoff
        </p>
      </div>
    </section>
  )
}

// ─── Get Involved / Donate ───────────────────────────────────────────────────
function GetInvolved() {
  const [donationAmount, setDonationAmount] = useState(50)
  const [customAmount, setCustomAmount] = useState('')
  const [donationType, setDonationType] = useState('once')

  const tiers = [
    { amount: 25, label: '€25', desc: 'One month of community access' },
    { amount: 50, label: '€50', desc: 'Full mindset coaching session' },
    { amount: 100, label: '€100', desc: 'Contributes to glider training' },
    { amount: 500, label: '€500', desc: 'Sponsors expedition leg' },
  ]

  return (
    <section id="support" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="section-label reveal">Get Involved</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-navy mt-2 reveal reveal-delay-1">
            Three Ways to <span className="italic text-gold">Make a Difference</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* For Individuals */}
          <div className="reveal reveal-delay-1 pillar-card border border-gray-100 p-10 bg-gray-50">
            <div className="w-12 h-12 bg-navy flex items-center justify-center mb-6">
              <Users size={22} className="text-gold" />
            </div>
            <span className="section-label text-navy/50">For Women in Aerospace</span>
            <h3 className="font-serif font-bold text-navy text-2xl mt-2 mb-4">Start Your Journey</h3>
            <p className="font-sans text-gray-500 text-sm leading-relaxed mb-8">
              Access the Aerospace Family Community, monthly online forums, mindset resources,
              and direct coaching access from Petra.
            </p>
            <div className="space-y-2 mb-8">
              {['Community access', 'Monthly online meetings', 'Mindset coaching', 'Networking with industry'].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <ChevronRight size={12} className="text-gold flex-shrink-0" />
                  <span className="font-sans text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn-gold w-full text-center block">Join the Community</a>
          </div>

          {/* Donation */}
          <div className="reveal reveal-delay-2 border-2 border-navy p-10 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold px-4 py-1">
              <span className="font-sans font-bold text-navy text-[10px] uppercase tracking-widest">Most Impactful</span>
            </div>
            <div className="w-12 h-12 bg-gold flex items-center justify-center mb-6">
              <Heart size={22} className="text-navy" />
            </div>
            <span className="section-label text-navy/50">For Donors</span>
            <h3 className="font-serif font-bold text-navy text-2xl mt-2 mb-4">Fund a Pilot's Path</h3>

            {/* Donation type toggle */}
            <div className="flex gap-2 mb-6">
              {[{ val: 'once', label: 'One-time' }, { val: 'monthly', label: 'Monthly' }].map(t => (
                <button
                  key={t.val}
                  onClick={() => setDonationType(t.val)}
                  className={`flex-1 py-2 font-sans text-xs font-semibold uppercase tracking-widest transition-colors ${
                    donationType === t.val
                      ? 'bg-navy text-white'
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Amount selector */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {tiers.map(t => (
                <button
                  key={t.amount}
                  onClick={() => { setDonationAmount(t.amount); setCustomAmount('') }}
                  className={`p-3 border text-center transition-all ${
                    donationAmount === t.amount && !customAmount
                      ? 'border-gold bg-gold/5'
                      : 'border-gray-200 hover:border-navy/30'
                  }`}
                >
                  <div className="font-serif font-bold text-navy">{t.label}</div>
                  <div className="font-sans text-[10px] text-gray-400 leading-tight mt-1">{t.desc}</div>
                </button>
              ))}
            </div>

            <input
              type="number"
              placeholder="Custom amount (€)"
              value={customAmount}
              onChange={e => { setCustomAmount(e.target.value); setDonationAmount(null) }}
              className="w-full border border-gray-200 focus:border-navy outline-none px-4 py-3 font-sans text-sm mb-6 transition-colors"
            />

            <button className="btn-gold w-full block text-center">
              Donate {customAmount ? `€${customAmount}` : `€${donationAmount}`}
              {donationType === 'monthly' ? '/mo' : ''}
            </button>

            <p className="font-sans text-gray-400 text-[10px] text-center mt-4">
              GDPR compliant · Stripe secure payment · No data sold
            </p>
          </div>

          {/* Corporate */}
          <div className="reveal reveal-delay-3 pillar-card border border-gray-100 p-10 bg-gray-50">
            <div className="w-12 h-12 bg-navy flex items-center justify-center mb-6">
              <Globe size={22} className="text-gold" />
            </div>
            <span className="section-label text-navy/50">For Companies</span>
            <h3 className="font-serif font-bold text-navy text-2xl mt-2 mb-4">Partner With Us</h3>
            <p className="font-sans text-gray-500 text-sm leading-relaxed mb-8">
              Build a more diverse aerospace industry while gaining co-branding on an award-recognised
              foundation, podcast, and expedition coverage.
            </p>
            <div className="space-y-2 mb-8">
              {['Logo placement on website', 'Flying Revue co-branding', 'Podcast sponsorship', 'CSR/DEI recognition'].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <ChevronRight size={12} className="text-gold flex-shrink-0" />
                  <span className="font-sans text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn-ghost-gold w-full text-center block">Become a Partner</a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Final CTA ────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="relative py-28 overflow-hidden grain">
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(160deg, #0A2240 0%, #061729 100%)' }} />

      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-gold/10" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border border-gold/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/3" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <span className="section-label text-gold tracking-[0.4em] reveal">Our Goal</span>
        <h2 className="font-serif font-black text-white mt-4 leading-tight reveal reveal-delay-1"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
          Help Us Reach Our Goal —<br />
          <span className="italic text-gold">1,000 Women in Aerospace</span>
        </h2>
        <p className="font-sans text-white/55 mt-6 text-lg leading-relaxed reveal reveal-delay-2">
          Every donation, every partnership, every shared story brings us closer.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 reveal reveal-delay-3">
          <a href="#support" className="btn-gold">Donate Today</a>
          <a href="#contact" className="btn-ghost">Get in Touch</a>
        </div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General Inquiry', message: '', gdpr: false })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production: connect to backend/form service
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="section-label reveal">Contact</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-navy mt-2 reveal reveal-delay-1">
              Let's <span className="italic">Connect</span>
            </h2>
            <div className="gold-line mt-6 mb-8 reveal reveal-delay-2" />

            <p className="font-sans text-gray-500 leading-relaxed reveal reveal-delay-2">
              We respond to all messages within 48 hours.
            </p>

            <div className="space-y-6 mt-10 reveal reveal-delay-3">
              {[
                { icon: Mail, label: 'Email', value: 'info@petra-air.cz' },
                { icon: Globe, label: 'Web', value: 'petra-air.cz' },
                { icon: MapPin, label: 'Region', value: 'Czech Republic / Europe' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-navy/5 flex items-center justify-center">
                    <item.icon size={16} className="text-navy" />
                  </div>
                  <div>
                    <div className="font-sans text-[10px] text-gray-400 uppercase tracking-wider">{item.label}</div>
                    <div className="font-sans text-navy text-sm font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-10 reveal reveal-delay-4">
              {[
                { icon: Youtube, href: 'https://youtube.com/@PetraONAIR', label: 'YouTube' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gold hover:text-gold transition-colors"
                  aria-label={s.label}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="reveal reveal-delay-2">
            {submitted ? (
              <div className="bg-navy p-12 text-center">
                <Send size={40} className="text-gold mx-auto mb-4" />
                <h3 className="font-serif text-white text-2xl mb-3">Message Received</h3>
                <p className="font-sans text-white/60 text-sm">We'll get back to you within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-sans text-[10px] text-gray-400 uppercase tracking-wider block mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      className="w-full border border-gray-200 focus:border-navy outline-none px-4 py-3 font-sans text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-[10px] text-gray-400 uppercase tracking-wider block mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      className="w-full border border-gray-200 focus:border-navy outline-none px-4 py-3 font-sans text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-sans text-[10px] text-gray-400 uppercase tracking-wider block mb-2">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={e => setFormData(p => ({ ...p, subject: e.target.value }))}
                    className="w-full border border-gray-200 focus:border-navy outline-none px-4 py-3 font-sans text-sm transition-colors bg-white"
                  >
                    {['General Inquiry', 'Partnership', 'Donation', 'Media', 'Expedition', 'Application'].map(s => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-sans text-[10px] text-gray-400 uppercase tracking-wider block mb-2">Message</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    className="w-full border border-gray-200 focus:border-navy outline-none px-4 py-3 font-sans text-sm transition-colors resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="gdpr"
                    required
                    checked={formData.gdpr}
                    onChange={e => setFormData(p => ({ ...p, gdpr: e.target.checked }))}
                    className="mt-1 flex-shrink-0 accent-navy"
                  />
                  <label htmlFor="gdpr" className="font-sans text-gray-400 text-xs leading-relaxed">
                    I consent to Petra Air Foundation storing my data to respond to this inquiry.
                    Data will not be shared with third parties. (GDPR)
                  </label>
                </div>

                <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
                  <Send size={14} />
                  Send Message
                </button>
              </form>
            )}

            {/* Newsletter */}
            <div className="mt-8 border border-gray-100 bg-gray-50 p-6">
              <div className="font-sans font-semibold text-navy text-sm mb-1">Newsletter</div>
              <p className="font-sans text-gray-400 text-xs mb-4">
                Get notified when new episodes drop — and be first to hear about expedition updates.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 border border-gray-200 focus:border-navy outline-none px-4 py-3 text-sm font-sans transition-colors"
                />
                <button className="bg-navy text-white px-6 py-3 font-sans text-xs uppercase tracking-widest hover:bg-navy-light transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1 - Brand */}
          <div>
            <div className="mb-4">
              <div className="font-serif font-bold text-white text-xl">PETRA AIR</div>
              <div className="font-sans font-semibold text-gold text-[10px] uppercase tracking-[0.3em] mt-0.5">Foundation</div>
            </div>
            <p className="font-sans text-white/40 text-sm leading-relaxed">
              Supporting Women in Aerospace — Aviation + Space Industry. We respect men and women equally.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { icon: Youtube, href: 'https://youtube.com/@PetraONAIR' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 border border-white/20 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/50 transition-colors">
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 - Quick Links */}
          <div>
            <div className="font-sans font-semibold text-white text-xs uppercase tracking-widest mb-6">Quick Links</div>
            <div className="space-y-3">
              {['About', 'Programs', 'Expedition', 'Podcast', 'Support', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`}
                  className="block font-sans text-white/40 text-sm hover:text-gold transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3 - Programs */}
          <div>
            <div className="font-sans font-semibold text-white text-xs uppercase tracking-widest mb-6">Programs</div>
            <div className="space-y-3">
              {['Aerospace Family Community', 'Mindset Training', 'Glider Training', 'Florida Expedition', '@PetraONAIR Podcast'].map(p => (
                <a key={p} href="#programs"
                  className="block font-sans text-white/40 text-sm hover:text-gold transition-colors">
                  {p}
                </a>
              ))}
            </div>
          </div>

          {/* Col 4 - Partners */}
          <div>
            <div className="font-sans font-semibold text-white text-xs uppercase tracking-widest mb-6">Partners</div>
            <div className="border border-white/10 p-4 mb-4">
              <div className="flex items-center gap-3">
                <Globe size={20} className="text-gold/50 flex-shrink-0" />
                <div>
                  <div className="font-sans font-semibold text-white/70 text-sm">Flying Revue</div>
                  <div className="font-sans text-white/30 text-[10px] uppercase tracking-wider mt-0.5">Media Partner since 2024</div>
                </div>
              </div>
            </div>
            <p className="font-sans text-white/25 text-xs">
              Additional partner logos to be added upon handoff.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-white/25 text-xs">
            © 2026 Petra Air Foundation · petra-air.cz
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'GDPR'].map(link => (
              <a key={link} href="#" className="font-sans text-white/25 text-xs hover:text-gold/70 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Cookie Banner ────────────────────────────────────────────────────────────
function CookieBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-navy-dark border-t border-gold/20 px-6 py-5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="font-sans text-white/60 text-xs leading-relaxed max-w-2xl">
          We use cookies to improve your experience on petra-air.cz and to analyse our traffic.
          By clicking "Accept", you consent to our use of cookies in accordance with our{' '}
          <a href="#" className="text-gold hover:underline">Privacy Policy</a>.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={() => setVisible(false)}
            className="font-sans text-white/40 text-xs hover:text-white transition-colors px-4 py-2"
          >
            Decline
          </button>
          <button
            onClick={() => setVisible(false)}
            className="btn-gold text-xs py-2 px-6"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  useScrollReveal()

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <TheProblem />
        <Barriers />
        <Solution />
        <Expedition />
        <Podcast />
        <Founder />
        <Partners />
        <GetInvolved />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
