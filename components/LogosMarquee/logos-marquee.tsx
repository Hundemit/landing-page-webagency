import { Logo01, Logo02, Logo03, Logo04, Logo05, Logo06, Logo07, Logo08 } from "@/components/LogosMarquee/logos";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { ScrollVelocityContainer, ScrollVelocityRow } from "../ui/scroll-based-velocity";

const LogosMarquee = ({ className }: { className?: string }) => {
  const logos = [Logo01, Logo02, Logo03, Logo04, Logo05, Logo06, Logo07, Logo08];

  return (
    // <Marquee pauseOnHover style={{ "--duration": "40s", "--gap": "0rem" } as React.CSSProperties} className={cn("lg:mask-x-from-70% lg:mask-x-to-90% mask-x-from-85% mask-x-to-90% p-0", className)}>
    //   {logos.map((Logo, index) => (
    //     <div key={index} className="flex flex-col justify-center items-center gap-4  lg:w-36 w-20 duration-500  lg:mr-14 mr-8 ">
    //       <Logo className="w-full duration-500 mx-auto" />
    //     </div>
    //   ))}
    // </Marquee>

    <ScrollVelocityContainer className={cn("lg:mask-x-from-70% lg:mask-x-to-90% mask-x-from-85% mask-x-to-90% p-0", className)}>
      <ScrollVelocityRow baseVelocity={5} direction={1}>
        {logos.map((Logo, index) => (
          <div key={index} className="flex flex-col justify-center items-center gap-4  lg:w-36 w-20 duration-500  lg:mr-14 mr-8 ">
            <Logo className="w-full duration-500 mx-auto" />
          </div>
        ))}
      </ScrollVelocityRow>
    </ScrollVelocityContainer>
  );
};

export default LogosMarquee;
