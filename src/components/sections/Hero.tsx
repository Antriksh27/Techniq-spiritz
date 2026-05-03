"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={`${styles.hero} treatment-b`}>
      <div className={styles.watermark}>TS</div>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.eyebrow}>Specialists in MGPS plant room equipment</div>
          <h1 className={styles.title}>
            Medical Gas Pipeline System (MGPS) <br />
            <span className={styles.accentWord}>for Hospitals.</span>
          </h1>
          
          <div className={styles.description}>
            <p style={{ marginBottom: '16px' }}>
              We design and manufacture source equipment for Medical Gas Pipeline Systems (MGPS), including medical air compressors, medical vacuum pumps, oxygen generators, and anaesthetic gas scavenging systems (AGSS).
            </p>
            <p style={{ marginBottom: '16px' }}>
              Our systems are purpose-built for hospitals prioritizing low noise & vibrations, space optimization and less electricity consumption.
            </p>
            <div style={{ borderLeft: '2px solid #C84B2A', paddingLeft: '16px', fontStyle: 'italic', color: '#1A1A1A' }}>
              Healthcare environments where noise, vibration, space, reliability, and compliance are non-negotiable.
            </div>
          </div>

          <div className={styles.ctaGroup}>
            <button className={styles.btnPrimary}>Explore Products &rarr;</button>
            <button className={styles.btnOutline}>Discuss Your Project</button>
          </div>
        </motion.div>

        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className={styles.card}>
            <Image 
              src="/product-compressor.png" 
              alt="Technik Spirits Medical Gas Equipment" 
              width={400}
              height={400}
              className={styles.heroImage}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
