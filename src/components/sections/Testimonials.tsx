"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: "We embarked on a new hospital project. By now, Siddharth had the total confidence of the Board — and the next purchase order was issued without considering any other alternative.",
    name: "Mr. Kandarp Mankad",
    role: "Executive Director",
    hospital: "Gokulam Hospital (Gokulam Lifescience Pvt. Ltd.), Rajkot"
  },
  {
    quote: "We replaced our 10-year-old traditional oil-free air compressor system with the integrex Medical Air Generator. Our decision was made confidently in a single meeting. The system is incredibly compact, with minimal noise and vibration — creating a more peaceful environment in our Level 3 NICU.",
    name: "Dr. Vaibhav Patel",
    role: "MD Pediatrics, IAP Fellow in Neonatology",
    hospital: "Hasya New Born Care Center, Palanpur"
  }
];

const Testimonials = () => {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.eyebrow}>Client Testimonials</div>
          <h2 className={styles.title}>What Our Clients Say</h2>
        </motion.div>

        <div className={styles.grid}>
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.footer}>
                <span className={styles.name}>{t.name}</span>
                <span className={styles.role}>{t.role}</span>
                <span className={styles.hospital}>{t.hospital}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
