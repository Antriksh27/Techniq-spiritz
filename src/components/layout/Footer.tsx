"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logoWrapper}>
              <Image 
                src="/logo.svg" 
                alt="Technik Spirits MedTech" 
                width={200} 
                height={50} 
                className={styles.footerLogo}
              />
              <span className={styles.formerName}>(Formerly Technik Spirits Inc.)</span>
            </div>
            <p className={styles.tagline}>
              Manufacturers of MGPS equipment for hospitals — medical air compressors, vacuum systems, oxygen generators, and AGSS.
            </p>
          </div>
          
          <div className={styles.linkGroup}>
            <div className={styles.column}>
              <h4>PRODUCTS</h4>
              <Link href="#">integrex Medical Air Compressor</Link>
              <Link href="#">Medical Vacuum Pump System — Rotary Vane</Link>
              <Link href="#">Anaesthetic Gas Scavenging System (AGSS)</Link>
            </div>
            <div className={styles.column}>
              <h4>ALSO IN OUR PORTFOLIO</h4>
              <Link href="#">Medical Vacuum Pump System — Reciprocating</Link>
              <Link href="#">Medical Oxygen Generator (PSA)</Link>
              <Link href="#">Medical Ventilator Air Compressor</Link>
              <Link href="#">MGPS Design Services</Link>
            </div>
            <div className={styles.column}>
              <h4>CONTACT</h4>
              <p className={styles.companyName}>Technik Spirits MedTech Private Limited</p>
              <p className={styles.location}>AHMEDABAD, INDIA</p>
              <Link href="mailto:sales@ts11.in" className={styles.contactLink}>sales@ts11.in</Link>
              <Link href="tel:+919033009328" className={styles.contactLink}>+91 90330 09328</Link>
              <Link href="#" className={styles.whatsappBtn}>Whatsapp Click to Chat</Link>
              <Link href="#contact" className={styles.contactUs}>Contact Us</Link>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.socials}>
            <Link href="#">FACEBOOK</Link>
            <Link href="#">LINKEDIN</Link>
          </div>
          <div className={styles.legal}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span className={styles.sep}>|</span>
            <Link href="/sitemap">Sitemap</Link>
            <span className={styles.sep}>|</span>
            <p className={styles.copyright}>&copy; {currentYear} Technik Spirits MedTech Private Limited</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
