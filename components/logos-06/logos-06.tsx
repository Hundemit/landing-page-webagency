import { Logo01, Logo02, Logo03, Logo04, Logo05, Logo06, Logo07, Logo08 } from "@/components/logos-06/logos";
import { Marquee } from "@/components/ui/marquee";

const Logos06Page = () => {
  return (
    <div className="flex items-center justify-center px-6">
      <div className="overflow-hidden">
        <div className="mt-10 flex items-center justify-center gap-x-14 gap-y-10 max-w-(--breakpoint-xl)">
          <Marquee pauseOnHover style={{ "--duration": "40s" } as React.CSSProperties} className="[--duration:20s] [&_svg]:mr-10 mask-x-from-70% mask-x-to-90%">
            <Logo01 />
            <Logo02 />
            <Logo03 />
            <Logo04 />
            <Logo05 />
            <Logo06 />
            <Logo07 />
            <Logo08 />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Logos06Page;
