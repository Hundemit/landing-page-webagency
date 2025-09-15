"use client";
import { MotionValue, motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { FC, ReactNode, useRef } from "react";

export const AboutUs = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 50vh", "end 50vh"],
  });

  const words = "Seit 2010 entwickeln wir Websites, die genauso funktional wie schön sind und dabei helfen, dass sich Marken aller Größen verbinden und konvertieren.".split(" ");

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });
  return (
    <>
      {/* <div className="h-[500px] fixed top-0 left-0 right-0 bg-red-500"></div> */}

      <section ref={targetRef} className="max-w-7xl w-full duration-500 mx-auto px-4 xl:px-0 flex flex-col sm:flex-row  justify-between min-h-screen ">
        {/* Left Side */}
        <div className="flex items-center gap-2 h-fit sticky top-48 left-0">
          <hr className="w-8  border-primary" />
          <h2 className="text-lg font-medium">Über uns</h2>
        </div>
        {/* Right Side */}
        <div className="w-full max-w-3xl sticky top-48 h-fit">
          <div className={"flex items-center bg-transparent "}>
            {/* Screen reader accessible version - hidden visually but readable by assistive technology */}
            <h1 className="sr-only">Seit 2010 entwickeln wir Websites, die genauso funktional wie schön sind und dabei helfen, dass sich Marken aller Größen verbinden und konvertieren.</h1>

            {/* Animated visual version */}
            <span ref={targetRef} className={"flex flex-wrap text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl"} aria-hidden="true" role="presentation">
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

          <p className="text-lg text-muted-foreground mx-1 mt-5 mb-10 font-medium">
            We’re Webloris a design-led digital agency turning underperforming websites into high-converting, visually striking experiences.
          </p>
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
      <span className="absolute opacity-30" aria-hidden="true">
        {children}
      </span>
      <motion.span style={{ opacity: opacity }} className={"text-black dark:text-white"} aria-hidden="true">
        {children}
      </motion.span>
    </span>
  );
};
