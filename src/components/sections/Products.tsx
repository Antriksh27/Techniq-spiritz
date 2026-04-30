import React from 'react';
import Image from 'next/image';
import styles from './Products.module.css';

const Products = () => {
  const mainProducts = [
    {
      index: "01",
      title: "Medical Air Compressor System — integrex",
      description: "A patent-granted, oil-free medical air compressor system built on a modular architecture. Delivers ultra-high-purity medical air for ventilators, anaesthesia workstations and respiratory equipment.",
      features: ["Patent Granted", "100% Oil-Free", "Modular & Scalable"],
      image: "/product-integrex.png",
    },
    {
      index: "02",
      title: "Medical Vacuum Pump System — Rotary Vane",
      description: "Advanced centralized vacuum systems for modern hospitals. Delivers reliable suction across OTs, ICUs, and wards — with low noise, low vibration, compact footprint, and dependable duplex redundancy.",
      features: ["Silent & Vibration-Free", "Skid-Mounted Package", "Fully Automatic"],
      image: "/product-vacuum-v2.png",
    },
    {
      index: "03",
      title: "Anaesthetic Gas Scavenging System (AGSS)",
      description: "Active scavenging system for waste anaesthetic gases. Designed to support a healthier working environment in operation theatres (OTs), protecting staff from long-term exposure.",
      features: ["OT Safety", "Active Scavenging", "Workstation-Compatible"],
      image: "/product-agss-v2.png",
    }
  ];

  return (
    <section id="products" className={styles.products}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.intro} fade-up`}>
          <div className="accent-line"></div>
          <h2 className="section-heading">Our Medical Gas Systems</h2>
          <p>Explore our smart solutions for medical gas pipeline system equipment for hospitals of every size and specialty.</p>
        </div>

        <div className={`${styles.mainGrid} fade-up`} style={{ animationDelay: '0.2s' }}>
          {mainProducts.map((product, idx) => (
            <div key={idx} className={styles.column}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  fill
                  className={styles.productImage}
                  priority={idx === 0}
                />
              </div>

              <div className={styles.cardContent}>
                <div className={styles.systemIndex}>SYSTEM {product.index}</div>
                <h3>{product.title}</h3>
                <p className={styles.description}>{product.description}</p>
                <div className={styles.features}>
                  {product.features.map((f, i) => (
                    <span key={i} className={styles.featureBadge}>{f}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
