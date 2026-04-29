'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Youtube, Lock } from 'lucide-react';
import styles from './Work.module.css';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663094779485/mne9ZDoMYpFEH7LXCxpfnb/shallanda-projects-gallery-backdrop-ZcEthAwXSUXQFjwMUBobAc.webp';

const projects = [
  {
    title: 'GLPRoot',
    category: 'Health Tech',
    summary: 'A GLP-1 support platform designed to help people track symptoms, medication, labs, nutrition, progress, and daily education in one place.',
    detail: 'Built from domain expertise into a real user experience, GLPRoot turns clinical insight into a clear daily support system rather than a generic tracker.',
    image: '/glproot.svg',
    video: '/glproot_reel.mp4',
    videoPosition: 'center',
    link: 'https://glproot.com',
    linkLabel: 'Visit',
    badge: 'Built from idea to launch with AI-assisted execution',
  },
  {
    title: 'ClinMotion',
    category: 'AI Medical Media',
    summary: 'A cinematic AI-powered medical animation product experience that demonstrates concept design, workflow thinking, and health-specific interface clarity.',
    detail: 'This project shows my ability to shape an idea into a differentiated product with strong visual identity, guided interaction, and category-specific storytelling.',
    image: '/clinmotion-screenshot.webp',
    link: 'https://clinmotion.vercel.app/',
    linkLabel: 'Visit',
    badge: 'Premium product direction for healthcare use cases',
  },
  {
    title: 'DeIDGuard',
    category: 'Privacy & Compliance',
    summary: 'A Chrome extension built to help healthcare professionals de-identify patient text locally before using AI tools.',
    detail: 'DeIDGuard reflects the intersection of healthcare workflow, privacy awareness, and practical AI enablement, with compliance-sensitive logic built into a lightweight product.',
    image: '/deidguard.svg',
    video: '/deidguard_promo.mp4',
    link: 'https://deidguard.com',
    linkLabel: 'Visit',
    badge: 'Healthcare AI safety without workflow friction',
  },
  {
    title: "Shallanda's World",
    category: 'Personal Health OS',
    summary: 'A fully personalized health command center built around my own values: Command Center, Meal Tracker, Movement, The Apothecary, Lifebook, Goal Setting, and the full R.O.O.T.S. Health module, all in one place.',
    detail: 'This lives on my local machine. Built specifically for me, my health history, my cycle phases, my goals, my way of thinking. That is exactly the point. I can build the same for you: organized around your values, your data, your life.',
    image: '/roots-health-clinic.png',
    imgPosition: 'left top',
    link: null,
    linkLabel: null,
    badge: 'Private build, personalizable for you',
    isPersonal: true,
  },
  {
    title: "Malachi's Word Superpowers",
    category: 'Social-Pragmatic Learning App',
    summary: 'A language learning app built from a real family need, helping children move from knowing socially appropriate language to using it confidently in real situations.',
    detail: 'In one week of using the app, it boosted Malachi\'s engagement at school. Built with interactive modules, progress tracking, storybooks, and goal-based communication practice.',
    image: '/malachi-mobile.jpg',
    image2: '/malachi-2.png',
    link: 'https://www.youtube.com/@MalachiWordSuperpowers',
    linkLabel: 'Watch on YouTube',
    badge: 'One week of use. Measurable results at school.',
    isPersonal: true,
  },
];

export default function Work() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: 'power4.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%', toggleActions: 'play none none none' }
        }
      );

      const cards = cardsRef.current?.querySelectorAll('[data-card]');
      if (cards) {
        gsap.fromTo(cards,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0, opacity: 1, scale: 1,
            stagger: 0.1, duration: 0.85, ease: 'power4.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 80%', toggleActions: 'play none none none' }
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className={styles.section}>
      <div className={styles.backdrop}>
        <img src={PROJECTS_BG} alt="" className={styles.backdropImg} />
        <div className={styles.backdropOverlay} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div ref={titleRef} className={styles.header}>
          <p className="section-kicker">Selected work</p>
          <div className={styles.headerGrid}>
            <h2 className={`section-headline ${styles.title}`}>
              Healthcare expertise meets builder execution. Real products, real results.
            </h2>
            <p className={styles.headerBody}>
              From clinical tools and AI products to personal builds created for my own family,
              this is what it looks like when domain expertise and builder instinct work together.
            </p>
          </div>
        </div>

        <div ref={cardsRef} className={styles.grid}>
          {projects.map((p) => (
            <article key={p.title} data-card className={`${styles.card} ${p.isPersonal ? styles.cardPersonal : ''}`}>
              <div className={`${styles.cardImage} ${p.videoPosition ? styles.cardImageTall : ''}`}>
                {p.video ? (
                  <video src={p.video} autoPlay muted loop playsInline className={styles.cardImg}
                    style={p.videoPosition ? { objectPosition: p.videoPosition } : undefined}
                  />
                ) : p.image2 ? (
                  <div className={styles.dualImage}>
                    <img src={p.image} alt={p.title} className={styles.cardImgHalf} />
                    <img src={p.image2} alt={`${p.title} detail`} className={styles.cardImgHalf} />
                  </div>
                ) : (
                  <img
                    src={p.image}
                    alt={p.title}
                    className={styles.cardImg}
                    style={p.imgPosition ? { objectPosition: p.imgPosition } : undefined}
                  />
                )}
              </div>
              <div className={styles.cardMeta}>
                <div>
                  <p className={styles.category}>{p.category}</p>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                </div>
                <span className={`${styles.featuredBadge} ${p.isPersonal ? styles.personalBadge : ''}`}>
                  {p.isPersonal ? 'Personal' : 'Featured'}
                </span>
              </div>
              <p className={styles.cardSummary}>{p.summary}</p>
              <p className={styles.cardDetail}>{p.detail}</p>
              <div className={styles.cardFooter}>
                <span className={styles.badge}>{p.badge}</span>
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noreferrer" className={styles.visitLink}>
                    {p.linkLabel === 'Watch on YouTube' ? <Youtube size={14} /> : <ExternalLink size={14} />}
                    {p.linkLabel}
                  </a>
                ) : (
                  <span className={styles.privateTag}>
                    <Lock size={12} /> Local only
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
