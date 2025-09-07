"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

type NavItem = {
  name: string;
  href: string;
  isDropdown?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { name: "Solutions", href: "#", isDropdown: true },
  { name: "Platform", href: "#", isDropdown: true },
  { name: "Explore", href: "#", isDropdown: true },
  { name: "Editorial", href: "https://www.planhat.com/editorial" },
  { name: "Customers", href: "https://www.planhat.com/impact-studies" },
  { name: "Pricing", href: "https://www.planhat.com/pricing" },
];

const Navigation: React.FC = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const navListRef = useRef<HTMLDivElement | null>(null);
  const hoverLineRef = useRef<HTMLSpanElement | null>(null);
  const mobilePanelRef = useRef<HTMLDivElement | null>(null);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hide-on-scroll premium feel (kept)
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY;
      const past = y > 120;

      if (!isMenuOpen && goingDown && past) {
        gsap.to(header, { yPercent: -100, duration: 0.5, ease: "power3.out" });
      } else {
        gsap.to(header, { yPercent: 0, duration: 0.5, ease: "power3.out" });
      }
      lastY = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMenuOpen]);

  // Hover underline follower
  const moveHoverLine = (el: HTMLElement | null) => {
    const line = hoverLineRef.current;
    const list = navListRef.current;
    if (!line || !list || !el) return;

    const listRect = list.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    const x = r.left - listRect.left;
    const w = r.width;

    gsap.to(line, {
      x,
      width: w,
      opacity: 1,
      duration: 0.28,
      ease: "power3.out",
    });
  };

  const hideHoverLine = () => {
    const line = hoverLineRef.current;
    if (!line) return;
    gsap.to(line, { opacity: 0, duration: 0.2, ease: "power2.out" });
  };

  // Mobile panel animation
  useEffect(() => {
    const panel = mobilePanelRef.current;
    if (!panel) return;

    if (isMenuOpen) {
      gsap.fromTo(
        panel,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.35, ease: "power2.out" }
      );
      gsap.fromTo(
        panel.querySelectorAll("a, button"),
        { y: 8, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.25, ease: "power2.out", stagger: 0.05, delay: 0.05 }
      );
    } else {
      gsap.to(panel, { height: 0, opacity: 0, duration: 0.25, ease: "power2.in" });
    }
  }, [isMenuOpen]);

  // Dropdown clip-path reveal
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  useEffect(() => {
    dropdownRefs.current.forEach((el, idx) => {
      if (!el) return;
      const shouldOpen = openIdx === idx;
      if (shouldOpen) {
        gsap.killTweensOf(el);
        gsap.set(el, { display: "block" });
        gsap.fromTo(
          el,
          { opacity: 0, y: 8, clipPath: "inset(12% 22% 38% 26% round 12px)" },
          { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 12px)", duration: 0.32, ease: "power2.out" }
        );
      } else {
        gsap.to(el, {
          opacity: 0,
          y: 6,
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(el, { display: "none" });
          },
        });
      }
    });
  }, [openIdx]);

  // Reduced motion
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced) return;
    const header = headerRef.current;
    const line = hoverLineRef.current;
    const panel = mobilePanelRef.current;
    if (header) gsap.set(header, { clearProps: "all" });
    if (line) gsap.set(line, { clearProps: "all" });
    if (panel) gsap.set(panel, { clearProps: "all" });
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 will-change-transform",
        "border-b border-transparent bg-transparent transition-colors duration-300"
      )}
    >
      <div className="container mx-auto flex h-[72px] items-center justify-between px-6">
        {/* Brand */}
        <div className="flex-shrink-0">
          <Link href="https://www.planhat.com/" className="text-black font-bold">
            Plannet
          </Link>
        </div>

        {/* Desktop Nav */}
        <div
          ref={navListRef}
          className="relative hidden items-center gap-x-8 lg:flex"
          onMouseLeave={() => {
            hideHoverLine();
            setOpenIdx(null);
          }}
        >
          {NAV_ITEMS.map((item, idx) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={(e) => moveHoverLine(e.currentTarget.querySelector("a"))}
              onFocus={(e) => moveHoverLine(e.currentTarget.querySelector("a"))}
              onMouseOver={() => setOpenIdx(item.isDropdown ? idx : null)}
            >
              <a
                href={item.href}
                className="flex items-center text-sm font-semibold text-black transition-colors hover:text-primary"
              >
                <span>{item.name}</span>
                {item.isDropdown && <ChevronDown className="ml-1 h-4 w-4 text-black/70" />}
              </a>

              {item.isDropdown && (
                <div
                  ref={(el) => {
                    dropdownRefs.current[idx] = el;
                  }}
                  className="absolute left-0 top-[140%] hidden min-w-[540px] rounded-2xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur-xl"
                >
                  <div className="grid grid-cols-2 gap-3">
                    {["Onboarding", "Health Scores", "Playbooks", "Automation", "Integrations", "Dashboards"].map(
                      (label) => (
                        <a key={label} href="#" className="group rounded-lg p-3 transition-colors hover:bg-accent">
                          <p className="text-sm font-semibold group-hover:text-primary">{label}</p>
                          <p className="text-xs text-muted-foreground">Brief description for {label.toLowerCase()}.</p>
                        </a>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}

          <span
            ref={hoverLineRef}
            className="pointer-events-none absolute -bottom-2 h-[2px] w-8 rounded bg-black/80 opacity-0"
          />
        </div>

        <div className="hidden items-center gap-x-2 lg:flex">
          <Button
            variant="ghost"
            asChild
            className="text-black hover:bg-black/5 font-semibold transition-colors"
          >
            <a href="#">Log in</a>
          </Button>
          <Button
            asChild
            className="rounded-md bg-primary text-primary-foreground shadow-[0_2px_8px_rgba(232,93,0,0.2)] hover:bg-primary/90"
          >
            <a href="#">Request a demo</a>
          </Button>
        </div>

        {/* Mobile toggler */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen((s) => !s)}
            className="text-black hover:bg-black/5"
          >
            <span className="sr-only">Toggle main menu</span>
            <div className="relative h-6 w-6">
              <Menu className={cn("absolute inset-0 transition-opacity", isMenuOpen ? "opacity-0" : "opacity-100")} />
              <X className={cn("absolute inset-0 transition-opacity", isMenuOpen ? "opacity-100" : "opacity-0")} />
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile Panel */}
      <div ref={mobilePanelRef} className={cn("overflow-hidden lg:hidden", isMenuOpen ? "" : "h-0 opacity-0")}>
        <div className="space-y-1 px-4 pt-2 pb-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center justify-between rounded-md px-3 py-2 text-base font-semibold text-black transition-colors hover:bg-black/5"
            >
              {item.name}
              {item.isDropdown && <ChevronDown className="ml-1 h-4 w-4 text-black/70" />}
            </a>
          ))}
        </div>
        <div className="border-t border-border pt-4 pb-3">
          <div className="flex flex-col space-y-2 px-4">
            <Button variant="ghost" asChild className="text-black hover:bg-black/5 font-semibold">
              <a href="#">Log in</a>
            </Button>
            <Button asChild className="bg-primary text-primary-foreground shadow-md hover:bg-primary/90">
              <a href="#">Request a demo</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
