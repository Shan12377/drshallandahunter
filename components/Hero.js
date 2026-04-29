'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { LinkedInIcon, InstagramIcon, YoutubeIcon, TikTokIcon } from './SocialIcons';
import styles from './Hero.module.css';

gsap.registerPlugin(ScrollTrigger);

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663094779485/mne9ZDoMYpFEH7LXCxpfnb/shallanda-hero-editorial-clinical-luxury-hwHFBGXoRVdh6DTWFQnRYa.webp';

const principles = [
  'PharmD-level healthcare credibility paired with practical product execution.',
  'AI teaching and implementation designed for women in healthcare who want traction, not just theory.',
  'Certified in Google AI and Claude AI, grounded in clinical pharmacy, MBA strategy, and functional nutrition methodology.',
];

export default function Hero() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);
  const wavyRef = useRef(null);
  const socialsRef = useRef(null);
  const principlesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word');
        tl.fromTo(words,
          { y: 120, opacity: 0, rotateX: -20 },
          { y: 0, opacity: 1, rotateX: 0, stagger: 0.06, duration: 0.9, ease: 'power4.out' }
        );
      }

      tl.fromTo(subRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4'
      );

      tl.fromTo(socialsRef.current?.children ? [...socialsRef.current.children] : [],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: 'power3.out' }, '-=0.4'
      );

      tl.fromTo(ctaRef.current?.children ? [...ctaRef.current.children] : [],
        { y: 20, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 0.6, ease: 'back.out(1.4)' }, '-=0.3'
      );

      tl.fromTo(imageRef.current,
        { x: 60, opacity: 0, scale: 1.05 },
        { x: 0, opacity: 1, scale: 1, duration: 1.1, ease: 'power4.out' }, '-=0.8'
      );

      if (principlesRef.current) {
        tl.fromTo(principlesRef.current.children,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power3.out' }, '-=0.6'
        );
      }

      if (wavyRef.current) {
        const path = wavyRef.current.querySelector('path');
        if (path) {
          const len = path.getTotalLength();
          gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
          tl.to(path, { strokeDashoffset: 0, duration: 1.8, ease: 'power2.inOut' }, '-=1.4');
        }
      }

      gsap.to(imageRef.current, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1.5 }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headline = ['I Build', 'Healthcare'];

  const socials = [
    { Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/dr-shallanda-hunter', label: 'LinkedIn' },
    { Icon: InstagramIcon, href: 'https://www.instagram.com/sugarfunctionalpharmd/', label: 'Instagram' },
    { Icon: YoutubeIcon, href: 'https://www.youtube.com/@sugarfunctionalpharmd', label: 'YouTube' },
    { Icon: TikTokIcon, href: 'https://www.tiktok.com/@sugarfunctionalph0?lang=en', label: 'TikTok' },
  ];

  return (
    <section ref={sectionRef} id="home" className={styles.hero}>
      {/* CDN backdrop image */}
      <div className={styles.backdrop}>
        <img src={HERO_BG} alt="" className={styles.backdropImg} />
        <div className={styles.backdropOverlay} />
      </div>

      {/* Gold wavy SVG spark */}
      <svg ref={wavyRef} className={styles.wavy} viewBox="0 0 1400 400" fill="none" preserveAspectRatio="xMidYMid slice">
        <path
          d="M-50 200 C150 80, 300 320, 500 200 S800 60, 1000 200 S1250 340, 1450 200"
          stroke="#c8a74b"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>

      <div className={`container ${styles.grid}`}>
        <div className={styles.left}>
          <span className="label" style={{ marginBottom: '24px', display: 'inline-flex' }}>
            ✦ PharmD · MBA · CFNMP · Google AI Certified · Claude AI Certified
          </span>

          <h1 ref={headlineRef} className={styles.headline} style={{ perspective: '600px' }}>
            {headline.map((word, wi) => (
              <span key={wi} className={styles.wordWrap} style={{ display: 'block', overflow: 'hidden', lineHeight: 1 }}>
                <span className="word" style={{ display: 'block' }}>{word}</span>
              </span>
            ))}
            <span style={{ overflow: 'hidden', display: 'block', lineHeight: 1 }}>
              <span className="word" style={{ display: 'block', color: '#c8a74b' }}>with AI.</span>
            </span>
          </h1>

          <p ref={subRef} className={styles.sub}>
            I am Dr. Shallanda Hunter, PharmD, MBA, CFNMP. Pharmacist, educator, founder, and builder creating
            practical systems at the intersection of healthcare, AI, and patient-centered innovation.
          </p>

          <div ref={socialsRef} className={styles.socials}>
            {socials.map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label={label}>
                <Icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>

          <div ref={ctaRef} className={styles.ctas}>
            <a href="mailto:info@huntersholistichealth.com" className="btn-primary">
              Email Me <ArrowRight size={16} />
            </a>
            <a href="#work" className="btn-ghost">
              See Selected Work
            </a>
          </div>

          {/* Principle cards (from Manus) */}
          <div ref={principlesRef} className={styles.principles}>
            {principles.map((item, i) => (
              <div key={i} className={styles.principleCard}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div ref={imageRef} className={styles.right}>
          <div className={styles.photoWrap}>
            <div className={styles.photoGlow} />
            <div className={styles.photoFrame}>
              <span className="label" style={{ marginBottom: '12px', fontSize: '0.68rem' }}>Founder portrait</span>
              <div className={styles.photo}>
                <div className={styles.photoInner}>
                  <img src="/headshot-blue.jpg" alt="Dr. Shallanda Hunter, PharmD — GLP-1 Educator and AI Implementation Architect" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
                </div>
              </div>
            </div>

            <div className={styles.positioningCard}>
              <p className={styles.positioningKicker}>Current positioning</p>
              <h2 className={styles.positioningTitle}>GLP-1 educator and AI builder</h2>
              <p className={styles.positioningBody}>Building practical healthcare products, education systems, compliant workflows, and AI-enabled experiences rooted in real-world expertise.</p>
            </div>

            <div className={styles.proofRow}>
              <div className={styles.proofItem}>
                <p className={styles.proofLabel}>Big win</p>
                <p className={styles.proofTitle}>I Can Teach You AI</p>
                <p className={styles.proofBody}>Coming soon with waitlist positioning for women in healthcare.</p>
              </div>
              <div className={styles.proofItem}>
                <p className={styles.proofLabel}>Method</p>
                <p className={styles.proofTitle}>ROOTS Framework</p>
                <p className={styles.proofBody}>A grounded health methodology connecting your clinical story to your portfolio.</p>
              </div>
            </div>

            <div className={styles.selectiveProof}>
              <span className={styles.selectiveKicker}>Selected Builds</span>
              <span className={styles.selectiveList}>GLPRoot · VitaPlate AI · ClinMotion · DeIDGuard</span>
            </div>
          </div>

          <div className={styles.scrollHint}>
            <div className={styles.scrollLine} />
            <span>Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
}
