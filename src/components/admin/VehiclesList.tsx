import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Edit, Trash2, Eye, Search } from 'lucide-react';

interface Vehicle {
  id: string;
  name: string;
  category: string;
  description: string;
  price_per_day: number;
  price_per_week: number;
  price_per_month: number;
  available: boolean;
  specifications: any;
  images: string[];
}

interface VehiclesListProps {
  vehicles: Vehicle[];
  onAdd: () => void;
  onEdit: (vehicleId: string) => void;
  onView: (vehicleId: string) => void;
  onDelete: (vehicleId: string) => void;
}

export default function VehiclesList({ vehicles, onAdd, onEdit, onView, onDelete }: VehiclesListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [availabilityFilter, setAvailabilityFilter] = useState('all');

  const getCategoryLabel = (category: string) => {
    const labels = {
      'vans': 'Vans',
      'camions': 'Camions',
      'vans_amenage': 'Vans Aménagés'
    };
    return labels[category as keyof typeof labels] || category;
  };

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || vehicle.category === categoryFilter;
    const matchesAvailability = availabilityFilter === 'all' || 
                               (availabilityFilter === 'available' && vehicle.available) ||
                               (availabilityFilter === 'unavailable' && !vehicle.available);

    return matchesSearch && matchesCategory && matchesAvailability;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <h2 className="text-xl font-semibold">Gestion des véhicules</h2>
        <Button onClick={onAdd} className="whitespace-nowrap">
          <Plus className="w-4 h-4 mr-2" />
          Ajouter un véhicule
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Rechercher un véhicule..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Catégorie" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes les catégories</SelectItem>
            <SelectItem value="vans">Vans</SelectItem>
            <SelectItem value="camions">Camions</SelectItem>
            <SelectItem value="vans_amenage">Vans Aménagés</SelectItem>
          </SelectContent>
        </Select>

        <Select value={availabilityFilter} onValueChange={setAvailabilityFilter}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Disponibilité" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous</SelectItem>
            <SelectItem value="available">Disponibles</SelectItem>
            <SelectItem value="unavailable">Indisponibles</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="text-sm text-muted-foreground">
        {filteredVehicles.length} véhicule{filteredVehicles.length > 1 ? 's' : ''} trouvé{filteredVehicles.length > 1 ? 's' : ''}
      </div>

      <div className="grid gap-4">
        {filteredVehicles.map((vehicle) => (
          <Card key={vehicle.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    {vehicle.name}
                    <Badge variant={vehicle.available ? "default" : "secondary"}>
                      {vehicle.available ? 'Disponible' : 'Indisponible'}
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    {getCategoryLabel(vehicle.category)}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => onView(vehicle.id)}>
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => onEdit(vehicle.id)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => onDelete(vehicle.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                {vehicle.images && vehicle.images.length > 0 && (
                  <div className="w-full md:w-32 h-24 rounded-lg overflow-hidden bg-muted">
                    <img
                      src={vehicle.images[0]}
                      alt={vehicle.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="flex-1 space-y-2">
                  {vehicle.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {vehicle.description}
                    </p>
                  )}
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Jour:</span> {vehicle.price_per_day}€
                    </div>
                    <div>
                      <span className="font-medium">Semaine:</span> {vehicle.price_per_week}€
                    </div>
                    <div>
                      <span className="font-medium">Mois:</span> {vehicle.price_per_month}€
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredVehicles.length === 0 && (
          <Card>
            <CardContent className="py-8">
              <div className="text-center text-muted-foreground">
                <p>Aucun véhicule trouvé</p>
                {searchTerm || categoryFilter !== 'all' || availabilityFilter !== 'all' ? (
                  <p className="text-sm mt-2">Essayez de modifier vos filtres</p>
                ) : (
                  <Button onClick={onAdd} className="mt-4">
                    <Plus className="w-4 h-4 mr-2" />
                    Ajouter le premier véhicule
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}