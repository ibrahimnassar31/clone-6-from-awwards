"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  impactStudyUrl: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Just during our first month of using the platform we saved more than 100 hours.",
    name: "Lasse Thomsen",
    title: "Head of Commercial Operations, Trustpilot",
    impactStudyUrl: "/editorial/trustpilot",
  },
  {
    quote: "Just during our first month of using the platform we saved more than 100 hours.",
    name: "Pam Dickson Fishman",
    title: "VP Customer Success, Basis Technologies",
    impactStudyUrl: "/editorial/basis-technologies",
  },
  {
    quote: "Just during our first month of using the platform we saved more than 100 hours.",
    name: "Mychael Mulhern",
    title: "Director of Customer Success, May Mobility",
    impactStudyUrl: "/editorial/may-mobility",
  },
  {
    quote: "Just during our first month of using the platform we saved more than 100 hours.",
    name: "Alexey Smolyanyy",
    title: "Director of Customer Success Strategy and Operations, Redis",
    impactStudyUrl: "/editorial/redis",
  },
  {
    quote: "Just during our first month of using the platform we saved more than 100 hours.",
    name: "Emil Chroona",
    title: "Chief Growth Officer, Bannerflow",
    impactStudyUrl: "/editorial/bannerflow",
  },
];

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleSelectTestimonial = useCallback((index: number) => {
    if (index === activeIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsFading(false);
    }, 300);
  }, [activeIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSelectTestimonial((activeIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [activeIndex, handleSelectTestimonial]);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="bg-light-gray py-20 lg:py-[120px]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
          <div
            className={`transition-opacity duration-300 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          >
            <p className="text-2xl md:text-[32px] font-semibold text-text-black leading-tight sm:leading-[1.3] mb-8 min-h-[192px] sm:min-h-[168px] md:min-h-[128px]">
              “{activeTestimonial.quote}”
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-4">
              <div>
                <p className="font-medium text-text-black text-base">{activeTestimonial.name}</p>
                <p className="text-text-gray text-base">{activeTestimonial.title}</p>
              </div>
              <Link
                href={activeTestimonial.impactStudyUrl}
                className="text-primary font-medium flex items-center gap-2 shrink-0 text-base hover:underline"
              >
                Read impact study
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSelectTestimonial(index)}
              className={`h-2 rounded-full transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? "w-6 bg-primary"
                  : "w-2 bg-border hover:bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}