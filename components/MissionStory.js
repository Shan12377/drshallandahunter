'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './MissionStory.module.css';

gsap.registerPlugin(ScrollTrigger);

const FOUNDATION_PHOTO = '/pauline-higgins-foundation.jpg';
const FOUNDATION_LOGO = '/pauline-higgins-logo.png';

export default function MissionStory() {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);
  const beatsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(quoteRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power4.out',
          scrollTrigger: { trigger: quoteRef.current, start: 'top 85%' } }
      );
      gsap.fromTo(
        beatsRef.current?.children ? [...beatsRef.current.children] : [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: beatsRef.current, start: 'top 82%' } }
      );
      gsap.fromTo(imageRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.1, ease: 'power4.out',
          scrollTrigger: { trigger: imageRef.current, start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className="container">
        <div className={styles.grid}>

          <div className={styles.left}>
            <p className="section-kicker">The why behind the work</p>

            <blockquote ref={quoteRef} className={styles.pullQuote}>
              "I reversed my metabolic condition twice. Not once. Twice. Full stop."
            </blockquote>

            <div ref={beatsRef} className={styles.beats}>
              <div className={styles.beat}>
                <span className={styles.beatAccent}>Personal</span>
                <p className={styles.beatText}>
                  My relationship with metabolic health is not theoretical. I lived it, studied it,
                  and applied every clinical and functional tool I had. And reversed it. Twice.
                  That experience is the reason the ROOTS Framework exists and why I believe in
                  systems over willpower, every single time.
                </p>
              </div>
              <div className={styles.beat}>
                <span className={styles.beatAccent}>Mission</span>
                <p className={styles.beatText}>
                  I founded The Pauline Higgins Foundation Inc to bring awareness to ovarian cancer
                  and its deeply underrecognized connection to metabolic health. The clinical work,
                  the education, the builder work. All of it feeds back into a mission that is
                  far larger than any single product or platform.
                </p>
              </div>
            </div>
          </div>

          <div ref={imageRef} className={styles.right}>
            <div className={styles.imageWrap}>
              <img
                src={FOUNDATION_PHOTO}
                alt="The Pauline Higgins Foundation Inc"
                className={styles.image}
              />
              <div className={styles.imageOverlay} />
              <div className={styles.missionCard}>
                <img
                  src={FOUNDATION_LOGO}
                  alt="The Pauline Higgins Foundation Inc"
                  className={styles.foundationLogo}
                />
                <p className={styles.missionTitle}>
                  Raising awareness on ovarian cancer and its connection to metabolic health.
                </p>
                <a
                  href="https://paulinehigginsfoundation.org"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.missionLink}
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
