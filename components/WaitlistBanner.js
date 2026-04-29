'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles } from 'lucide-react';
import styles from './WaitlistBanner.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function WaitlistBanner() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, ease: 'power4.out',
          scrollTrigger: { trigger: ref.current, start: 'top 88%' } }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={styles.banner}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <Sparkles size={20} className={styles.icon} />
            <div>
              <p className={styles.kicker}>Coming soon: I Can Teach You AI</p>
              <p className={styles.body}>
                Practical AI education built specifically for women in healthcare who want real
                traction, not just inspiration. The waitlist is open now.
              </p>
            </div>
          </div>
          <a
            href="https://7okk9tiuv6.zite.so"
            target="_blank"
            rel="noreferrer"
            className={styles.cta}
          >
            Join the waitlist <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
