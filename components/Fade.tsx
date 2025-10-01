"use client";

import { motion, Variants } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.5,
    x: -150,
    y: 16,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
    transition: {
      // stiffness: 150,
      // damping: 19,
      // mass: 1.2,
      duration: 0.5, // Dauer in Sekunden für die Animation
    },
  },
};

function FadeContainer({ children, className }: React.HTMLProps<HTMLDivElement>) {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className={className}>
      {children}
    </motion.div>
  );
}

function FadeSection({ children, className }: React.HTMLProps<HTMLDivElement>) {
  return (
    <motion.section variants={container} initial="hidden" animate="show" className={className}>
      {children}
    </motion.section>
  );
}

function FadeDiv({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={item} initial="hidden" animate="show" className={className}>
      {children}
    </motion.div>
  );
}
function FadeSpan({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.span variants={item} initial="hidden" animate="show" className={className}>
      {children}
    </motion.span>
  );
}

export { FadeContainer, FadeDiv, FadeSpan, FadeSection };
