import { MoveUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type LinkButtonProps = {
  text: string;
  href: string;
  className?: string;
  variant?: "light" | "dark";
  hoverText?: string;
};

const variantClasses = {
  dark: {
    button: "bg-foreground",
    text: "text-white",
    textHover: "text-foreground",
    iconWrapper: "bg-white rounded-lg",
    icon: "text-foreground",
    hoverBar: "bg-white",
  },
  light: {
    button: "bg-white",
    text: "text-foreground",
    textHover: "text-lime-900",
    iconWrapper: "bg-primary rounded-xl",
    icon: "text-lime-900",
    hoverBar: "bg-primary",
  },
};

export function LinkButton({ text, href, className, variant = "light", hoverText = text }: LinkButtonProps) {
  const { button, text: textColor, iconWrapper, hoverBar, icon, textHover } = variantClasses[variant];

  return (
    <button className={cn("group focus-visible:scale-105 inline-flex items-center justify-center gap-2 p-1.5 rounded-xl min-w-48 relative cursor-pointer", button, className)}>
      <div className="w-full relative overflow-hidden z-10 group">
        <p
          className={cn(
            "text-base text-center mx-auto font-semibold z-10 duration-300 transition-all ease-in-out [transform:translate3d(0px,0px,0px)] group-hover:[transform:translate3d(0px,-22px,0px)]",
            textColor
          )}>
          {text}
        </p>
        <span
          className={cn(
            "absolute top-0 left-0 w-full text-base text-center mx-auto font-semibold z-10 text-foreground duration-300 transition-all ease-in-out [transform:translate3d(0px,22px,0px)] group-hover:[transform:translate3d(0px,0px,0px)]",
            textHover
          )}>
          {hoverText}
        </span>
      </div>

      <div className={cn("min-w-11 size-11 flex items-center justify-center z-10", iconWrapper)}>
        <div className="min-w-6 size-6 relative overflow-hidden">
          <MoveUpRight className={cn("duration-300 size-6 text-secondary-foreground stroke-[2px] [transform:translate3d(0px,0px,0px)] group-hover:[transform:translate3d(22px,-22px,0px)]", icon)} />
          <MoveUpRight
            className={cn("duration-300 absolute top-0 size-6 text-secondary-foreground stroke-[2px] [transform:translate3d(-22px,22px,0px)] group-hover:[transform:translate3d(0px,0px,0px)]", icon)}
          />
        </div>
      </div>

      <div
        className={cn(
          "absolute h-11 right-1.5 rounded-lg group-hover:w-[calc(100%-12px)] w-11 will-change-transform duration-300 transition-all ease-in-out flex justify-start items-end",
          hoverBar
        )}></div>
    </button>
  );
}
