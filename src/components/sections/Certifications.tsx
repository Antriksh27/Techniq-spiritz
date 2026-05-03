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
    <section className={styles.certifications}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Certifications & Standards<span className={styles.period}>.</span></h2>
        </div>

        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Company Credentials:</h3>
          <div className={styles.grid}>
            {credentials.map((item, index) => (
              <motion.div 
                key={item.title}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <h4 className={styles.cardTitle}>{item.title}</h4>
                <p className={styles.cardDescription}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Products Designed with Reference to Recognized Standards:</h3>
          <div className={styles.standardsGrid}>
            {standards.map((item, index) => (
              <motion.div 
                key={item.title}
                className={styles.standardCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className={styles.standardTitle}>{item.title}</h4>
                <p className={styles.standardDescription}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
