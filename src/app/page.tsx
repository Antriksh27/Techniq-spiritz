import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Services from '@/components/sections/Services';
import Features from '@/components/sections/Features';
import Audience from '@/components/sections/Audience';
import Certifications from '@/components/sections/Certifications';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <Features />
      <Audience />
      <Certifications />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
