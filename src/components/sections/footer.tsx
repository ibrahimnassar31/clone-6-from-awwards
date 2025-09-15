"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FooterLink {
  text: string;
  href: string;
}
interface LinkColumnProps {
  title: string;
  links: FooterLink[];
  className?: string;
}

const PlanhatLogo = React.forwardRef<SVGSVGElement>((_, ref) => (
  <svg
    ref={ref}
    width="90"
    height="20"
    viewBox="0 0 90 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Planhat Logo"
  />
));
PlanhatLogo.displayName = "PlanhatLogo";

const linkData: LinkColumnProps[] = [
  {
    title: "Solutions",
    links: [
      { text: "Overview", href: "https://www.planhat.com/" },
      { text: "CRM", href: "https://www.planhat.com/" },
      { text: "PSA", href: "https://www.planhat.com/service-delivery" },
      { text: "For Customer Success", href: "https://www.planhat.com/csp" },
      { text: "Cisco CX Specialization", href: "https://www.planhat.com/cisco" },
      { text: "Philanthropy", href: "https://www.planhat.com/all-for-one" },
      { text: "AI Deployment", href: "https://www.planhat.com/adp" },
    ],
  },
  {
    title: "Platform",
    links: [
      { text: "Features", href: "https://www.planhat.com/features" },
      { text: "Views", href: "https://www.planhat.com/platform#views" },
      { text: "Workflows", href: "https://www.planhat.com/platform#workflows" },
      { text: "Metrics", href: "https://www.planhat.com/platform#metrics" },
      { text: "Automations", href: "https://www.planhat.com/platform#automations" },
      { text: "Integrations", href: "https://www.planhat.com/platform#integrations" },
      { text: "Changelog", href: "https://www.planhat.com/changelog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "Pricing", href: "https://www.planhat.com/pricing" },
      { text: "Editorial", href: "https://www.planhat.com/editorial" },
      { text: "Webinars", href: "https://www.planhat.com/events" },
      { text: "Planhat Open", href: "https://www.planhat.com/open" },
      { text: "Help Center", href: "https://help.planhat.com/en/" },
      { text: "Developers", href: "https://www.planhat.com/developers" },
      { text: "RFP Template", href: "https://www.planhat.com/rfp" },
      { text: "Security", href: "https://www.planhat.com/security" },
    ],
  },
  {
    title: "Customers",
    links: [
      { text: "Impact Studies", href: "https://www.planhat.com/impact-studies" },
      { text: "Software", href: "https://www.planhat.com/industries/software" },
      { text: "Business Services", href: "https://www.planhat.com/industries/business-services" },
      { text: "Connected Businesses", href: "https://www.planhat.com/industries/connected-businesses" },
      { text: "Financial Services", href: "https://www.planhat.com/industries/financial-services" },
      { text: "Healthcare & Life Sciences", href: "https://www.planhat.com/industries/healthcare-life-sciences" },
      { text: "IT Services", href: "https://www.planhat.com/industries/it-services" },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "About", href: "https://www.planhat.com/about" },
      { text: "Careers", href: "https://www.planhat.com/careers" },
      { text: "Press", href: "https://www.planhat.com/press" },
      { text: "Partnerships", href: "https://www.planhat.com/partners" },
      { text: "Events", href: "https://www.planhat.com/events" },
      { text: "Contact", href: "https://www.planhat.com/contact" },
      { text: "Legal", href: "https://www.planhat.com/legal" },
    ],
  },
];

const FooterLinkColumn = React.forwardRef<HTMLDivElement, LinkColumnProps>(
  ({ title, links, className }, ref) => (
    <div ref={ref} className={`flex flex-col gap-4 shrink-0 ${className ?? ""}`}>
      <p className="font-medium text-sm text-[#1A1A1A]">{title}</p>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.text}>
            <a
              href={link.href}
              className="text-sm text-[#6B7280] hover:text-[#1A1A1A] transition-colors"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
);
FooterLinkColumn.displayName = "FooterLinkColumn";

const SecurityBadges = () => (
  <div className="flex gap-4">
    <div data-badge className="w-[60px] h-[60px] bg-gray-200 rounded-lg" />
    <div data-badge className="w-[60px] h-[60px] bg-gray-200 rounded-lg" />
    <div data-badge className="w-[60px] h-[60px] bg-gray-200 rounded-lg" />
    <div data-badge className="w-[60px] h-[60px] bg-gray-200 rounded-lg" />
  </div>
);

const Footer = () => {
  const footerRef = useRef<HTMLElement | null>(null);
  const linkRowRef = useRef<HTMLDivElement | null>(null);
  const dividerRef = useRef<HTMLDivElement | null>(null);
  const bottomRowRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<SVGSVGElement | null>(null);
  const legalLinksRef = useRef<HTMLDivElement | null>(null);
  const socialsRef = useRef<HTMLDivElement | null>(null);
  const columnRefs = useRef<HTMLDivElement[]>([]);
  const setColumnRef = (el: HTMLDivElement | null, i: number) => {
    if (el) columnRefs.current[i] = el;
  };

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !footerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(footerRef.current, { opacity: 1, willChange: "transform,opacity,clip-path" });
      gsap.set(linkRowRef.current, { y: 60, opacity: 0 });
      gsap.set(columnRefs.current, {
        opacity: 0,
        y: 24,
        rotate: (i: number) => (i % 2 === 0 ? -0.6 : 0.6),
        x: (i: number) => (i % 2 === 0 ? -32 : 32),
        transformOrigin: "50% 100%",
      });
      gsap.set(dividerRef.current, { scaleX: 0, transformOrigin: "left center", opacity: 0.7 });
      gsap.set(bottomRowRef.current, { y: 34, opacity: 0 });
      gsap.set(logoRef.current, { scale: 0.9, opacity: 0 });
      gsap.set(legalLinksRef.current, { y: 12, opacity: 0 });
      gsap.set(socialsRef.current?.children || [], { y: 18, opacity: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        footerRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 }
      );

      tl.to(linkRowRef.current, { y: 0, opacity: 1, duration: 0.5 }, "-=0.25");

      tl.to(
        columnRefs.current,
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.7,
          stagger: 0.08,
        },
        "-=0.25"
      );

      tl.to(dividerRef.current, { scaleX: 1, duration: 0.4, ease: "power2.out" }, "+=0.05");

      tl.to(bottomRowRef.current, { y: 0, opacity: 1, duration: 0.55 }, "-=0.05");

      tl.to(logoRef.current, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.4)" }, "<");

      tl.to(legalLinksRef.current, { y: 0, opacity: 1, duration: 0.45 }, "-=0.25");

      tl.to(
        socialsRef.current?.children || [],
        { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.6)", stagger: 0.06 },
        "-=0.35"
      );

      if (footerRef.current) {
        const badges = footerRef.current.querySelectorAll("[data-badge]");
        tl.fromTo(
          badges,
          { scale: 0.85, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.45, stagger: 0.05, ease: "power2.out" },
          "-=0.35"
        );
      }

      gsap.to(columnRefs.current, {
        y: (i) => (i % 2 === 0 ? -8 : -4),
        ease: "none",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#f8f9fa] text-[#1a1a1a] font-body py-16 px-5 sm:px-8 md:px-10 md:py-20 overflow-hidden rounded-t-[24px]"
      style={{ clipPath: "inset(0% 0% 0% 0%)" }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col">
        <div className="mt-4">
          <div
            ref={linkRowRef}
            className="
              flex flex-row items-start gap-x-10 gap-y-8
              md:gap-x-12 lg:gap-x-16 xl:gap-x-20
              flex-nowrap overflow-x-auto md:overflow-visible
              py-2
            "
          >
            {linkData.map((column, i) => (
              <FooterLinkColumn
                ref={(el) => setColumnRef(el, i)}
                key={column.title}
                title={column.title}
                links={column.links}
                className="min-w-[160px] sm:min-w-[180px] lg:min-w-[200px] pr-2"
              />
            ))}
          </div>
        </div>

        <div ref={dividerRef} className="mt-16 border-t border-[#e9e9e9]" />

        <div
          ref={bottomRowRef}
          className="flex flex-col lg:flex-row justify-between items-start gap-10 mt-16"
        >
          <div className="flex flex-col gap-5 max-w-xs">
            <a href="https://www.planhat.com/" aria-label="Planhat Homepage">
              <PlanhatLogo ref={logoRef} />
            </a>
            <p className="text-xs text-[#6B7280]">
              Planhat is built to keep your data safe. We put privacy and security front and
              centre, so you don’t have to.
            </p>
            <SecurityBadges />
          </div>

          <div className="flex flex-col items-start lg:items-end gap-6 text-xs text-[#6B7280]">
            <p>© 2025 Planhat AB</p>
            <div
              ref={legalLinksRef}
              className="flex flex-wrap gap-x-5 gap-y-2"
            >
              <a
                href="https://www.planhat.com/legal/terms-of-service-20230926"
                className="hover:text-[#1a1a1a]"
              >
                Terms of Service
              </a>
              <a
                href="https://www.planhat.com/legal/privacy-policy"
                className="hover:text-[#1a1a1a]"
              >
                Privacy Policy
              </a>
              <a
                href="https://www.planhat.com/legal/cookie-policy"
                className="hover:text-[#1a1a1a]"
              >
                Cookie Policy
              </a>
              <a
                href="https://planhat.servicecheck.io/"
                className="hover:text-[#1a1a1a]"
              >
                Status
              </a>
            </div>

            <div ref={socialsRef} className="flex gap-5">
              <a
                href="https://www.linkedin.com/company/planhat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://framerusercontent.com/images/oiq22dPQFENDPM5Y1JDCOIY.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  unoptimized
                />
              </a>
              <a
                href="https://twitter.com/planhat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://framerusercontent.com/images/T3YzaPzb2QHAc1GUYpknlY48z0.svg"
                  alt="X (formerly Twitter)"
                  width={24}
                  height={24}
                  unoptimized
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
