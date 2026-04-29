'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, HeartPulse, BrainCircuit, ShieldCheck, BriefcaseBusiness, Microscope } from 'lucide-react';
import styles from './ProofStack.module.css';

gsap.registerPlugin(ScrollTrigger);

const proof = [
  {
    Icon: Sparkles,
    title: 'I Can Teach You AI',
    copy: 'A coming-soon education offer designed to help women in healthcare move from curiosity to confident implementation with AI.',
    link: 'https://7okk9tiuv6.zite.so',
    linkLabel: 'Join the waitlist →',
  },
  {
    Icon: HeartPulse,
    title: 'VitaPlate AI',
    copy: 'A nutrition and protocol intelligence concept that demonstrates hyper-personalized health planning, guided meal logic, and AI-assisted user support.',
  },
  {
    Icon: BrainCircuit,
    title: "Malachi's Word Superpowers",
    copy: 'A social-pragmatic language app built from a real family need, helping children move from knowing socially appropriate language to using it more confidently.',
  },
  {
    Icon: ShieldCheck,
    title: 'Agent and Workflow Builds',
    copy: 'From compliance logic to role-specific agents, I build practical AI-enabled workflows that support real teams and real-world decisions.',
  },
  {
    Icon: BriefcaseBusiness,
    title: 'Websites and Digital Platforms',
    copy: 'Including Compounded Path, Learn Bible Languages, The Pauline Higgins Foundation Inc, and other builds that show range across education, advocacy, and product presentation.',
  },
  {
    Icon: Microscope,
    title: 'Healthcare Brand Ecosystem',
    copy: "Including Hunter's Holistic Health, Sugar Functional PharmD content, and healthcare education rooted in professional credibility and practical translation.",
  },
];

export default function ProofStack() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%' } }
      );
      const cards = cardsRef.current?.querySelectorAll('[data-proof]');
      if (cards) {
        gsap.fromTo(cards,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.09, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' } }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <div ref={titleRef} className={styles.left}>
            <p className="section-kicker">Broader proof</p>
            <h2 className={`section-headline ${styles.title}`}>
              From GLP-1 education to AI product builds. This is what healthcare expertise looks like when it moves.
            </h2>
            <p className={styles.body}>
              Beyond the headline projects, this body of work shows consistent movement across product
              concepts, healthcare education, digital platforms, and AI-enabled experiments. That range
              matters because it demonstrates pattern recognition, not just isolated execution.
            </p>
          </div>

          <div ref={cardsRef} className={styles.grid}>
            {proof.map(({ Icon, title, copy, link, linkLabel }) => (
              <div key={title} data-proof className={styles.card}>
                <Icon size={28} style={{ color: 'var(--accent-teal)', marginBottom: '16px' }} strokeWidth={1.5} />
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardCopy}>{copy}</p>
                {link && (
                  <a href={link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                    {linkLabel}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
