import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const UnifiedEcosystem = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6">
          {/* Top part */}
          <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-xl text-center">
            <Image
              src="https://framerusercontent.com/images/cLeTMGiNQswYtfcBbxk0KLDpiY.png"
              alt="The inside of a futuristic-looking glass greenhouse filled with rows of small green plants and some taller green trees."
              layout="fill"
              objectFit="cover"
              className="z-0"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-black/40 z-0" />
            <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 px-4 text-white">
              <h2 className="text-5xl font-semibold leading-tight">
                A unified ecosystem for customer action
              </h2>
              <p className="text-lg text-gray-200">
                Planhat is a customer platform that doubles as both your single
                source of truth and an everyday customer-centric control centre
                for your sales, service and success teams.
              </p>
              <Link
                href="#"
                className="mt-2 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-gray-200"
              >
                Request a demo
              </Link>
            </div>
          </div>

          {/* Bottom part grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Left Card */}
            <div className="relative flex h-[550px] flex-col justify-end overflow-hidden rounded-xl p-8 text-white">
              <Image
                src="https://framerusercontent.com/images/swwJEc9GKgjd1l8QRMRIYuQMb0.png"
                alt="A person reaching out to type on a laptop showing a kanban calendar view of upcoming tasks and workflows."
                layout="fill"
                objectFit="cover"
                className="z-0"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 580px"
              />
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="relative z-10 flex w-full flex-col items-start gap-3">
                <h3 className="text-xl font-semibold">Intuitive yet deep</h3>
                <p className="text-lg max-w-sm">
                  A scalable platform your team can adopt in days.
                </p>
                <Link
                  href="/"
                  className="mt-4 inline-flex items-center gap-2 rounded-md border border-white/50 bg-white/10 px-5 py-2.5 font-medium text-white transition-colors hover:bg-white/20"
                >
                  Discover <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Card */}
            <div className="flex h-[550px] flex-col justify-between rounded-xl bg-secondary p-8">
              <h4 className="text-3xl font-medium leading-snug text-foreground">
                “Just during our first month of using the platform we saved more
                than 100 hours.”
              </h4>
              <div>
                <p className="font-semibold text-foreground">Lasse Thomsen</p>
                <p className="text-sm text-muted-foreground">
                  Head of Commercial Operations, Trustpilot
                </p>
                <Link
                  href="/editorial/trustpilot"
                  className="mt-6 inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Read impact study <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnifiedEcosystem;