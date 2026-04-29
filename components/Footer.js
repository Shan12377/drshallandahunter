import styles from './Footer.module.css';
import { LinkedInIcon, InstagramIcon, YoutubeIcon, TikTokIcon, FacebookIcon, XIcon } from './SocialIcons';

const socials = [
  { Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/dr-shallanda-hunter', label: 'LinkedIn' },
  { Icon: InstagramIcon, href: 'https://www.instagram.com/sugarfunctionalpharmd/', label: 'Instagram' },
  { Icon: YoutubeIcon, href: 'https://www.youtube.com/@sugarfunctionalpharmd', label: 'YouTube' },
  { Icon: TikTokIcon, href: 'https://www.tiktok.com/@sugarfunctionalph0?lang=en', label: 'TikTok' },
  { Icon: FacebookIcon, href: 'https://www.facebook.com/profile.php?id=61559864680044', label: 'Facebook' },
  { Icon: XIcon, href: 'https://x.com/sugarfuncpharmD', label: 'X' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <div className={styles.logo}>
              <span className={styles.logoDot} />
              Dr. Shallanda<span style={{ color: 'var(--accent)' }}> Hunter</span>
            </div>
            <p className={styles.tagline}>
              Healthcare-rooted digital products,<br />AI education, and practical builder work.
            </p>
          </div>
          <nav className={styles.links}>
            {['Home', 'Work', 'Services', 'About', 'Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className={styles.link}>{l}</a>
            ))}
          </nav>
          <div className={styles.socials}>
            {socials.map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className={styles.socialIcon} aria-label={label}>
                <Icon size={16} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
        <div className={styles.seo}>
          <p className={styles.seoText}>
            Dr. Shallanda Hunter is a Doctor of Pharmacy (PharmD), MBA, and Certified Functional Nutrition
            and Metabolism Practitioner (CFNMP) specializing in GLP-1 education, AI implementation for
            women in healthcare, and functional medicine-rooted product development. Creator of the ROOTS
            Framework for metabolic health optimization. Founder of The Pauline Higgins Foundation Inc,
            raising awareness on ovarian cancer and its connection to metabolic health. Builder of VitaPlate AI,
            GLPRoot, DeIDGuard, ClinMotion, and more. Serving healthcare professionals across the United States.
          </p>
          <div className={styles.seoPills}>
            {['GLP-1 Educator','PharmD','AI Implementation','Women in Healthcare','Functional Nutrition','Metabolic Health','ROOTS Framework','Healthcare Product Builder','Sugar Functional PharmD','Pharmacist Educator','AI for Clinicians','VitaPlate AI','GLPRoot','The Pauline Higgins Foundation Inc'].map(tag => (
              <span key={tag} className={styles.seoPill}>{tag}</span>
            ))}
          </div>
        </div>

        <div className={styles.ps}>
          P.S. I vibe coded this entire website. A PharmD, a clear vision, and the right AI tools. That is exactly what I teach.
        </div>
        <div className={styles.bottom}>
          <span>© 2026 Dr. Shallanda Hunter. All rights reserved.</span>
          <span className={styles.credit}>drshallandahunter.com</span>
        </div>
      </div>
    </footer>
  );
}
