'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { UserRound, Stethoscope, Star, ChevronRight, ChevronLeft } from 'lucide-react';
import styles from './Testimonials.module.css';

gsap.registerPlugin(ScrollTrigger);

const MISSION_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663094779485/mne9ZDoMYpFEH7LXCxpfnb/shallanda-mission-story-panel-VSHpzfFdRwRm64sShrprhp.webp';

const testimonials = [
  {
    name: 'Healthcare Client',
    role: 'Website Project',
    quote: 'Professional, kind, and incredibly easy to work with. Dr. Hunter delivered exactly what I needed and went above and beyond to make sure the final result felt polished and aligned with my brand.',
  },
  {
    name: 'Women in Healthcare',
    role: 'AI Education Student',
    quote: 'She makes AI feel approachable rather than overwhelming. I went from not knowing where to start to actually implementing tools in my practice within weeks. That shift in confidence was everything.',
  },
  {
    name: 'Healthcare Entrepreneur',
    role: 'Product Strategy Client',
    quote: 'What sets Dr. Hunter apart is that she understands the clinical side AND the product side. That combination is rare. She helped me think through my idea in a way no one else had been able to.',
  },
];

const roots = [
  { letter: 'R', label: 'Review', desc: 'The journey begins with a meticulous review of your unique biological and personal landscape, uncovering the underlying signals and imbalances contributing to your condition through comprehensive assessment and targeted testing.' },
  { letter: 'O', label: 'Optimize Nutrition', desc: 'Nutrition is communication with the body\'s machinery. This pillar moves beyond "calories in, calories out" to how food influences your genes, hormones, and cellular processes, supporting balance and reducing inflammation.' },
  { letter: 'O', label: 'Optimize Biochemical Balance', desc: 'Addressing the cellular ecosystem beneath visible symptoms, from gut microbiome support to targeted supplementation, restoring the microscopic factors that profoundly impact how you feel and function.' },
  { letter: 'T', label: 'Transform Lifestyle', desc: 'True health cannot be achieved through diet alone. This pillar transforms how you sleep, manage stress, move, and navigate your environment, recognizing lifestyle as a powerful driver of your overall wellbeing.' },
  { letter: 'S', label: 'Sustain & Adapt', desc: 'The goal is not rigid rules that break under pressure. It is flexible systems and habits that evolve with your life. This pillar makes health a sustainable, lifelong practice built around you.' },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const aboutRef = useRef(null);
  const missionRef = useRef(null);
  const authorityRef = useRef(null);
  const rootsRef = useRef(null);
  const cardRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(aboutRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out',
          scrollTrigger: { trigger: aboutRef.current, start: 'top 85%' } }
      );
      gsap.fromTo(missionRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out',
          scrollTrigger: { trigger: missionRef.current, start: 'top 82%' } }
      );
      gsap.fromTo(authorityRef.current?.children ? [...authorityRef.current.children] : [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: authorityRef.current, start: 'top 80%' } }
      );
      const pills = rootsRef.current?.querySelectorAll('[data-pill]');
      if (pills) {
        gsap.fromTo(pills,
          { y: 30, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 0.6, ease: 'back.out(1.3)',
            scrollTrigger: { trigger: rootsRef.current, start: 'top 80%' } }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const go = (dir) => {
    if (animating) return;
    setAnimating(true);
    gsap.to(cardRef.current, {
      x: dir === 'next' ? -40 : 40, opacity: 0, duration: 0.3, ease: 'power2.in',
      onComplete: () => {
        setCurrent(prev => (prev + (dir === 'next' ? 1 : -1) + testimonials.length) % testimonials.length);
        gsap.fromTo(cardRef.current,
          { x: dir === 'next' ? 40 : -40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.45, ease: 'power3.out', onComplete: () => setAnimating(false) }
        );
      }
    });
  };

  const t = testimonials[current];

  return (
    <section ref={sectionRef} id="about" className={styles.section}>
      <div className="container">

        {/* ── About Me ── */}
        <div ref={aboutRef} className={styles.aboutGrid}>
          <div className={styles.aboutLeft}>
            <p className="section-kicker">About me</p>
            <h2 className={`section-headline ${styles.aboutTitle}`}>
              A personal brand shaped by healthcare depth, builder energy, and lived mission.
            </h2>
            <p className={styles.aboutBody}>
              My work sits at the meeting point of education, healthcare strategy, and product execution.
              I have spent years building clinical credibility, translating health concepts for real people,
              and creating systems that make complex information more usable.
            </p>
            <p className={styles.aboutBody}>
              Today, I am focused on a hybrid portfolio that reflects who I actually am: a PharmD educator,
              a founder, and an AI-enabled builder. I care about helping women in healthcare understand what
              is possible with AI, while also demonstrating through my own work that ideas can move from
              concept to real tools.
            </p>
            <p className={styles.aboutBody}>
              My story is also personal. The mission behind my work is deeply rooted in family, healing, and
              the conviction that expertise should create practical transformation.
            </p>
          </div>

          {/* Mission backdrop card */}
          <div ref={missionRef} className={styles.missionCard}>
            <div className={styles.missionBg}>
              <img src={MISSION_BG} alt="" className={styles.missionBgImg} />
              <div className={styles.missionBgOverlay} />
            </div>
            <div className={styles.missionContent}>
              <div className={styles.missionTop}>
                <div className={styles.storyCard}>
                  <UserRound size={28} style={{ color: '#144445', marginBottom: '12px' }} />
                  <h3 className={styles.storyHeading}>Personal brand for AI work</h3>
                  <p className={styles.storyCopy}>I use my personal name for AI education, implementation, and builder-focused work so the portfolio clearly represents my voice and range.</p>
                </div>
                <div className={styles.storyCard}>
                  <Stethoscope size={28} style={{ color: '#144445', marginBottom: '12px' }} />
                  <h3 className={styles.storyHeading}>Sugar Functional PharmD for health content</h3>
                  <p className={styles.storyCopy}>My health-focused social presence remains a strong supporting brand, especially for GLP-1 education and patient-facing trust.</p>
                </div>
              </div>
              <div className={styles.standoutCard}>
                <p className={styles.standoutKicker}>How I stand out</p>
                <div className={styles.standoutStats}>
                  <div>
                    <p className={styles.statNum}>Clinical</p>
                    <p className={styles.statLabel}>Grounded in healthcare authority rather than borrowed credibility.</p>
                  </div>
                  <div>
                    <p className={styles.statNum}>Builder</p>
                    <p className={styles.statLabel}>I translate ideas into shipped experiences, not just presentations.</p>
                  </div>
                  <div>
                    <p className={styles.statNum}>Teacher</p>
                    <p className={styles.statLabel}>I make AI implementation understandable for women in healthcare.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Authority & ROOTS ── */}
        <div className={styles.authoritySection}>
          <div className={styles.authorityLeft}>
            <p className="section-kicker">Authority and methodology</p>
            <h2 className={`section-headline ${styles.authorityTitle}`}>
              Healthcare experience gives the work weight. The ROOTS Framework gives it shape.
            </h2>
            <p className={styles.authorityBody}>
              Clinical authority, builder execution, and teaching clarity.
              Three rare things in one person, and a through-line connecting everything I create.
            </p>
          </div>
          <div ref={authorityRef} className={styles.authorityGrid}>
            {[
              { title: 'GLP-1 educator', copy: 'I translate metabolic health, medication support, and practical daily decision-making into usable guidance people can act on.' },
              { title: 'Pharmacy credibility', copy: 'My clinical background adds depth, precision, and trust to the tools and education experiences I create.' },
              { title: 'AI implementation support', copy: 'I help make AI practical, especially for women in healthcare who want more than vague inspiration.' },
              { title: 'ROOTS Framework', copy: 'A method-centered lens that connects lifestyle, clinical thinking, and human-centered product support without overclaiming outcomes.' },
            ].map(({ title, copy }) => (
              <div key={title} className={styles.authorityCard}>
                <p className={styles.authorityCardTitle}>{title}</p>
                <p className={styles.authorityCardCopy}>{copy}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── ROOTS Framework pills ── */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <span className="label">✦ My Methodology</span>
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              The <span style={{ color: '#c8a74b' }}>ROOTS</span> Framework
            </h3>
          </div>
          <div ref={rootsRef} className={styles.rootsGrid}>
            {roots.map(({ letter, label, desc }, i) => (
              <div key={i} data-pill className={styles.rootsPill}>
                <span className={styles.rootsLetter}>{letter}</span>
                <strong className={styles.rootsLabel}>{label}</strong>
                <p className={styles.rootsDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Testimonials ── */}
        <div className={styles.testimonialWrap}>
          <div className={styles.avatarCol}>
            <div className={styles.avatarCard}>
              <img src="/headshot.jpg" alt="Dr. Shallanda Hunter, PharmD — functional pharmacist and healthcare product builder" className={styles.avatarImg} />
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '12px', textAlign: 'center' }}>Client trust</p>
          </div>

          <div ref={cardRef} className={styles.quoteCard}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#c8a74b" color="#c8a74b" />)}
            </div>
            <blockquote className={styles.quote}>"{t.quote}"</blockquote>
            <div className={styles.attribution}>
              <div className={styles.dot} />
              <div>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.role}>{t.role}</div>
              </div>
            </div>
            <div className={styles.controls}>
              <button onClick={() => go('prev')} className={styles.ctrl} aria-label="Previous">
                <ChevronLeft size={18} />
              </button>
              <div className={styles.dots}>
                {testimonials.map((_, i) => (
                  <span key={i} className={`${styles.pip} ${i === current ? styles.pipActive : ''}`} />
                ))}
              </div>
              <button onClick={() => go('next')} className={styles.ctrl} aria-label="Next">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
