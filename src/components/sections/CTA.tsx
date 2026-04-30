import React from 'react';
import Link from 'next/link';
import styles from './CTA.module.css';

const CTA = () => {
  const scenarios = [
    { title: "Planning a New Hospital?", desc: "Full-scale MGPS design and equipment sourcing for greenfield projects." },
    { title: "Expanding Capacity?", desc: "Modular systems designed for seamless integration and staged scaling." },
    { title: "Retrofit & Upgrades?", desc: "Replace outdated, noisy compressors with silent, efficient plant rooms." }
  ];

  return (
    <section className={styles.ctaSection}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.leftColumn} fade-up`}>
          <h2 className={styles.title}>
            Let’s discuss your medical gas requirement
          </h2>
          <p className={styles.description}>
            We help hospital owners and consultants assess the right medical gas system for their specific needs.
          </p>
          <div className={styles.buttons}>
            <Link href="#footer" className="btn btn-primary">
              Discuss Your Project
            </Link>
          </div>
        </div>

        <div className={`${styles.rightColumn} fade-up`} style={{ animationDelay: '0.2s' }}>
          {scenarios.map((s, index) => (
            <div key={index} className={styles.scenarioCard}>
              <h3 className={styles.scenarioTitle}>{s.title}</h3>
              <p className={s.scenarioDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
