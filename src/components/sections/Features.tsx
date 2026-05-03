"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Features.module.css';

const features = [
  {
    title: "Low Noise",
    description: "Significantly quieter than MGPS plant rooms with traditional oil-free medical air compressors."
  },
  {
    title: "Minimal Vibration",
    description: "Operates with low vibration — further reducing noise and eliminating the need for dedicated foundations."
  },
  {
    title: "Compact Footprint",
    description: "Smaller, space-efficient designs that free up valuable space, making hospital planning easier."
  },
  {
    title: "Energy Efficient Design",
    description: "Lower electricity consumption that translates to substantial savings across the lifetime of the equipment."
  },
  {
    title: "Purpose-Built for Medical Applications",
    description: "Designed specifically for hospital use, not adapted from general industrial assemblies."
  },
  {
    title: "Modular & Scalable",
    description: "Modular architecture allows staged expansion and flexible capacity planning as hospitals grow."
  },
  {
    title: "Smart Redundancy",
    description: "System designed to maintain continuity of supply even when any module or component is under service."
  },
  {
    title: "BMS-ready, Automatic Controls",
    description: "Fully automatic controls for easy operation and monitoring, with BMS compatibility as a standard."
  }
];

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Built for the way hospitals actually run<span className={styles.period}>.</span></h2>
          <p className={styles.introText}>
            Every Technik Spirits medical gas system is built for what hospitals actually need — lower noise, smaller footprint, higher energy efficiency, and smarter system design.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
