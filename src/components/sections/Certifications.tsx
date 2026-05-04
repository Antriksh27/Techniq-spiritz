"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Certifications.module.css';

const credentials = [
  {
    initial: "C",
    title: "CDSCO Registered",
    description: "Registered with India's Central Drugs Standard Control Organisation as a medical device manufacturer."
  },
  {
    initial: "I",
    title: "ISO 13485 Certified",
    description: "Certified quality management system for the design and manufacture of medical devices."
  },
  {
    initial: "P",
    title: "Patent Granted",
    description: "Granted patent on the modular medical gas system design."
  },
  {
    initial: "D",
    title: "Design Registration Granted",
    description: "Registered industrial design protection on medical gas system configurations."
  },
  {
    initial: "M",
    title: "Exclusive MGPS Focus",
    description: "Focused exclusively on medical gas plant room systems for hospitals."
  },
  {
    initial: "T",
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
    <section className={styles.section} id="credentials">
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

        <div className={styles.credentialsGroup}>
          <div className={styles.credentialsGrid}>
            {credentials.map((item, idx) => (
              <motion.div 
                key={idx}
                className={styles.credentialRow}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <div className={styles.registryIndex}>{idx + 1}</div>
                <div className={styles.credentialContent}>
                  <h3 className={styles.credentialTitle}>{item.title}</h3>
                  <p className={styles.credentialDescription}>{item.description}</p>
                </div>
                <div className={styles.registryDot}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.standardsWrapper}>
        <div className={styles.container}>
          <div className={styles.standardsContent}>
            <div className={styles.standardsSubHeader}>
              <div className={styles.standardsAccent}></div>
              <h3 className={styles.standardsHeaderLabel}>Products Designed with Reference to Recognized Standards:</h3>
            </div>
            <div className={styles.standardsList}>
              {standards.map((item, idx) => (
                <motion.div 
                  key={idx}
                  className={styles.standardRow}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className={styles.standardCode}>{item.title}</div>
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
