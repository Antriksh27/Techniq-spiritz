"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Problem.module.css';

const ProblemSolution = () => {
  const problems = [
    "Among the noisiest equipment in the entire facility",
    "Heavy vibration that demands dedicated foundations",
    "Oversized footprints that waste valuable hospital space",
    "High electricity consumption that pushes up operating expenses",
    "Rigid duplex designs with limited redundancy and no real scalability"
  ];

  const solutions = [
    "Engineered to run quietly, with significantly lower vibration",
    "Compact footprints that free up valuable plant room space",
    "Lower electricity consumption across years of continuous operation",
    "Modular and scalable architectures that replace rigid duplex layouts",
    "BMS-compatible and ready for integration into modern hospital infrastructure"
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.eyebrow}>The Challenge</div>
          <h2 className={styles.h2}>Most MGPS source equipment was not designed for hospitals.</h2>
          <p className={styles.introText}>
            For decades, hospitals have accepted medical gas equipment that is noisy, bulky, and energy-intensive. It does not have to be this way.
          </p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div 
            className={styles.column}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.cardLabel}>THE PROBLEM</div>
            <h3 className={styles.h3}>An industrial assembly, sold into a medical application.</h3>
            <p className={styles.body}>
              Most medical gas plant room equipment in the market today is not engineered for hospitals. It is an assembly of industrial components — compressors, vacuum pumps, receivers, dryers, filters — packaged together and sold into medical use. The components themselves are rarely medically certified. The system as a whole is rarely designed around how a hospital actually operates.
            </p>
            <div className={styles.mutedLabel}>The consequences show up quietly, every day, for years:</div>
            <ul className={styles.list}>
              {problems.map((item, i) => (
                <li key={i} className={`${styles.listItem} ${styles.problemBullet}`}>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className={styles.column}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.cardLabel}>THE SOLUTION</div>
            <h3 className={styles.h3}>Purpose-built for the medical application.</h3>
            <p className={styles.body}>
              Technik Spirits designs and manufactures MGPS source equipment from the ground up specifically for hospital use. Every component and every system architecture is selected with medical applications in mind. Our systems are built around a deep understanding of clinical applications — how medical gases are consumed, how plant rooms actually operate, and what biomedical engineers and medical gas operators need from this equipment day after day, year after year.
            </p>
            <div className={styles.mutedLabel}>This translates into practical advantages:</div>
            <ul className={styles.list}>
              {solutions.map((item, i) => (
                <li key={i} className={`${styles.listItem} ${styles.solutionBullet}`}>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className={styles.calloutBar}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className={styles.calloutText}>
            The result is medical gas equipment that fits how hospitals are planned, how they are built, and how they are run — not equipment that hospitals have to plan around.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
