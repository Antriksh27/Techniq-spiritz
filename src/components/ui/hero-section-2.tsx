"use client";

import React from 'react';
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps, Variants } from 'framer-motion';
import { Globe, Phone, MapPin, ArrowRight } from 'lucide-react';

const InfoIcon = ({ type }: { type: 'website' | 'phone' | 'address' }) => {
    const icons = {
        website: <Globe className="h-4 w-4 text-primary" />,
        phone: <Phone className="h-4 w-4 text-primary" />,
        address: <MapPin className="h-4 w-4 text-primary" />,
    };
    return <div className="mr-3 flex-shrink-0 opacity-70">{icons[type]}</div>;
};


// Prop types for the HeroSection component
interface HeroSectionProps extends Omit<HTMLMotionProps<"section">, 'title'> {
  badge?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  contactInfo: {
    website: string;
    phone: string;
    address: string;
  };
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, badge, title, subtitle, callToAction, backgroundImage, contactInfo, ...props }, ref) => {
    
    // Animation variants
    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.3,
        },
      },
    };

    const itemVariants: Variants = {
      hidden: { y: 30, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
        },
      },
    };
    
    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex w-full flex-col overflow-hidden bg-background text-foreground md:flex-row pt-[140px] min-h-[95vh]",
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        {...props}
      >
        {/* Left Side: Content */}
        <div className="flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 lg:w-[55%] lg:p-20">
            <div className="flex-grow flex flex-col justify-center">
                {badge && (
                    <motion.div 
                      variants={itemVariants}
                      className="inline-flex items-center space-x-2 mb-8"
                    >
                        <span className="h-[1px] w-8 bg-primary/40"></span>
                        <span className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase">
                            {badge}
                        </span>
                    </motion.div>
                )}

                <motion.main variants={containerVariants} className="max-w-4xl">
                    <motion.h1 
                      className="text-5xl font-bebas leading-[0.95] text-foreground md:text-6xl lg:text-7xl xl:text-8xl tracking-tight uppercase" 
                      variants={itemVariants}
                    >
                        {title}
                    </motion.h1>
                    
                    <motion.div className="my-10 h-1 w-24 bg-primary" variants={itemVariants}></motion.div>
                    
                    <motion.p className="mb-12 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed font-light" variants={itemVariants}>
                        {subtitle}
                    </motion.p>
                    
                    <motion.div variants={itemVariants}>
                        <a 
                          href={callToAction.href} 
                          className="inline-flex items-center px-10 py-5 bg-primary text-white text-[10px] font-bold tracking-[0.3em] transition-all hover:bg-primary/90 hover:shadow-2xl hover:-translate-y-1 duration-300 uppercase group"
                        >
                            {callToAction.text}
                            <ArrowRight className="ml-4 h-4 w-4 transition-transform group-hover:translate-x-2" />
                        </a>
                    </motion.div>
                </motion.main>
            </div>

            {/* Bottom Section: Footer Info */}
            <motion.footer className="mt-20 w-full pt-10 border-t border-border/40" variants={itemVariants}>
                <div className="grid grid-cols-1 gap-10 text-[9px] text-muted-foreground sm:grid-cols-3">
                    <div className="flex items-center group cursor-pointer transition-colors hover:text-foreground">
                        <InfoIcon type="website" />
                        <span className="font-bold tracking-[0.2em] uppercase">{contactInfo.website}</span>
                    </div>
                    <div className="flex items-center group cursor-pointer transition-colors hover:text-foreground">
                        <InfoIcon type="phone" />
                        <span className="font-bold tracking-[0.2em] uppercase">{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center group cursor-pointer transition-colors hover:text-foreground">
                        <InfoIcon type="address" />
                        <span className="font-bold tracking-[0.2em] uppercase leading-relaxed">{contactInfo.address}</span>
                    </div>
                </div>
            </motion.footer>
        </div>

        {/* Right Side: Image with Clip Path Animation */}
        <motion.div 
          className="w-full min-h-[500px] bg-cover bg-center md:w-1/2 md:min-h-full lg:w-[45%] relative grayscale hover:grayscale-0 transition-all duration-1000"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
          }}
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          animate={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
          transition={{ duration: 1.6, ease: [0.23, 1, 0.32, 1] as const }}
        >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-primary/5"></div>
        </motion.div>
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
