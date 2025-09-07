import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Vehicle } from '@/hooks/useVehicles';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const getCategoryLabel = (category: string) => {
    const labels = {
      'vans': 'Van',
      'camions': 'Camion',
      'vans_amenage': 'Van Aménagé',
      'remorques': 'Remorque'
    };
    return labels[category as keyof typeof labels] || category;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getDisplayImage = () => {
    if (vehicle.images && vehicle.images.length > 0) {
      // If we have images stored in the database, use the first one
      return vehicle.images[0];
    }
    
    // Fallback to category-based default images
    const defaultImages = {
      'vans': '/src/assets/category-vans.jpg',
      'camions': '/src/assets/category-trucks.jpg',
      'vans_amenage': '/src/assets/category-van-amenage.jpg',
      'remorques': '/src/assets/category-trailers.jpg'
    };
    
    return defaultImages[vehicle.category as keyof typeof defaultImages] || '/src/assets/category-vans.jpg';
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="aspect-video overflow-hidden">
        <img
          src={getDisplayImage()}
          alt={vehicle.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            // Fallback to a default image if the specified image fails to load
            const target = e.target as HTMLImageElement;
            target.src = '/src/assets/category-vans.jpg';
          }}
        />
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold line-clamp-1">
              {vehicle.name}
            </CardTitle>
            <CardDescription className="flex items-center gap-2 mt-1">
              <Badge variant="secondary">
                {getCategoryLabel(vehicle.category)}
              </Badge>
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {vehicle.description}
        </p>

        {/* Specifications */}
        {vehicle.specifications && Object.keys(vehicle.specifications).length > 0 && (
          <div className="mb-4">
            <div className="grid grid-cols-2 gap-2 text-xs">
              {Object.entries(vehicle.specifications).slice(0, 4).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-muted-foreground capitalize">
                    {key.replace('_', ' ')}:
                  </span>
                  <span className="font-medium">{String(value)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing */}
        <div className="space-y-2 mb-4">
          <div className="grid grid-cols-3 gap-2 text-sm">
            <div className="text-center">
              <div className="text-xs text-muted-foreground">Jour</div>
              <div className="font-semibold text-primary">
                {formatPrice(vehicle.price_per_day)}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-muted-foreground">Semaine</div>
              <div className="font-semibold text-primary">
                {formatPrice(vehicle.price_per_week)}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-muted-foreground">Mois</div>
              <div className="font-semibold text-primary">
                {formatPrice(vehicle.price_per_month)}
              </div>
            </div>
          </div>
        </div>

        <Button asChild className="w-full">
          <Link to={`/devis?vehicle=${vehicle.id}`}>
            Demander un devis
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};