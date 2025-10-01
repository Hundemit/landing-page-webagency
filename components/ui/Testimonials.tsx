"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// Types
interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
}

// Testimonial data
const testimonials: Testimonial[] = [
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
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-8 p-8">
      {/* Quote Section */}
      <div className="flex-1 relative">
        <div className="relative bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
          {/* Large Quote Mark */}
          <div className="text-7xl font-bold text-gray-200 absolute -top-4 -left-4 leading-none">&ldquo;</div>

          {/* Quote Text */}
          <div className="relative z-10 pt-6">
            <p className="text-lg text-gray-700 leading-relaxed mb-6 pl-4">&ldquo;{testimonial.quote}&rdquo;</p>

            {/* Author Info */}
            <div className="space-y-1 pl-4">
              <p className="font-semibold text-gray-900 text-base">{testimonial.author}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0 lg:ml-[-2rem]">
        <div className="w-64 h-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg relative">
          {/* Placeholder for client photo */}
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
            <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600 text-xs font-medium">Photo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface TestimonialsProps {
  className?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <section className={cn("w-full max-w-7xl mx-auto px-4 xl:px-0 py-16", className)}>
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 gap-6">
        <div className="flex items-center gap-3">
          <hr className="w-8 border-gray-300" />
          <h2 className="text-lg font-medium text-gray-600">Testimonials</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">What Our Clients Say</h1>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <Card className="border-0 shadow-none bg-transparent">
                  <CardContent className="p-0">
                    <TestimonialCard testimonial={testimonial} />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Arrows */}
          <div className="flex gap-2 mt-4 justify-center">
            <CarouselPrevious className="static translate-x-0 translate-y-0 w-10 h-10 bg-gray-100 border-gray-200 hover:bg-gray-200 text-gray-600" />
            <CarouselNext className="static translate-x-0 translate-y-0 w-10 h-10 bg-gray-100 border-gray-200 hover:bg-gray-200 text-gray-600" />
          </div>
        </Carousel>

        {/* Dots Indicator */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-3 w-3 rounded-full border-2 transition-colors",
                current === index + 1 
                  ? "border-primary bg-primary" 
                  : "border-gray-300 bg-transparent hover:border-gray-400"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
