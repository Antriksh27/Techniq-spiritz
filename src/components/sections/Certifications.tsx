import React from 'react';
import styles from './Certifications.module.css';

const Certifications = () => {
  const credentials = [
    { 
      title: "CDSCO Registered", 
      description: "Registered medical device manufacturer with India's Central Drugs Standard Control Organisation.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    },
    { 
      title: "ISO 13485 Certified", 
      description: "Global quality management standard specifically for medical device manufacturing.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
      )
    },
    { 
      title: "Patent Granted", 
      description: "Proprietary, patent-granted modular medical gas systems built on unique engineering.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      )
    },
    { 
      title: "Design Protection", 
      description: "Registered industrial design protection across all primary system configurations.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )
    },
    { 
      title: "Exclusive MGPS Focus", 
      description: "A singular focus on medical gas plant room systems, ensuring depth of expertise.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
        </svg>
      )
    },
    { 
      title: "Legacy of Precision", 
      description: "Backed by three generations of family manufacturing excellence in compressor systems.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 12l3 -3" />
          <path d="M12 12l-2 5" />
          <path d="M12 7v1" />
          <path d="M12 16v1" />
          <path d="M17 12h-1" />
          <path d="M7 12h1" />
        </svg>
      )
    }
  ];


  const standards = [
    { 
      code: "HTM 02-01", 
      name: "UK MGPS Standard",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      )
    },
    { 
      code: "ISO 7396", 
      name: "Global MGPS Standard",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20" />
          <path d="M12 2a14.5 14.5 0 0 1 0 20" />
          <path d="M2 12h20" />
        </svg>
      )
    },
    { 
      code: "ISO 80601", 
      name: "Anaesthetic Workstations",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      )
    }
  ];

  return (
    <section id="certifications" className={styles.certifications}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.intro} fade-up`}>
          <div className="badge">Compliance</div>
          <h2 className="section-heading">Certifications & Standards</h2>
          <p className={styles.subtitle}>
            Our commitment to excellence is verified by international regulatory bodies and engineering standards.
          </p>
        </div>

        <div className={`${styles.credentialGrid} fade-up`} style={{ animationDelay: '0.1s' }}>
          {credentials.map((item, index) => (
            <div key={index} className={styles.credentialCard}>
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
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
                <span className={styles.standardIcon}>{item.icon}</span>
                <div className={styles.standardText}>
                  <span className={styles.standardCode}>{item.code}</span>
                  <span className={styles.standardName}>{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

