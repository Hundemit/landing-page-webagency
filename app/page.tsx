import { CallToAction } from "@/components/ui/CallToAction";
import FeatureDivider from "@/components/ui/FeatureDivider";
import { Hero2 } from "@/components/ui/Hero2";

import { Map } from "@/components/ui/Map/Map";
import { SolarAnalytics } from "@/components/ui/SolarAnalytics";
import FeaturesPage from "@/components/features-05/features";
import Footer from "@/components/ui/Footer";
import { AboutUs } from "@/components/ui/about-us";
import LogosMarquee from "@/components/LogosMarquee/logos-marquee";
import FeaturesPage2 from "@/components/features-05/features2";

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col">
      {/* <Hero className="" /> */}
      <Hero2 className="" />
      <div className=" h-20 flex items-center justify-center">
        <LogosMarquee className=" w-full" />
      </div>
      {/* space for the navbar */}
      <div className="h-32"></div>

      <AboutUs className="px-4 xl:px-0 mb-48" />

      {/* <FeatureDivider className="mb-16 mt-32 max-w-7xl " /> */}

      {/* <FeaturesPage className="px-4 xl:px-0 w-full  " /> */}
      <FeaturesPage2 className="px-4 xl:px-0 my-38 " />

      <FeatureDivider className="my-64 max-w-6xl" />
      <div className="px-4 xl:px-0">
        <Map />
      </div>
      <FeatureDivider className="my-64 max-w-6xl" />
      <div className="mt-12 mb-40 px-4 xl:px-0">
        <SolarAnalytics />
      </div>
      <div className="mt-10 mb-40 px-4 xl:px-0">
        <CallToAction />
      </div>
      <div className="mt-10 mb-40 px-4 xl:px-0">
        <Footer />
      </div>
    </main>
  );
}
