"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Portfolio.module.css';

const Finally = () => {
  return (
    <section id="experience" className={styles.finally}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Finally.</h2>
          <p className={styles.description}>
            A healthcare experience that actually puts you in control. No more waiting for symptoms. No more guesswork. Just pure, actionable data to help you live your best life.
          </p>
          <button className="btn btn-outline">LEARN MORE ABOUT THE SCAN</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Finally;
