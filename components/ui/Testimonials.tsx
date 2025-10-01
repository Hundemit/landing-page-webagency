"use client";

import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote: "Working with Webloris was a game-changer. Their team transformed our outdated website into a sleek, user-friendly platform that truly represents our brand.",
    author: "Emily R.",
    role: "Owner of Glow Cosmetics",
    image: "/images/testimonial-1.jpg",
  },
  {
    id: 2,
    quote: "The attention to detail and creativity of the Webloris team exceeded our expectations. Our new website has significantly improved our online presence and customer engagement.",
    author: "Marcus T.",
    role: "CEO of TechFlow Solutions",
    image: "/images/testimonial-2.jpg",
  },
  {
    id: 3,
    quote: "From concept to launch, Webloris made the entire process seamless. Their expertise in both design and development is unmatched in the industry.",
    author: "Sarah K.",
    role: "Marketing Director at GreenEarth",
    image: "/images/testimonial-3.jpg",
  },
  {
    id: 4,
    quote: "Our conversion rates have increased by 150% since launching our new website. Webloris delivered exactly what we needed and more.",
    author: "David L.",
    role: "Founder of FitnessPro",
    image: "/images/testimonial-4.jpg",
  },
  {
    id: 5,
    quote: "The team at Webloris understood our vision perfectly and brought it to life with stunning visuals and flawless functionality.",
    author: "Lisa M.",
    role: "Creative Director at ArtSpace",
    image: "/images/testimonial-5.jpg",
  },
];

// Testimonial Card Component
const TestimonialCard = ({ testimonial, className }: { testimonial: (typeof testimonials)[0]; className?: string }) => {
  return (
    <div className={cn("flex h-full lg:min-h-96 flex-col lg:flex-row items-start  justify-between gap-4 p-4 md:p-8  rounded-xl bg-[#F0ECDD] duration-300", className)}>
      {/* Quote Section */}
      <div className="w-full h-full  relative  flex flex-col justify-between gap-4 lg:gap-0">
        {/* Large Quote Mark */}
        <div className="flex flex-col S duration-300">
          <div className="text-4xl md:text-6xl font-bold h-8 md:h-12 leading-none duration-300">&ldquo;</div>
          <p className="text-base md:text-xl w-full md:w-3/4 leading-relaxed font-medium duration-300">{testimonial.quote}</p>
        </div>

        {/* Quote Text */}
        <div className="relative z-10 flex justify-between  duration-300">
          {/* Author Info */}
          <div className="space-y-1 ">
            <p className="font-semibold text-black text-base">{testimonial.author}</p>
            <p className="text-sm text-black font-normal">{testimonial.role}</p>
          </div>
          {/* mini imiage */}
          <div className=" min-w-12 h-12  bg-gray-500 rounded-xl lg:hidden"></div>
        </div>
      </div>

      {/* Image Section */}
      <div className="h-full aspect-square min-w-96  bg-gray-500 rounded-2xl overflow-hidden relative lg:block hidden"></div>
    </div>
  );
};

const Testimonials = ({ className }: { className?: string }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className={cn("w-full  xl:px-0 py-16  duration-300", className)}>
      {/* Header */}
      <div className="flex flex-col px-4 mx-auto max-w-7xl lg:flex-row duration-300 items-start lg:items-center justify-between mb-6 lg:mb-12 gap-6">
        <div className="flex items-center gap-3">
          <hr className="w-8 border-black" />
          <h2 className="text-lg font-medium text-black">Testimonials</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8 w-full duration-300">
          <h1 className="text-3xl  md:ml-auto md:text-4xl lg:text-5xl font-bold text-black leading-tight duration-300">What Our Clients Say</h1>

          {/* Navigation Arrows */}
          <div className="flex gap-2 ml-auto lg:ml-0 duration-300">
            <button
              onClick={() => api?.scrollPrev()}
              disabled={!api?.canScrollPrev()}
              className="w-10 h-10 bg-[#F0ECDD] border border-[#F0ECDD]/50 hover:bg-[#F0ECDD]/80 text-black rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => api?.scrollNext()}
              disabled={!api?.canScrollNext()}
              className="w-10 h-10 bg-[#F0ECDD] border border-[#F0ECDD]/50 hover:bg-[#F0ECDD]/80 text-black rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative  mx-auto duration-300">
        <Carousel setApi={setApi} className="w-full max-w-7xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="basis-11/12">
                <TestimonialCard
                  testimonial={testimonial}
                  className={cn("duration-1000", {
                    "opacity-50": index !== current - 1,
                  })}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dots Indicator */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-3 w-3 rounded-full border-2 transition-colors",
                current === index + 1 ? "border-primary-foreground bg-primary-foreground" : "border-primary-foreground bg-transparent hover:border-primary-foreground/80"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
