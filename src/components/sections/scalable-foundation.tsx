import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

// A reusable component for each feature item to keep the main component clean.
const FeatureItem = ({ title, description }: { title: string; description: string }) => (
  <div>
    <h4 className="text-lg font-medium text-foreground">{title}</h4>
    <p className="mt-2 text-base text-muted-foreground">{description}</p>
  </div>
);

const ScalableFoundation = () => {
    // Data for the features, making it easy to manage and render.
    const features = [
        {
            title: "Opinionated data primitives",
            description: "Represent everything about your business and customers, from products to org structures, in a clean, customer-centric data model."
        },
        {
            title: "Advanced data transformation",
            description: "Combine and transform static and time-series data into meaningful, high-fidelity metrics using a low-code interface."
        },
        {
            title: "Deeply custom objects",
            description: "Freely customize object names and properties. Show different object configurations depending on user role and customer segment."
        },
        {
            title: "Granular access control",
            description: "Grant access by user role and team all the way from entire modules and capabilities to individual object properties."
        }
    ];

    return (
        <section className="bg-background py-20">
            <div className="container mx-auto px-6">
                <div className="mx-auto max-w-[700px] text-center">
                    <h2 className="text-[32px] font-semibold leading-[38.4px] tracking-tight text-muted-foreground sm:text-5xl sm:leading-[52.8px]">
                        Specialized tools.
                    </h2>
                    <h2 className="mt-2 text-[32px] font-semibold leading-[38.4px] tracking-tight text-foreground sm:text-5xl sm:leading-[52.8px]">
                        Scalable foundation.
                    </h2>
                    <p className="mt-6 text-lg text-foreground">
                        Build your business on a comprehensive, extensible data layer while providing each team with an intuitive everyday tool tailored to their needs.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-[900px] sm:mt-20">
                    <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-[90px] sm:gap-y-[60px]">
                        {features.map((feature) => (
                          <FeatureItem key={feature.title} title={feature.title} description={feature.description} />
                        ))}
                    </div>
                </div>

                <div className="mt-16 flex justify-center sm:mt-20">
                    <Link
                        href="https://www.planhat.com/platform"
                        className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                        Explore the platform
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ScalableFoundation;