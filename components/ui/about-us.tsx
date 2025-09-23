"use client";
import { FC, ReactNode, useRef, useEffect } from "react";
import { LinkButton } from "./LinkButton";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP ScrollTrigger Plugin registrieren
gsap.registerPlugin(ScrollTrigger);

export const AboutUs = ({ className }: { className?: string }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const targetRef2 = useRef<HTMLDivElement | null>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const leftCardRef = useRef<HTMLDivElement | null>(null);
  const rightCardRef = useRef<HTMLDivElement | null>(null);

  const words = "Seit 2010 entwickeln wir Websites, die genauso funktional wie schön sind und dabei helfen, dass sich Marken aller Größen verbinden und konvertieren.".split(" ");

  useEffect(() => {
    // Word-by-word Animation mit GSAP
    if (wordsRef.current.length > 0) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: targetRef.current,
          start: "top 50%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      wordsRef.current.forEach((word, i) => {
        tl.to(
          word,
          {
            opacity: 1,
            duration: 0.1,
            ease: "none",
          },
          i * 0.05
        );
      });
    }

    // Parallax Animation für Cards
    if (leftCardRef.current && rightCardRef.current) {
      gsap.to(leftCardRef.current, {
        y: "0px",
        scrollTrigger: {
          trigger: targetRef2.current,
          start: "top 80%",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      gsap.to(rightCardRef.current, {
        y: "0px",
        scrollTrigger: {
          trigger: targetRef2.current,
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

  // if (useIsMobile()) {
  //   return (
  //     <section className={cn("w-full duration-500 mx-auto px-4 xl:px-0 flex flex-col lg:flex-row  justify-between ", className)}>
  //       <div className="w-full lg:max-w-3xl flex flex-col justify-between ">
  //         <div>
  //           <div className="flex items-center gap-2 h-fit">
  //             <hr className="w-8 border-primary" />
  //             <h2 className="text-lg font-medium">Über uns Mobile</h2>
  //           </div>
  //           <h1 className={"flex flex-wrap text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl "}>
  //             Seit 2010 entwickeln wir Websites, die genauso funktional wie schön sind und dabei helfen, dass sich Marken aller Größen verbinden und konvertieren.
  //           </h1>

  //           <p className="text-lg text-muted-foreground mx-1 my-5 font-medium">
  //             We’re Webloris a design-led digital agency turning underperforming websites into high-converting, visually striking experiences.
  //           </p>
  //           <LinkButton variant="dark" className="" text="Wir sind Nordi" hoverText="Ja das sind wir!" href="#" />
  //         </div>

  //         {/* test section */}
  //         <div className="mt-10 flex-col flex w-full gap-10 items-center">
  //           <div className="w-full h-96 max-w-sm mx-auto bg-card flex flex-col justify-between p-7 rounded-xl will-change-transform">
  //             <h4 className="text-[28px]  font-semibold"> Our Vision</h4>
  //             <p className="text-lg my-5 ">
  //               To shape a digital world where design meets purpose where every pixel serves a goal, every interaction feels effortless, and every brand gets the digital presence it truly deserves.
  //             </p>
  //           </div>
  //           <div className="w-full h-96 max-w-sm mx-auto bg-card flex flex-col justify-between p-7 rounded-xl ">
  //             <h4 className="text-[28px] font-semibold"> Our Mission</h4>
  //             <p className="text-lg my-5 ">
  //               To shape a digital world where design meets purpose where every pixel serves a goal, every interaction feels effortless, and every brand gets the digital presence it truly deserves.
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }

  // return (
  //   <>
  //     <section className={cn(" max-w-7xl w-full duration-500 mx-auto px-4 xl:px-0 flex flex-col sm:flex-row  justify-between min-h-screen h-[2000px] ", className)}>
  //       {/* Left Side */}
  //       <div className="sm:flex items-center gap-2 h-fit hidden sm:sticky top-1/4 left-0">
  //         <hr className="w-8  border-primary" />
  //         <h2 className="text-lg font-medium">Über uns</h2>
  //       </div>
  //       {/* Right Side */}
  //       <div className="w-full max-w-3xl flex flex-col justify-between h-full ">
  //         <div id="target" ref={targetRef} className="h-full">
  //           <div className="sticky top-1/4 ">
  //             <div className="flex items-center gap-2 h-fit sm:hidden">
  //               <hr className="w-8  border-primary" />
  //               <h2 className="text-lg font-medium">Über unssss</h2>
  //             </div>
  //             <div className={"flex items-center bg-transparent "}>
  //               {/* Screen reader accessible version - hidden visually but readable by assistive technology */}
  //               <h1 className="sr-only">Seit 2010 entwickeln wir Websites, die genauso funktional wie schön sind und dabei helfen, dass sich Marken aller Größen verbinden und konvertieren.</h1>

  //               {/* Animated visual version */}
  //               <span className={"flex flex-wrap text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl"} aria-hidden="true" role="presentation">
  //                 {words.map((word, i) => (
  //                   <Word
  //                     key={i}
  //                     ref={(el) => {
  //                       if (el) wordsRef.current[i] = el;
  //                     }}>
  //                     {word}
  //                   </Word>
  //                 ))}
  //               </span>
  //             </div>

  //             <p className="text-lg text-muted-foreground mx-1 my-5 font-medium">
  //               We’re Webloris a design-led digital agency turning underperforming websites into high-converting, visually striking experiences.
  //             </p>
  //             <LinkButton variant="dark" className="" text="Wir sind Nordi" hoverText="Ja das sind wir!" href="#" />
  //           </div>
  //         </div>

  //         {/* test section */}
  //         <div id="target2" ref={targetRef2} className="mt-10 flex w-full sm:flex-row flex-col gap-10  items-end h-[650px] ">
  //           <div ref={leftCardRef} className="w-full h-96 max-w-sm mx-auto bg-card flex flex-col justify-between p-7 rounded-xl will-change-transform" style={{ transform: "translateY(-25%)" }}>
  //             <h4 className="text-[28px] font-semibold"> Our Vision</h4>
  //             <p className="text-lg mx-1 my-5 ">
  //               To shape a digital world where design meets purpose where every pixel serves a goal, every interaction feels effortless, and every brand gets the digital presence it truly deserves.
  //             </p>
  //           </div>
  //           <div ref={rightCardRef} className="w-full h-96 max-w-sm mx-auto bg-card flex flex-col justify-between p-7 rounded-xl" style={{ transform: "translateY(40%)" }}>
  //             <h4 className="text-[28px] font-semibold"> Our Mission</h4>
  //             <p className="text-lg mx-1 my-5 ">
  //               To shape a digital world where design meets purpose where every pixel serves a goal, every interaction feels effortless, and every brand gets the digital presence it truly deserves.
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </>
  // );

  return (
    <>
      {/* Mobile section */}
      <section className={cn("w-full duration-500 mx-auto px-4 xl:px-0 flex flex-col sm:hidden  justify-between ", className)}>
        <div className="w-full lg:max-w-3xl flex flex-col justify-between ">
          <div>
            <div className="flex items-center gap-2 h-fit">
              <hr className="w-8 border-primary" />
              <h2 className="text-lg font-medium">Über uns Mobile</h2>
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
            <div className="h-96  bg-card flex flex-col justify-between p-7 rounded-xl will-change-transform w-full">
              <h4 className="text-[28px]  font-semibold"> Our Vision</h4>
              <p className="text-lg my-5 ">
                To shape a digital world where design meets purpose where every pixel serves a goal, every interaction feels effortless, and every brand gets the digital presence it truly deserves.
              </p>
            </div>
            <div className=" h-96  bg-card flex flex-col justify-between p-7 rounded-xl ">
              <h4 className="text-[28px] font-semibold"> Our Mission</h4>
              <p className="text-lg my-5 ">
                To shape a digital world where design meets purpose where every pixel serves a goal, every interaction feels effortless, and every brand gets the digital presence it truly deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* desktop section */}
      <section className={cn(" max-w-7xl w-full duration-500 mx-auto px-4 xl:px-0 sm:flex hidden   justify-between min-h-screen h-[2000px] ", className)}>
        {/* Left Side */}
        <div className=" items-center gap-2 h-fit hidden lg:flex sticky top-1/4 left-0">
          <hr className="w-8  border-primary" />
          <h2 className="text-lg font-medium">Über uns Desktop</h2>
        </div>
        {/* Right Side */}
        <div className="w-full lg:max-w-3xl flex flex-col justify-between h-full ">
          <div id="target" ref={targetRef} className="h-full">
            <div className="sticky top-1/4 ">
              <div className=" items-center gap-2 h-fit lg:hidden flex ">
                <hr className="w-8  border-primary" />
                <h2 className="text-lg font-medium">Über uns Desktop2</h2>
              </div>
              <div className={"flex items-center bg-transparent "}>
                {/* Screen reader accessible version - hidden visually but readable by assistive technology */}
                <h1 className="sr-only">Seit 2010 entwickeln wir Websites, die genauso funktional wie schön sind und dabei helfen, dass sich Marken aller Größen verbinden und konvertieren.</h1>

                {/* Animated visual version */}
                <span className={"flex flex-wrap text-2xl font-bold sm:text-4xl lg:text-4xl xl:text-5xl duration-150"} aria-hidden="true" role="presentation">
                  {words.map((word, i) => (
                    <Word
                      key={i}
                      ref={(el) => {
                        if (el) wordsRef.current[i] = el;
                      }}>
                      {word}
                    </Word>
                  ))}
                </span>
              </div>

              <p className="text-lg text-muted-foreground mx-1 my-5 font-medium">
                We’re Webloris a design-led digital agency turning underperforming websites into high-converting, visually striking experiences.
              </p>
              <LinkButton variant="dark" className="" text="Wir sind Nordi" hoverText="Ja das sind wir!" href="#" />
            </div>
          </div>

          {/* test section */}
          <div id="target2" ref={targetRef2} className="mt-10 flex w-full sm:flex-row gap-5 flex-col  justify-center  items-end h-[650px] ">
            <div ref={leftCardRef} className="w-full h-96 max-w-sm  bg-card flex flex-col justify-between p-7 rounded-xl will-change-transform" style={{ transform: "translateY(-25%)" }}>
              <h4 className="text-[28px] font-semibold"> Our Vision</h4>
              <p className="text-lg mx-1 my-5 ">
                To shape a digital world where design meets purpose where every pixel serves a goal, every interaction feels effortless, and every brand gets the digital presence it truly deserves.
              </p>
            </div>
            <div ref={rightCardRef} className="w-full h-96 max-w-sm  bg-card flex flex-col justify-between p-7 rounded-xl" style={{ transform: "translateY(40%)" }}>
              <h4 className="text-[28px] font-semibold"> Our Mission</h4>
              <p className="text-lg mx-1 my-5 ">
                To shape a digital world where design meets purpose where every pixel serves a goal, every interaction feels effortless, and every brand gets the digital presence it truly deserves.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

interface WordProps {
  children: ReactNode;
  ref?: (el: HTMLSpanElement | null) => void;
}

const Word: FC<WordProps> = ({ children, ref }) => {
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-10" aria-hidden="true">
        {children}
      </span>
      <span ref={ref} className="text-black dark:text-white opacity-0" aria-hidden="true">
        {children}
      </span>
    </span>
  );
};
