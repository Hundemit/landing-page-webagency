"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { Goal, BookCheck, ChartPie, Users, FolderSync, Zap } from "lucide-react";
import { useRef, useEffect } from "react";

const FeaturesPage2 = ({ className }: { className?: string }) => {
  const serviceData = [
    {
      icon: Goal,
      title: "Strategie & Konzept",
      description: "Klare Strategien und durchdachte Konzepte, die als Fundament für Ihren digitalen Erfolg dienen.",
      badges: ["Strategie", "Konzeptentwicklung", "Digitale Transformation", "Strategie", "Konzeptentwicklung", "Digitale Transformation"],
    },
    {
      icon: BookCheck,
      title: "Webdesign",
      description: "Modernes, nutzerfreundliches Webdesign, das Ihre Marke professionell präsentiert.",
      badges: ["UX/UI Design", "Responsive Design", "Design System"],
    },
    {
      icon: ChartPie,
      title: "Online Shop",
      description: "Individuell gestaltete Onlineshops, die eine reibungslose Customer Journey bieten.",
      badges: ["E-Commerce", "Shop-Systeme", "Conversion Optimierung"],
    },
    {
      icon: Users,
      title: "Online Marketing",
      description: "Gezielte Marketingmaßnahmen, die Ihre Zielgruppe direkt ansprechen.",
      badges: ["Content Marketing", "Social Media", "Kampagnenmanagement"],
    },
    {
      icon: FolderSync,
      title: "SEO",
      description: "Bessere Sichtbarkeit bei Google und Co. durch maßgeschneiderte SEO-Strategien.",
      badges: ["On-Page SEO", "Technisches SEO", "Rankingoptimierung"],
    },
    {
      icon: Zap,
      title: "Logo & Brand Design",
      description: "Ein starkes visuelles Erscheinungsbild, das Wiedererkennung schafft und Ihre Marke stärkt.",
      badges: ["Logo Design", "Brand Identity", "Visual Branding"],
    },
  ];

  const cardRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Reduced motion preference
    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.to(cardRef.current, {
        y: "0px",
        duration: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: targetRef.current,
          start: "top 90%",
          end: "bottom 95%",
          scrub: false,
          toggleActions: "play none none reverse",
        },
      });
    });

    // Mobile devices (up to 768px)
    mm.add("(max-width: 768px)", () => {
      gsap.to(cardRef.current, {
        y: "0px",
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: targetRef.current,
          start: "top 90%",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Desktop devices (769px and up)
    mm.add("(min-width: 769px)", () => {
      gsap.to(cardRef.current, {
        y: "0px",
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: targetRef.current,
          start: "top 75%",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={targetRef} className={cn("w-full container duration-300 mx-auto  flex-col !min-h-fit justify-center sm:h-[1500px] ", className)}>
      <div ref={cardRef} style={{ transform: "translateY(100%)" }} className="sticky top-[10%] w-full bg-primary-foreground sm:p-10 p-6 rounded-xl will-change-transform">
        <h2 className="sm:text-5xl text-4xl font-bold text-pretty text-background mb-10 md:mb-16 sm:px-6">Unsere Services.</h2>
        <div className="grid lg:grid-cols-3 sm:gap-8 gap-16   mx-auto">
          {serviceData.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-6 rounded-xl  hover:bg-[#073d25] hover:scale-105 transition-all duration-300 sm:p-6 p-0 cursor-pointer">
              <feature.icon className="size-8 text-background" />
              <span className="font-bold text-background text-2xl">{feature.title}</span>
              <p className="mt-1 text-background/80 text-base"> {feature.description} </p>
              <p className="text-background text-base font-bold"> Mehr Infos </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesPage2;
