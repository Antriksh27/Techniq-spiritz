"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Services.module.css';

const mainSystems = [
  {
    title: "Medical Air Compressor System — integrex",
    description: "A patent-granted, oil-free medical air compressor system built on a modular architecture. Delivers ultra-high-purity medical air for ventilators, anaesthesia workstations and other respiratory equipment.",
    bullets: ["Patent Granted", "100% Oil-Free", "Modular & Scalable"],
    image: "/product-integrex.png"
  },
  {
    title: "Medical Vacuum Pump System — Rotary Vane",
    description: "Advanced centralized vacuum systems for modern hospitals. Delivers reliable suction across OTs, ICUs, and wards — with low noise, low vibration, compact footprint, and dependable duplex redundancy.",
    bullets: ["Silent & Vibration-Free", "Skid-Mounted Package", "Fully Automatic"],
    image: "/product-vacuum-v2.png"
  },
  {
    title: "Anaesthetic Gas Scavenging System (AGSS)",
    description: "Active scavenging system for waste anaesthetic gases. Designed to support a healthier working environment in operation theatres (OTs), protecting staff from long-term exposure.",
    bullets: ["OT Safety", "Active Scavenging", "Workstation-Compatible"],
    image: "/product-agss-v2.png"
  }
];

const portfolioItems = [
  "Medical Vacuum Pump System — Reciprocating",
  "Medical Oxygen Generator (PSA)",
  "Medical Ventilator Air Compressor",
  "MGPS Design Services"
];

const Services = () => {
  return (
    <section id="services" className="section-spacing">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="section-eyebrow">EQUIPMENT PORTFOLIO</div>
          <h2 className={styles.title}>Our Medical Gas Systems</h2>
          <p className={styles.introText}>
            Explore our smart solutions for medical gas pipeline system equipment for hospitals of every size and specialty.
          </p>
        </div>

        <div className={styles.mainGrid}>
          {mainSystems.map((system, index) => (
            <motion.div 
              key={system.title}
              className="card-precision"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className={styles.imageWrapper}>
                <Image src={system.image} alt={system.title} fill className={styles.productImage} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.systemTitle}>{system.title}</h3>
                <p className={styles.systemDescription}>{system.description}</p>
                <div className={styles.bullets}>
                  {system.bullets.map((bullet, i) => (
                    <span key={i} className={styles.bulletTag}>{bullet}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.portfolioSection}>
          <h4 className={styles.portfolioTitle}>ALSO IN OUR PORTFOLIO</h4>
          <div className={styles.portfolioGrid}>
            {portfolioItems.map((item, index) => (
              <div key={index} className={styles.portfolioItem}>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className={styles.viewAll}>
            <button className="btn btn-outline">View all products</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
