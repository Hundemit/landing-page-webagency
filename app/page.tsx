import { CallToAction } from "@/components/ui/CallToAction";
import FeatureDivider from "@/components/ui/FeatureDivider";
import { Hero } from "@/components/ui/Hero2";

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
import { ContactUs } from "@/components/ui/ContactUs";

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col">
      {/* <Hero className="" /> */}

      <Hero className="" />
      <LogosMarquee className="" />
      <div className="h-32"></div>
      <AboutUs className="px-4 xl:px-0 sm:mb-16 mb-16" />
      <FeaturesPage2 className="px-4 sm:px-0   " />
      <SuccessInNumbers className="md:my-36 my-16" />

      <OurRecentWorks2 className="" />

      <PartnershipHero className="md:my-36 my-16" />

      <Testimonials className="md:mb-36 mb-16" />

      <Faq className="md:my-36 my-16 " />

      {/* <Map /> */}
      {/* <SolarAnalytics /> */}
      {/* <CallToAction /> */}

      <ContactUs className="md:my-36 my-16 " />

      <BlogSection className="md:my-16 my-16" />

      <Footer className="" />
    </main>
  );
}
