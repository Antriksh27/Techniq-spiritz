import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logoContainer}>
              <Image 
                src="/logo.svg" 
                alt="Technik Spirits Logo" 
                width={200} 
                height={56} 
                className={styles.logo}
              />
              <span className={styles.formerName}>(Formerly Technik Spirits Inc.)</span>
            </div>
            <p className={styles.description}>
              Specialized manufacturers of hospital-grade MGPS equipment — medical air compressors, vacuum systems, oxygen generators, and AGSS.
            </p>
          </div>

          <div className={styles.linkGroup}>
            <h4>Products</h4>
            <ul>
              <li><Link href="#products">integrex Air Systems</Link></li>
              <li><Link href="#products">Rotary Vacuum Systems</Link></li>
              <li><Link href="#products">AGSS Solutions</Link></li>
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <h4>Portfolio</h4>
            <ul>
              <li><Link href="#products">PSA Oxygen Generators</Link></li>
              <li><Link href="#products">Ventilator Compressors</Link></li>
              <li><Link href="#products">MGPS Design Services</Link></li>
              <li><Link href="#products">Reciprocating Systems</Link></li>
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <h4>Contact</h4>
            <div className={styles.contactInfo}>
              <p><strong>AHMEDABAD, INDIA</strong></p>
              <p>sales@ts11.in</p>
              <p>+91 90330 09328</p>
            </div>
            <div className={styles.social}>
              <Link href="#" aria-label="LinkedIn">LINKEDIN</Link>
              <Link href="#" aria-label="Facebook">FACEBOOK</Link>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.legal}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span className={styles.sep}>|</span>
            <Link href="/sitemap">Sitemap</Link>
            <span className={styles.sep}>|</span>
            <span>&copy; {currentYear} Technik Spirits MedTech Private Limited</span>
          </div>
          <div className={styles.trustSignals}>
            <span>CDSCO Registered</span>
            <span>ISO 13485 Certified</span>
            <span>Patent Granted</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
