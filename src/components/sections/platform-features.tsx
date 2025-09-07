import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const PlatformFeatures = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <Link href="/platform" className="block group">
            <div className="relative rounded-3xl overflow-hidden bg-black p-10 flex flex-col justify-between min-h-[550px] md:min-h-0 md:aspect-[0.842]">
              <div className="relative z-10">
                <h6 className="text-3xl font-semibold text-white tracking-tight">Enterprise-grade flexibility</h6>
                <p className="mt-4 text-lg text-white/70 max-w-sm">
                  Data warehousing, ETL, automation and reporting put your customer at the new centre of gravity.
                </p>
              </div>
              
              <div className="absolute inset-0 pointer-events-none">
                <Image
                  src="https://framerusercontent.com/images/ebzahcYRiRhskr3YTgRhuYRHfM.jpg"
                  alt="A matte black computer chip with orange lighting and an imprinted Planhat logo on it."
                  width={1180}
                  height={1400}
                  className="absolute -bottom-1/4 left-1/2 -translate-x-1/2 w-[90%] h-auto object-contain"
                />
              </div>

              <div className="relative z-10 mt-auto inline-flex items-center gap-2 self-start rounded-full border border-white/20 px-6 py-2.5 text-base font-medium text-white transition-colors group-hover:bg-white/10">
                Discover <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
          
          <Link href="/" className="block group">
            <div className="relative rounded-3xl overflow-hidden p-10 flex flex-col justify-between min-h-[550px] md:min-h-0 md:aspect-[0.842]">
              <Image
                src="https://framerusercontent.com/images/jzsbBTwZCkQUSi0ikRvPc2y98.png"
                alt="A Macbook on a sofa showing Planhat's document editor view."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <h6 className="text-3xl font-semibold text-white tracking-tight">Consumer-ready usability</h6>
                <p className="mt-4 text-lg text-white/70 max-w-sm">
                  An action-first interface, shortcuts and complete-sentence formulas bring Scandi simplicity to CRM.
                </p>
              </div>
              <div className="relative z-10 mt-auto inline-flex items-center gap-2 self-start rounded-full border border-white/20 px-6 py-2.5 text-base font-medium text-white transition-colors group-hover:bg-white/10">
                Request a demo <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;