'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Contact.module.css';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CTA_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663094779485/mne9ZDoMYpFEH7LXCxpfnb/shallanda-contact-cta-glow-LSaztLHxHUCGUcL43R3tt7.webp';

export default function Contact() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power4.out',
          scrollTrigger: { trigger: cardRef.current, start: 'top 82%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className={styles.section}>
      {/* CDN backdrop */}
      <div className={styles.backdrop}>
        <img src={CTA_BG} alt="" className={styles.backdropImg} />
        <div className={styles.backdropOverlay} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div ref={cardRef} className={styles.card}>
          <div className={styles.cardGrid}>
            <div className={styles.cardLeft}>
              <p className="section-kicker">Contact</p>
              <h2 className={styles.headline}>
                If you want someone who understands healthcare and can build with AI, let's talk.
              </h2>
              <p className={styles.body}>
                Whether you are exploring education, product strategy, healthcare communication,
                or AI implementation support, I bring both subject matter depth and builder instinct
                to the conversation.
              </p>
            </div>

            <div className={styles.cardRight}>
              <a href="mailto:info@huntersholistichealth.com" className={styles.emailCta}>
                Email me
                <ArrowRight size={16} />
              </a>
              <div className={styles.comingSoonBox}>
                <p className={styles.comingSoonKicker}>Coming soon</p>
                <p className={styles.comingSoonTitle}>I Can Teach You AI</p>
                <p className={styles.comingSoonBody}>
                  A coming-soon waitlist and education experience for women in healthcare who want practical AI traction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
