"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const TABS_DATA = [
  {
    id: 'success',
    title: 'Success',
    description: 'Drive successful outcomes. Grow revenue.',
    imageUrl: 'https://framerusercontent.com/images/RrvBdRvdQA6kVEswThyd8Dm0BVk.png?scale-down-to=2048&width=3312&height=2252',
    alt: 'A screenshot of a Customer Success workspace in Planhat with company and region data.',
  },
  {
    id: 'service',
    title: 'Service',
    description: 'World-class service. Convert clients into promoters.',
    imageUrl: 'https://framerusercontent.com/images/FINUQuDNZIePwIQBQL9NoiPdA.png?scale-down-to=2048&width=3312&height=2252',
    alt: 'A screenshot of a Service workspace in Planhat showing customer tickets and conversations.',
  },
  {
    id: 'sales',
    title: 'Sales',
    description: 'Streamline your sales process. Sell lasting deals. ',
    imageUrl: 'https://framerusercontent.com/images/gf3NTPjphpujkwJ5Txqn5UX11E.png?scale-down-to=2048&width=3312&height=2252',
    alt: 'A screenshot of a Sales workspace in Planhat displaying deal pipelines and forecasts.',
  }
];

const BACKGROUND_IMAGE_URL = 'https://framerusercontent.com/images/vGpiTv5qdWbp9T1GHK7IPUdSWA.jpg?lossless=1';

const PlatformOverview = () => {
    const [activeTab, setActiveTab] = useState(TABS_DATA[0].id);

    return (
        <section className="bg-background py-20 sm:py-24">
            <div className="container">
                <div className="text-center mb-16 max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold text-text-black">
                        One customer platform.
                    </h1>
                    <h2 className="text-5xl md:text-6xl lg:text-[72px] font-bold text-gray-400">
                        Everyone's business.
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-24 items-start">
                    <div className="lg:sticky top-28 mb-12 lg:mb-0">
                        <div className="bg-secondary/70 backdrop-blur-lg rounded-3xl p-10 space-y-8 border">
                             <h4 className="text-xl font-medium text-text-black">
                                Unify your customer journey.
                            </h4>
                            {TABS_DATA.map((tab) => {
                                const isActive = activeTab === tab.id;
                                return (
                                    <div 
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className="cursor-pointer group relative"
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveTab(tab.id)}
                                        aria-pressed={isActive}
                                    >
                                        <h5 className={cn(
                                            "text-2xl font-medium transition-colors",
                                            isActive ? "text-primary" : "text-text-black group-hover:text-primary/80"
                                        )}>
                                            {tab.title}
                                        </h5>
                                        <p className="text-text-gray mt-1 text-base">{tab.description}</p>
                                        <div className="mt-4 h-[2px] bg-gray-200 rounded-full overflow-hidden">
                                           <div className={cn(
                                               "h-full bg-primary transition-all duration-300 ease-in-out",
                                               isActive ? "w-full" : "w-0"
                                           )} />
                                        </div>
                                    </div>
                                )
                            })}
                            <Button size="lg" className="w-full !mt-10 py-6 text-base font-medium">Book a demo</Button>
                        </div>
                    </div>
                    
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border">
                        <Image
                            src={BACKGROUND_IMAGE_URL}
                            alt="Abstract background texture"
                            fill
                            className="object-cover"
                            quality={90}
                            priority
                        />
                        <div className="absolute inset-0">
                          {TABS_DATA.map((tab, index) => (
                              <Image
                                  key={tab.id}
                                  src={tab.imageUrl}
                                  alt={tab.alt}
                                  fill
                                  sizes="(max-width: 1023px) 100vw, 50vw"
                                  priority={index === 0}
                                  className={cn(
                                      "object-cover transition-opacity duration-500 ease-in-out",
                                      activeTab === tab.id ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                  )}
                              />
                          ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlatformOverview;