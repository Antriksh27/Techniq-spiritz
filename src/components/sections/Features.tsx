import React from 'react';
import styles from './Features.module.css';

const Features = () => {
  const advantages = [
    { title: "Low Noise", description: "Quieter than traditional MGPS plant rooms." },
    { title: "Minimal Vibration", description: "Eliminates the need for dedicated foundations." },
    { title: "Compact Footprint", description: "Space-efficient designs for better planning." },
    { title: "Energy Efficient", description: "Substantial electricity savings over lifecycle." },
    { title: "Purpose-Built", description: "Designed specifically for hospital use." },
    { title: "Modular & Scalable", description: "Staged expansion for hospital growth." },
    { title: "Smart Redundancy", description: "Continuity of supply during service." },
    { title: "BMS-Ready", description: "Automatic controls with BMS compatibility." }
  ];

  return (
    <section className={styles.features}>
      <div className={styles.backgroundContainer}></div>
      <div className={`${styles.container} container`}>
        <div className={`${styles.intro} fade-up`}>
          <h2 className="section-heading">
            Built for the way hospitals actually run
          </h2>
          <p className={styles.subtitle}>
            Every Technik Spirits system is engineered for what hospitals actually need — lower noise, smaller footprint, and higher energy efficiency.
          </p>
        </div>

        <div className={`${styles.grid} fade-up`} style={{ animationDelay: '0.2s' }}>
          {advantages.map((item, index) => (
            <div key={index} className={styles.advantageCard}>
              <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
              <h3 className={styles.advantageTitle}>{item.title}</h3>
              <p className={styles.advantageDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
