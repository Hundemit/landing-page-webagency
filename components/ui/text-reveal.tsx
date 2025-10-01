"use client";

import { motion, MotionValue, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";

import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 50vh", "end 50vh"],
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  return (
    <>
      <div className="h-[192px] fixed top-0 left-0 right-0 bg-red-500"></div>
      <div id="text-reveal" ref={targetRef} className={cn("relative z-0 h-[110vh] flex-col flex", className)}>
        <div className={"sticky top-48 mx-auto flex max-w-4xl items-center bg-transparent px-[1rem]"}>
          <span ref={targetRef} className={"flex flex-wrap text-2xl font-bold text-black/20 dark:text-white/20 md:text-3xl  lg:text-4xl xl:text-5xl"}>
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
      </div>
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
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity: opacity }} className={"text-black dark:text-white"}>
        {children}
      </motion.span>
    </span>
  );
};
