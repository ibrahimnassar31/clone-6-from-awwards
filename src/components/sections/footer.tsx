import React from 'react';
import Image from 'next/image';

interface FooterLink {
  text: string;
  href: string;
}

interface LinkColumnProps {
  title: string;
  links: FooterLink[];
}

const PlanhatLogo = () => (
  <svg
    width="90"
    height="20"
    viewBox="0 0 90 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_footer_logo)">
      <path
        d="M26.9731 7.21875L29.352 0.0410156H33.1538L29.0791 11.7588L24.5097 0.0410156H28.4555L26.9731 4.542V7.21875Z"
        fill="#1A1A1A"
      ></path>
      <path
        d="M39.6963 8.89551C39.6963 10.3721 39.2617 11.2383 38.3926 11.2383C37.5234 11.2383 37.0889 10.3721 37.0889 8.89551V0.0410156H34.4844V9.12988C34.4844 11.9746 35.8672 13.918 38.3926 13.918C40.918 13.918 42.3008 11.9746 42.3008 9.12988V0.0410156H39.6963V8.89551Z"
        fill="#1A1A1A"
      ></path>
      <path
        d="M48.7842 8.89551C48.7842 10.3721 48.3496 11.2383 47.4805 11.2383C46.6113 11.2383 46.1768 10.3721 46.1768 8.89551V0.0410156H43.5723V9.12988C43.5723 11.9746 44.9551 13.918 47.4805 13.918C50.0059 13.918 51.3887 11.9746 51.3887 9.12988V0.0410156H48.7842V8.89551Z"
        fill="#1A1A1A"
      ></path>
      <path
        d="M58.749 0.0410156H55.4326V13.7891H58.749V0.0410156Z"
        fill="#1A1A1A"
      ></path>
      <path
        d="M60.6719 3.39355V0.0410156H67.5859V3.39355H64.1289V13.7891H60.6719V3.39355H60.6719Z"
        fill="#1A1A1A"
      ></path>
      <path
        d="M89.7028 3.51172L87.4186 11.7588L82.1627 0.0410156H86.4254L87.2154 3.20898L87.4186 3.51172H87.6217L87.8248 3.20898L88.6148 0.0410156H92.8775L87.6217 11.7588L85.3375 3.51172H89.7028Z"
        fill="#1A1A1A"
      ></path>
      <path
        d="M74.4552 13.918C77.6749 13.918 79.4454 11.4111 79.4454 6.97949C79.4454 2.54785 77.6749 0.0410156 74.4552 0.0410156H68.8038V13.7891H72.1934V11.2383H73.0851C73.4933 12.8301 74.4552 13.918 76.0128 13.918H74.4552ZM72.1934 3.39355H74.1417C75.545 3.39355 76.0401 4.542 76.0401 6.97949C76.0401 9.41699 75.545 10.5654 74.1417 10.5654H72.1934V3.39355Z"
        fill="#1A1A1A"
      ></path>
      <path
        d="M17.8427 10C17.8427 14.4183 14.261 18 9.84269 18C5.42441 18 1.84269 14.4183 1.84269 10C1.84269 5.58172 5.42441 2 9.84269 2C14.261 2 17.8427 5.58172 17.8427 10Z"
        fill="#E85D00"
      ></path>
      <path
        d="M9.84277 15.2C12.7036 15.2 15.0428 12.8608 15.0428 10C15.0428 7.13919 12.7036 4.8 9.84277 4.8C6.98197 4.8 4.64277 7.13919 4.64277 10C4.64277 12.8608 6.98197 15.2 9.84277 15.2Z"
        fill="#1A1A1A"
      ></path>
      <path
        d="M9.84244 19.5C4.67387 19.5 0.5 15.3261 0.5 10.1576C0.5 5.01251 4.64917 0.842438 9.79424 0.842438C14.9393 0.842438 19.1132 4.98801 19.1132 10.1576C19.1132 12.2741 18.3971 14.2662 17.2001 15.8458C15.9189 17.5348 14.1203 18.7844 12.0673 19.3149C11.396 19.4939 10.6406 19.5 9.84244 19.5ZM9.84244 3.15756C5.93291 3.15756 2.78508 6.30539 2.78508 10.1576C2.78508 14.0097 5.93291 17.1576 9.84244 17.1576C13.752 17.1576 16.8424 14.0344 16.8424 10.1576C16.8424 6.28073 13.7273 3.15756 9.84244 3.15756Z"
        fill="#1A1A1A"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_footer_logo">
        <rect width="90" height="20" fill="white"></rect>
      </clipPath>
    </defs>
  </svg>
);

const linkData: LinkColumnProps[] = [
  {
    title: 'Solutions',
    links: [
      { text: 'Overview', href: 'https://www.planhat.com/' },
      { text: 'CRM', href: 'https://www.planhat.com/' },
      { text: 'PSA', href: 'https://www.planhat.com/service-delivery' },
      { text: 'For Customer Success', href: 'https://www.planhat.com/csp' },
      { text: 'Cisco CX Specialization', href: 'https://www.planhat.com/cisco' },
      { text: 'Philanthropy', href: 'https://www.planhat.com/all-for-one' },
      { text: 'AI Deployment', href: 'https://www.planhat.com/adp' },
    ],
  },
  {
    title: 'Platform',
    links: [
      { text: 'Features', href: 'https://www.planhat.com/features' },
      { text: 'Views', href: 'https://www.planhat.com/platform#views' },
      { text: 'Workflows', href: 'https://www.planhat.com/platform#workflows' },
      { text: 'Metrics', href: 'https://www.planhat.com/platform#metrics' },
      { text: 'Automations', href: 'https://www.planhat.com/platform#automations' },
      { text: 'Integrations', href: 'https://www.planhat.com/platform#integrations' },
      { text: 'Changelog', href: 'https://www.planhat.com/changelog' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { text: 'Pricing', href: 'https://www.planhat.com/pricing' },
      { text: 'Editorial', href: 'https://www.planhat.com/editorial' },
      { text: 'Webinars', href: 'https://www.planhat.com/events' },
      { text: 'Planhat Open', href: 'https://www.planhat.com/open' },
      { text: 'Help Center', href: 'https://help.planhat.com/en/' },
      { text: 'Developers', href: 'https://www.planhat.com/developers' },
      { text: 'RFP Template', href: 'https://www.planhat.com/rfp' },
      { text: 'Security', href: 'https://www.planhat.com/security' },
    ],
  },
  {
    title: 'Customers',
    links: [
      { text: 'Impact Studies', href: 'https://www.planhat.com/impact-studies' },
      { text: 'Software', href: 'https://www.planhat.com/industries/software' },
      { text: 'Business Services', href: 'https://www.planhat.com/industries/business-services' },
      { text: 'Connected Businesses', href: 'https://www.planhat.com/industries/connected-businesses' },
      { text: 'Financial Services', href: 'https://www.planhat.com/industries/financial-services' },
      { text: 'Healthcare & Life Sciences', href: 'https://www.planhat.com/industries/healthcare-life-sciences' },
      { text: 'IT Services', href: 'https://www.planhat.com/industries/it-services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { text: 'About', href: 'https://www.planhat.com/about' },
      { text: 'Careers', href: 'https://www.planhat.com/careers' },
      { text: 'Press', href: 'https://www.planhat.com/press' },
      { text: 'Partnerships', href: 'https://www.planhat.com/partners' },
      { text: 'Events', href: 'https://www.planhat.com/events' },
      { text: 'Contact', href: 'https://www.planhat.com/contact' },
      { text: 'Legal', href: 'https://www.planhat.com/legal' },
    ],
  },
];

const FooterLinkColumn = ({ title, links }: LinkColumnProps) => (
  <div className="flex flex-col gap-4">
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
);

const SecurityBadges = () => (
  <div className="flex gap-4">
    <div className="w-[60px] h-[60px] bg-gray-200 rounded-lg" />
    <div className="w-[60px] h-[60px] bg-gray-200 rounded-lg" />
    <div className="w-[60px] h-[60px] bg-gray-200 rounded-lg" />
    <div className="w-[60px] h-[60px] bg-gray-200 rounded-lg" />
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[#f8f9fa] text-[#1a1a1a] font-body py-16 px-5 sm:px-8 md:px-10 md:py-20">
      <div className="max-w-[1200px] mx-auto flex flex-col">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="flex-shrink-0 w-full lg:w-auto lg:max-w-sm flex flex-col gap-6">
            <div className="relative w-full h-auto aspect-[1.55] rounded-lg overflow-hidden">
               <Image
                 src="https://framerusercontent.com/images/zg2FCiBZ2ya8VsJfSD7OnCr7wrw.png"
                 alt="Abstract render of a Planhat customer profile"
                 layout="fill"
                 objectFit="cover"
                 className="rounded-lg"
               />
            </div>
            
            <div className="flex items-center gap-3">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fbd45d79-7334-4e9e-8383-ff1e5f53db7c-planhat-com/assets/icons/QjDa6qyw8yQpXnx0ha0NTHiK3Us-1.png"
                alt="G2 Rating"
                width={79}
                height={20}
              />
              <a
                href="https://www.g2.com/products/planhat/reviews"
                className="text-sm text-[#1a1a1a] hover:underline"
              >
                700+ reviews
              </a>
            </div>

            <p className="text-base text-[#1a1a1a]">
              Thought-leading customer-centric content, direct to your inbox every month.
            </p>

            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email Address*"
                className="w-full px-4 py-3 text-sm border border-[#dedede] rounded-lg bg-white placeholder-[#6B7280] text-[#1a1a1a] focus:ring-primary focus:border-primary"
              />
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="privacy-agree"
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="privacy-agree" className="text-xs text-[#6B7280]">
                  I agree to Planhat processing my personal data in accordance with Planhat's{' '}
                  <a href="https://www.planhat.com/legal/privacy-policy" className="underline hover:text-[#1a1a1a]">
                    Privacy Policy
                  </a>.
                </label>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto sm:self-start bg-[#1a1a1a] text-white font-medium text-sm py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 lg:gap-x-12 xl:gap-x-20">
            {linkData.map((column) => (
              <FooterLinkColumn key={column.title} title={column.title} links={column.links} />
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mt-16 pt-16 border-t border-[#e9e9e9]">
          <div className="flex flex-col gap-5 max-w-xs">
            <a href="https://www.planhat.com/" aria-label="Planhat Homepage">
              <PlanhatLogo />
            </a>
            <p className="text-xs text-[#6B7280]">
              Planhat is built to keep your data safe. We put privacy and security front and centre, so you don’t have to.
            </p>
            <SecurityBadges />
          </div>

          <div className="flex flex-col items-start lg:items-end gap-6 text-xs text-[#6B7280]">
            <p>© 2025 Planhat AB</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a href="https://www.planhat.com/legal/terms-of-service-20230926" className="hover:text-[#1a1a1a]">Terms of Service</a>
              <a href="https://www.planhat.com/legal/privacy-policy" className="hover:text-[#1a1a1a]">Privacy Policy</a>
              <a href="https://www.planhat.com/legal/cookie-policy" className="hover:text-[#1a1a1a]">Cookie Policy</a>
              <a href="https://planhat.servicecheck.io/" className="hover:text-[#1a1a1a]">Status</a>
            </div>
            <div className="flex gap-5">
              <a href="https://www.linkedin.com/company/planhat/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://framerusercontent.com/images/oiq22dPQFENDPM5Y1JDCOIY.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  unoptimized
                />
              </a>
              <a href="https://twitter.com/planhat" target="_blank" rel="noopener noreferrer">
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