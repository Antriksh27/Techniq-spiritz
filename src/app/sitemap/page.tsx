import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from 'next/link';

export default function Sitemap() {
  return (
    <main>
      <Navbar />
      <div className="container section-padding">
        <h1>Sitemap</h1>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/#products">Products</Link></li>
          <li><Link href="/#portfolio">Portfolio</Link></li>
          <li><Link href="/#certifications">Certifications</Link></li>
          <li><Link href="/privacy-policy">Privacy Policy</Link></li>
        </ul>
      </div>
      <Footer />
    </main>
  );
}
