"use client";

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1 */}
          <div className={styles.column}>
            <div className={styles.logoName}>Technik Spirits</div>
            <div className={styles.logoSub}>MedTech Pvt. Ltd.</div>
            <p className={styles.brandDescription}>
              (Formerly Technik Spirits Inc.) Manufacturers of MGPS equipment for hospitals — medical air compressor systems, vacuum pump systems, oxygen generators, and AGSS.
            </p>
          </div>

          {/* Column 2 */}
          <div className={styles.column}>
            <div className={styles.columnLabel}>Products</div>
            <div className={styles.linkList}>
              <Link href="#" className={styles.link}>integrex™ Medical Air Compressor System</Link>
              <Link href="#" className={styles.link}>Medical Vacuum Pump System — Rotary Vane</Link>
              <Link href="#" className={styles.link}>Anaesthetic Gas Scavenging System (AGSS)</Link>
            </div>
          </div>

          {/* Column 3 */}
          <div className={styles.column}>
            <div className={styles.columnLabel}>Also in our Portfolio</div>
            <div className={styles.linkList}>
              <Link href="#" className={styles.link}>Medical Vacuum Pump System — Reciprocating</Link>
              <Link href="#" className={styles.link}>Medical Oxygen Generator (PSA)</Link>
              <Link href="#" className={styles.link}>Medical Ventilator Air Compressor</Link>
              <Link href="#" className={styles.link}>MGPS Design & Consulting Services</Link>
            </div>
          </div>

          {/* Column 4 */}
          <div className={styles.column}>
            <div className={styles.columnLabel}>Technik Spirits MedTech Private Limited</div>
            <div className={styles.contactInfo}>
              <div className={styles.locationLabel}>AHMEDABAD, INDIA</div>
              <Link href="mailto:sales@ts11.in" className={styles.contactEmail}>sales@ts11.in</Link>
              <Link href="tel:+919033009328" className={styles.contactPhone}>+91 90330 09328</Link>
              <Link href="#" className={styles.whatsappLink}>Chat on WhatsApp</Link>
              
              <div className={styles.socialRow}>
                <Link href="#" className={styles.socialLink}>LinkedIn</Link>
                <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>
                <Link href="#" className={styles.socialLink}>Facebook</Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomDivider}></div>

        <div className={styles.bottomRow}>
          <div className={styles.bottomLeft}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span>·</span>
            <Link href="/sitemap">Sitemap</Link>
          </div>
          
          <div className={styles.bottomCenter}>
            CDSCO Registered · ISO 13485 Certified · Patent Granted
          </div>

          <div className={styles.bottomRight}>
            © 2026 Technik Spirits MedTech Private Limited
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
