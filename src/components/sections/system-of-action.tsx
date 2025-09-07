"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const SystemOfAction = () => {
  return (
    <section className="w-full bg-secondary py-20 flex justify-center px-6">
      <div className="w-full max-w-[1200px] grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start justify-center gap-6">
          <h3 className="text-[32px] font-semibold leading-tight text-foreground">
            Your new system of action
          </h3>
          <p className="text-lg text-muted-foreground">
            Act on customers as you analyze them.
          </p>
          <a
            href="#"
            className="group inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background py-3 px-6 text-base font-medium text-foreground transition-transform duration-200 ease-in-out hover:scale-95"
          >
            Request a demo
            <ArrowRight className="h-4 w-4 text-foreground" />
          </a>
        </div>

        <div className="relative">
          <div>
            <Image
              src="https://framerusercontent.com/images/mNI4b5v85O4Y911MZXHdC1fcTN4.png"
              alt="Three layered card view of different Planhat workspaces: Customer Success, Sales and Support."
              width={1240}
              height={800}
              className="w-full h-auto object-contain max-w-[610px]"
            />
          </div>
          
          <div className="-mt-40">
            <Image
              src="https://framerusercontent.com/images/zg2FCiBZ2ya8VsJfSD7OnCr7wrw.png"
              alt="An abstract render of a Planhat customer profile, including timeseries data and interaction records from Jira and Salesforce."
              width={572}
              height={200}
              className="w-full h-auto object-contain max-w-[572px]"
            />
          </div>

          <a
            href="https://www.g2.com/products/planhat/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 left-6 z-10 flex items-center gap-2 rounded-full border border-border bg-white/80 px-4 py-2 text-sm shadow-md backdrop-blur-sm transition-transform hover:scale-105"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.285 7.64136C14.285 7.14364 14.242 6.64364 14.1595 6.16364H7.28495V8.995H11.2335C11.056 9.875 10.5185 10.6364 9.75495 11.1364V13.0114H12.3335C13.621 11.8386 14.285 9.94773 14.285 7.64136Z"
                fill="#4285F4"
              ></path>
              <path
                d="M7.28503 14.5C9.43136 14.5 11.2345 13.7841 12.3336 12.5159L9.75503 10.6409C9.04318 11.1159 8.22503 11.4182 7.28503 11.4182C5.46272 11.4182 3.93136 10.15 3.32863 8.44318H0.655029V10.3818C1.73818 12.6886 4.30318 14.5 7.28503 14.5Z"
                fill="#34A853"
              ></path>
              <path
                d="M3.32864 8.44318C3.24614 8.2 3.20432 7.94545 3.20432 7.68182C3.20432 7.41818 3.24614 7.16364 3.32864 6.92045V4.98182H0.655029C0.247273 5.82727 0 6.73636 0 7.68182C0 8.62727 0.247273 9.53636 0.655029 10.3818L3.32864 8.44318Z"
                fill="#FBBC05"
              ></path>
              <path
                d="M7.28503 3.94545C8.38409 3.94545 9.32454 4.34318 10.0541 5.04318L12.3927 2.76818C11.2314 1.68864 9.43136 1 7.28503 1C4.30318 1 1.73818 2.81136 0.655029 5.11818L3.32863 7.05682C3.93136 5.35 5.46272 3.94545 7.28503 3.94545Z"
                fill="#EA4335"
              ></path>
            </svg>
            <span className="font-medium text-foreground">700+ reviews</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SystemOfAction;