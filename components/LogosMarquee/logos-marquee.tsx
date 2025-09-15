import { Logo01, Logo02, Logo03, Logo04, Logo05, Logo06, Logo07, Logo08 } from "@/components/LogosMarquee/logos";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const LogosMarquee = ({ className }: { className?: string }) => {
  return (
    <Marquee pauseOnHover style={{ "--duration": "40s" } as React.CSSProperties} className={cn("[&_svg]:mr-10 mask-x-from-70% mask-x-to-90%", className)}>
      <Logo01 className="sm:w-50 w-36 duration-500" />
      <Logo02 className="sm:w-50 w-36 duration-500" />
      <Logo03 className="sm:w-50 w-36 duration-500" />
      <Logo04 className="sm:w-50 w-36 duration-500" />
      <Logo05 className="sm:w-50 w-36 duration-500" />
      <Logo06 className="sm:w-50 w-36 duration-500" />
      <Logo07 className="sm:w-50 w-36 duration-500" />
      <Logo08 className="sm:w-50 w-36 duration-500  " />
    </Marquee>
  );
};

export default LogosMarquee;
