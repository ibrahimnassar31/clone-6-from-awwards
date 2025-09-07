"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

/**
 * HeroSection (GSAP)
 * - Full-bleed banner (fills viewport)
 * - Black overlay + gradient overlay
 * - Cinematic curtain reveal, Ken Burns (slow zoom) on image
 * - Staggered headline/eyebrow/CTA entrance
 * - Subtle parallax on mouse move
 * - Respects prefers-reduced-motion
 */

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imgWrapRef = useRef<HTMLDivElement | null>(null);
  const gradientRef = useRef<HTMLDivElement | null>(null);
  const blackOverlayRef = useRef<HTMLDivElement | null>(null);
  const curtainRef = useRef<HTMLDivElement | null>(null);
  const eyebrowRef = useRef<HTMLAnchorElement | null>(null);
  const titleOuterRefs = useRef<HTMLSpanElement[]>([]);
  const titleInnerRefs = useRef<HTMLSpanElement[]>([]);
  const bodyRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLAnchorElement | null>(null);

  // Helpers to assign refs in arrays
  const setTitleOuterRef = (el: HTMLSpanElement | null, idx: number) => {
    if (!el) return;
    titleOuterRefs.current[idx] = el;
  };
  const setTitleInnerRef = (el: HTMLSpanElement | null, idx: number) => {
    if (!el) return;
    titleInnerRefs.current[idx] = el;
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(titleInnerRefs.current, { yPercent: 110, opacity: 0 });
      gsap.set([eyebrowRef.current, bodyRef.current, ctaRef.current], { y: 20, opacity: 0 });
      gsap.set(imgWrapRef.current, { scale: 1.12 });
      gsap.set(blackOverlayRef.current, { opacity: 0.75 }); // strong black overlay initially
      gsap.set(curtainRef.current, { xPercent: 0 }); // cover fully

      if (isReduced) {
        // Skip fancy animations, just ensure content is visible
        gsap.set(titleInnerRefs.current, { yPercent: 0, opacity: 1 });
        gsap.set([eyebrowRef.current, bodyRef.current, ctaRef.current], { y: 0, opacity: 1 });
        gsap.set(blackOverlayRef.current, { opacity: 0.45 });
        gsap.set(curtainRef.current, { xPercent: 100 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1) Cinematic curtain reveal (black panel slides right)
      tl.to(curtainRef.current, { xPercent: 100, duration: 0.9 }, 0);

      // 2) Overlay eases lighter while image Ken Burns subtly zooms
      tl.to(
        blackOverlayRef.current,
        { opacity: 0.45, duration: 0.9 },
        0.1
      ).to(
        imgWrapRef.current,
        { scale: 1.0, duration: 1.4 },
        0
      );

      // 3) Headline lines (staggered mask-up)
      tl.to(
        titleInnerRefs.current,
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.08,
        },
        0.25
      );

      // 4) Eyebrow, body, CTA
      tl.to(
        [eyebrowRef.current, bodyRef.current, ctaRef.current],
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.07 },
        0.45
      );

      // Mouse-based parallax for a touch of depth
      const bounds = () => section.getBoundingClientRect();
      const quickX = gsap.quickTo(imgWrapRef.current, "x", { duration: 0.6, ease: "power2.out" });
      const quickY = gsap.quickTo(imgWrapRef.current, "y", { duration: 0.6, ease: "power2.out" });

      const onMove = (e: MouseEvent) => {
        const b = bounds();
        const relX = (e.clientX - b.left) / b.width - 0.5; // -0.5..0.5
        const relY = (e.clientY - b.top) / b.height - 0.5;
        quickX(relX * 18); // tweak intensity
        quickY(relY * 10);
      };

      section.addEventListener("mousemove", onMove);

      // Cleanup on unmount
      return () => {
        section.removeEventListener("mousemove", onMove);
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[632px] h-[90vh] w-full items-center overflow-hidden"
    >
      {/* Background image wrapper (animated) */}
      <div ref={imgWrapRef} className="absolute inset-0 will-change-transform">
        <Image
          src="https://framerusercontent.com/images/jTnxZAsO4AkYhzR3rFCr8cVCTQ4.png"
          alt="Explorer in futuristic protective gear standing in a desert landscape."
          fill
          priority
          className="object-cover select-none pointer-events-none"
        />
      </div>

      {/* Black gradient overlay for readability */}
      <div
        ref={gradientRef}
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"
      />

      {/* Adjustable solid black overlay (animated opacity) */}
      <div
        ref={blackOverlayRef}
        className="pointer-events-none absolute inset-0 bg-black"
        aria-hidden
      />

      {/* Cinematic curtain (slides away on load) */}
      <div
        ref={curtainRef}
        className="pointer-events-none absolute inset-0 bg-black"
        style={{ transformOrigin: "right center" }}
        aria-hidden
      />

      {/* Foreground content */}
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

          {/* Headline with masked lines */}
          <h1 className="font-display text-balance text-6xl sm:text-7xl font-bold leading-[1.05] tracking-tight text-white">
            {/* Line 1 */}
            <span className="block overflow-hidden">
              <span ref={(el) => setTitleInnerRef(el, 0)} className="inline-block will-change-transform">
                Know them.
              </span>
            </span>
            {/* Line 2 */}
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

      {/* Accessibility helper: decorative overlays hidden from ATs */}
      <span className="sr-only">Hero banner with animated overlays and headline reveal.</span>
    </section>
  );
};

export default HeroSection;
