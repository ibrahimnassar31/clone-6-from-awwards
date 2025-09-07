"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const featureData = [
  {
    id: 'success',
    title: 'Success',
    description: 'Drive successful outcomes. Grow revenue.',
    image: 'https://framerusercontent.com/images/RrvBdRvdQA6kVEswThyd8Dm0BVk.png',
    alt: 'A screenshot of a Customer Success workspace in Planhat with rows of companies grouped by region and a slideout summarising the company "Allegro".',
  },
  {
    id: 'service',
    title: 'Service',
    description: 'World-class service. Convert clients into promoters.',
    image: 'https://framerusercontent.com/images/9QNjIfPtIzqFz0HUMtXlTLO7E.png',
    alt: 'A screenshot of a Customer Success workspace in Planhat showing analysis of companies as bubbles of varying sizes and positions.',
  },
  {
    id: 'sales',
    title: 'Sales',
    description: 'Streamline your sales process. Sell lasting deals.',
    image: 'https://framerusercontent.com/images/FINUQuDNZIePwIQBQL9NoiPdA.png',
    alt: 'A screenshot of a Planhat interface for sales.',
  },
];

const FeatureItem = ({ title, description, isActive, progress }) => (
  <div className="relative pl-6">
    <a href={`#${title.toLowerCase()}`} className={`block transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
      <h5 className="text-2xl font-medium text-text-black">{title}</h5>
      <p className="mt-2 text-base text-text-gray">{description}</p>
    </a>
    <div 
      className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary transition-transform duration-100 ease-linear"
      style={{ transform: `scaleY(${progress / 100})`, transformOrigin: 'top' }}
    />
  </div>
);

export default function ProductShowcase() {
  const [activeSection, setActiveSection] = useState(0);
  const [progress, setProgress] = useState([0, 0, 0]);

  const triggerRefs = [useRef(null), useRef(null), useRef(null)];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveSection(index);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
      }
    );

    triggerRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      triggerRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const newProgress = triggerRefs.map((ref) => {
        if (!ref.current) return 0;
        const rect = ref.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const distance = (viewportHeight / 2) - rect.top;
        const percentage = (distance / rect.height) * 100;
        return Math.max(0, Math.min(100, percentage));
      });
      setProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="product-showcase" className="bg-background py-20">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-[48px] font-semibold leading-tight text-text-black">
            One customer platform.
          </h2>
          <h3 className="text-[48px] font-semibold leading-tight text-gray-400">
            Everyone's business.
          </h3>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="max-w-6xl mx-auto px-6 relative h-[300vh]">
          <div className="grid grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] gap-20 h-full">
            <div className="sticky top-32 self-start">
              <div className="bg-white/80 backdrop-blur-[20px] p-8 rounded-2xl border border-border">
                <h4 className="text-2xl font-medium text-text-black mb-10">Unify your customer journey.</h4>
                <div className="space-y-10">
                  {featureData.map((feature, index) => (
                    <FeatureItem
                      key={feature.id}
                      title={feature.title}
                      description={feature.description}
                      isActive={activeSection === index}
                      progress={progress[index]}
                    />
                  ))}
                </div>
                <Button size="lg" className="mt-10 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base py-4 h-auto rounded-md">Book a demo</Button>
              </div>
            </div>
            <div className="sticky top-32 self-start">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl" style={{ perspective: '1000px' }}>
                <Image
                  src="https://framerusercontent.com/images/vGpiTv5qdWbp9T1GHK7IPUdSWA.jpg"
                  alt="Abstract tech background"
                  fill
                  priority
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute inset-0 p-2">
                  {featureData.map((feature, index) => (
                    <div key={index} className={`absolute inset-2 transition-opacity duration-500 ease-in-out ${activeSection === index ? 'opacity-100' : 'opacity-0'}`}>
                      <Image
                        src={feature.image}
                        alt={feature.alt}
                        fill
                        className="object-contain"
                        sizes="50vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {triggerRefs.map((ref, index) => (
            <div ref={ref} key={index} data-index={index} className="absolute h-screen w-px left-0" style={{ top: `${index * 100}vh` }}></div>
          ))}
        </div>
      </div>

      <div className="block md:hidden px-4">
        <div className="bg-white/80 backdrop-blur-[20px] p-6 rounded-2xl border border-border mb-8">
            <h4 className="text-2xl font-medium text-text-black mb-8">Unify your customer journey.</h4>
            <div className="space-y-8">
              {featureData.map((feature) => (
                <div key={feature.id}>
                    <h5 className="text-xl font-medium text-text-black">{feature.title}</h5>
                    <p className="mt-1 text-base text-text-gray">{feature.description}</p>
                </div>
              ))}
            </div>
            <Button size="lg" className="mt-8 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base py-3 h-auto rounded-md">Book a demo</Button>
        </div>
        <div className="space-y-8 mt-12">
            {featureData.map((feature, i) => (
                <div key={i}>
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                         <Image
                            src={feature.image}
                            alt={feature.alt}
                            fill
                            className="object-contain p-2"
                            sizes="100vw"
                          />
                    </div>
                </div>
            ))}
        </div>
       </div>
    </section>
  );
}