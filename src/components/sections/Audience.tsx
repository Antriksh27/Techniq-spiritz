"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Audience.module.css';

const audiences = [
  {
    title: "Hospital Owners & Promoters",
    description: "Systems that reduce long-term operating costs, free up valuable hospital space, and scale as the facility grows — protecting your infrastructure investment over its full lifecycle."
  },
  {
    title: "Hospital Architects, Consultants & Planners",
    description: "Design support, capacity calculations, and system planning for MGPS projects of every scale and specialty — from concept through to detailed specifications."
  },
  {
    title: "Biomedical & Maintenance Engineers",
    description: "Easy serviceability, PLC-controlled automatic operation, and built-in alarm management — backed by responsive, dependable after-sales support."
  },
  {
    title: "New Hospitals & Greenfield Projects",
    description: "Quiet, compact systems with smart controls and BMS compatibility for modern hospital infrastructure."
  },
  {
    title: "Expansion & Retrofit Projects",
    description: "Lower electricity, spares, and service costs, with improved reliability for existing hospital infrastructure."
  },
  {
    title: "MGPS Contractors & Dealers",
    description: "Patented systems that add clear differentiation to your MGPS proposals, backed by dependable technical support."
  }
];

const Audience = () => {
  return (
    <section className={`${styles.section} treatment-c`}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.eyebrow}>Our Customers</div>
          <h2 className={styles.title}>Who We Work With</h2>
          <p className={styles.introText}>
            From hospital promoters to plant room operators, every Technik Spirits system is designed around the needs of the people who plan, specify, operate, and maintain hospital infrastructure.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {audiences.map((item, index) => (
            <motion.div 
              key={item.title}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
