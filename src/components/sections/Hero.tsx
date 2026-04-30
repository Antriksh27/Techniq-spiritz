import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={`${styles.hero} clinical-grid`}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.textContent} fade-up`}>
          <div className={styles.badge}>
            <span>Specialists in MGPS plant room equipment</span>
          </div>
          
          <h1 className={styles.mainHeading}>
            MEDICAL GAS<br />
            PIPELINE SYSTEM (MGPS)<br />
            FOR HOSPITALS
          </h1>
          
          <div className={styles.description}>
            <p>
              We design and manufacture source equipment for Medical Gas Pipeline Systems (MGPS), including medical air compressors, medical vacuum pumps, oxygen generators, and anaesthetic gas scavenging systems (AGSS).
            </p>
            <p style={{ fontWeight: 600, color: 'var(--primary)', marginTop: '1rem' }}>
              Our systems are purpose-built for hospitals prioritizing low noise & vibrations, space optimization and less electricity consumption.
            </p>
            <p style={{ opacity: 0.7, fontSize: '0.85rem', marginTop: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              healthcare environments where noise, vibration, space, reliability, and compliance are non-negotiable.
            </p>
          </div>
          
          <div className={styles.ctas} style={{ marginTop: '1.5rem' }}>
            <Link href="#products" className="btn btn-primary">Explore Products</Link>
            <Link href="#footer" className="btn btn-outline">Discuss Your Project</Link>
          </div>
          
          <div className={styles.trustSignals}>
            <div className={styles.signal}>
              <strong>CDSCO</strong>
              <span>Registered</span>
            </div>
            <div className={styles.signal}>
              <strong>ISO 13485</strong>
              <span>Certified</span>
            </div>
            <div className={styles.signal}>
              <strong>PATENTED</strong>
              <span>Technology</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.visual} fade-in`}>
        <div className={styles.imageContainer}>
          <Image 
            src="/product-compressor.png" 
            alt="Medical Gas System Engineering" 
            fill
            className={styles.productImage}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
