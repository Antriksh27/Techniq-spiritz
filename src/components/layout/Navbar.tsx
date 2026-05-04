'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { GetStartedButton } from '@/components/ui/get-started-button';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products', hasDropdown: true },
    { name: 'Resources', href: '#resource', hasDropdown: true },
    { name: 'Contact Us', href: '#contact' },
  ];

  const productsData = {
    'Core Systems': [
      'Medical Air Compressor System — Integrex',
      'Medical Vacuum Pump System — Rotary Vane',
      'Medical Oxygen Generator',
      'Anaesthetic Gas Scavenging System (AGSS)',
    ],
    'Other Products & Services': [
      'Medical Vacuum Pump System — Reciprocating',
      'Medical Ventilator Air Compressor',
      'Compressors, Pumps and Spares',
      'MGPS Design Services',
    ]
  };

  const resourcesData = ['Blogs', 'Medical Gas Unit Convertors', 'Press & Media'];

  // Spring config for a "liquid" premium feel
  const springConfig = { type: 'spring' as const, stiffness: 200, damping: 30, mass: 0.8 };

  return (
    <>
      <motion.header 
        layout
        animate={{
          width: scrolled ? '92%' : '100%',
          y: scrolled ? 24 : 0,
          borderRadius: scrolled ? '40px' : '0px',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 1)',
          boxShadow: scrolled ? '0 25px 60px -12px rgba(0,0,0,0.25)' : '0 0px 0px rgba(0,0,0,0)',
          borderBottomWidth: scrolled ? '0px' : '1px',
          borderWidth: scrolled ? '1px' : '0px',
          borderColor: scrolled ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.05)',
        }}
        transition={springConfig}
        className={cn(
          'fixed top-0 left-1/2 -translate-x-1/2 backdrop-blur-xl border-black/[0.04]'
        )}
        style={{ zIndex: 1000000 }}
      >
        <div className={cn(
          "container mx-auto px-10 lg:px-14 flex items-center justify-between transition-all duration-700 ease-out",
          scrolled ? "h-16" : "h-20"
        )}>
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link href="/" className="block py-1">
              <motion.div
                animate={{ scale: scrolled ? 0.88 : 1 }}
                transition={springConfig}
                className="origin-left"
              >
                <Image src="/logo.svg" alt="Technik Spirits" width={165} height={42} priority />
              </motion.div>
            </Link>
          </div>

          {/* NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-14 h-full">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="h-full flex items-center relative"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href={link.href}
                  className={cn(
                    "text-[13px] font-accent font-semibold uppercase tracking-wider transition-colors duration-500 py-1",
                    activeDropdown === link.name ? "text-[#C84B2A]" : "text-black/50 hover:text-black"
                  )}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex justify-end min-w-[160px]">
            <GetStartedButton className="scale-90 origin-right">Discuss Project</GetStartedButton>
          </div>
        </div>
      </motion.header>

      {/* FULL WIDTH MEGA MENU */}
      <AnimatePresence>
        {(activeDropdown === 'Products' || activeDropdown === 'Resources') && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: 'auto', opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -10 }}
            transition={{ type: 'spring', stiffness: 250, damping: 35 }}
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={() => setActiveDropdown(null)}
            className={cn(
              "fixed left-1/2 -translate-x-1/2 bg-white/98 backdrop-blur-2xl shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] scrollbar-hide",
               scrolled ? "top-[96px] rounded-3xl border border-black/[0.06]" : "top-20 border-b border-black/[0.06]"
            )}
            style={{ 
              width: scrolled ? '94%' : '100%',
              maxHeight: 'calc(100vh - 120px)',
              overflowY: 'auto',
              zIndex: 999999
            }}
          >
            <div className="container mx-auto py-16 px-14 grid grid-cols-12 relative">
              {/* Vertical Guide Lines */}
              <div className="absolute inset-y-0 left-14 w-[1px] bg-black/[0.02]" />
              <div className="absolute inset-y-0 right-14 w-[1px] bg-black/[0.02]" />
              
              {activeDropdown === 'Products' ? (
                <>
                  {/* Category 1 */}
                  <div className="col-span-5 pl-14">
                    <div className="flex items-center gap-5 mb-12">
                      <div className="size-2 bg-[#C84B2A] rotate-45" />
                      <h4 className="font-accent text-[12px] font-bold uppercase tracking-[0.15em] text-black/40">Core Systems</h4>
                    </div>
                    <div className="flex flex-col gap-7">
                      {productsData['Core Systems'].map((item, i) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.03, type: 'spring' }}
                        >
                          <Link 
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="group flex flex-col max-w-fit"
                          >
                            <span className="text-[17px] font-body font-medium text-black/80 group-hover:text-[#C84B2A] transition-all duration-300 leading-tight">
                              {item}
                            </span>
                            <div className="w-0 h-[1.5px] bg-[#C84B2A]/40 group-hover:w-full transition-all duration-500 mt-2" />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Center Divider */}
                  <div className="col-span-2 flex justify-center items-center">
                    <div className="h-48 w-[1px] bg-black/[0.05] relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2.5 border border-black/5 bg-white rotate-45" />
                    </div>
                  </div>

                  {/* Category 2 */}
                  <div className="col-span-5 pr-14">
                    <div className="flex items-center gap-5 mb-12">
                      <div className="size-2 bg-black/10 rotate-45" />
                      <h4 className="font-accent text-[12px] font-bold uppercase tracking-[0.15em] text-black/40">Other Products & Services</h4>
                    </div>
                    <div className="flex flex-col gap-7">
                      {productsData['Other Products & Services'].map((item, i) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (i + 4) * 0.03, type: 'spring' }}
                        >
                          <Link 
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="group flex flex-col max-w-fit"
                          >
                            <span className="text-[17px] font-body font-medium text-black/80 group-hover:text-black transition-all duration-300 leading-tight">
                              {item}
                            </span>
                            <div className="w-0 h-[1.5px] bg-black/10 group-hover:w-full transition-all duration-500 mt-2" />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                /* RESOURCES MENU */
                <div className="col-span-12 px-14">
                  <div className="flex items-center gap-5 mb-12">
                    <div className="size-2 bg-[#C84B2A] rotate-45" />
                    <h4 className="font-accent text-[11px] font-bold uppercase tracking-[0.2em] text-black/25">Technical Resources</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-12">
                    {resourcesData.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05, type: 'spring' }}
                      >
                        <Link 
                          href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="group block p-10 border border-black/[0.05] hover:border-[#C84B2A]/30 hover:bg-black/[0.005] transition-all duration-500 rounded-2xl"
                        >
                          <span className="block text-[17px] font-body font-medium text-black group-hover:text-[#C84B2A] transition-colors leading-tight">
                            {item}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
