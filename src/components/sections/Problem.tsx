import React from 'react';
import styles from './Problem.module.css';

const Problem = () => {
  return (
    <section className={`${styles.problem} clinical-grid`}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.leftColumn} fade-up`}>
          <div className={styles.intro}>
            <div className="accent-line"></div>
            <h2 className="section-heading">The Problem</h2>
            <p className={styles.subtitle}>An industrial assembly, sold into a medical application.</p>
          </div>
          
          <div className={styles.content}>
            <h3 className={styles.mainTitle}>Most MGPS source equipment was not designed for hospitals.</h3>
            <p className={styles.text}>
              For decades, hospitals have accepted medical gas equipment that is noisy, bulky, and energy-intensive. It does not have to be this way.
            </p>
            <p className={styles.text}>
              Most medical gas plant room equipment in the market today is not engineered for hospitals. It is an assembly of industrial components — compressors, vacuum pumps, receivers, dryers, filters — packaged together and sold into medical use.
            </p>
            <p className={styles.text}>
              The components themselves are rarely medically certified. The system as a whole is rarely designed around how a hospital actually operates.
            </p>
          </div>
        </div>

        <div className={`${styles.rightColumn} fade-up`} style={{ animationDelay: '0.2s' }}>
          <div className={styles.consequences}>
            <h4>The consequences show up quietly, every day, for years:</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}>Among the noisiest equipment in the entire facility</li>
              <li className={styles.listItem}>Heavy vibration that demands dedicated foundations</li>
              <li className={styles.listItem}>Oversized footprints that waste valuable hospital space</li>
              <li className={styles.listItem}>High electricity consumption that pushes up operating expenses</li>
              <li className={styles.listItem}>Rigid duplex designs with limited redundancy and no real scalability</li>
            </ul>
          </div>

          <div className={styles.footerNote}>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>These are not minor inconveniences.</p>
            <p>For new hospitals, these issues complicate planning, sizing, and layout. In existing hospitals, they impact day-to-day operations through noise, vibration, electricity use, maintenance demands, and limited flexibility for expansion.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
