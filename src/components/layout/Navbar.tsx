"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if at top
      setIsScrolled(currentScrollY > 50);
      
      // Determine visibility (hide on scroll down, show on scroll up)
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Systems', href: '#products' },
    { name: 'Advantages', href: '#products' },
    { name: 'Compliance', href: '#certifications' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <nav className={`
      ${styles.navbar} 
      ${isScrolled ? styles.scrolled : ''} 
      ${!isVisible ? styles.hidden : ''}
    `}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/logo.svg" 
            alt="Technik Spirits Logo" 
            width={264} 
            height={75} 
            priority
          />
        </Link>

        <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={styles.link}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="#footer" className={styles.navBtn} onClick={() => setIsMobileMenuOpen(false)}>
            Discuss Your Project
          </Link>
        </div>

        <button 
          className={styles.mobileMenuBtn} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.burger} ${isMobileMenuOpen ? styles.burgerOpen : ''}`}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
