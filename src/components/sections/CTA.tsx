"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './CTA.module.css';

const subCards = [
  {
    title: "Planning a New Hospital?",
    body: "Full-scale MGPS design and equipment sourcing for greenfield projects."
  },
  {
    title: "Expanding Capacity?",
    body: "Modular systems designed for seamless integration and staged scaling."
  },
  {
    title: "Retrofit & Upgrades?",
    body: "Replace outdated, noisy compressors with silent, efficient plant rooms."
  }
];

const CTA = () => {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div 
            className={styles.leftColumn}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.eyebrow}>Get In Touch</div>
            <h2 className={styles.title}>Let's Discuss Your Medical Gas Requirement</h2>
            <p className={styles.description}>
              Whether you are planning a new hospital, expanding capacity, upgrading an existing plant room, or evaluating options for a live project, we can help you assess the right medical gas system for your specific needs.
            </p>

            <div className={styles.subCardsRow}>
              {subCards.map((card, idx) => (
                <div key={idx} className={styles.subCard}>
                  <h3 className={styles.subCardTitle}>{card.title}</h3>
                  <p className={styles.subCardBody}>{card.body}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className={styles.rightColumn}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button className={styles.btnPrimary}>Discuss Your Project &rarr;</button>
            <button className={styles.btnSecondary}>Explore Products</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
