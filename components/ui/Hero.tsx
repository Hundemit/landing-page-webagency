import { FadeContainer, FadeDiv, FadeSpan } from "@/components/Fade";
import { RiArrowRightUpLine } from "@remixicon/react";
import Link from "next/link";
import GameOfLife from "./HeroBackground";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import Logos06Page from "../logos-06/logos-06";
import { Sparkles } from "lucide-react";
import { LinkButton } from "./LinkButton";

export function Hero({ className }: { className?: string }) {
  return (
    <section aria-label="hero">
      <FadeContainer className={cn("relative flex flex-col items-center justify-center", className)}>
        <FadeDiv className="mx-auto rounded-full bg-white/5 px-2.5 py-0.5 pr-3 pl-0.5 font-medium text-gray-900 ring-1 ring-black/10 filter backdrop-blur-xl transition-colors focus:outline-hidden sm:text-sm shadow-md shadow-gray-200">
          <a aria-label="View latest update the changelog page" href="#" target="_blank" rel="noopener noreferrer" className="mx-auto w-full">
            <div className="inline-flex max-w-full items-center gap-3">
              <span className=" shrink-0 truncate rounded-full border px-2.5 py-1 text-sm sm:text-xs flex items-center gap-1">
                <Sparkles className="size-4 text-primary" /> AI Support
              </span>
              <span className="flex items-center gap-1 truncate">
                <span className="w-full truncate">Mehr Effizienz und Nähe zu Ihren Kunden.</span>

                <RiArrowRightUpLine className="size-4 shrink-0 text-gray-700" />
              </span>
            </div>
          </a>
        </FadeDiv>
        <h1 className="mt-8 text-center text-5xl font-extrabold  sm:text-8xl">
          <FadeSpan>Digital</FadeSpan> <FadeSpan>noch</FadeSpan>
          <br />
          <FadeSpan>mehr</FadeSpan> <FadeSpan>erreichen.</FadeSpan>
        </h1>
        <div className="mt-5 bg-white/5 p-1 backdrop-blur-sm sm:mt-8 ">
          <div className=" w-fit max-w-xl text-center text-base text-balance sm:text-xl">
            <FadeSpan>Unternehmen brauchen vor allem eins: </FadeSpan>
            <FadeSpan>echte Kundenbeziehungen und nachhaltigen Wachstum!</FadeSpan>
          </div>
        </div>

        <FadeDiv className="flex flex-col items-center justify-center">
          <Button
            variant="default"
            className="mt-6 inline-flex cursor-pointer flex-row items-center justify-center gap-1 rounded-md border-b-[1.5px] px-5 py-3 leading-4 font-medium tracking-wide whitespace-nowrap text-white transition-all duration-200 ease-in-out"
            asChild>
            <Link href="#">Los gehts!</Link>
          </Button>
          <LinkButton variant="dark" className="" text="Contact Us" href="#" />
          <Logos06Page className="pt-10" />
        </FadeDiv>

        <div className="absolute h-full w-full inset-0 -z-10 flex items-center justify-center">
          <GameOfLife />
        </div>

        {/* Bottom fade effect */}
        <div className="absolute -bottom-12 left-0 right-0 h-24 bg-gradient-to-t from-transparent via-background to-transparent pointer-events-none" />
      </FadeContainer>
    </section>
  );
}
