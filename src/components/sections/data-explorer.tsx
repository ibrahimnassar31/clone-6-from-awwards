import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const DataExplorerSection = () => {
  return (
    <section
      style={{
        backgroundColor: 'rgb(0, 0, 0)',
        color: 'rgb(255, 255, 255)',
      }}
      className="py-20 md:py-[80px]"
    >
      <div className="container mx-auto px-6 text-center">
        <h3
          className="text-5xl md:text-6xl lg:text-[72px] font-semibold leading-[1.1] max-w-6xl mx-auto"
          style={{ color: 'rgb(255, 255, 255)' }}
        >
          Home to every customer. And opportunity. And conversation. And ticket. And click. And action.
        </h3>
        <p
          className="mt-6 text-lg md:text-[20px] leading-[1.5] max-w-3xl mx-auto"
          style={{ color: 'rgba(255, 255, 255, 0.7)' }}
        >
          In Planhat, data is architected for action. Unify and transform data from across your entire tech stack to act on customers as you analyze them.
        </p>

        <div
          className="mt-16 md:mt-24 flex flex-col items-center rounded-[40px] px-6 py-12 md:px-14 md:py-20 lg:px-[60px] lg:pt-[80px] lg:pb-[60px]"
          style={{ backgroundColor: 'rgb(17, 17, 17)' }}
        >
          <div className="max-w-[560px] mx-auto">
            <h6
              className="text-xl font-medium"
              style={{ color: 'rgb(255, 255, 255)' }}
            >
              Data explorer
            </h6>
            <p
              className="mt-4 text-lg md:text-[20px] leading-[1.5]"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              Access your data like never before. Anyone can transform a no-code query into customer action in a matter of clicks.
            </p>
          </div>

          <div className="mt-10 w-full">
            <Image
              src="https://framerusercontent.com/images/FagD1j6iTmbiMmWjz0AOsbdWI.png"
              alt="An Apple Studio Mac display showing Plahat's Data explorer functionality with multiple coloured time-series lines."
              width={6777}
              height={4415}
              className="w-full h-auto object-contain"
            />
          </div>

          <Link
            href="#"
            className="mt-12 inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-medium transition-colors hover:bg-white/10"
            style={{
              borderColor: 'rgba(255, 255, 255, 0.2)',
              color: 'rgb(255, 255, 255)',
            }}
          >
            Request a demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DataExplorerSection;