import { FadeContainer, FadeDiv, FadeSpan } from "@/components/Fade"
import { RiArrowRightUpLine } from "@remixicon/react"
import Link from "next/link"
import GameOfLife from "./HeroBackground"
import { Button } from "./button"

export function Hero() {
  return (
    <section aria-label="hero">
      <FadeContainer className="relative flex flex-col items-center justify-center">
        <FadeDiv className="mx-auto rounded-full bg-white/5 px-2.5 py-0.5 pr-3 pl-0.5 font-medium text-gray-900 ring-1 ring-black/10 filter backdrop-blur-xl transition-colors focus:outline-hidden sm:text-sm">
          <a
            aria-label="View latest update the changelog page"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto w-full"
          >
            <div className="inline-flex max-w-full items-center gap-3">
              <span className="text-primary shrink-0 truncate rounded-full border px-2.5 py-1 text-sm sm:text-xs">
                News
              </span>
              <span className="flex items-center gap-1 truncate">
                <span className="w-full truncate">
                  Smart Irrigation System Launch
                </span>

                <RiArrowRightUpLine className="size-4 shrink-0 text-gray-700" />
              </span>
            </div>
          </a>
        </FadeDiv>
        <h1 className="mt-8 text-center text-5xl font-semibold tracking-tighter text-gray-900 sm:text-8xl sm:leading-[5.5rem]">
          <FadeSpan>Digital</FadeSpan> <FadeSpan>noch</FadeSpan>
          <br />
          <FadeSpan>mehr</FadeSpan> <FadeSpan>erreichen.</FadeSpan>
        </h1>
        <div className="mt-5 w-fit bg-black/1 p-1 backdrop-blur-sm sm:mt-8">
          <p className="text-gray-00 w-fit max-w-xl text-center text-base text-balance sm:text-xl">
            <FadeSpan>Das, was Unternehmen wirklich brauchen -</FadeSpan>
            <FadeSpan>
              relevante Kundenbeziehungen und nachhaltiges Wachstum.
            </FadeSpan>
          </p>
        </div>

        <FadeDiv>
          <Button
            variant="default"
            className="mt-6 inline-flex cursor-pointer flex-row items-center justify-center gap-1 rounded-md border-b-[1.5px] px-5 py-3 leading-4 font-medium tracking-wide whitespace-nowrap text-white transition-all duration-200 ease-in-out"
            asChild
          >
            <Link href="#">Los gehts!</Link>
          </Button>
        </FadeDiv>
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <GameOfLife />
        </div>
      </FadeContainer>
    </section>
  )
}
