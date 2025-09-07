import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ArrowLeft, Edit, Trash2, ToggleLeft, ToggleRight } from 'lucide-react';

interface Vehicle {
  id: string;
  name: string;
  category: string;
  description: string;
  sale_price: number;
  available: boolean;
  specifications: any;
  images: string[];
  created_at: string;
  updated_at: string;
}

interface VehicleDetailsProps {
  vehicleId: string;
  onBack: () => void;
  onEdit: (vehicleId: string) => void;
  onDelete: (vehicleId: string) => void;
}

export default function VehicleDetails({ vehicleId, onBack, onEdit, onDelete }: VehicleDetailsProps) {
  const { toast } = useToast();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadVehicle();
  }, [vehicleId]);

  const loadVehicle = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('vehicles')
      .select('*')
      .eq('id', vehicleId)
      .single();

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de charger le véhicule",
        variant: "destructive",
      });
    } else {
      setVehicle(data);
    }

    setLoading(false);
  };

  const toggleAvailability = async () => {
    if (!vehicle) return;

    const { error } = await supabase
      .from('vehicles')
      .update({ available: !vehicle.available })
      .eq('id', vehicle.id);

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de modifier la disponibilité",
        variant: "destructive",
      });
    } else {
      setVehicle({ ...vehicle, available: !vehicle.available });
      toast({
        title: "Succès",
        description: "Disponibilité mise à jour",
      });
    }
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      'vans': 'Vans',
      'camions': 'Camions',
      'vans_amenage': 'Vans Aménagés'
    };
    return labels[category as keyof typeof labels] || category;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!vehicle) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Véhicule non trouvé</p>
        <Button onClick={onBack} className="mt-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à la liste
        </Button>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={toggleAvailability}
            className="flex items-center gap-2"
          >
            {vehicle.available ? (
              <>
                <ToggleRight className="w-4 h-4" />
                Rendre indisponible
              </>
            ) : (
              <>
                <ToggleLeft className="w-4 h-4" />
                Rendre disponible
              </>
            )}
          </Button>
          <Button variant="outline" onClick={() => onEdit(vehicle.id)}>
            <Edit className="w-4 h-4 mr-2" />
            Modifier
          </Button>
          <Button variant="destructive" onClick={() => onDelete(vehicle.id)}>
            <Trash2 className="w-4 h-4 mr-2" />
            Supprimer
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl flex items-center gap-3">
                {vehicle.name}
                <Badge variant={vehicle.available ? "default" : "secondary"}>
                  {vehicle.available ? 'Disponible' : 'Indisponible'}
                </Badge>
              </CardTitle>
              <CardDescription className="text-lg">
                {getCategoryLabel(vehicle.category)}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {vehicle.images && vehicle.images.length > 0 && (
            <div className="w-full max-w-3xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent>
                  {vehicle.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-64 md:h-96">
                        <img
                          src={image}
                          alt={`${vehicle.name} - Image ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          )}

          {vehicle.description && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {vehicle.description}
              </p>
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold mb-4">Prix de vente</h3>
            <div className="text-center p-6 border rounded-lg bg-primary/5">
              <div className="text-3xl font-bold text-primary">
                {vehicle.sale_price}€
              </div>
              <p className="text-sm text-muted-foreground">Prix de vente</p>
            </div>
          </div>

          {vehicle.specifications && Object.keys(vehicle.specifications).length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Spécifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {vehicle.specifications.dimensions && (
                  <div>
                    <span className="font-medium">Dimensions:</span>
                    <span className="ml-2 text-muted-foreground">
                      {vehicle.specifications.dimensions}
                    </span>
                  </div>
                )}
                {vehicle.specifications.weight && (
                  <div>
                    <span className="font-medium">Poids:</span>
                    <span className="ml-2 text-muted-foreground">
                      {vehicle.specifications.weight}
                    </span>
                  </div>
                )}
                {vehicle.specifications.fuel && (
                  <div>
                    <span className="font-medium">Carburant:</span>
                    <span className="ml-2 text-muted-foreground">
                      {vehicle.specifications.fuel}
                    </span>
                  </div>
                )}
                {vehicle.specifications.capacity && (
                  <div>
                    <span className="font-medium">Capacité:</span>
                    <span className="ml-2 text-muted-foreground">
                      {vehicle.specifications.capacity}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="pt-4 border-t">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Créé le: {new Date(vehicle.created_at).toLocaleDateString('fr-FR')}</span>
              <span>Modifié le: {new Date(vehicle.updated_at).toLocaleDateString('fr-FR')}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}