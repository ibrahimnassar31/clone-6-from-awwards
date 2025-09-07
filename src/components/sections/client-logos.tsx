import Image from "next/image";

const logos = [
  { name: "Trend Micro", src: "https://framerusercontent.com/images/D9vNp2Pfsn7Ju0hXN8ObtoM.svg" },
  { name: "Telia Cygate", src: "https://framerusercontent.com/images/nal11oVFIFxO3nj45REoqLZjdGg.svg" },
  { name: "Anthology", src: "https://framerusercontent.com/images/f44pLu0xVnVenEqGf6HqIb4.svg" },
  { name: "Kickstarter", src: "https://framerusercontent.com/images/WzhnnVWGZGZS68WduAMSyPCB0k.svg" },
  { name: "Nutanix", src: "https://framerusercontent.com/images/OV5Oet0jYDoOEPJ80zVGEUcUyA.svg" },
  { name: "Customer.io", src: "https://framerusercontent.com/images/pO46JBWU4wF9V1IWgC1reYavnU.svg" },
  { name: "Trustpilot", src: "https://framerusercontent.com/images/CyzxnirCNsPzj15c7igmidsbIJI.svg" },
  { name: "Dialpad", src: "https://framerusercontent.com/images/MAh8HAPbGRs3wQ8cuFosT1DOI.svg" },
  { name: "Nasdaq", src: "https://framerusercontent.com/images/d7ski7O0YwtapJj4tUb7IqlNlJw.svg" },
  { name: "Medtronic", src: "https://framerusercontent.com/images/ticPE2xaMGi5Ix68C3hRU6fqKjs.svg" },
];

const ClientLogos = () => {
  return (
    <section className="bg-background">
      <div className="w-full flex-col flex items-center pt-10 pb-20 gap-10">
        <div className="flex flex-col items-center justify-center">
          <p className="text-foreground font-medium text-base text-center leading-normal">
            Industry leaders trust Planhat to grow their revenue
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center content-center gap-y-12 gap-x-10 max-w-[960px] w-full px-6 md:px-0">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center basis-32 shrink-0 h-[34px]">
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt=""
                  fill
                  className="object-contain filter grayscale"
                  sizes="128px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;