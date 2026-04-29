'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './VitaPlate.module.css';

function VideoOrPlaceholder({ src, label }) {
  const [showVideo, setShowVideo] = useState(true);
  if (!showVideo) {
    return (
      <>
        <img src="/vitaplate-placeholder.svg" alt={label} className={styles.video} style={{ objectFit: 'cover' }} />
        <div className={styles.videoLabel}>{label}</div>
      </>
    );
  }
  return (
    <>
      <video
        src={src}
        autoPlay muted loop playsInline
        className={styles.video}
        onError={() => setShowVideo(false)}
      />
      <div className={styles.videoLabel}>{label}</div>
    </>
  );
}

gsap.registerPlugin(ScrollTrigger);

const videoCards = [
  { label: 'Protocol Generation', desc: 'Structured support that turns complex health logic into a clearer starting point for users.', src: '/vitaplate_protocol_generation.mp4' },
  { label: 'The GLP-1 Plate', desc: 'Visual meal guidance rooted in GLP-1 support, connecting nutritional intelligence to what actually lands on the plate.', src: '/vitaplate_daily_plate_ai_coaching.mp4' },
  { label: 'Recipe Builder', desc: 'A more interactive layer of nutritional guidance designed for usability, not just information overload.', src: '/vitaplate_recipe_builder.mov' },
  { label: 'RootLabel', desc: 'An AI-powered label reader that scans supplement, food, and medication labels, giving users instant clinical clarity on what they are actually putting in their body.', src: '/vitaplate_studio_dashboard.mp4' },
];

const VITAPLATE_LOGO = '/vitaplate-logo.png';

export default function VitaPlate() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power4.out',
          scrollTrigger: { trigger: leftRef.current, start: 'top 82%' } }
      );
      const cards = gridRef.current?.querySelectorAll('[data-vcard]');
      if (cards) {
        gsap.fromTo(cards,
          { y: 60, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, stagger: 0.12, duration: 0.85, ease: 'power4.out',
            scrollTrigger: { trigger: gridRef.current, start: 'top 80%' } }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div ref={leftRef} className={styles.left}>
            <p className="section-kicker">Featured build</p>
            <img src={VITAPLATE_LOGO} alt="VitaPlate AI" style={{ height: '48px', width: 'auto', maxWidth: '280px', marginBottom: '24px', display: 'block', objectFit: 'contain' }} />
            <h2 className={`section-headline ${styles.title}`}>
              Functional Nutrition Intelligence, built from the ground up to personalize how people eat and heal.
            </h2>
            <p className={styles.body}>
              Inspired by the clearer product emphasis used on top personal-brand sites, this section brings
              VitaPlate AI forward as a real example of how I think through nutrition intelligence, guided
              user flow, protocol support, and healthcare-centered AI experiences.
            </p>
            <div className={styles.featureGrid}>
              {videoCards.map(({ label, desc }) => (
                <div key={label} className={styles.featureCard}>
                  <p className={styles.featureTitle}>{label}</p>
                  <p className={styles.featureCopy}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div ref={gridRef} className={styles.videoGrid}>
            {videoCards.map(({ label, src }) => (
              <div key={label} data-vcard className={styles.videoCard}>
                <VideoOrPlaceholder src={src} label={label} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
