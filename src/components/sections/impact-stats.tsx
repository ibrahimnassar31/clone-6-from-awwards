"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const ImpactStatsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const section = sectionRef.current;
      if (!section) return;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const heading = card.querySelector("h3");
        const paragraph = card.querySelector("p");
        if (!heading || !paragraph) return;

        const headingSplit = new SplitText(heading, { type: "chars,words" });
        const paragraphSplit = new SplitText(paragraph, { type: "lines" });

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.from(headingSplit.chars, {
          opacity: 0,
          y: 10,
          duration: 0.6,
          ease: "power2.out",
          stagger: { amount: 0.4 },
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.from(paragraphSplit.lines, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power2.out",
          stagger: { amount: 0.3 },
          delay: index * 0.2 + 0.3,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        const button = buttonRefs.current[index];
        if (button) {
          gsap.fromTo(
            button,
            {
              opacity: 0,
              scale: 0.8,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              ease: "back.out(1.7)",
              delay: index * 0.2 + 0.5,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );

          const hoverTl = gsap.timeline({ paused: true });
          hoverTl
            .to(button, {
              scale: 1.05,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2), 0 0 8px rgba(255, 255, 255, 0.3)",
              backgroundColor: "#f1f5f9",
              duration: 0.3,
              ease: "power2.out",
            })
            .to(
              button.querySelector(".h-4"),
              {
                x: 5, 
                duration: 0.3,
                ease: "power2.out",
              },
              0
            );

          button.addEventListener("mouseenter", () => hoverTl.play());
          button.addEventListener("mouseleave", () => hoverTl.reverse());
        }

        return () => {
          headingSplit.revert();
          paragraphSplit.revert();
        };
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-secondary py-20">
      <div className="container">
        <div className="grid grid-cols-1 overflow-hidden rounded-lg border border-border bg-card md:grid-cols-2">
          <div
            ref={(el) => {
              cardRefs.current[0] = el;
            }}
            className="flex flex-col items-start border-b border-border p-12 md:border-b-0 md:border-r md:p-20"
          >
            <h3 className="font-semibold text-foreground">
              Powering 2.6 million customers.
            </h3>
            <p className="mt-4 text-lg text-muted-foreground">
              See the impact we're making in the world.
            </p>
            <a
              href="https://www.planhat.com/impact-stories"
              ref={(el) => {
                buttonRefs.current[0] = el;
              }}
              className="mt-8 inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              Our impact
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div
            ref={(el) => {
              cardRefs.current[1] = el;
            }}
            className="flex flex-col items-start p-12 md:p-20"
          >
            <h3 className="font-semibold text-foreground">
              No passengers. We're all crew.
            </h3>
            <p className="mt-4 text-lg text-muted-foreground">
              We've always got missions for the curious and daring.
            </p>
            <a
              href="https://www.planhat.com/careers"
              ref={(el) => {
                buttonRefs.current[1] = el;
              }}
              className="mt-8 inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply now
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStatsSection;
