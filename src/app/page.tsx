import Navigation from '@/components/sections/navigation';
import HeroSection from '@/components/sections/hero';
import ClientLogos from '@/components/sections/client-logos';
import PlatformOverview from '@/components/sections/platform-overview';
import UnifiedEcosystem from '@/components/sections/unified-ecosystem';
import TestimonialsCarousel from '@/components/sections/testimonials-carousel';
import VideoTestimonial from '@/components/sections/video-testimonial';
import DataExplorerSection from '@/components/sections/data-explorer';
import PlatformFeatures from '@/components/sections/platform-features';
import ScalableFoundation from '@/components/sections/scalable-foundation';
import IndustrySolutions from '@/components/sections/industry-solutions';
import ImpactStatsSection from '@/components/sections/impact-stats';
import SystemOfAction from '@/components/sections/system-of-action';
import NewsletterSignup from '@/components/sections/newsletter-signup';
import Footer from '@/components/sections/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-[72px]">
        <HeroSection />
      </div>
      
      <ClientLogos />
      
      <PlatformOverview />
      
      <UnifiedEcosystem />
      
      <TestimonialsCarousel />
      
      <VideoTestimonial />
      
      <DataExplorerSection />
      
      <PlatformFeatures />
      
      <ScalableFoundation />
      
      <IndustrySolutions />
      
      <ImpactStatsSection />
      
      <SystemOfAction />
      
      <NewsletterSignup />
      
      <Footer />
      
    </main>
  );
}