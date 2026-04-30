import React from 'react';
import styles from './Solution.module.css';

const Solution = () => {
  return (
    <section className={styles.solution}>
      <div className={styles.gridOverlay}></div>
      <div className={`${styles.container} container`}>
        <div className={`${styles.leftColumn} fade-up`}>
          <div className={styles.intro}>
            <div className="accent-line"></div>
            <h2 className="section-heading" style={{ color: 'var(--white)' }}>The Solution</h2>
            <p className={styles.subtitle}>Built for the way hospitals actually run.</p>
          </div>
          
          <div className={styles.content}>
            <h3 className={styles.mainTitle}>Technik Spirits designs and manufactures MGPS source equipment from the ground up specifically for hospital use.</h3>
            <p className={styles.text}>
              Every component and every system architecture is selected with medical applications in mind. Our systems are built around a deep understanding of clinical applications — how medical gases are consumed, how plant rooms actually operate, and what biomedical engineers and medical gas operators need from this equipment day after day, year after year.
            </p>
          </div>
        </div>

        <div className={`${styles.rightColumn} fade-up`} style={{ animationDelay: '0.2s' }}>
          <div className={styles.advantages}>
            <h4>This translates into practical advantages:</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}>Engineered to run quietly, with significantly lower vibration</li>
              <li className={styles.listItem}>Compact footprints that free up valuable plant room space</li>
              <li className={styles.listItem}>Lower electricity consumption across years of continuous operation</li>
              <li className={styles.listItem}>Modular and scalable architectures that replace rigid duplex layouts</li>
              <li className={styles.listItem}>BMS-compatible and ready for integration into modern hospital infrastructure</li>
            </ul>
          </div>

          <div className={styles.footerNote}>
            <p>
              The result is medical gas equipment that fits how hospitals are planned, how they are built, and how they are run — not equipment that hospitals have to plan around.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
