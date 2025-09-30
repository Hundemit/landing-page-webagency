"use client";
import { FC } from "react";
import { LinkButton } from "./LinkButton";
import { cn } from "@/lib/utils";
import { Logo01, Logo02, Logo03, Logo04, Logo05, Logo06, Logo07, Logo08 } from "@/components/LogosMarquee/logos";
import { Marquee } from "@/components/ui/marquee";

// Logo Grid Component
const LogoCard: FC<{ logo: React.ReactNode }> = ({ logo }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border w-full border-gray-100 flex items-center justify-center min-h-[80px]">
      <div className="flex flex-col items-center gap-2">
        <div className="flex-shrink-0">{logo}</div>
      </div>
    </div>
  );
};

const PartnershipHero = ({ className }: { className?: string }) => {
  const firstRow = [
    { logo: <Logo01 className="w-28" />, name: "Logoipsum" },
    { logo: <Logo02 className="w-28" />, name: "logoipsum" },
    { logo: <Logo03 className="w-28" />, name: "Logoipsum" },
    { logo: <Logo04 className="w-28" />, name: "logo ipsum" },
  ];

  const secondRow = [
    { logo: <Logo05 className="w-28" />, name: "logoipsum" },
    { logo: <Logo06 className="w-28" />, name: "Logoipsum" },
    { logo: <Logo07 className="w-28" />, name: "logo ipsum" },
    { logo: <Logo08 className="w-28" />, name: "Logoipsum" },
  ];

  return (
    <section className={cn("w-full max-w-7xl mx-auto px-4 xl:px-0 py-16", className)}>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section - Text and CTA */}
        <div className="flex-1 lg:max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            We don&apos;t just work together <span className="block">we grow together.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 font-medium">We create a shared vision, and together, we evolve to new heights.</p>

          <LinkButton variant="dark" text="Get Started" hoverText="Let's begin!" href="#" className="mb-8" />
        </div>

        {/* Right Section - Logo Marquee */}
        <div className="flex-1 lg:max-w-2xl">
          <div className="relative flex h-[400px] w-full flex-row items-center justify-center overflow-hidden">
            <Marquee pauseOnHover vertical className="[--duration:20s] w-full">
              {firstRow.map((logo, index) => (
                <LogoCard key={`first-${index}`} logo={logo.logo} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover vertical className="[--duration:20s] w-full">
              {secondRow.map((logo, index) => (
                <LogoCard key={`second-${index}`} logo={logo.logo} />
              ))}
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b"></div>
            <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
          </div>
        </div>
      </div>

      {/* Bottom divider line */}
      <div className="w-full h-px bg-gray-200 mt-16"></div>
    </section>
  );
};

export default PartnershipHero;
