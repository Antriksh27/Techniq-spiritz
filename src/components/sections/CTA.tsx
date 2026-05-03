"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './CTA.module.css';

const CTA = () => {
  return (
    <section id="contact" className={styles.cta}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Let’s discuss your medical gas requirement<span className={styles.period}>.</span></h2>
          <p className={styles.description}>
            Whether you are planning a new hospital, expanding capacity, upgrading an existing plant room, or evaluating options for a live project, we can help you assess the right medical gas system.
          </p>
          <div className={styles.btnGroup}>
            <button className="btn btn-primary">Discuss Your Project</button>
            <button className="btn btn-outline">Explore Products</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
