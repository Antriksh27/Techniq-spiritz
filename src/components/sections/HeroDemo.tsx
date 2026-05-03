"use client";

import React from 'react';
import { HeroSection } from '@/components/ui/hero-section-2';

export default function HeroSectionDemo() {
  return (
    <div className="w-full">
      <HeroSection
        badge="Specialists in MGPS plant room equipment"
        title={
          <>
            MEDICAL GAS <br />
            PIPELINE SYSTEM <br />
            FOR HOSPITALS
          </>
        }
        subtitle="We design and manufacture source equipment for Medical Gas Pipeline Systems (MGPS), including medical air compressors, medical vacuum pumps, oxygen generators, and anaesthetic gas scavenging systems (AGSS)."
        callToAction={{
          text: "EXPLORE OUR SYSTEMS",
          href: "#products",
        }}
        backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
        contactInfo={{
            website: "technikspirits.com",
            phone: "+91 90330 09328",
            address: "AHMEDABAD, GUJARAT, INDIA",
        }}
      />
    </div>
  );
}
