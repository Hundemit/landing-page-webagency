import { MoveUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type LinkButtonProps = {
  text: string;
  href: string;
  className?: string;
  variant?: "light" | "dark";
  hoverText?: string;
  size?: "default" | "sm";
};

const variantClasses = {
  dark: {
    button: "bg-foreground",
    text: "text-white",
    textHover: "text-foreground",
    iconWrapper: "bg-white ",
    icon: "text-foreground",
    hoverBar: "bg-white",
  },
  light: {
    button: "bg-white",
    text: "text-foreground",
    textHover: "text-lime-900",
    iconWrapper: "bg-primary",
    icon: "text-lime-900",
    hoverBar: "bg-primary",
  },
};

const sizeClasses = {
  default: {
    buttonsize: "gap-2 min-w-48 p-1.5 rounded-xl",
    textsize: "text-base",
    iconsize: "min-w-6 size-6",
    iconWrapperSize: "min-w-11 size-11 rounded-lg",
    // WICHTIG: hoverBarSize muss mit buttonsize padding synchronisiert werden
    // - right-1.5 entspricht p-1.5 (6px padding)
    // - group-hover:w-[calc(100%-12px)] = 100% - (6px * 2) für beide Seiten
    hoverBarSize: "w-11 h-11 rounded-lg right-1.5 group-hover:w-[calc(100%-12px)]",
  },
  sm: {
    buttonsize: "gap-2 min-w-36 p-1 rounded-lg",
    textsize: "text-sm",
    iconsize: "min-w-4 size-4",
    iconWrapperSize: "min-w-7 size-7 rounded-md",
    // WICHTIG: hoverBarSize muss mit buttonsize padding synchronisiert werden
    // - right-1 entspricht p-1 (4px padding)
    // - group-hover:w-[calc(100%-8px)] = 100% - (4px * 2) für beide Seiten
    hoverBarSize: "size-7 rounded-md right-1 group-hover:w-[calc(100%-8px)]",
  },
};

export function LinkButton({ text, className, variant = "light", hoverText = text, href, size = "default" }: LinkButtonProps) {
  const { button, text: textColor, iconWrapper, hoverBar, icon, textHover } = variantClasses[variant];
  const { buttonsize: buttonSize, textsize: textSize, iconsize: iconSize, iconWrapperSize: iconWrapperSize, hoverBarSize: hoverBarSize } = sizeClasses[size];
  return (
    <a href={href} className={cn("group focus-visible:scale-105 inline-flex items-center justify-center relative cursor-pointer w-fit", button, buttonSize, className)}>
      <div className="w-full relative overflow-hidden z-10 group">
        <p
          className={cn(
            "text-center mx-auto font-semibold z-10 duration-300 transition-all ease-in-out [transform:translate3d(0px,0px,0px)] group-hover:[transform:translate3d(0px,-22px,0px)]",
            textColor,
            textSize
          )}>
          {text}
        </p>
        <span
          className={cn(
            "absolute top-0 left-0 w-full text-center mx-auto font-semibold z-10 text-foreground duration-300 transition-all ease-in-out [transform:translate3d(0px,22px,0px)] group-hover:[transform:translate3d(0px,0px,0px)]",
            textHover,
            textSize
          )}>
          {hoverText}
        </span>
      </div>

      <div className={cn("flex items-center justify-center z-10", iconWrapper, iconWrapperSize)}>
        <div className={cn("relative overflow-hidden", iconSize)}>
          <MoveUpRight className={cn("duration-300 text-secondary-foreground stroke-[2px] [transform:translate3d(0px,0px,0px)] group-hover:[transform:translate3d(22px,-22px,0px)]", icon, iconSize)} />
          <MoveUpRight
            className={cn(
              "duration-300 absolute top-0 text-secondary-foreground stroke-[2px] [transform:translate3d(-22px,22px,0px)] group-hover:[transform:translate3d(0px,0px,0px)]",
              icon,
              iconSize
            )}
          />
        </div>
      </div>

      <div className={cn("absolute will-change-transform duration-300 transition-all ease-in-out flex justify-start items-end", hoverBar, hoverBarSize, className)}></div>
    </a>
  );
}
