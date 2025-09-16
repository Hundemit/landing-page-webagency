"use client";
import { MotionValue, motion, useScroll, useTransform } from "motion/react";
import { FC, ReactNode, useRef } from "react";
import { LinkButton } from "./LinkButton";
import { useIsMobile } from "@/lib/useMobile";
import { cn } from "@/lib/utils";

export const AboutUs = ({ className }: { className?: string }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const targetRef2 = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 50vh", "end 80vh"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: targetRef2,
    offset: ["start 80%", "end end"],
  });

  const words = "Seit 2010 entwickeln wir Websites, die genauso funktional wie schön sind und dabei helfen, dass sich Marken aller Größen verbinden und konvertieren.".split(" ");

  // Parallax. Passe die 100 an, wenn der Weg kürzer oder länger sein soll
  const leftY = useTransform(scrollYProgress2, [0, 1], ["-40%", "0%"]);
  const rightY = useTransform(scrollYProgress2, [0, 1], ["40%", "0%"]);

  if (useIsMobile()) {
    return (
      <section className={cn("w-full duration-500 mx-auto px-4 xl:px-0 flex flex-col lg:flex-row  justify-between ", className)}>
        <div className="w-full lg:max-w-3xl flex flex-col justify-between ">
          <div>
            <div className="flex items-center gap-2 h-fit">
              <hr className="w-8 border-primary" />
              <h2 className="text-lg font-medium">Über unssss</h2>
            </div>
            <h1 className={"flex flex-wrap text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl "}>
              Seit 2010 entwickeln wir Websites, die genauso funktional wie schön sind und dabei helfen, dass sich Marken aller Größen verbinden und konvertieren.
            </h1>

            <p className="text-lg text-muted-foreground mx-1 my-5 font-medium">
              We’re Webloris a design-led digital agency turning underperforming websites into high-converting, visually striking experiences.
            </p>
            <LinkButton variant="dark" className="" text="Wir sind Nordi" hoverText="Ja das sind wir!" href="#" />
          </div>

          {/* test section */}
          <div className="mt-10 flex-col flex w-full gap-10 items-center">
            <div className="w-full h-96 max-w-sm mx-auto bg-card flex flex-col justify-between p-7 rounded-xl will-change-transform">
              <h4 className="text-[28px]  font-semibold"> Our Vision</h4>
              <p className="text-lg mx-1 my-5 ">
                To shape a digital world where design meets purpose where every pixel serves a goal, every interaction feels effortless, and every brand gets the digital presence it truly deserves.
              </p>
            </div>
            <div className="w-full h-96 max-w-sm mx-auto bg-card flex flex-col justify-between p-7 rounded-xl ">
              <h4 className="text-[28px] font-semibold"> Our Mission</h4>
              <p className="text-lg mx-1 my-5 ">
                To shape a digital world where design meets purpose where every pixel serves a goal, every interaction feels effortless, and every brand gets the digital presence it truly deserves.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* <div className="h-[50vh] fixed top-0 left-0 right-0 bg-red-500"></div> */}

      <section className={cn(" max-w-7xl w-full duration-500 mx-auto px-4 xl:px-0 flex flex-col sm:flex-row  justify-between min-h-screen h-[2000px] ", className)}>
        {/* Left Side */}
        <div className="sm:flex items-center gap-2 h-fit hidden sm:sticky top-1/4 left-0">
          <hr className="w-8  border-primary" />
          <h2 className="text-lg font-medium">Über uns</h2>
        </div>
        {/* Right Side */}
        <div className="w-full max-w-3xl flex flex-col justify-between h-full">
          <div id="target" ref={targetRef} className="h-full">
            <div className="sticky top-1/4 ">
              <div className="flex items-center gap-2 h-fit sm:hidden">
                <hr className="w-8  border-primary" />
                <h2 className="text-lg font-medium">Über unssss</h2>
              </div>
              <div className={"flex items-center bg-transparent "}>
                {/* Screen reader accessible version - hidden visually but readable by assistive technology */}
                <h1 className="sr-only">Seit 2010 entwickeln wir Websites, die genauso funktional wie schön sind und dabei helfen, dass sich Marken aller Größen verbinden und konvertieren.</h1>

                {/* Animated visual version */}
                <span ref={targetRef} className={"flex flex-wrap text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl "} aria-hidden="true" role="presentation">
                  {words.map((word, i) => {
                    const start = i / words.length;
                    const end = start + 0.1 / words.length;
                    return (
                      <Word key={i} progress={scrollYProgress} range={[start, end]}>
                        {word}
                      </Word>
                    );
                  })}
                </span>
              </div>

              <p className="text-lg text-muted-foreground mx-1 my-5 font-medium">
                We’re Webloris a design-led digital agency turning underperforming websites into high-converting, visually striking experiences.
              </p>
              <LinkButton variant="dark" className="" text="Wir sind Nordi" hoverText="Ja das sind wir!" href="#" />
            </div>
          </div>

          {/* test section */}
          <div id="target2" ref={targetRef2} className="mt-10 flex w-full sm:flex-row flex-col gap-10 h-[600px] items-center">
            <motion.div className="w-full h-96 max-w-sm mx-auto bg-card flex flex-col justify-between p-7 rounded-xl will-change-transform" style={{ y: leftY }}>
              {" "}
              <h4 className="text-[28px]  font-semibold"> Our Vision</h4>
              <p className="text-lg mx-1 my-5 ">
                To shape a digital world where design meets purpose where every pixel serves a goal, every interaction feels effortless, and every brand gets the digital presence it truly deserves.
              </p>
            </motion.div>{" "}
            <motion.div className="w-full h-96 max-w-sm mx-auto bg-card flex flex-col justify-between p-7 rounded-xl " style={{ y: rightY }}>
              <h4 className="text-[28px] font-semibold"> Our Mission</h4>
              <p className="text-lg mx-1 my-5 ">
                To shape a digital world where design meets purpose where every pixel serves a goal, every interaction feels effortless, and every brand gets the digital presence it truly deserves.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-10" aria-hidden="true">
        {children}
      </span>
      <motion.span style={{ opacity: opacity }} className={"text-black dark:text-white"} aria-hidden="true">
        {children}
      </motion.span>
    </span>
  );
};
