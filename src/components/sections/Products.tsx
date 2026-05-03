"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Products.module.css';

const Products = () => {
  const products = [
    {
      label: "SYSTEM 01",
      name: "Medical Air Compressor System — integrex™",
      description: "A patent-granted, oil-free medical air compressor system built on a modular architecture. Delivers ultra-high-purity medical air to ventilators, anaesthesia workstations, and other respiratory equipment — purpose-built for the demands of a hospital environment.",
      image: "/product-integrex.png",
      tags: ["Patent Granted", "100% Oil-Free", "Modular & Scalable"]
    },
    {
      label: "SYSTEM 02",
      name: "Medical Vacuum Pump System — Rotary Vane",
      description: "Advanced centralised vacuum systems for modern hospitals. Delivers reliable suction across OTs, ICUs, and wards — with low noise, low vibration, compact footprint, and dependable duplex redundancy.",
      image: "/product-vacuum-rv.png",
      tags: ["Silent & Low Vibration", "Skid-Mounted Package", "Fully Automatic"]
    },
    {
      label: "SYSTEM 03",
      name: "Anaesthetic Gas Scavenging System (AGSS)",
      description: "Active scavenging system for waste anaesthetic gases. Designed to support a healthier working environment in operation theatres, protecting staff from long-term exposure to trace anaesthetic agents.",
      image: "/product-agss.png",
      tags: ["OT Staff Safety", "Active Scavenging", "HTM 02-01 Compliant"]
    }
  ];

  return (
    <section className={styles.section} id="products">
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <div className={styles.eyebrow}>Our Systems</div>
            <h2 className={styles.h2}>Medical Gas Systems</h2>
            <p className={styles.introText}>Explore our solutions for medical gas pipeline system equipment for hospitals of every size and specialty.</p>
          </div>
          <a href="#products" className={styles.viewAllTop}>View all products &rarr;</a>
        </div>

        <div className={styles.grid}>
          {products.map((product, idx) => (
            <motion.div 
              key={idx}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className={styles.topLabel}>{product.label}</div>
              <div className={styles.imageWrapper}>
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  className={styles.productImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.description}>{product.description}</p>
                <div className={styles.tags}>
                  {product.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <a href="#products" className={styles.learnMore}>Learn More &rarr;</a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
