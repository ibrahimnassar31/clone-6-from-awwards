"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null); // NEW: the element that shrinks/rounds
  const imgWrapRef = useRef<HTMLDivElement | null>(null);
  const gradientRef = useRef<HTMLDivElement | null>(null);
  const blackOverlayRef = useRef<HTMLDivElement | null>(null);
  const curtainRef = useRef<HTMLDivElement | null>(null);
  const sheenRef = useRef<HTMLSpanElement | null>(null);

  const eyebrowRef = useRef<HTMLAnchorElement | null>(null);
  const titleInnerRefs = useRef<HTMLSpanElement[]>([]);
  const bodyRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLAnchorElement | null>(null);

  const setTitleInnerRef = (el: HTMLSpanElement | null, idx: number) => {
    if (!el) return;
    titleInnerRefs.current[idx] = el;
  };

  useEffect(() => {
    const section = sectionRef.current;
    const frame = frameRef.current;
    if (!section || !frame) return;

    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {

      gsap.set(titleInnerRefs.current, { yPercent: 110, opacity: 0 });
      gsap.set([eyebrowRef.current, bodyRef.current, ctaRef.current], { y: 20, opacity: 0 });
      gsap.set(imgWrapRef.current, { scale: 1.12 });
      gsap.set(blackOverlayRef.current, { opacity: 0.75 });
      gsap.set(curtainRef.current, { xPercent: 0 });
      gsap.set(sheenRef.current, { xPercent: -60, opacity: 0 });
      gsap.set(frame, { borderRadius: 0, scale: 1, transformOrigin: "center top" });

      if (isReduced) {
        gsap.set(titleInnerRefs.current, { yPercent: 0, opacity: 1 });
        gsap.set([eyebrowRef.current, bodyRef.current, ctaRef.current], { y: 0, opacity: 1 });
        gsap.set(blackOverlayRef.current, { opacity: 0.45 });
        gsap.set(curtainRef.current, { xPercent: 100 });
        gsap.set(sheenRef.current, { xPercent: 150, opacity: 0 });
        return;
      }

  
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

      intro.to(curtainRef.current, { xPercent: 100, duration: 2 }, 0);
      intro
        .to(blackOverlayRef.current, { opacity: 0.45, duration: 2 }, 0.05)
        .to(imgWrapRef.current, { scale: 1.0, duration: 2 }, 0);

      intro.to(
        titleInnerRefs.current,
        { yPercent: 0, opacity: 1, duration: 2, stagger: 2 },
        0.25
      );

      intro.to(
        [eyebrowRef.current, bodyRef.current, ctaRef.current],
        { y: 0, opacity: 1, duration: 2, stagger: 2 },
        0.45
      );

      gsap.fromTo(
        sheenRef.current,
        { xPercent: -60, opacity: 0 },
        {
          xPercent: 160,
          opacity: 1,
          duration: 8,
          ease: "power2.inOut",
          repeat: -1,
          repeatDelay: 1.2,
          onRepeat: () => {
            gsap.set(sheenRef.current, { opacity: 0.8 });
          },
          onUpdate: () => {
            const el = sheenRef.current as HTMLElement;
            if (!el) return;
            const m = gsap.getProperty(el, "xPercent") as number;
            const t = Math.max(0, Math.min(1, (m + 60) / 220));
            el.style.opacity = String(0.25 + 0.55 * Math.sin(Math.PI * t)); // soften edges
          },
        }
      );

      const shrinkTl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=320",           
          scrub: 0.3,              
          pin: true,               
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      shrinkTl.to(
        frame,
        {
          scale: 0.92,              
          borderRadius: 24,     
          boxShadow: "0 20px 70px rgba(0,0,0,0.40)",
        },
        0
      );

      shrinkTl.to(blackOverlayRef.current, { opacity: 0.55 }, 0);
      shrinkTl.to(imgWrapRef.current, { scale: 0.985 }, 0);

 
      const bounds = () => section.getBoundingClientRect();
      const quickX = gsap.quickTo(imgWrapRef.current, "x", { duration: 1.5, ease: "power3.out" });
      const quickY = gsap.quickTo(imgWrapRef.current, "y", { duration: 1.5, ease: "power3.out" });

      const onMove = (e: MouseEvent) => {
        const b = bounds();
        const relX = (e.clientX - b.left) / b.width - 0.5;
        const relY = (e.clientY - b.top) / b.height - 0.5;
        quickX(relX * 18);
        quickY(relY * 10);
      };
      section.addEventListener("mousemove", onMove);

      return () => {
        section.removeEventListener("mousemove", onMove);
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[632px] h-[100vh] w-full items-center overflow-hidden"
    >
      <div
        ref={frameRef}
        className="absolute inset-0 will-change-transform overflow-hidden border border-white/10"
      >
        <div ref={imgWrapRef} className="absolute inset-0 will-change-transform">
          <Image
            src="https://framerusercontent.com/images/jTnxZAsO4AkYhzR3rFCr8cVCTQ4.png"
            alt="Explorer in futuristic protective gear standing in a desert landscape."
            fill
            priority
            className="object-cover select-none pointer-events-none"
          />
        </div>

        <div
          ref={gradientRef}
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"
        />

        <div ref={blackOverlayRef} className="pointer-events-none absolute inset-0 bg-black" aria-hidden />

        <span
          ref={sheenRef}
          aria-hidden
          className="pointer-events-none absolute -inset-y-8 -left-1/3 block w-1/3 rotate-6
                     bg-gradient-to-r from-transparent via-white/40 to-transparent
                     blur-[2px] will-change-transform"
        />

        <svg className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-soft-light" aria-hidden>
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="3">
              <animate attributeName="baseFrequency" dur="12s" values="0.7;0.9;0.7" repeatCount="indefinite" />
            </feTurbulence>
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        <div
          ref={curtainRef}
          className="pointer-events-none absolute inset-0 bg-black"
          style={{ transformOrigin: "right center" }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
          <div className="flex max-w-[720px] flex-col items-start gap-6">
            <a
              ref={eyebrowRef}
              href="https://www.planhat.com/editorial/cutting-through-the-advertising-fog-ep01"
              className="group flex items-center gap-4 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur-md transition-colors hover:border-white/30 hover:bg-white/10"
            >
              <span className="font-medium text-white">In the Field</span>
              <span className="font-medium text-gray-300">Planhat x Basis Technologies</span>
            </a>

            <h1 className="font-display text-balance text-6xl sm:text-7xl font-bold leading-[1.05] tracking-tight text-white">
              <span className="block overflow-hidden">
                <span ref={(el) => setTitleInnerRef(el, 0)} className="inline-block will-change-transform">
                  Know them.
                </span>
              </span>
              <span className="block overflow-hidden">
                <span ref={(el) => setTitleInnerRef(el, 1)} className="inline-block will-change-transform">
                  Grow them.
                </span>
              </span>
            </h1>

            <p ref={bodyRef} className="max-w-[56ch] text-lg leading-relaxed text-gray-200">
              The unified customer platform for growing lifelong revenue.
            </p>

            <a
              ref={ctaRef}
              href="#"
              className="inline-block rounded-lg bg-[#E85D00] px-8 py-4 text-base font-medium text-white shadow-[0_2px_12px_rgba(232,93,0,0.35)] transition-transform duration-200 will-change-transform hover:scale-[1.03] active:scale-[0.99]"
            >
              Request a demo
            </a>
          </div>
        </div>
      </div>

      <span className="sr-only">Hero banner with shrink-on-scroll, rounded corners, sheen, and headline reveal.</span>
    </section>
  );
};

export default HeroSection;
