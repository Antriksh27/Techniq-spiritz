import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Products from '@/components/sections/Products';
import Features from '@/components/sections/Features';
import Audience from '@/components/sections/Audience';
import Certifications from '@/components/sections/Certifications';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/layout/Footer';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <SectionDivider 
        fromColor="#1C2B3A" 
        toColor="#FFFFFF" 
        direction="up" 
        height={80} 
      />
      <Products />
      <Features />
      <Audience />
      <SectionDivider 
        fromColor="#1C2B3A" 
        toColor="#FFFFFF" 
        direction="up" 
        height={80} 
      />
      <Certifications />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
