"use client";

import { useEffect, useRef } from "react";
import Image, { ImageLoaderProps } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const TABS_DATA = [
  {
    id: "success",
    title: "Success",
    description: "Drive successful outcomes. Grow revenue.",
    imageUrl:
      "https://framerusercontent.com/images/RrvBdRvdQA6kVEswThyd8Dm0BVk.png?scale-down-to=2048&width=3312&height=2252",
    alt: "A screenshot of a Customer Success workspace in Planhat with company and region data.",
  },
  {
    id: "service",
    title: "Service",
    description: "World-class service. Convert clients into promoters.",
    imageUrl:
      "https://framerusercontent.com/images/FINUQuDNZIePwIQBQL9NoiPdA.png?scale-down-to=2048&width=3312&height=2252",
    alt: "A screenshot of a Service workspace in Planhat showing customer tickets and conversations.",
  },
  {
    id: "sales",
    title: "Sales",
    description: "Streamline your sales process. Sell lasting deals. ",
    imageUrl:
      "https://framerusercontent.com/images/gf3NTPjphpujkwJ5Txqn5UX11E.png?scale-down-to=2048&width=3312&height=2252",
    alt: "A screenshot of a Sales workspace in Planhat displaying deal pipelines and forecasts.",
  },
];

const BACKGROUND_IMAGE_URL =
  "https://framerusercontent.com/images/vGpiTv5qdWbp9T1GHK7IPUdSWA.jpg?lossless=1";

const directLoader = ({ src }: ImageLoaderProps) => src;

export default function PlatformOverviewPinned() {
  const featureRefs = useRef<HTMLDivElement[]>([]);
  const textRefs = useRef<HTMLDivElement[]>([]);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const revealRefs = useRef<HTMLDivElement[]>([]);
  const shineRefs = useRef<HTMLSpanElement[]>([]);
  const imgInnerRefs = useRef<HTMLImageElement[]>([]);

  const setFeatureRef = (el: HTMLDivElement | null, i: number) => {
    if (el) featureRefs.current[i] = el;
  };
  const setTextRef = (el: HTMLDivElement | null, i: number) => {
    if (el) textRefs.current[i] = el;
  };
  const setCardRef = (el: HTMLDivElement | null, i: number) => {
    if (el) cardRefs.current[i] = el;
  };
  const setRevealRef = (el: HTMLDivElement | null, i: number) => {
    if (el) revealRefs.current[i] = el;
  };
  const setShineRef = (el: HTMLSpanElement | null, i: number) => {
    if (el) shineRefs.current[i] = el;
  };
  const setImgInnerRef = (el: HTMLImageElement | null, i: number) => {
    if (el) imgInnerRefs.current[i] = el;
  };

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mm = gsap.matchMedia();

    if (reduced) return; 

    mm.add(
      {
        desktop: "(min-width: 1024px)",
        mobile: "(max-width: 1023px)",
      },
      (ctx) => {
        const { desktop } = ctx.conditions as { desktop: boolean; mobile: boolean };

        gsap.defaults({ ease: "power3.out" });

        featureRefs.current.forEach((wrap, i) => {
          const text = textRefs.current[i];
          const card = cardRefs.current[i];
          const reveal = revealRefs.current[i];
          const shine = shineRefs.current[i];
          const img = imgInnerRefs.current[i];

          if (!wrap || !text || !card || !reveal || !shine || !img) return;

          const fromLeft = i % 2 === 0; 
          const enterDir = fromLeft ? -120 : 120; 
          const imgDir = -enterDir;

          gsap.set(text, { xPercent: enterDir, opacity: 0, skewY: 6 });
          gsap.set(card, {
            xPercent: imgDir,
            yPercent: 8,
            opacity: 0,
            scale: 0.94,
            rotateZ: fromLeft ? 0.35 : -0.35,
            transformOrigin: fromLeft ? "left center" : "right center",
            willChange: "transform,opacity",
          });
         
          gsap.set(reveal, {
            clipPath: fromLeft
              ? "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
              : "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
            willChange: "clip-path",
          });
          gsap.set(shine, {
            xPercent: fromLeft ? -130 : 130,
            rotate: fromLeft ? 8 : -8,
            opacity: 0,
          });
          gsap.set(img, { yPercent: 8, willChange: "transform" });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: wrap,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 0.35, 
              toggleActions: "play none none reverse",
            },
          });

          tl.to(
            text,
            { xPercent: 0, opacity: 1, skewY: 0, duration: 0.8 },
            0
          )
            .to(
              card,
              {
                xPercent: 0,
                yPercent: 0,
                opacity: 1,
                scale: 1,
                rotateZ: 0,
                duration: 0.9,
              },
              0
            )
            .to(
              reveal,
              {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 0.85,
              },
              0.1
            )
            .fromTo(
              shine,
              { opacity: 0 },
              { xPercent: fromLeft ? 130 : -130, opacity: 0.45, duration: 0.45 },
              0.22
            )
            .to(shine, { opacity: 0, duration: 0.2 }, "<")
            .to(
              img,
              { yPercent: -4, duration: 1.2, ease: "none" },
              0
            );

          if (!desktop) {
            tl.timeScale(0.9);
          }
        });

        const onResize = () => ScrollTrigger.refresh();
        window.addEventListener("resize", onResize);

        return () => {
          window.removeEventListener("resize", onResize);
          ScrollTrigger.getAll().forEach((st) => st.kill());
        };
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <section className="bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          loader={directLoader}
          src={BACKGROUND_IMAGE_URL}
          alt="Abstract background texture"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 to-neutral-50/85" />
      </div>

      <div className="container w-full py-16 sm:py-24 lg:py-32">
        <div className="text-center mb-16 lg:mb-24 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-black leading-tight mb-2">
            One customer platform.
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-400 leading-tight mb-6">
            Everyone&apos;s business.
          </h2>
          <h4 className="text-lg sm:text-xl font-medium text-text-black mb-8">
            Unify your customer journey.
          </h4>
          <p className="text-base sm:text-lg text-text-gray max-w-2xl mx-auto">
            Explore how our platform empowers teams across success, service, and sales with seamless integration and powerful insights.
          </p>
        </div>

        {TABS_DATA.map((tab, i) => {
          const leftText = i % 2 === 0; 
          return (
            <div
              key={tab.id}
              ref={(el) => setFeatureRef(el, i)}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-24 lg:mb-32 items-center"
            >
              <div
                ref={(el) => setTextRef(el, i)}
                className={`flex flex-col justify-center space-y-4 ${
                  leftText ? "lg:pr-8 order-1" : "lg:pl-8 order-2 lg:order-2"
                }`}
              >
                <h5 className="text-3xl lg:text-4xl font-bold text-primary">
                  {tab.title}
                </h5>
                <p className="text-lg text-text-gray">{tab.description}</p>
                <Button
                  size="lg"
                  className="w-full sm:w-auto py-5 px-8 text-base font-medium mt-4"
                >
                  Book a demo
                </Button>
              </div>

              <div
                ref={(el) => setCardRef(el, i)}
                className={`relative h-[300px] sm:h-[420px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/60 bg-white/60 backdrop-blur-sm ${
                  leftText ? "order-2" : "order-1 lg:order-1"
                }`}
                style={{ perspective: "1200px" }}
              >
                <span
                  ref={(el) => setShineRef(el, i)}
                  className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-tr from-white/0 via-white/60 to-white/0 mix-blend-screen"
                />
                <div
                  ref={(el) => setRevealRef(el, i)}
                  className="absolute inset-0"
                  style={{
                    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                  }}
                >
                  <Image
                    loader={directLoader}
                    src={tab.imageUrl}
                    alt={tab.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 80vw, 50vw"
                    className="object-contain p-4 lg:p-6"
                    priority={i === 0}
                    quality={90}
                    ref={(el) => setImgInnerRef((el as unknown as HTMLImageElement) || null, i)}
                  />
                </div>

                <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/10 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/5 to-transparent" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
