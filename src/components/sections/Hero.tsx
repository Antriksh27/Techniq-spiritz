"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Hero.module.css';
import MeshGradient from '../ui/MeshGradient';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <MeshGradient />
      <div className="grid-overlay" />
      <div className="vertical-accent" />
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className="section-marker">Specialists in MGPS plant room equipment</div>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            MEDICAL GAS PIPELINE SYSTEM (MGPS) FOR HOSPITALS<span className={styles.period}>.</span>
          </motion.h1>
          
          <motion.div 
            className={styles.descriptionWrapper}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className={styles.subtitle}>
              We design and manufacture source equipment for Medical Gas Pipeline Systems (MGPS), including medical air compressors, medical vacuum pumps, oxygen generators, and anaesthetic gas scavenging systems (AGSS).
            </p>
            <p className={styles.subtitle}>
              Our systems are purpose-built for hospitals prioritizing low noise & vibrations, space optimization and less electricity consumption. 
            </p>
            <p className={styles.highlightText}>
              Healthcare environments where noise, vibration, space, reliability, and compliance are non-negotiable.
            </p>
          </motion.div>

          <motion.div 
            className={styles.ctaGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <button className="btn btn-primary">Explore Products</button>
            <button className="btn btn-outline">Discuss Your Project</button>
          </motion.div>
        </div>

        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.cornerMarkerTL} />
          <div className={styles.cornerMarkerBR} />
          <div className={styles.imageWrapper}>
            <Image 
              src="/hero-mgps.png" 
              alt="Futuristic MGPS Plant Room" 
              fill
              className={styles.heroImage}
              priority
            />
            <div className={styles.imageOverlay} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
