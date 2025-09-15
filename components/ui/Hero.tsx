import { RiArrowRightUpLine } from "@remixicon/react";
import { FadeDiv, FadeSection, FadeSpan } from "@/components/Fade";

import GameOfLife from "./HeroBackground";
import { cn } from "@/lib/utils";
import LogosMarquee from "../LogosMarquee/logos-marquee";
import { Sparkles } from "lucide-react";
import { LinkButton } from "./LinkButton";

export function Hero({ className }: { className?: string }) {
  return (
    <section aria-label="hero" className={cn("relative flex flex-col items-center justify-center min-h-[700px] h-screen", className)}>
      {/* AI Support */}
      <div className="w-auto mx-auto ring-1 ring-gray-300 rounded-full p-1 px-1.5 font-medium filter backdrop-blur-xl focus:outline-hidden text-xs sm:text-sm shadow-md shadow-gray-200 translate-y-0 hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out">
        <a aria-label="View latest update  the changelog page" href="#" target="_blank" rel="noopener noreferrer" className="mx-auto w-full flex max-w-full items-center gap-3">
          <div className="text-lime-700 ring-1  ring-lime-500 bg-primary/80 shrink-0 truncate rounded-full border px-2 py-0.5 flex items-center gap-1">
            <Sparkles className="size-3" />
            <p className="text-xs font-semibold">AI Support</p>
          </div>
          <p className="w-full font-semibold text-xs">Mehr Effizienz und Nähe zu Ihren Kunden.</p>
          <RiArrowRightUpLine className="size-6 ml-auto text-gray-700" />
        </a>
      </div>
      <h1 className="mt-8 text-center text-5xl font-extrabold  sm:text-8xl duration-500">
        <FadeSpan>Digital</FadeSpan> <FadeSpan>noch</FadeSpan>
        <br />
        <FadeSpan>mehr</FadeSpan> <FadeSpan>erreichen.</FadeSpan>
      </h1>
      <div className="mt-5 bg-white/5 p-1 backdrop-blur-sm sm:mt-8 ">
        <div className=" w-fit max-w-xl text-center text-base text-balance sm:text-xl duration-500">
          <FadeSpan>Unternehmen brauchen vor allem eins: </FadeSpan>
          <FadeSpan>echte Kundenbeziehungen und nachhaltigen Wachstum!</FadeSpan>
        </div>
      </div>

      <FadeDiv className="flex flex-col items-center justify-center mt-6 max-w-7xl overflow-hidden w-full">
        <LinkButton variant="light" className="" text="Contact Us" href="#" />
        <div className="w-full overflow-hidden mx-auto">
          <LogosMarquee className="pt-10 w-full" />
        </div>
      </FadeDiv>

      <div className="absolute h-full w-full inset-0 -z-10 flex items-center justify-center">
        <GameOfLife />
      </div>

      {/* Bottom fade effect */}
      <div className="absolute -bottom-12 left-0 right-0 h-24 bg-gradient-to-t from-transparent via-background to-transparent pointer-events-none" />
    </section>
  );
}
