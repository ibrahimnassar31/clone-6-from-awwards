"use client";

import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <section className="bg-secondary relative overflow-hidden py-[120px]">
      <div className="container relative mx-auto px-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[60px] left-0 right-0 z-0 h-[528px] text-center"
        >
          <div className="font-display text-[80px] font-medium leading-[1.1] -tracking-[1.6px] text-black/[.08]">
            Home to every customer. And opportunity. And conversation. And
            ticket. And click. And action.
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-8">
          <div className="col-span-12 lg:col-span-4">
            <div className="relative z-10 flex flex-col">
              <a
                href="https://www.g2.com/products/planhat/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-6 flex items-center gap-3"
              >
                <div 
                    className="h-[18px] w-[18px]"
                    style={{
                        backgroundColor: 'currentcolor',
                        maskImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M17.64 9.20455C17.64 8.56364 17.58 7.95 17.46 7.36364H9V10.8409H13.8436C13.6336 11.9727 13.0009 12.9273 12.0477 13.5682V15.8182H14.9564C16.6782 14.25 17.64 11.9455 17.64 9.20455Z' fill='black'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 18C11.43 18 13.4673 17.1955 14.9564 15.8182L12.0477 13.5682C11.2432 14.1136 10.2118 14.4545 9 14.4545C6.96273 14.4545 5.22273 13.0364 4.63727 11.1H1.62182V13.4318C3.06545 16.1455 5.82727 18 9 18Z' fill='black'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.63726 11.1C4.42726 10.4864 4.31999 9.82727 4.31999 9.13636C4.31999 8.44545 4.42726 7.78636 4.63726 7.17273V4.84091H1.62181C0.965445 6.13636 0.599991 7.58182 0.599991 9.13636C0.599991 10.6909 0.965445 12.1364 1.62181 13.4318L4.63726 11.1Z' fill='black'/%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 3.81818C10.3655 3.81818 11.5118 4.28182 12.43 5.16818L15.0218 2.57727C13.4673 1.14545 11.43 0.272727 9 0.272727C5.82727 0.272727 3.06545 2.12727 1.62182 4.84091L4.63727 7.17273C5.22273 5.23636 6.96273 3.81818 9 3.81818Z' fill='black'/%3e%3c/svg%3e")`,
                        maskRepeat: 'no-repeat',
                        maskSize: 'contain',
                        maskPosition: 'center',
                }}
                />
                <p className="font-body text-sm font-medium text-muted-foreground">
                  700+ reviews
                </p>
              </a>

              <div className="relative mb-6 w-full overflow-hidden rounded-xl" style={{ aspectRatio: '1.48837 / 1' }}>
                <Image
                  src="https://framerusercontent.com/images/zg2FCiBZ2ya8VsJfSD7OnCr7wrw.png"
                  alt="An abstract render of a Planhat customer profile, including timeseries data and interaction records from Jira and Salesforce."
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <h3 className="font-display mb-4 text-lg font-medium leading-relaxed text-foreground">
                Thought-leading customer-centric content, direct to your inbox
                every month.
              </h3>

              <form className="flex flex-col gap-4">
                <Input
                  type="email"
                  placeholder="Email Address*"
                  className="h-12 rounded-md border-border bg-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="privacy-policy"
                    className="mt-0.5"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                  />
                  <Label
                    htmlFor="privacy-policy"
                    className="font-body text-[13px] font-normal leading-snug text-muted-foreground"
                  >
                    I agree to Planhat processing my personal data in accordance
                    with Planhat's{" "}
                    <a
                      href="https://www.planhat.com/legal/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </Label>
                </div>
                <Button
                  type="submit"
                  className="h-12 self-start rounded-md bg-foreground px-6 text-background hover:bg-foreground/90"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;