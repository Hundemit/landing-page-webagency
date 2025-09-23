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
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: "0px",
        scrollTrigger: {
          trigger: targetRef.current,
          start: "top 80%",
          end: "bottom bottom",
          scrub: 1,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={targetRef} className={cn("w-full container duration-300 mx-auto flex-col min-h-fit justify-center h-[100vh]", className)}>
      <div ref={cardRef} style={{ transform: "translateY(50%)" }} className="sticky top-48 mx-auto bg-primary-foreground p-12 rounded-xl will-change-transform">
        <h2 className="text-5xl font-bold text-pretty text-background">Unsere Services.</h2>
        <div className="mt-10 sm:mt-16 grid lg:grid-cols-3 gap-8  mx-auto">
          {serviceData.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-6 rounded-xl  hover:bg-[#073d25] hover:scale-105 transition-all duration-300 p-6 cursor-pointer">
              <feature.icon className="size-8 text-background" />
              <span className="font-bold text-background text-2xl">{feature.title}</span>
              <p className="mt-1 text-background/80 text-base"> {feature.description} </p>
              <p className="text-background text-base font-bold"> Mehr Infos </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage2;
