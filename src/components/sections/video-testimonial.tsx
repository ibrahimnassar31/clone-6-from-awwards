import { Play } from 'lucide-react';
import Image from 'next/image';

const VideoTestimonial = () => {
  return (
    <section className="bg-background py-20 px-6">
      <div className="container mx-auto">
        <div className="relative w-full aspect-video overflow-hidden rounded-3xl group">
          
          <div className="absolute inset-0 w-full h-full">
            <iframe
              src="https://player.vimeo.com/video/913358090?muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              className="w-full h-full object-cover z-10"
              title="Testimonial from Tracy Shouldice, Trend Micro"
              loading="lazy"
            />
            <Image
              src="https://framerusercontent.com/images/Yssl5Q6ST2TyANeh63Kw2xSzlRg.jpg"
              alt="Tracy Shouldice from Trend Micro sitting on a sofa with a beach view."
              className="absolute inset-0 w-full h-full object-cover"
              width={1920}
              height={1080}
              unoptimized
            />
          </div>

          <a 
            href="https://vimeo.com/913358090"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Play testimonial video from Tracy Shouldice"
            className="absolute inset-0 z-20 flex flex-col justify-between p-4 sm:p-6 md:p-10 bg-black/10 hover:bg-black/20 transition-colors duration-300"
          >
            <div className="self-end max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-black/[.35] backdrop-blur-lg rounded-lg md:rounded-xl p-4 md:p-6 shadow-lg">
              <p className="text-white text-lg sm:text-xl md:text-2xl font-medium leading-snug">
                “I'm already getting calls from people all around the world in different functions who have heard about Planhat and want to get onboard.”
              </p>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 md:gap-5 bg-black/[.35] backdrop-blur-lg rounded-lg md:rounded-xl py-3 px-4 sm:py-4 sm:px-6 max-w-max self-start shadow-lg">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 text-black fill-black ml-1" aria-hidden="true" />
              </div>
              <div>
                <p className="text-white text-sm sm:text-base font-semibold">Tracy Shouldice</p>
                <p className="text-white/80 text-xs sm:text-sm">Director of Customer Success, Trend Micro</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonial;