"use client";
import { cn } from "@/lib/utils";
import { LinkButton } from "./ui/LinkButton";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP ScrollTrigger Plugin registrieren
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const caseStudiesData = [
  {
    caseStudyTitle: "Nova Health",
    caseStudyDescription:
      "Nova Health needed a modern, accessible website that would instill trust, of care providers. We designed a clean, calming interface with intuitive navigation that makes essential info easy to find even in urgent moments.",
    impactLabel: "Impact",
    impactStats: [
      {
        value: "+38%",
        description: "Increase in session duration",
      },
      {
        value: "+52%",
        description: "Improvement in conversion rates",
      },
    ],
    moreDetailsText: "More Details",
    image: "/images/smiller.jpeg", // Zugewiesenes Bild für Nova Health
  },
  {
    caseStudyTitle: "GreenTech Solutions",
    caseStudyDescription:
      "GreenTech Solutions wanted a digital platform to showcase their eco-friendly products. We delivered a vibrant, interactive site that highlights their mission and drives user engagement.",
    impactLabel: "Impact",
    impactStats: [
      {
        value: "+45%",
        description: "Growth in user signups",
      },
      {
        value: "+60%",
        description: "Increase in product inquiries",
      },
    ],
    moreDetailsText: "More Details",
    image: "/images/field.png", // Zugewiesenes Bild für GreenTech Solutions
  },
  {
    caseStudyTitle: "Urban Eats",
    caseStudyDescription: "Urban Eats needed a mobile-first experience for their food delivery service. Our redesign improved ordering speed and customer satisfaction.",
    impactLabel: "Impact",
    impactStats: [
      {
        value: "+30%",
        description: "Faster order completion",
      },
      {
        value: "+25%",
        description: "Higher customer retention",
      },
    ],
    moreDetailsText: "More Details",
    image: "https://cdn.prod.website-files.com/684a11845c7dd0b4b7745cd9/684f57a20f6e64c09db89289_Celie-1-1170x780.webp", // Zugewiesenes Bild für Urban Eats
  },
];

export function OurRecentWorks2({ className }: { className?: string }) {
  const [currentImage, setCurrentImage] = useState(caseStudiesData[0].image);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // GSAP ScrollTrigger für jeden Card erstellen
    caseStudiesData.forEach((_, index) => {
      const cardElement = cardsRef.current[index];
      if (cardElement) {
        ScrollTrigger.create({
          trigger: cardElement,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            // Sanfter Übergang zum neuen Bild
            setCurrentImage(caseStudiesData[index].image);
            gsap.fromTo(imageRef.current, { opacity: 0 }, { opacity: 1, duration: 0 });
          },
          onEnterBack: () => {
            // Sanfter Übergang zum neuen Bild beim Zurückscrollen
            gsap.to(imageRef.current, {
              opacity: 0,
              duration: 0,
              onComplete: () => {
                setCurrentImage(caseStudiesData[index].image);
                gsap.to(imageRef.current, {
                  opacity: 1,
                  duration: 0,
                });
              },
            });
          },
        });
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className={cn("flex p-4 pt-24 justify-center mt-18 bg-primary-foreground gap-4  h-auto w-full", className)}>
      {/* In diesem Div soll sich das Bild immer ändern */}
      <div className="hidden md:block w-full max-w-4xl h-[80svh] sticky left-0 top-24">
        <div ref={imageRef} className="w-full h-full relative ">
          <Image src={currentImage} alt="Case Study Visual" fill className="object-cover rounded-2xl transition-opacity" />
        </div>
      </div>
      <div className="flex flex-col items-center md:gap-46 gap-24 rounded-2xl w-full md:w-auto">
        {caseStudiesData.map((caseStudy, idx) => (
          <OurRecentWorksCardWithRef
            key={idx}
            {...caseStudy}
            ref={(el) => {
              cardsRef.current[idx] = el;
            }}
            style={{
              top: `${96 + idx * 24}px`,
            }}
          />
        ))}
      </div>
    </section>
  );
}

interface OurRecentWorksCardProps {
  caseStudyTitle: string;
  caseStudyDescription: string;
  impactLabel: string;
  impactStats: { value: string; description: string }[];
  moreDetailsText: string;
  style?: React.CSSProperties;
}

function OurRecentWorksCard2({ caseStudyTitle, caseStudyDescription, impactLabel, impactStats, moreDetailsText, style }: OurRecentWorksCardProps, ref: React.Ref<HTMLDivElement>) {
  return (
    <div ref={ref} style={style} className="w-full md:max-w-2xl md:min-h-[90svh]  bg-primary-foreground justify-center rounded-2xl md:p-10 p-6 duration-300 flex flex-col md:gap-6 gap-4">
      <div className="bg-red-500 rounded-2xl w-full aspect-square md:hidden block"></div>
      <div className="flex items-center gap-2 md:mb-2 mb-1">
        <hr className="w-8 border-white/30" />
        <span className="text-white/80 text-sm font-medium">Case Study</span>
      </div>
      <h2 className="md:text-4xl text-2xl font-bold text-white">{caseStudyTitle}</h2>
      <p className="text-white/90 md:text-lg text-base md:mb-6 mb-3">{caseStudyDescription}</p>
      <div>
        <span className="text-white font-semibold md:text-lg text-base">{impactLabel}</span>
        <div className="flex md:gap-10 gap-6 mt-4">
          {impactStats.map((stat, idx) => (
            <div className="flex flex-col items-start" key={idx}>
              <span className="text-lime-400 md:text-3xl text-2xl font-bold leading-none">{stat.value}</span>
              <span className="text-white/80 text-sm mt-1">{stat.description}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="md:mt-8 mt-6">
        <LinkButton href="#" text={moreDetailsText} variant="light" size="default" className="" />
      </div>
    </div>
  );
}

const OurRecentWorksCardWithRef = React.forwardRef(OurRecentWorksCard2);
OurRecentWorksCardWithRef.displayName = "OurRecentWorksCard2";
