"use client";

import { useEffect, useRef } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DataExplorerSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subheadingRef = useRef<HTMLParagraphElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const buttonRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const section = sectionRef.current;
      const heading = headingRef.current;
      const subheading = subheadingRef.current;
      const imageContainer = imageContainerRef.current;
      const image = imageRef.current;
      const button = buttonRef.current;
      if (!section || !heading || !subheading || !imageContainer || !image || !button) return;

      gsap.fromTo(
        [heading, subheading],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        image,
        {
          scale: 0.9,
          rotateX: 15,
          rotateY: 10,
          y: 100,
          opacity: 0,
          transformPerspective: 1200,
        },
        {
          scale: 1,
          rotateX: 0,
          rotateY: 0,
          y: 0,
          opacity: 1,
          duration: 1.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: imageContainer,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        imageContainer,
        { boxShadow: "0 0 0 rgba(255, 255, 255, 0)" },
        {
          boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)",
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageContainer,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        button,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: imageContainer,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const tl = gsap.timeline({ paused: true });
      tl.to(button, {
        scale: 1.05,
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        boxShadow: "0 8px 20px rgba(255, 255, 255, 0.2)",
        duration: 0.3,
        ease: "power2.out",
      });
      button.addEventListener("mouseenter", () => tl.play());
      button.addEventListener("mouseleave", () => tl.reverse());
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #1a1a1a 100%)',
        color: 'rgb(255, 255, 255)',
      }}
      className="py-20 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-6 text-center">
        <h3
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] max-w-5xl mx-auto"
          style={{ color: 'rgb(255, 255, 255)' }}
        >
          Home to every customer. And opportunity. And conversation. And ticket. And click. And action.
        </h3>
        <p
          ref={subheadingRef}
          className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          style={{ color: 'rgba(255, 255, 255, 0.7)' }}
        >
          In Planhat, data is architected for action. Unify and transform data from across your entire tech stack to act on customers as you analyze them.
        </p>

        <div
          className="mt-12 md:mt-16 lg:mt-20 flex flex-col items-center rounded-[40px] px-6 py-12 md:px-14 md:py-16 lg:px-16 lg:pt-20 lg:pb-16"
          style={{ background: 'linear-gradient(135deg, #111111 0%, #222222 100%)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
        >
          <div className="max-w-lg mx-auto">
            <h6
              className="text-lg sm:text-xl font-semibold"
              style={{ color: 'rgb(255, 255, 255)' }}
            >
              Data Explorer
            </h6>
            <p
              className="mt-4 text-base sm:text-lg leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              Access your data like never before. Anyone can transform a no-code query into customer action in a matter of clicks.
            </p>
          </div>

          <div ref={imageContainerRef} className="mt-10 w-full relative">
            <Image
              ref={imageRef}
              src="https://framerusercontent.com/images/FagD1j6iTmbiMmWjz0AOsbdWI.png"
              alt="An Apple Studio Mac display showing Plahat's Data explorer functionality with multiple coloured time-series lines."
              width={6777}
              height={4415}
              className="w-full h-auto object-contain rounded-2xl"
              quality={90}
              priority
            />
          </div>

          <Link
            ref={buttonRef}
            href="#"
            className="mt-10 inline-flex items-center justify-center rounded-full border px-8 py-4 text-sm font-semibold transition-all hover:bg-white/10"
            style={{
              borderColor: 'rgba(255, 255, 255, 0.2)',
              color: 'rgb(255, 255, 255)',
            }}
          >
            Request a demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DataExplorerSection;