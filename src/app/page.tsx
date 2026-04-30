import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Products from "@/components/sections/Products";
import PortfolioBar from "@/components/sections/PortfolioBar";
import Features from "@/components/sections/Features";
import Audience from "@/components/sections/Audience";
import Certifications from "@/components/sections/Certifications";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Products />
      <PortfolioBar />
      <Features />
      <Audience />
      <Certifications />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
