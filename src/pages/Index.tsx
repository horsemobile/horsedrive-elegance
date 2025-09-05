import Navigation from '@/components/ui/navigation';
import { HeroCarousel } from '@/components/ui/hero-carousel';
import { VehicleCategories } from '@/components/ui/vehicle-categories';
import { StatsSection } from '@/components/ui/stats-section';
import { Testimonials } from '@/components/ui/testimonials';
import { FloatingCTA } from '@/components/ui/floating-cta';
import Footer from '@/components/ui/footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroCarousel />
        <VehicleCategories />
        <StatsSection />
        <Testimonials />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
