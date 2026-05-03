"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Solution.module.css';

const Solution = () => {
  const advantages = [
    "Engineered to run quietly, with significantly lower vibration",
    "Compact footprints that free up valuable plant room space",
    "Lower electricity consumption across years of continuous operation",
    "Modular and scalable architectures that replace rigid duplex layouts",
    "BMS-compatible and ready for integration into modern hospital infrastructure"
  ];

  return (
    <section className={styles.solution}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.left}>
            <span className={styles.tagline}>THE SOLUTION</span>
            <h2 className={styles.title}>Purpose-built for medical applications<span className={styles.period}>.</span></h2>
            
            <motion.div 
              className={styles.advantagesWrapper}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className={styles.listTitle}>Practical advantages:</h4>
              <ul className={styles.list}>
                {advantages.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <div className={styles.right}>
            <div className={styles.bodyText}>
              <p className={styles.description}>
                Technik Spirits designs and manufactures MGPS source equipment from the ground up specifically for hospital use. Every component and every system architecture is selected with medical applications in mind.
              </p>
              <p className={styles.description}>
                Our systems are built around a deep understanding of clinical applications — how medical gases are consumed, how plant rooms actually operate, and what biomedical engineers and medical gas operators need from this equipment day after day, year after year.
              </p>
              
              <div className={styles.resultBox}>
                <p className={styles.resultText}>
                  The result is medical gas equipment that fits how hospitals are planned, how they are built, and how they are run — not equipment that hospitals have to plan around.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
