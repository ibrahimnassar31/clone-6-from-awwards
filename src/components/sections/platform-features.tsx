"use client";

import { useEffect, useRef } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const PlatformFeatures = () => {
  // References for animation
  const sectionRef = useRef<HTMLElement | null>(null);
  const leftCardRef = useRef<HTMLDivElement | null>(null);
  const rightCardRef = useRef<HTMLDivElement | null>(null);
  const leftImageRef = useRef<HTMLImageElement | null>(null);
  const rightImageRef = useRef<HTMLDivElement | null>(null);
  const leftTextRef = useRef<HTMLDivElement | null>(null);
  const rightTextRef = useRef<HTMLDivElement | null>(null);
  const leftButtonRef = useRef<HTMLDivElement | null>(null);
  const rightButtonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const section = sectionRef.current;
      const leftCard = leftCardRef.current;
      const rightCard = rightCardRef.current;
      const leftImage = leftImageRef.current;
      const rightImage = rightImageRef.current;
      const leftText = leftTextRef.current;
      const rightText = rightTextRef.current;
      const leftButton = leftButtonRef.current;
      const rightButton = rightButtonRef.current;
      if (!section || !leftCard || !rightCard || !leftImage || !rightImage || !leftText || !rightText || !leftButton || !rightButton) return;

      // Split text for letter-by-letter animation
      const leftSplit = new SplitText(leftText, { type: "words,chars" });
      const rightSplit = new SplitText(rightText, { type: "words,chars" });

      // Card entrance: magnetic pull effect using timeline and physics-like easing
      const createMagneticEntrance = (card: HTMLElement, direction: number) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 60%",
            scrub: 0.5,
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          card,
          { x: direction * 200, rotation: direction * 5, opacity: 0 },
          {
            x: 0,
            rotation: 0,
            opacity: 1,
            duration: 2,
            ease: "elastic.out(1, 0.3)", // Physics-based elastic easing for magnetic feel
          },
          0
        );
      };

      createMagneticEntrance(leftCard, -1); // From left
      createMagneticEntrance(rightCard, 1); // From right

      // Left card image: subtle glow and rotation with parallax
      gsap.to(leftImage, {
        yPercent: -15,
        rotation: 5,
        ease: "none",
        scrollTrigger: {
          trigger: leftCard,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Add glow effect on scroll
      gsap.to(leftCard, {
        boxShadow: "0 0 30px rgba(255, 165, 0, 0.5)", // Orange glow matching the chip
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftCard,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Right card image: wave distortion simulation using scale and skew
      gsap.to(rightImage, {
        scale: 1.05,
        skewY: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        duration: 3,
        scrollTrigger: {
          trigger: rightCard,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Text animation: letter stagger with color shift
      const animateText = (split: SplitText, textEl: HTMLElement) => {
        gsap.from(split.chars, {
          y: 20,
          opacity: 0,
          color: "#ffffff00", // Transparent white start
          duration: 0.8,
          ease: "power3.out",
          stagger: { amount: 0.5 },
          scrollTrigger: {
            trigger: textEl,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      };

      animateText(leftSplit, leftText);
      animateText(rightSplit, rightText);

      // Button animation: orbit-like rotation on hover using timeline
      [leftButton, rightButton].forEach((button) => {
        const hoverTl = gsap.timeline({ paused: true });
        hoverTl.to(button, {
          rotation: 360,
          duration: 0.6,
          ease: "power2.inOut",
        }).to(button, {
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
          duration: 0.4,
          ease: "power2.out",
        }, 0);

        button.addEventListener("mouseenter", () => hoverTl.play());
        button.addEventListener("mouseleave", () => hoverTl.reverse());
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          <Link href="/platform" className="block group">
            <div ref={leftCardRef} className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-black to-gray-900 p-10 flex flex-col justify-between min-h-[550px] md:min-h-0 md:aspect-[0.842] shadow-lg transition-shadow duration-500">
              <div ref={leftTextRef} className="relative z-10">
                <h6 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Enterprise-grade flexibility</h6>
                <p className="mt-4 text-base sm:text-lg text-white/70 max-w-sm">
                  Data warehousing, ETL, automation and reporting put your customer at the new centre of gravity.
                </p>
              </div>
              
              <div className="absolute inset-0 pointer-events-none">
                <Image
                  ref={leftImageRef}
                  src="https://framerusercontent.com/images/ebzahcYRiRhskr3YTgRhuYRHfM.jpg"
                  alt="A matte black computer chip with orange lighting and an imprinted Planhat logo on it."
                  width={1180}
                  height={1400}
                  className="absolute -bottom-1/4 left-1/2 -translate-x-1/2 w-[90%] h-auto object-contain"
                  quality={90}
                />
              </div>

              <div ref={leftButtonRef} className="relative z-10 mt-auto inline-flex items-center gap-2 self-start rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition-all">
                Discover <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
          
          <Link href="/" className="block group">
            <div ref={rightCardRef} className="relative rounded-3xl overflow-hidden p-10 flex flex-col justify-between min-h-[550px] md:min-h-0 md:aspect-[0.842] shadow-lg transition-shadow duration-500">
              <div ref={rightImageRef} className="absolute inset-0">
                <Image
                  src="https://framerusercontent.com/images/jzsbBTwZCkQUSi0ikRvPc2y98.png"
                  alt="A Macbook on a sofa showing Planhat's document editor view."
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20"></div>
              </div>
              <div ref={rightTextRef} className="relative z-10">
                <h6 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Consumer-ready usability</h6>
                <p className="mt-4 text-base sm:text-lg text-white/70 max-w-sm">
                  An action-first interface, shortcuts and complete-sentence formulas bring Scandi simplicity to CRM.
                </p>
              </div>
              <div ref={rightButtonRef} className="relative z-10 mt-auto inline-flex items-center gap-2 self-start rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition-all">
                Request a demo <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;