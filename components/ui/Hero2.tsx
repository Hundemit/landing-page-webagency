import { RiArrowRightUpLine } from "@remixicon/react";
import { FadeDiv, FadeSpan } from "@/components/Fade";

import GameOfLife from "./HeroBackground";
import { cn } from "@/lib/utils";
import LogosMarquee from "../LogosMarquee/logos-marquee";
import { Sparkles } from "lucide-react";
import { LinkButton } from "./LinkButton";
import Image from "next/image";

export function Hero2({ className }: { className?: string }) {
  return (
    <section aria-label="hero" className={cn("relative flex flex-col items-center   h-screen min-h-[424px] pt-22 md:pt-32 duration-300 ", className)}>
      <div className="flex flex-col sm:flex-row justify-between w-full max-w-7xl items-end px-4  h-fit sm:min-h-[424px] min-h-[409px]">
        {/* left side */}
        <div className="space-y-4 mb-8 md:mb-32">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold duration-500">
            <FadeSpan>Digital</FadeSpan> <FadeSpan>noch</FadeSpan>
            <br />
            <FadeSpan>mehr</FadeSpan> <FadeSpan>erreichen.</FadeSpan>
          </h1>
          <div className="w-fit max-w-xl text-base sm:text-base md:text-lg text-balance duration-500">
            <FadeSpan>Unternehmen brauchen vor allem eins: </FadeSpan>
            <FadeSpan>echte Kundenbeziehungen und nachhaltigen Wachstum!</FadeSpan>
          </div>
          <LinkButton variant="light" className="" text="Contact Us" href="#" />
        </div>

        {/* right side */}
        <div className=" w-3/5  sm:w-72 rounded-xl overflow-hidden -mb-12 md:-mb-18   z-10 duration-300  shadow-xl mr-4">
          <div className="w-full h-32 md:h-64 bg-primary/10 duration-300"></div>
          <div className="w-full h-12 md:h-18 bg-primary/50 duration-300"></div>
        </div>
      </div>

      {/* Img Section */}
      <div className=" px-4 pb-4 w-full h-full overflow-hidden min-h-[150px] ">
        <img src="https://cdn.prod.website-files.com/684a11845c7dd0b4b7745cd9/684f57a20f6e64c09db89289_Celie-1-1170x780.webp" alt="hero2" className="w-full h-full object-cover rounded-md" />
      </div>
    </section>
  );
}
