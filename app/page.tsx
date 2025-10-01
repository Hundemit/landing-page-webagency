import { CallToAction } from "@/components/ui/CallToAction";
import FeatureDivider from "@/components/ui/FeatureDivider";
import { Hero2 } from "@/components/ui/Hero2";

import { Map } from "@/components/ui/Map/Map";
import { SolarAnalytics } from "@/components/ui/SolarAnalytics";
import Footer from "@/components/ui/Footer";
import { AboutUs } from "@/components/ui/about-us";
import LogosMarquee from "@/components/LogosMarquee/logos-marquee";
import FeaturesPage2 from "@/components/features-05/features2";
import { SuccessInNumbers } from "@/components/Success-In-Numbers";
import PartnershipHero from "@/components/ui/PartnershipHero";
import Testimonials from "@/components/ui/Testimonials";
import { OurRecentWorks2 } from "@/components/Our-Recent-Works2";
import Faq from "@/components/ui/Faq";
import { BlogSection } from "@/components/ui/BlogSection";

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col">
      {/* <Hero className="" /> */}

      <BlogSection className="" />

      <Hero2 className="" />
      <div className=" h-20 flex items-center justify-center">
        <LogosMarquee className=" w-full" />
      </div>
      <div className="h-32"></div>
      <AboutUs className="px-4 xl:px-0 sm:mb-16 mb-16" />
      <FeaturesPage2 className="px-4 sm:px-0   " />
      <SuccessInNumbers className="my-36" />

      <OurRecentWorks2 className="" />

      <PartnershipHero className="" />

      <Testimonials className="" />

      <Faq className="" />

      <div className="px-4 xl:px-0 py-16">
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
