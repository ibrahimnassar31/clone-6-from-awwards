import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const industriesData = [
  {
    title: 'Software',
    description: 'Run usage-based engagement campaigns. Deploy freemium and product-led growth models at scale.',
    imageUrl: 'https://framerusercontent.com/images/yhnr6KhezVqnnrvxY3S8u71V1F8.jpg',
    imageAlt: 'A lattice of reflective rainbow-tinted computer chips.',
    logoUrl: 'https://framerusercontent.com/images/9DFFO5hOQRIavOKuFDoAzlzxbEM.svg',
    logoAlt: 'Trend Micro logo',
    link: '/industries/software',
  },
  {
    title: 'IT Services',
    description: 'Forecast platform utilization. Deliver exceptional white-glove experiences from a collaborative portal.',
    imageUrl: 'https://framerusercontent.com/images/E1V8Dlsb6O8XEbiz9qRSIobIE.jpg',
    imageAlt: 'An image of planet earth from space with city lights forming network patterns.',
    logoUrl: 'https://framerusercontent.com/images/AORLJZHFDoBwLZvdNYPtPW55p6M.svg',
    logoAlt: 'Softcat logo',
    link: '/industries/it-services',
  },
  {
    title: 'Business Services',
    description: 'Optimize staffing. Track and report on project milestones and billables. Run referral programmes.',
    imageUrl: 'https://framerusercontent.com/images/7SsWU8BZbEddirQVtCGRmZLbtiU.jpg',
    imageAlt: 'A monolithic glass building reflecting blue light.',
    logoUrl: 'https://framerusercontent.com/images/4bqLaF8SgBiRuaYaxrKfCVg0aY.svg',
    logoAlt: 'Basis Technologies logo',
    link: '/industries/business-services',
  },
  {
    title: 'Connected Businesses',
    description: 'Monitor asset installation, schedule maintenance and measure value delivery.',
    imageUrl: 'https://framerusercontent.com/images/4IymTRk9JpOPl8t9rHD3uSBqOCs.jpg',
    imageAlt: 'A crane suspended over a hazy, foggy orange-coloured city sky.',
    logoUrl: 'https://framerusercontent.com/images/8F78u9oVgGwkeXXkR6IRF7eCoM.svg',
    logoAlt: 'Trackunit logo',
    link: '/industries/connected-businesses',
  },
  {
    title: 'Healthcare & Life Sciences',
    description: 'Centralize and streamline stakeholder management. Audit inventory and predict demand.',
    imageUrl: 'https://framerusercontent.com/images/iNVUGdQSd5vMVEuBoC5AKkt2u4.jpg',
    imageAlt: 'A microscopic view of a cluster of bacteria.',
    logoUrl: 'https://framerusercontent.com/images/upm6CBS21MX6zF1hnncIwhFfmk.svg',
    logoAlt: 'Medtronic logo',
    link: '/industries/healthcare-life-sciences',
  },
  {
    title: 'Financial Services',
    description: 'Optimize staffing. Track and report on project milestones and billables. Run referral programmes.',
    imageUrl: 'https://framerusercontent.com/images/2iZEgO7bbGmrF6mcQOwUKl7OQ0.jpg',
    imageAlt: 'Chicago financial district buildings reflecting blue light.',
    logoUrl: 'https://framerusercontent.com/images/vS8ahORKvmORQab6GmH9NfHfXo.svg',
    logoAlt: 'Nasdaq logo',
    link: '/industries/financial-services',
  },
];

interface IndustryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  logoUrl: string;
  logoAlt: string;
  link: string;
}

const IndustryCard = ({
  title,
  description,
  imageUrl,
  imageAlt,
  logoUrl,
  logoAlt,
  link,
}: IndustryCardProps) => (
  <a href={link} className="group relative block overflow-hidden rounded-xl">
    <div className="aspect-[4/5] w-full">
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/0" />
    <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 text-white">
      <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-10">
        <div className="relative h-8 w-auto mb-6">
          <Image
            src={logoUrl}
            alt={logoAlt}
            fill
            className="object-contain object-left brightness-0 invert"
          />
        </div>
        <h3 className="text-2xl font-semibold leading-tight">{title}</h3>
        <p className="mt-2 text-base leading-snug">{description}</p>
      </div>
      <div className="absolute bottom-8 left-8 flex items-center text-base font-medium transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
        Explore
        <ArrowRight className="ml-2 h-4 w-4" />
      </div>
    </div>
  </a>
);

export default function IndustrySolutions() {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-semibold leading-tight text-text-black">
            <span className="text-muted-foreground">Unify your business</span>
            <br />
            on Planhat.
          </h2>
          <p className="mt-6 text-lg text-text-black max-w-xl mx-auto">
            Planhat enables businesses all over the world, of every shape and
            size, to acquire, service and grow customers more successfully.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((industry) => (
            <IndustryCard key={industry.title} {...industry} />
          ))}
        </div>
      </div>
    </section>
  );
}