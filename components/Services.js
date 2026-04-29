'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrainCircuit, HeartPulse, Layers } from 'lucide-react';
import styles from './Services.module.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: BrainCircuit,
    title: 'AI Education & Implementation',
    desc: 'Practical AI training and implementation support for women in healthcare. Moving from curiosity to confident, daily use. Real tools, real workflows, real traction.',
  },
  {
    icon: HeartPulse,
    title: 'GLP-1 & Metabolic Health Education',
    desc: 'Clinical-grade education on GLP-1 medications, metabolic health, and the ROOTS Framework, grounded in pharmacy expertise and designed for real-world application.',
  },
  {
    icon: Layers,
    title: 'Healthcare Product Strategy & Building',
    desc: 'From concept to shipped product: apps, websites, agent workflows, compliance tools, and digital health experiences built with both domain expertise and builder precision.',
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);
  const wavyRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: 'power4.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%' }
        }
      );

      const cards = cardsRef.current?.querySelectorAll('[data-card]');
      gsap.fromTo(cards,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.14, duration: 0.8, ease: 'power4.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' }
        }
      );

      if (wavyRef.current) {
        const path = wavyRef.current.querySelector('path');
        if (path) {
          const len = path.getTotalLength();
          gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
          gsap.to(path, {
            strokeDashoffset: 0, duration: 2, ease: 'power2.inOut',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
          });
        }
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className={styles.section}>
      <svg ref={wavyRef} className={styles.wavy} viewBox="0 0 1400 300" fill="none" preserveAspectRatio="xMidYMid slice">
        <path d="M-50 150 C200 50,350 250,600 150 S900 30,1100 150 S1300 280,1450 150"
          stroke="#c8a74b" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
      </svg>

      <div className="container">
        <div ref={titleRef} className={styles.header}>
          <span className="label">✦ Ways to Work Together</span>
          <h2 className={`section-headline ${styles.title}`}>
            How I Can<br /><span className="accent-text">Help You</span>
          </h2>
          <p className={styles.headerBody}>
            Whether you need to learn AI, build a healthcare product, or understand GLP-1 and metabolic
            health. I bring clinical credibility and implementation experience to every engagement.
          </p>
          <p className={styles.audience}>
            ✦ If you are a woman in healthcare ready to use AI with confidence. This is built for you.
          </p>
        </div>

        <div ref={cardsRef} className={styles.grid}>
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} data-card className={styles.card}>
                <div className={styles.iconBox}>
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
                <div className={styles.cardLine} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
