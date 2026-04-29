'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';
import styles from './ClientTrust.module.css';

gsap.registerPlugin(ScrollTrigger);

const websites = [
  { name: "Compounded Path", href: "https://compoundedpath.com" },
  { name: "Learn Bible Languages", href: "https://learnbiblelanguages.org" },
  { name: "The Pauline Higgins Foundation Inc", href: "https://paulinehigginsfoundation.org" },
  { name: "Hunter's Holistic Health", href: "https://huntersholistichealth.com/" },
  { name: "GLPRoot", href: "https://glproot.com" },
  { name: "DeIDGuard", href: "https://deidguard.com" },
];

export default function ClientTrust() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: 'power4.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
      gsap.fromTo(rightRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: 'power4.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left: client review */}
          <div ref={leftRef} className={styles.reviewCard}>
            <p className="section-kicker">Client trust</p>
            <h2 className={`section-headline ${styles.title}`}>
              Professional, kind, and easy to work with.
            </h2>
            <p className={styles.body}>
              What clients say after working with Dr. Hunter, in their own words.
            </p>
            <div className={styles.reviewImageWrap}>
              <img src="/client-review.png" alt="5-star client review for Dr. Shallanda Hunter" className={styles.reviewImg} />
              <div className={styles.nameBlur} />
            </div>
          </div>

          {/* Right: also built + positioning note */}
          <div ref={rightRef} className={styles.rightCol}>
            <div>
              <p className="section-kicker">Also built</p>
              <h2 className={`section-headline ${styles.alsoTitle}`}>Selected websites and platforms</h2>
            </div>

            <div className={styles.websiteList}>
              {websites.map((site) => (
                <a
                  key={site.name}
                  href={site.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.websiteRow}
                >
                  <span>{site.name}</span>
                  <ExternalLink size={14} />
                </a>
              ))}
            </div>

            <div className={styles.positionNote}>
              <p className={styles.positionNoteKicker}>Healthcare expertise meets builder precision</p>
              <p className={styles.positionNoteBody}>
                Every engagement is grounded in clinical credibility, practical implementation, and a genuine
                commitment to outcomes, not just deliverables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
