"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { Goal, BookCheck, ChartPie, Users, FolderSync, Zap } from "lucide-react";
import { useRef, useEffect } from "react";
import { RiArrowRightUpLine } from "@remixicon/react";
import ServiceCard from "../ui/ServiceCard";

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

    // Desktop devices (769px and up)
    mm.add("(min-width: 769px)", () => {
      // Set initial state
      gsap.set(cardRef.current, {
        y: "200%",
      });

      // Animate to final state
      gsap.to(cardRef.current, {
        y: "0px",
        duration: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: targetRef.current,
          start: "top 50%",
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
    <>
      {/* Desktop Section */}
      <section ref={targetRef} className={cn("w-full  duration-300 mx-auto flex-col !min-h-fit sm:h-[1600px] hidden lg:flex mt-32 py-32 ", className)}>
        <div ref={cardRef} className="w-full h-full mx-auto bg-primary-foreground py-32">
          <div className="flex flex-col gap-2 sticky top-[15svh] max-w-7xl mx-auto w-full">
            <div className="items-center gap-2 h-fit flex max-w-7xl mx-auto w-full">
              <hr className="w-8 border-background" />
              <h2 className="sm:text-lg text-base font-medium text-background">Unsere Services.</h2>
            </div>
            <h2 className="sm:text-4xl text-4xl font-bold text-pretty mb-8 text-center lg:text-left text-background">We turn bold ideas into smart digital experiences.</h2>

            <div className="w-full duration-300 rounded-xl will-change-transform">
              <div className="grid lg:grid-cols-3 lg:gap-8 gap-8 mx-auto duration-300">
                {serviceData.map((feature) => (
                  // desktop cards
                  <div key={feature.title} className="flex flex-col lg:gap-6 gap-4 rounded-xl p-8 hover:bg-background/10 hover:scale-105 cursor-pointer transition-all duration-300">
                    <feature.icon className="lg:size-8 size-6 text-background" />
                    <div className="flex flex-col gap-2">
                      <span className="font-bold text-2xl text-background">{feature.title}</span>
                      <p className="mt-1 text-base text-background">{feature.description}</p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <p className="text-base font-bold text-background">Mehr Infos</p>
                      <RiArrowRightUpLine className="size-5 text-background" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Section */}
      <section className={cn("w-full duration-300 mx-auto  flex-col !min-h-fit justify-center bg-primary-foreground py-24 lg:hidden", className)}>
        <div className="sticky top-[10%] w-full sm:p-10  duration-300  rounded-xl will-change-transform">
          <div className="sticky top-24">
            <div className=" items-center gap-2 h-fit flex ">
              <hr className="w-8  border-background" />
              <h2 className="sm:text-lg text-base font-medium text-background">Unsere Services.</h2>
            </div>
            <h2 className="sm:text-5xl text-3xl font-bold text-pretty text-background mb-10">Wir verwandeln mutige Ideen in smarte digitale Erlebnisse.</h2>
          </div>

          <div className="gap-96 flex flex-col">
            {serviceData.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                badges={service.badges}
                variant="default"
                className="sticky border-2  h-[60svh]"
                style={{ top: `${250 + index * 12}px` }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesPage2;
