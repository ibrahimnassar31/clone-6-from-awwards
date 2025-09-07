"use client";

import React, {
  useState,
  useEffect
} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import {
  cn
} from '@/lib/utils';
import {
  Button
} from '@/components/ui/button';

type NavItem = {
  name: string;
  href: string;
  isDropdown?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  {
    name: 'Solutions',
    href: '#',
    isDropdown: true
  },
  {
    name: 'Platform',
    href: '#',
    isDropdown: true
  },
  {
    name: 'Explore',
    href: '#',
    isDropdown: true
  },
  {
    name: 'Editorial',
    href: 'https://www.planhat.com/editorial'
  },
  {
    name: 'Customers',
    href: 'https://www.planhat.com/impact-studies'
  },
  {
    name: 'Pricing',
    href: 'https://www.planhat.com/pricing'
  }
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-white/80 backdrop-blur-sm border-b border-border" 
            : "bg-transparent border-b border-transparent",
          isMenuOpen ? "bg-white" : ""
        )}
      >
        <div className="container mx-auto flex h-[72px] items-center justify-between px-6">
          <div className="flex-shrink-0">
            <a href="https://www.planhat.com/">
              <Image 
                src="https://framerusercontent.com/images/oiq22dPQFENDPM5Y1JDCOIY.svg"
                alt="Planhat logo"
                width={95}
                height={22}
                priority 
                className={cn(isScrolled || isMenuOpen ? "" : "brightness-0 invert")}
              />
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-x-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-primary",
                  isScrolled || isMenuOpen ? "text-foreground" : "text-black"
                )}
              >
                <span>{item.name}</span>
                {item.isDropdown && (
                  <ChevronDown 
                    className={cn(
                      "ml-1 h-4 w-4 transition-colors",
                      isScrolled || isMenuOpen 
                        ? "text-black" 
                        : "text-black/70"
                    )}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-x-2">
            <Button 
              variant="ghost"
              asChild 
              className={cn(
                "transition-colors",
                isScrolled || isMenuOpen 
                  ? "text-foreground hover:bg-accent" 
                  : "text-white hover:bg-white/10"
              )}
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

          <div className="lg:hidden">
            <Button 
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                isScrolled || isMenuOpen 
                  ? "text-foreground hover:bg-accent" 
                  : "text-white hover:bg-white/10"
              )}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-4 pt-2 pb-3">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent"
                >
                  {item.name}
                  {item.isDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>
              ))}
            </div>
            <div className="border-t border-border pt-4 pb-3">
              <div className="flex flex-col space-y-2 px-4">
                <Button variant="ghost" asChild>
                  <a href="#">Log in</a>
                </Button>
                <Button 
                  asChild 
                  className="bg-primary text-primary-foreground shadow-md hover:bg-primary/90"
                >
                  <a href="#">Request a demo</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navigation;