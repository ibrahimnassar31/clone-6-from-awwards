"use client";

import { useEffect, useRef } from "react";
import { Play } from 'lucide-react';
import Image from 'next/image';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoTestimonial = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const quoteRef = useRef<HTMLDivElement | null>(null);
  const authorRef = useRef<HTMLDivElement | null>(null);
  const playButtonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const section = sectionRef.current;
      const videoContainer = videoContainerRef.current;
      const quote = quoteRef.current;
      const author = authorRef.current;
      const playButton = playButtonRef.current;
      if (!section || !videoContainer || !quote || !author || !playButton) return;

      gsap.fromTo(
        videoContainer,
        { scale: 0.95, opacity: 0, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        quote,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        author,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const tl = gsap.timeline({ paused: true });
      tl.to(playButton, {
        scale: 1.1,
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
        duration: 0.4,
        ease: "power2.out",
      });
      playButton.addEventListener("mouseenter", () => tl.play());
      playButton.addEventListener("mouseleave", () => tl.reverse());
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-background py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="relative w-full aspect-video overflow-hidden rounded-3xl group shadow-2xl">
          <div ref={videoContainerRef} className="absolute inset-0 w-full h-full">
            <iframe
              src="https://player.vimeo.com/video/913358090?muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              className="w-full h-full object-cover z-10"
              title="Testimonial from Tracy Shouldice, Trend Micro"
              loading="lazy"
            />
            <Image
              src="https://framerusercontent.com/images/Yssl5Q6ST2TyANeh63Kw2xSzlRg.jpg"
              alt="Tracy Shouldice from Trend Micro sitting on a sofa with a beach view."
              className="absolute inset-0 w-full h-full object-cover z-0"
              width={1920}
              height={1080}
              quality={90}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/20 z-5" />
          </div>

          <a 
            href="https://vimeo.com/913358090"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Play testimonial video from Tracy Shouldice"
            className="absolute inset-0 z-20 flex flex-col justify-between p-6 sm:p-8 md:p-12 bg-black/10 hover:bg-black/30 transition-colors duration-500"
          >
            <div
              ref={quoteRef}
              className="self-end max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-black/[.45] backdrop-blur-xl rounded-xl p-6 md:p-8 shadow-xl border border-white/10"
            >
              <p className="text-white text-lg sm:text-xl md:text-2xl font-semibold leading-snug">
                “I'm already getting calls from people all around the world in different functions who have heard about Planhat and want to get onboard.”
              </p>
            </div>

            <div
              ref={authorRef}
              className="flex items-center gap-4 sm:gap-5 md:gap-6 bg-black/[.45] backdrop-blur-xl rounded-xl py-4 px-6 sm:py-5 sm:px-8 max-w-max self-start shadow-xl border border-white/10"
            >
              <div
                ref={playButtonRef}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 transition-all duration-300"
              >
                <Play className="w-5 h-5 sm:w-6 sm:h-6 text-black fill-black ml-1" aria-hidden="true" />
              </div>
              <div>
                <p className="text-white text-sm sm:text-base font-semibold">Tracy Shouldice</p>
                <p className="text-white/80 text-xs sm:text-sm">Director of Customer Success, Trend Micro</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonial;