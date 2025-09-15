"use client";

import { useEffect, useRef, forwardRef } from "react";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const FeatureItem = forwardRef<HTMLDivElement, { title: string; description: string; index: number }>(({ title, description, index }, ref) => {
  return (
    <div ref={ref} data-index={index} className="relative">
      <h4 className="text-lg sm:text-xl font-semibold text-foreground">{title}</h4>
      <p className="mt-2 text-base text-muted-foreground">{description}</p>
    </div>
  );
});
FeatureItem.displayName = "FeatureItem";

const ScalableFoundation = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const subheadingRef = useRef<HTMLParagraphElement | null>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const descRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const buttonRef = useRef<HTMLAnchorElement | null>(null);

  const features = [
    {
      title: "Opinionated data primitives",
      description: "Represent everything about your business and customers, from products to org structures, in a clean, customer-centric data model."
    },
    {
      title: "Advanced data transformation",
      description: "Combine and transform static and time-series data into meaningful, high-fidelity metrics using a low-code interface."
    },
    {
      title: "Deeply custom objects",
      description: "Freely customize object names and properties. Show different object configurations depending on user role and customer segment."
    },
    {
      title: "Granular access control",
      description: "Grant access by user role and team all the way from entire modules and capabilities to individual object properties."
    }
  ];

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const section = sectionRef.current;
      const heading = headingRef.current;
      const subheading = subheadingRef.current;
      const button = buttonRef.current;
      if (!section || !heading || !subheading || !button) return;

      const headingSplit = new SplitText(heading.querySelectorAll("h2"), { type: "chars,words" });
      const subheadingSplit = new SplitText(subheading, { type: "chars,words" });

      gsap.from(headingSplit.chars, {
        opacity: 0,
        y: 10,
        duration: 0.05,
        ease: "power1.in",
        stagger: { amount: 0.8 },
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(subheadingSplit.chars, {
        opacity: 0,
        y: 10,
        duration: 0.05,
        ease: "power1.in",
        stagger: { amount: 0.6 },
        delay: 0.4,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      featureRefs.current.forEach((item, index) => {
        if (!item) return;

        titleRefs.current[index] = item.querySelector("h4");
        descRefs.current[index] = item.querySelector("p");

        const title = titleRefs.current[index];
        const desc = descRefs.current[index];

        if (!title || !desc) return;

        const titleSplit = new SplitText(title, { type: "chars,words" });
        const descSplit = new SplitText(desc, { type: "chars,words" });
        gsap.fromTo(
          item,
          {
            scale: 0.5,
            opacity: 0,
            transformOrigin: index % 2 === 0 ? "left center" : "right center", // Alternate origin
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power4.out",
            delay: index * 0.15,
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              end: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.from(titleSplit.chars, {
          opacity: 0,
          y: 10,
          duration: 0.05,
          ease: "power1.in",
          stagger: { amount: 0.4 },
          delay: index * 0.15 + 0.2,
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.from(descSplit.chars, {
          opacity: 0,
          y: 10,
          duration: 0.05,
          ease: "power1.in",
          stagger: { amount: 0.6 },
          delay: index * 0.15 + 0.4,
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });

        const hoverTl = gsap.timeline({ paused: true });
        hoverTl.to(item, {
          scale: 1.03,
          boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
          duration: 0.3,
          ease: "power2.out",
        });

        item.addEventListener("mouseenter", () => hoverTl.play());
        item.addEventListener("mouseleave", () => hoverTl.reverse());
      });

      gsap.fromTo(
        button,
        { scale: 0, opacity: 0, transformOrigin: "center" },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: button,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const buttonHoverTl = gsap.timeline({ paused: true });
      buttonHoverTl.to(button, {
        scale: 1.1,
        backgroundColor: "hsl(var(--accent)/0.15)",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
        duration: 0.3,
        ease: "power2.out",
      }).to(button.querySelector("svg"), {
        scale: 1.2,
        x: 5,
        duration: 0.3,
        ease: "power2.inOut",
      }, 0);

      button.addEventListener("mouseenter", () => buttonHoverTl.play());
      button.addEventListener("mouseleave", () => buttonHoverTl.reverse());
    });

    return () => {
      mm.revert();
      const headingSplit = new SplitText(headingRef.current?.querySelectorAll("h2") || [], { type: "chars,words" });
      headingSplit.revert();
      const subheadingSplit = new SplitText(subheadingRef.current || [], { type: "chars,words" });
      subheadingSplit.revert();
      featureRefs.current.forEach((item, index) => {
        if (titleRefs.current[index]) {
          const titleSplit = new SplitText(titleRefs.current[index], { type: "chars,words" });
          titleSplit.revert();
        }
        if (descRefs.current[index]) {
          const descSplit = new SplitText(descRefs.current[index], { type: "chars,words" });
          descSplit.revert();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-background to-background/90 py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div ref={headingRef} className="mx-auto max-w-[700px] text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-muted-foreground">
            Specialized tools.
          </h2>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-foreground">
            Scalable foundation.
          </h2>
          <p ref={subheadingRef} className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-foreground max-w-3xl mx-auto">
            Build your business on a comprehensive, extensible data layer while providing each team with an intuitive everyday tool tailored to their needs.
          </p>
        </div>

        <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 max-w-[900px]">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-12 lg:gap-x-16 sm:gap-y-16">
            {features.map((feature, index) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                description={feature.description}
                index={index}
                ref={(el) => {
                  featureRefs.current[index] = el;
                }}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center">
          <Link
            ref={buttonRef}
            href="https://www.planhat.com/platform"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Explore the platform
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ScalableFoundation;
