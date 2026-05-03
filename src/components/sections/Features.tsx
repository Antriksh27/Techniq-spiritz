"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Features.module.css';

const features = [
  {
    number: "01",
    title: "Low Noise",
    description: "Significantly quieter than MGPS plant rooms with traditional oil-free medical air compressors."
  },
  {
    number: "02",
    title: "Minimal Vibration",
    description: "Operates with low vibration — reducing noise further and eliminating the need for dedicated foundations."
  },
  {
    number: "03",
    title: "Compact Footprint",
    description: "Smaller, space-efficient designs that free up valuable space, making hospital planning easier."
  },
  {
    number: "04",
    title: "Energy Efficient Design",
    description: "Lower electricity consumption that translates to substantial savings across the lifetime of the equipment."
  },
  {
    number: "05",
    title: "Purpose-Built for Medical",
    description: "Designed specifically for hospital use, not adapted from general industrial assemblies."
  },
  {
    number: "06",
    title: "Modular & Scalable",
    description: "Modular architecture allows staged expansion and flexible capacity planning as hospitals grow."
  },
  {
    number: "07",
    title: "Smart Redundancy",
    description: "System designed to maintain continuity of supply even when any module or component is under service."
  },
  {
    number: "08",
    title: "BMS-Ready, Automatic Controls",
    description: "Fully automatic controls for easy operation and monitoring, with BMS compatibility as standard."
  }
];

const Features = () => {
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
          <div className={styles.eyebrow}>Performance</div>
          <h2 className={styles.title}>Built for the Way Hospitals Actually Run</h2>
          <p className={styles.introText}>
            Every Technik Spirits medical gas system is built for what hospitals actually need — lower noise, smaller footprint, higher energy efficiency, and smarter system design.
          </p>
        </motion.div>
      </div>

      <div className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                className={styles.featureItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <span className={styles.featureNumber}>{feature.number}</span>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
