import React from 'react';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding" style={{ backgroundColor: 'var(--gray-light)' }}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Serving 500+ hospitals across India.</h2>
          <p className={styles.subtitle}>
            Trusted by leading government and private medical institutions for over five decades.
          </p>
        </div>

        <div className={styles.grid}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className={styles.clientCard}>
              <div className={styles.placeholderLogo}>
                Hospital Partner {i}
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.legacy}>
          <div className={styles.legacyContent}>
            <h3>50+ Years of Manufacturing Legacy</h3>
            <p>Our deep-rooted experience in medical engineering ensures that every piece of equipment we manufacture is built for longevity and life-critical performance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
