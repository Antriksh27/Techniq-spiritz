"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Our Systems', href: '#services' },
    { name: 'Engineering', href: '#features' },
    { name: 'Compliance', href: '#certifications' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/logo.svg" 
              alt="Technik Spirits MedTech" 
              width={140} 
              height={32} 
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
          <Link href="#contact" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '10px' }}>
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
            width={120} 
            height={28} 
          />
          <button onClick={() => setIsMobileMenuOpen(false)} className={styles.closeBtn}>CLOSE</button>
        </div>
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
          <Link href="#contact" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
            DISCUSS PROJECT
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
