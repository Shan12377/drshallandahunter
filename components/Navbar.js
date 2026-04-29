'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './Navbar.module.css';

const links = ['Home', 'About', 'Work', 'Services', 'Contact'];

export default function Navbar() {
  const navRef = useRef(null);
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.2 }
    );
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (section) => {
    setActive(section);
    setMenuOpen(false);
    const id = section === 'About' ? 'about' : section.toLowerCase();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header ref={navRef} className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        <div className={styles.logo}>
          <span className={styles.logoDot} />
          Dr. Shallanda<span style={{ color: 'var(--accent)' }}> Hunter</span>
        </div>

        <nav className={styles.links}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)}
              className={`${styles.link} ${active === l ? styles.linkActive : ''}`}>
              {l}
            </button>
          ))}
        </nav>

        <a href="mailto:info@huntersholistichealth.com" className="btn-primary" style={{ fontSize: '0.875rem', padding: '10px 22px' }}>
          Email Me
        </a>

        <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={menuOpen ? styles.burgerOpen : ''} />
          <span className={menuOpen ? styles.burgerOpen : ''} />
          <span className={menuOpen ? styles.burgerOpen : ''} />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map((l, i) => (
            <button key={l} onClick={() => scrollTo(l)}
              className={styles.mobileLink}
              style={{ animationDelay: `${i * 0.08}s` }}>
              {l}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
