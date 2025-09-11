import Logos06Page from "@/components/logos-06/logos-06";
import { CallToAction } from "@/components/ui/CallToAction";
import FeatureDivider from "@/components/ui/FeatureDivider";
import Features from "@/components/ui/Features";
import { Hero } from "@/components/ui/Hero";
import { Map } from "@/components/ui/Map/Map";
import { SolarAnalytics } from "@/components/ui/SolarAnalytics";
import Testimonial from "@/components/ui/Testimonial";
import Features05Page from "@/components/features-05/features-05";

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col">
      <Hero className="pt-10 h-screen " />

      <div>
        <Features05Page />
      </div>

      <div className=" px-4 xl:px-0">
        <Features />
      </div>
      <div className="mt-32 px-4 xl:px-0">
        <Testimonial />
      </div>
      <FeatureDivider className="my-16 max-w-6xl" />
      <div className="px-4 xl:px-0">
        <Map />
      </div>
      <FeatureDivider className="my-16 max-w-6xl" />
      <div className="mt-12 mb-40 px-4 xl:px-0">
        <SolarAnalytics />
      </div>
      <div className="mt-10 mb-40 px-4 xl:px-0">
        <CallToAction />
      </div>
    </main>
  );
}
