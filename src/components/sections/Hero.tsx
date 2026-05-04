"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Hero.module.css';
import PipeSchematicBackground from '@/components/ui/PipeSchematicBackground';
import SectionDivider from '@/components/SectionDivider';
import { GetStartedButton } from '@/components/ui/get-started-button';

const Hero = () => {
  return (
    <section className={`${styles.hero} treatment-a`}>
      <PipeSchematicBackground />
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
            <p>
              Our systems are purpose-built for hospitals prioritizing low noise & vibrations, space optimization and less electricity consumption.
            </p>
          </div>

          <div className={styles.ctaGroup}>
            <GetStartedButton>Explore Products</GetStartedButton>
            <GetStartedButton variant="outline">Discuss Your Project</GetStartedButton>
          </div>
        </motion.div>

        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className={styles.overlay} />
          <Image 
            src="/product-compressor.png" 
            alt="Technik Spirits Medical Gas Equipment" 
            width={1200}
            height={1200}
            className={styles.heroImage}
            priority
          />
        </motion.div>

        {/* FLOATING ARCHITECTURAL CARD */}
        <motion.div 
          className={styles.floatingCard}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className={styles.cardAccent} />
          <p className={styles.cardText}>
            Healthcare environments where noise, vibration, space, reliability, and compliance are <span className={styles.cardHighlight}>non-negotiable.</span>
          </p>
        </motion.div>
      </div>

      {/* Integrated Divider to prevent cut-off */}
      <div className={styles.dividerWrapper}>
        <SectionDivider 
          fromColor="transparent" 
          toColor="#1C2B3A" 
          direction="down" 
          height={100} 
        />
      </div>
    </section>
  );
};

export default Hero;
