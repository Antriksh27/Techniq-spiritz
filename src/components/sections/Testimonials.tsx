"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    text: "We embarked on a new hospital project. By now, Siddharth had the total confidence of the Board — and the next purchase order was issued without considering any other alternative.",
    author: "Mr. Kandarp Mankad",
    role: "Executive Director",
    institution: "Gokulam Hospital (Gokulam Lifescience Pvt. Ltd.), Rajkot"
  },
  {
    text: "We replaced our 10-year-old traditional oil-free air compressor system with the integrex Medical Air Generator. Our decision was made confidently in a single meeting. The system is incredibly compact, with minimal noise and vibration — creating a more peaceful environment in our Level 3 NICU.",
    author: "Dr. Vaibhav Patel",
    role: "MD Pediatrics, IAP Fellow in Neonatology",
    institution: "Hasya New Born Care Center, Palanpur"
  }
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>What our clients say<span className={styles.period}>.</span></h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, index) => (
            <motion.div 
              key={index} 
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className={styles.text}>"{t.text}"</p>
              <div className={styles.footer}>
                <span className={styles.author}>{t.author}</span>
                <span className={styles.role}>{t.role}</span>
                <span className={styles.institution}>{t.institution}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
