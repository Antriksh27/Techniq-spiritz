import React from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const testimonials = [
    {
      text: "We embarked on a new hospital project. By now, Siddharth had the total confidence of the Board — and the next purchase order was issued without considering any other alternative.",
      author: "Mr. Kandarp Mankad",
      title: "Executive Director",
      institution: "Gokulam Hospital, Rajkot"
    },
    {
      text: "We replaced our 10-year-old traditional oil-free system with the integrex Generator. The system is incredibly compact, with minimal noise and vibration — creating a more peaceful environment in our Level 3 NICU.",
      author: "Dr. Vaibhav Patel",
      title: "MD Pediatrics, IAP Fellow in Neonatology",
      institution: "Hasya New Born Care Center, Palanpur"
    }
  ];

  return (
    <section className={styles.testimonials}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.leftColumn} fade-up`}>
          <div className={styles.intro}>
            <h2 className="section-heading">What our clients say</h2>
            <p className={styles.subtitle}>
              Dependability is earned through performance. Hear from the leaders who rely on Technik Spirits.
            </p>
          </div>
        </div>

        <div className={`${styles.rightColumn} fade-up`} style={{ animationDelay: '0.2s' }}>
          {testimonials.map((t, index) => (
            <div key={index} className={styles.card}>
              <p className={styles.text}>{t.text}</p>
              <div className={styles.authorInfo}>
                <strong className={styles.authorName}>{t.author}</strong>
                <span className={styles.authorTitle}>{t.title}</span>
                <span className={styles.institution}>{t.institution}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
