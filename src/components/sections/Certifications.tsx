import React from 'react';
import styles from './Certifications.module.css';

const Certifications = () => {
  const credentials = [
    { title: "CDSCO Registered", description: "Registered medical device manufacturer with India's Central Drugs Standard Control Organisation." },
    { title: "ISO 13485 Certified", description: "Global quality management standard specifically for medical device manufacturing." },
    { title: "Patent Granted", description: "Proprietary, patent-granted modular medical gas systems built on unique engineering." },
    { title: "Design Protection", description: "Registered industrial design protection across all primary system configurations." },
    { title: "Exclusive MGPS Focus", description: "A singular focus on medical gas plant room systems, ensuring depth of expertise." },
    { title: "Legacy of Precision", description: "Backed by three generations of family manufacturing excellence in compressor systems." }
  ];

  const standards = [
    { code: "HTM 02-01", name: "UK MGPS Standard" },
    { code: "ISO 7396", name: "Global MGPS Standard" },
    { code: "ISO 80601", name: "Anaesthetic Workstations" }
  ];

  return (
    <section id="certifications" className={styles.certifications}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.intro} fade-up`}>
          <h2 className="section-heading">Certifications & Standards</h2>
          <p className={styles.subtitle}>
            Our commitment to excellence is verified by international regulatory bodies and engineering standards.
          </p>
        </div>

        <div className={`${styles.credentialGrid} fade-up`} style={{ animationDelay: '0.1s' }}>
          {credentials.map((item, index) => (
            <div key={index} className={styles.credentialCard}>
              <h4 className={styles.credTitle}>{item.title}</h4>
              <p className={styles.credDescription}>{item.description}</p>
            </div>
          ))}
        </div>

        <div className={`${styles.standardsSection} fade-up`} style={{ animationDelay: '0.2s' }}>
          <div className={styles.standardsLabel}>Reference Standards</div>
          <div className={styles.standardsList}>
            {standards.map((item, index) => (
              <div key={index} className={styles.standardItem}>
                <span className={styles.standardCode}>{item.code}</span>
                <span className={styles.standardName}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
