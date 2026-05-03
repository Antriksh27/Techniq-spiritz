import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <Navbar />
      <div className="container section-spacing">
        <h1 style={{ marginBottom: '40px' }}>Privacy Policy</h1>
        <p>Your privacy is important to us. It is Technik Spirits MedTech Private Limited's policy to respect your privacy regarding any information we may collect from you across our website.</p>
        <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
      </div>
      <Footer />
    </main>
  );
}
