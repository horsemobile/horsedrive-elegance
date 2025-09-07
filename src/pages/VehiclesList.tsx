import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { FloatingCTA } from '@/components/ui/floating-cta';
import { useVehicles } from '@/hooks/useVehicles';
import { VehicleCard } from '@/components/VehicleCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const VehiclesList = () => {
  const { category } = useParams<{ category: string }>();
  const { vehicles, loading, error } = useVehicles(category);

  const getCategoryInfo = (cat?: string) => {
    const info = {
      'vans': {
        title: 'Nos Vans',
        description: 'Découvrez notre gamme de vans polyvalents et performants',
        badge: 'Vans'
      },
      'camions': {
        title: 'Nos Camions',
        description: 'Une sélection de camions robustes pour tous vos besoins',
        badge: 'Camions'
      },
      'vans_amenage': {
        title: 'Nos Vans Aménagés',
        description: 'Vans aménagés pour vos voyages et aventures',
        badge: 'Vans Aménagés'
      },
      'remorques': {
        title: 'Nos Remorques',
        description: 'Remorques adaptées à tous types de transport',
        badge: 'Remorques'
      }
    };
    
    return info[cat as keyof typeof info] || {
      title: 'Tous nos véhicules',
      description: 'Découvrez toute notre gamme de véhicules',
      badge: 'Véhicules'
    };
  };

  const categoryInfo = getCategoryInfo(category);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4">{categoryInfo.badge}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {categoryInfo.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {categoryInfo.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/devis">
                  Demander un devis
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  Nous contacter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Chargement des véhicules...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500">Erreur: {error}</p>
            </div>
          ) : vehicles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Aucun véhicule disponible pour le moment.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Véhicules disponibles
                </h2>
                <p className="text-lg text-muted-foreground">
                  {vehicles.length} véhicule{vehicles.length > 1 ? 's' : ''} disponible{vehicles.length > 1 ? 's' : ''}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vehicles.map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default VehiclesList;