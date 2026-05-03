"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Certifications.module.css';

const credentials = [
  {
    title: "CDSCO Registered",
    description: "Registered with India's Central Drugs Standard Control Organisation as a medical device manufacturer."
  },
  {
    title: "ISO 13485 Certified",
    description: "Certified quality management system for the design and manufacture of medical devices."
  },
  {
    title: "Patent Granted",
    description: "Granted patent on the modular medical gas system design."
  },
  {
    title: "Design Registration Granted",
    description: "Registered industrial design protection on medical gas system configurations."
  },
  {
    title: "Exclusive MGPS Focus",
    description: "Focused exclusively on medical gas plant room systems for hospitals."
  },
  {
    title: "Three Generations of Manufacturing",
    description: "Backed by a family legacy of 50+ years in compressor manufacturing."
  }
];

const standards = [
  {
    title: "HTM 02-01",
    description: "UK standard for Medical gas pipeline systems in healthcare facilities."
  },
  {
    title: "ISO 7396",
    description: "International standard on Medical gas pipeline systems in healthcare facilities."
  },
  {
    title: "ISO 80601",
    description: "Anaesthetic workstations and related applications."
  }
];

const Certifications = () => {
  return (
    <section className={`${styles.section} treatment-a`} id="credentials">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.eyebrow}>Credentials</div>
          <h2 className={styles.title}>Certifications & Standards</h2>
        </motion.div>

        <div className={styles.group}>
          <div className={styles.labelContainer}>
            <span className={styles.mutedLabel}>Company Credentials</span>
            <div className={styles.labelRule}></div>
          </div>
          <div className={styles.grid}>
            {credentials.map((item, idx) => (
              <motion.div 
                key={idx}
                className={styles.credentialCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <div className={styles.marker}></div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDescription}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className={`${styles.standardsSection} treatment-c`}>
          <div className={styles.standardsContent}>
            <span className={styles.mutedLabel}>Products Designed with Reference to Recognized Standards:</span>
            <div className={styles.standardsRow}>
              {standards.map((item, idx) => (
                <motion.div 
                  key={idx}
                  className={styles.standardCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <h3 className={styles.standardTitle}>{item.title}</h3>
                  <p className={styles.standardDescription}>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
