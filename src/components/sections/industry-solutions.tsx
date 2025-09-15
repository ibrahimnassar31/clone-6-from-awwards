"use client";

import { useEffect, useRef, forwardRef } from "react";
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const industriesData = [
  {
    title: 'Software',
    description: 'Run usage-based engagement campaigns. Deploy freemium and product-led growth models at scale.',
    imageUrl: 'https://framerusercontent.com/images/yhnr6KhezVqnnrvxY3S8u71V1F8.jpg',
    imageAlt: 'A lattice of reflective rainbow-tinted computer chips.',
    logoUrl: 'https://framerusercontent.com/images/9DFFO5hOQRIavOKuFDoAzlzxbEM.svg',
    logoAlt: 'Trend Micro logo',
    link: '/industries/software',
  },
  {
    title: 'IT Services',
    description: 'Forecast platform utilization. Deliver exceptional white-glove experiences from a collaborative portal.',
    imageUrl: 'https://framerusercontent.com/images/E1V8Dlsb6O8XEbiz9qRSIobIE.jpg',
    imageAlt: 'An image of planet earth from space with city lights forming network patterns.',
    logoUrl: 'https://framerusercontent.com/images/AORLJZHFDoBwLZvdNYPtPW55p6M.svg',
    logoAlt: 'Softcat logo',
    link: '/industries/it-services',
  },
  {
    title: 'Business Services',
    description: 'Optimize staffing. Track and report on project milestones and billables. Run referral programmes.',
    imageUrl: 'https://framerusercontent.com/images/7SsWU8BZbEddirQVtCGRmZLbtiU.jpg',
    imageAlt: 'A monolithic glass building reflecting blue light.',
    logoUrl: 'https://framerusercontent.com/images/4bqLaF8SgBiRuaYaxrKfCVg0aY.svg',
    logoAlt: 'Basis Technologies logo',
    link: '/industries/business-services',
  },
  {
    title: 'Connected Businesses',
    description: 'Monitor asset installation, schedule maintenance and measure value delivery.',
    imageUrl: 'https://framerusercontent.com/images/4IymTRk9JpOPl8t9rHD3uSBqOCs.jpg',
    imageAlt: 'A crane suspended over a hazy, foggy orange-coloured city sky.',
    logoUrl: 'https://framerusercontent.com/images/8F78u9oVgGwkeXXkR6IRF7eCoM.svg',
    logoAlt: 'Trackunit logo',
    link: '/industries/connected-businesses',
  },
  {
    title: 'Healthcare & Life Sciences',
    description: 'Centralize and streamline stakeholder management. Audit inventory and predict demand.',
    imageUrl: 'https://framerusercontent.com/images/iNVUGdQSd5vMVEuBoC5AKkt2u4.jpg',
    imageAlt: 'A microscopic view of a cluster of bacteria.',
    logoUrl: 'https://framerusercontent.com/images/upm6CBS21MX6zF1hnncIwhFfmk.svg',
    logoAlt: 'Medtronic logo',
    link: '/industries/healthcare-life-sciences',
  },
  {
    title: 'Financial Services',
    description: 'Optimize staffing. Track and report on project milestones and billables. Run referral programmes.',
    imageUrl: 'https://framerusercontent.com/images/2iZEgO7bbGmrF6mcQOwUKl7OQ0.jpg',
    imageAlt: 'Chicago financial district buildings reflecting blue light.',
    logoUrl: 'https://framerusercontent.com/images/vS8ahORKvmORQab6GmH9NfHfXo.svg',
    logoAlt: 'Nasdaq logo',
    link: '/industries/financial-services',
  },
];

interface IndustryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  logoUrl: string;
  logoAlt: string;
  link: string;
  index: number;
}

const IndustryCard = forwardRef<HTMLAnchorElement, IndustryCardProps>(({
  title,
  description,
  imageUrl,
  imageAlt,
  logoUrl,
  logoAlt,
  link,
  index,
}, ref) => {
  return (
    <a href={link} ref={ref} className="group relative block overflow-hidden rounded-xl shadow-lg">
      <div className="aspect-[4/5] w-full">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
          quality={90}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-white/10 to-black/10" />
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-8 text-white">
        <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-8">
          <div className="relative h-8 w-auto mb-4">
            <Image
              src={logoUrl}
              alt={logoAlt}
              fill
              className="object-contain object-left brightness-0 invert"
            />
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold leading-tight">{title}</h3>
          <p className="mt-2 text-sm sm:text-base leading-snug">{description}</p>
        </div>
        <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 flex items-center text-base font-semibold transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
          Explore
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </a>
  );
});

IndustryCard.displayName = "IndustryCard";

export default function IndustrySolutions() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const subheadingRef = useRef<HTMLParagraphElement | null>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const exploreRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const section = sectionRef.current;
      const heading = headingRef.current;
      const subheading = subheadingRef.current;
      if (!section || !heading || !subheading) return;

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

      cardRefs.current.forEach((card, index) => {
        if (!card || !contentRefs.current[index] || !exploreRefs.current[index]) return;

        gsap.fromTo(
          card,
          {
            scale: 0.7,
            opacity: 0,
            rotationX: 20 * (index % 2 === 0 ? 1 : -1), 
            rotationY: 15 * (index % 2 === 0 ? 1 : -1),
            transformPerspective: 1200,
            y: 100,
          },
          {
            scale: 1,
            opacity: 1,
            rotationX: 0,
            rotationY: 0,
            y: 0,
            duration: 1.5,
            ease: "power4.out",
            delay: index * 0.15,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );

        const contentSplit = new SplitText(contentRefs.current[index]!.querySelectorAll("h3, p"), { type: "lines" });
        gsap.from(contentSplit.lines, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power3.out",
          stagger: { amount: 0.4 },
          delay: index * 0.15 + 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.fromTo(
          exploreRefs.current[index],
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: index * 0.15 + 0.4,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Enhanced creative hover effect
        const hoverTl = gsap.timeline({ paused: true });
        hoverTl
          .to(card, {
            scale: 1.05,
            y: -10, 
            rotationX: 8 * (index % 2 === 0 ? 1 : -1), // Enhanced 3D tilt
            rotationY: 8 * (index % 2 === 0 ? -1 : 1),
            transformPerspective: 1000,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0), 0 0 15px rgba(0, 0, 0, 0.4)", // Glowing border
            duration: 0.4,
            ease: "power2.out",
          })
          .to(
            contentRefs.current[index],
            {
              y: -12, 
              duration: 0.4,
              ease: "power2.out",
            },
            0
          )
          .to(
            exploreRefs.current[index],
            {
              scale: 1.1, 
              color: "#ffffff",
              duration: 0.4,
              ease: "power2.out",
            },
            0
          );

        card.addEventListener("mouseenter", () => hoverTl.play());
        card.addEventListener("mouseleave", () => hoverTl.reverse());
      });
    });

    return () => {
      mm.revert();
      const headingSplit = new SplitText(headingRef.current?.querySelectorAll("h2") || [], { type: "chars,words" });
      headingSplit.revert();
      const subheadingSplit = new SplitText(subheadingRef.current || [], { type: "chars,words" });
      subheadingSplit.revert();
      cardRefs.current.forEach((card, index) => {
        if (contentRefs.current[index]) {
          const contentSplit = new SplitText(contentRefs.current[index]!.querySelectorAll("h3, p"), { type: "lines" });
          contentSplit.revert();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-secondary to-secondary/90 py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div ref={headingRef} className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-text-black">
            <span className="text-muted-foreground">Unify your business</span>
            <br />
            on Planhat.
          </h2>
          <p ref={subheadingRef} className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-text-black max-w-xl mx-auto">
            Planhat enables businesses all over the world, of every shape and size, to acquire, service, and grow customers more successfully.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industriesData.map((industry, index) => (
            <IndustryCard
              key={industry.title}
              {...industry}
              index={index}
              ref={(el: HTMLAnchorElement | null) => {
                cardRefs.current[index] = el;
                contentRefs.current[index] = el?.querySelector<HTMLDivElement>(".flex-col") ?? null;
                exploreRefs.current[index] = el?.querySelector<HTMLDivElement>(".flex.items-center") ?? null;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
