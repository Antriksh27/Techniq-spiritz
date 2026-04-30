import React from 'react';
import styles from './PortfolioBar.module.css';

const PortfolioBar = () => {
  const portfolio = [
    "Medical Vacuum Pump — Reciprocating",
    "Medical Oxygen Generator (PSA)",
    "Medical Ventilator Air Compressor",
    "MGPS Design Services"
  ];

  return (
    <div className={styles.portfolioBar}>
      <div className={`${styles.container} container`}>
        <div className={styles.label}>ALSO IN OUR PORTFOLIO:</div>
        <div className={styles.items}>
          {portfolio.map((item, index) => (
            <div key={index} className={styles.item}>
              {item}
            </div>
          ))}
        </div>
        <a href="#footer" className={styles.viewAll}>
          View all products →
        </a>
      </div>
    </div>
  );
};

export default PortfolioBar;
