"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const navLinks = [
    { name: 'Our Systems', href: '#services' },
    { name: 'Engineering', href: '#features' },
    { name: 'Audience', href: '#audience' },
    { name: 'Compliance', href: '#certifications' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/logo.svg" 
              alt="Technik Spirits MedTech" 
              width={180} 
              height={40} 
              className={styles.logoImage}
              priority
            />
          </Link>
          <nav className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className={styles.link}>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.right}>
          <Link href="#contact" className={styles.bookBtn}>
            DISCUSS PROJECT
          </Link>
          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            MENU
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
        <div className={styles.mobileHeader}>
          <Image 
            src="/logo.svg" 
            alt="Technik Spirits MedTech" 
            width={150} 
            height={35} 
          />
          <button onClick={() => setIsMobileMenuOpen(false)}>CLOSE</button>
        </div>
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
