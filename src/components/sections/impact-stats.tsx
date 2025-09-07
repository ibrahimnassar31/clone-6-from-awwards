import { ArrowRight } from "lucide-react";

const ImpactStatsSection = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="container">
        <div className="grid grid-cols-1 overflow-hidden rounded-lg border border-border bg-card md:grid-cols-2">
          <div className="flex flex-col items-start border-b border-border p-12 md:border-b-0 md:border-r md:p-20">
            <h3 className="font-semibold text-foreground">
              Powering 2.6 million customers.
            </h3>
            <p className="mt-4 text-lg text-muted-foreground">
              See the impact we're making in the world.
            </p>
            <a
              href="https://www.planhat.com/impact-studies"
              className="mt-8 inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              Our impact
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex flex-col items-start p-12 md:p-20">
            <h3 className="font-semibold text-foreground">
              No passengers. We're all crew.
            </h3>
            <p className="mt-4 text-lg text-muted-foreground">
              We've always got missions for the curious and daring.
            </p>
            <a
              href="https://www.planhat.com/careers"
              className="mt-8 inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply now
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStatsSection;