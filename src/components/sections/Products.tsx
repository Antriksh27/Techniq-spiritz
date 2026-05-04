"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Products.module.css';
import { GetStartedButton } from '@/components/ui/get-started-button';

const Products = () => {
  const products = [
    {
      label: "SYSTEM 01",
      name: "Medical Air Compressor System — integrex™",
      description: "A patent-granted, oil-free medical air compressor system built on a modular architecture. Delivers ultra-high-purity medical air for hospitals — purpose-built for clinical environments.",
      image: "/product-integrex.png",
      tags: ["Patent Granted", "100% Oil-Free", "Modular"]
    },
    {
      label: "SYSTEM 02",
      name: "Medical Vacuum Pump System — Rotary Vane",
      description: "Advanced centralised vacuum systems for modern hospitals. Delivers reliable suction across OTs and ICUs — with low noise, low vibration and compact footprint.",
      image: "/product-vacuum.png",
      tags: ["Silent", "Skid-Mounted", "Automatic"]
    },
    {
      label: "SYSTEM 03",
      name: "Anaesthetic Gas Scavenging System (AGSS)",
      description: "Active scavenging system for waste anaesthetic gases. Designed to support a healthier working environment in operation theatres, protecting staff from exposure.",
      image: "/product-agss-v2.png",
      tags: ["OT Safety", "Active", "HTM 02-01"]
    }
  ];

  const portfolioItems = [
    "Reciprocating Vacuum Pumps",
    "Oxygen Generators (PSA)",
    "Ventilator Compressors",
    "MGPS Design Services"
  ];

  return (
    <section className={styles.section} id="products">
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <div className={styles.eyebrow}>Our Systems</div>
            <h2 className={styles.h2}>Medical Gas Equipment</h2>
            <p className={styles.introText}>Explore our solutions for medical gas pipeline system equipment for hospitals of every size and specialty.</p>
          </div>
          <GetStartedButton className="scale-90 origin-right">View all products</GetStartedButton>
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
                <GetStartedButton className="w-full mt-4" variant="outline" size="sm">Learn More</GetStartedButton>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <div className={styles.portfolioWrapper}>
        <div className={styles.portfolioRow}>
          <div className={styles.portfolioLeft}>
            <span className={styles.portfolioLabel}>Also in our portfolio:</span>
            <div className={styles.portfolioList}>
              {portfolioItems.map((item, i) => (
                <div key={i} className={styles.portfolioItem}>
                  <span className={styles.portfolioDot}></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <GetStartedButton variant="secondary" className="scale-90 origin-right">View All products</GetStartedButton>
        </div>
      </div>
    </section>
  );
};

export default Products;
