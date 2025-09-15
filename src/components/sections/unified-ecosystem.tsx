"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const UnifiedEcosystem = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const topImageRef = useRef<HTMLDivElement | null>(null);
  const topTextRef = useRef<HTMLDivElement | null>(null);
  const topButtonRef = useRef<HTMLAnchorElement | null>(null);
  const leftCardRef = useRef<HTMLDivElement | null>(null);
  const rightCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const section = sectionRef.current;
      const topImage = topImageRef.current;
      const topText = topTextRef.current;
      const topButton = topButtonRef.current;
      const leftCard = leftCardRef.current;
      const rightCard = rightCardRef.current;
      if (!section || !topImage || !topText || !topButton || !leftCard || !rightCard) return;

      gsap.to(topImage, {
        yPercent: 15, 
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.fromTo(
        topText.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        topButton,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        leftCard,
        { xPercent: -20, opacity: 0, rotate: -2 },
        {
          xPercent: 0,
          opacity: 1,
          rotate: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftCard,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        rightCard,
        { xPercent: 20, opacity: 0, scale: 0.95 },
        {
          xPercent: 0,
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightCard,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      [leftCard, rightCard].forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-12">
          <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-2xl text-center shadow-2xl">
            <div ref={topImageRef} className="absolute inset-0 z-0">
              <Image
                src="https://framerusercontent.com/images/cLeTMGiNQswYtfcBbxk0KLDpiY.png"
                alt="The inside of a futuristic-looking glass greenhouse filled with rows of small green plants and some taller green trees."
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
                quality={90}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-0" />
            </div>
            <div ref={topTextRef} className="relative z-10 flex max-w-3xl flex-col items-center gap-6 px-4 text-white">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                A unified ecosystem for customer action
              </h2>
              <p className="text-lg sm:text-xl text-gray-100 max-w-2xl">
                Planhat is a customer platform that doubles as both your single
                source of truth and an everyday customer-centric control centre
                for your sales, service, and success teams.
              </p>
              <Link
                ref={topButtonRef}
                href="#"
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-black transition-all hover:bg-gray-100 hover:shadow-lg"
              >
                Request a demo
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div
              ref={leftCardRef}
              className="relative flex h-[550px] flex-col justify-end overflow-hidden rounded-2xl p-8 text-white transition-shadow duration-300 hover:shadow-xl"
              style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <Image
                src="https://framerusercontent.com/images/swwJEc9GKgjd1l8QRMRIYuQMb0.png"
                alt="A person reaching out to type on a laptop showing a kanban calendar view of upcoming tasks and workflows."
                fill
                className="object-cover z-0"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 580px"
                quality={90}
              />
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="relative z-10 flex w-full flex-col items-start gap-4">
                <h3 className="text-2xl font-bold">Intuitive yet deep</h3>
                <p className="text-lg max-w-sm text-gray-100">
                  A scalable platform your team can adopt in days.
                </p>
                <Link
                  href="/"
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white transition-all hover:bg-white/20 hover:border-white/60"
                >
                  Discover <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div
              ref={rightCardRef}
              className="flex h-[550px] flex-col justify-between rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 p-8 transition-shadow duration-300 hover:shadow-xl"
              style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <h4 className="text-2xl sm:text-3xl font-semibold leading-snug text-foreground">
                “Just during our first month of using the platform we saved more
                than 100 hours.”
              </h4>
              <div className="space-y-2">
                <p className="font-semibold text-foreground">Lasse Thomsen</p>
                <p className="text-sm text-muted-foreground">
                  Head of Commercial Operations, Trustpilot
                </p>
                <Link
                  href="/editorial/trustpilot"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Read impact study <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnifiedEcosystem;