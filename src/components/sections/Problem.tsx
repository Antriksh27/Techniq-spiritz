"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Problem.module.css';

const Problem = () => {
  const consequences = [
    "Among the noisiest equipment in the entire facility",
    "Heavy vibration that demands dedicated foundations",
    "Oversized footprints that waste valuable hospital space",
    "High electricity consumption that pushes up operating expenses",
    "Rigid duplex designs with limited redundancy and no real scalability"
  ];

  return (
    <section className={`${styles.problem} section-alt`}>
      <div className="section-divider" />
      <div className="vertical-accent" />
      <div className={styles.container}>
        
        <motion.div 
          className={styles.intro}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className={styles.introLead}>
            Most MGPS source equipment was not designed for hospitals.
          </p>
          <p className={styles.introBody}>
            For decades, hospitals have accepted medical gas equipment that is noisy, bulky, and energy-intensive. <span className={styles.highlight}>It does not have to be this way.</span>
          </p>
        </motion.div>

        <div className={styles.mainContent}>
          <div className={styles.left}>
            <span className={styles.tagline}>THE PROBLEM</span>
            <h2 className={styles.title}>An industrial assembly, sold into a medical application<span className={styles.period}>.</span></h2>
            
            <motion.div 
              className={styles.imageWrapper}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="image-zoom-container">
                <Image 
                  src="/problem-industrial.png" 
                  alt="Industrial MGPS equipment" 
                  width={600}
                  height={800}
                  className={styles.problemImage}
                />
              </div>
            </motion.div>
          </div>
          
          <div className={styles.right}>
            <p className={styles.description}>
              Most medical gas plant room equipment in the market today is not engineered for hospitals. It is an assembly of industrial components — compressors, vacuum pumps, receivers, dryers, filters — packaged together and sold into medical use. 
            </p>
            <p className={styles.description}>
              The components themselves are rarely medically certified. The system as a whole is rarely designed around how a hospital actually operates. 
            </p>

            <div className={styles.consequencesWrapper}>
              <h4 className={styles.listTitle}>The consequences show up quietly, every day, for years:</h4>
              <ul className={styles.list}>
                {consequences.map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <p className={styles.footerText}>
              These are not minor inconveniences.
            </p>
            <p className={styles.description}>
              For new hospitals, these issues complicate planning, sizing, and layout. In existing hospitals, they impact day-to-day operations through noise, vibration, electricity use, maintenance demands, and limited flexibility for expansion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
