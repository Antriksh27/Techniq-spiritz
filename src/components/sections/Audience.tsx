import React from 'react';
import styles from './Audience.module.css';

const Audience = () => {
  const audiences = [
    {
      title: "Owners & Promoters",
      symbol: "+",
      description: "Systems that reduce long-term costs, free up hospital space, and protect your investment over its full lifecycle."
    },
    {
      title: "Architects & Consultants",
      symbol: "▲",
      description: "Design support and capacity planning for MGPS projects of every scale — from concept through to specifications."
    },
    {
      title: "Biomedical & Maintenance",
      symbol: "■",
      description: "Easy serviceability and PLC-controlled automatic operation — backed by dependable after-sales support."
    },
    {
      title: "Greenfield Projects",
      symbol: "◆",
      description: "Quiet, compact systems with smart controls and BMS compatibility for modern hospital infrastructure."
    },
    {
      title: "Expansion & Retrofit",
      symbol: "●",
      description: "Improved reliability and lower energy costs for existing hospital infrastructure."
    },
    {
      title: "Contractors & Dealers",
      symbol: "⬢",
      description: "Patented systems that add clear differentiation to your proposals, backed by dependable technical support."
    }
  ];

  return (
    <section className={styles.audience}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.intro} fade-up`}>
          <div className="accent-line"></div>
          <h2 className="section-heading" style={{ color: 'var(--white)' }}>Who we work with.</h2>
          <p className={styles.subtitle}>
            From hospital promoters to plant room operators, every Technik Spirits system is designed around the people who plan, specify, operate, and maintain hospital infrastructure.
          </p>
        </div>

        <div className={`${styles.grid} fade-up`} style={{ animationDelay: '0.2s' }}>
          {audiences.map((item, index) => (
            <div key={index} className={styles.audienceCard}>
              <span className={styles.icon}>{item.symbol}</span>
              <h3 className={styles.audienceTitle}>{item.title}</h3>
              <p className={styles.audienceDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
