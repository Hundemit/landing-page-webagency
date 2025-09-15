import { CallToAction } from "@/components/ui/CallToAction";
import FeatureDivider from "@/components/ui/FeatureDivider";
import { Hero } from "@/components/ui/Hero";
import { Map } from "@/components/ui/Map/Map";
import { SolarAnalytics } from "@/components/ui/SolarAnalytics";
import Features05Page from "@/components/features-05/features-05";
import Footer from "@/components/ui/Footer";
import { AboutUs } from "@/components/ui/about-us";

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col">
      <Hero className="" />

      {/* space for the navbar */}
      <div className="h-32"></div>

      <AboutUs />

      <FeatureDivider className="mb-16 mt-32 max-w-6xl" />

      <div className=" px-4 xl:px-0">
        <Features05Page />
      </div>
      {/* <FeatureDivider className="my-64 max-w-6xl" />

      <div className=" px-4 xl:px-0">
        <Testimonial />
      </div> */}
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
