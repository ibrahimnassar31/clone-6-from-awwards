"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const SystemOfAction = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const textContainerRef = useRef<HTMLDivElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const mainImageRef = useRef<HTMLImageElement | null>(null);
  const secondaryImageRef = useRef<HTMLImageElement | null>(null);
  const demoButtonRef = useRef<HTMLAnchorElement | null>(null);
  const reviewButtonRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const section = sectionRef.current;
      const textContainer = textContainerRef.current;
      const imageContainer = imageContainerRef.current;
      const mainImage = mainImageRef.current;
      const secondaryImage = secondaryImageRef.current;
      const demoButton = demoButtonRef.current;
      const reviewButton = reviewButtonRef.current;
      if (!section || !textContainer || !imageContainer || !mainImage || !secondaryImage || !demoButton || !reviewButton) return;

      const heading = textContainer.querySelector("h3");
      const paragraph = textContainer.querySelector("p");
      if (!heading || !paragraph) return;

      const headingSplit = new SplitText(heading, { type: "words" });
      const paragraphSplit = new SplitText(paragraph, { type: "lines" });

      gsap.fromTo(
        textContainer,
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.from(headingSplit.words, {
        opacity: 0,
        y: 15,
        duration: 0.6,
        ease: "power2.out",
        stagger: { amount: 0.3 },
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(paragraphSplit.lines, {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power2.out",
        stagger: { amount: 0.2 },
        delay: 0.3,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.fromTo(
        mainImage,
        { y: 50, scale: 1.1 },
        {
          y: -50,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageContainer,
            start: "top 90%",
            end: "bottom 20%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        secondaryImage,
        { y: 30, scale: 1.05 },
        {
          y: -30,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageContainer,
            start: "top 90%",
            end: "bottom 20%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        demoButton,
        { opacity: 0, scale: 0.9, rotation: -5 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.5)",
          delay: 0.5,
          scrollTrigger: {
            trigger: textContainer,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const demoHoverTl = gsap.timeline({ paused: true });
      demoHoverTl
        .to(demoButton, {
          scale: 1.03,
          rotation: 2,
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2), 0 0 8px rgba(255, 255, 255, 0.5)",
          backgroundColor: "#e2e8f0",
          duration: 0.3,
          ease: "power2.out",
        })
        .to(
          demoButton.querySelector(".h-4"),
          {
            x: 4,
            duration: 0.3,
            ease: "power2.out",
          },
          0
        );

      demoButton.addEventListener("mouseenter", () => demoHoverTl.play());
      demoButton.addEventListener("mouseleave", () => demoHoverTl.reverse());

      gsap.fromTo(
        reviewButton,
        { opacity: 0, scale: 0.9, x: -20 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)",
          delay: 0.7,
          scrollTrigger: {
            trigger: imageContainer,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const reviewHoverTl = gsap.timeline({ paused: true });
      reviewHoverTl
        .to(reviewButton, {
          scale: 1.1,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2), 0 0 10px rgba(255, 255, 255, 0.6)",
          duration: 0.3,
          ease: "power2.out",
        })
        .to(reviewButton, {
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2), 0 0 15px rgba(255, 255, 255, 0.8)",
          duration: 0.4,
          repeat: 1,
          yoyo: true,
          ease: "sine.inOut",
        });

      reviewButton.addEventListener("mouseenter", () => reviewHoverTl.play());
      reviewButton.addEventListener("mouseleave", () => reviewHoverTl.reverse());

      return () => {
        headingSplit.revert();
        paragraphSplit.revert();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-secondary py-20 flex justify-center px-6">
      <div className="w-full max-w-[1200px] grid md:grid-cols-2 gap-12 items-center">
        <div ref={textContainerRef} className="flex flex-col items-start justify-center gap-6">
          <h3 className="text-[32px] font-semibold leading-tight text-foreground">
            Your new system of action
          </h3>
          <p className="text-lg text-muted-foreground">
            Act on customers as you analyze them.
          </p>
          <a
            ref={demoButtonRef}
            href="#"
            className="group inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background py-3 px-6 text-base font-medium text-foreground transition-transform duration-200 ease-in-out hover:scale-95"
          >
            Request a demo
            <ArrowRight className="h-4 w-4 text-foreground" />
          </a>
        </div>

        <div ref={imageContainerRef} className="relative">
          <div>
            <Image
              ref={mainImageRef}
              src="https://framerusercontent.com/images/mNI4b5v85O4Y911MZXHdC1fcTN4.png"
              alt="Three layered card view of different Planhat workspaces: Customer Success, Sales and Support."
              width={1240}
              height={800}
              className="w-full h-auto object-contain max-w-[610px]"
            />
          </div>
          
          <div className="-mt-40">
            <Image
              ref={secondaryImageRef}
              src="https://framerusercontent.com/images/zg2FCiBZ2ya8VsJfSD7OnCr7wrw.png"
              alt="An abstract render of a Planhat customer profile, including timeseries data and interaction records from Jira and Salesforce."
              width={572}
              height={200}
              className="w-full h-auto object-contain max-w-[572px]"
            />
          </div>

          <a
            ref={reviewButtonRef}
            href="https://www.g2.com/products/planhat/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 left-6 z-10 flex items-center gap-2 rounded-full border border-border bg-white/80 px-4 py-2 text-sm shadow-md backdrop-blur-sm transition-transform hover:scale-105"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.285 7.64136C14.285 7.14364 14.242 6.64364 14.1595 6.16364H7.28495V8.995H11.2335C11.056 9.875 10.5185 10.6364 9.75495 11.1364V13.0114H12.3335C13.621 11.8386 14.285 9.94773 14.285 7.64136Z"
                fill="#4285F4"
              ></path>
              <path
                d="M7.28503 14.5C9.43136 14.5 11.2345 13.7841 12.3336 12.5159L9.75503 10.6409C9.04318 11.1159 8.22503 11.4182 7.28503 11.4182C5.46272 11.4182 3.93136 10.15 3.32863 8.44318H0.655029V10.3818C1.73818 12.6886 4.30318 14.5 7.28503 14.5Z"
                fill="#34A853"
              ></path>
              <path
                d="M3.32864 8.44318C3.24614 8.2 3.20432 7.94545 3.20432 7.68182C3.20432 7.41818 3.24614 7.16364 3.32864 6.92045V4.98182H0.655029C0.247273 5.82727 0 6.73636 0 7.68182C0 8.62727 0.247273 9.53636 0.655029 10.3818L3.32864 8.44318Z"
                fill="#FBBC05"
              ></path>
              <path
                d="M7.28503 3.94545C8.38409 3.94545 9.32454 4.34318 10.0541 5.04318L12.3927 2.76818C11.2314 1.68864 9.43136 1 7.28503 1C4.30318 1 1.73818 2.81136 0.655029 5.11818L3.32863 7.05682C3.93136 5.35 5.46272 3.94545 7.28503 3.94545Z"
                fill="#EA4335"
              ></path>
            </svg>
            <span className="font-medium text-foreground">700+ reviews</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SystemOfAction;