import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';

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
}

interface Booking {
  id: string;
  vehicle_id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  start_date: string;
  end_date: string;
  total_price: number;
  status: string;
  message: string;
  created_at: string;
  vehicles: { name: string };
}

const Admin = () => {
  const { user, isAdmin, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate('/auth');
    }
  }, [user, isAdmin, authLoading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchData();
    }
  }, [user, isAdmin]);

  const fetchData = async () => {
    setLoading(true);
    
    // Fetch vehicles
    const { data: vehiclesData, error: vehiclesError } = await supabase
      .from('vehicles')
      .select('*')
      .order('created_at', { ascending: false });

    if (vehiclesError) {
      toast({
        title: "Erreur",
        description: "Impossible de charger les véhicules",
        variant: "destructive",
      });
    } else {
      setVehicles(vehiclesData || []);
    }

    // Fetch bookings
    const { data: bookingsData, error: bookingsError } = await supabase
      .from('bookings')
      .select(`
        *,
        vehicles (name)
      `)
      .order('created_at', { ascending: false });

    if (bookingsError) {
      toast({
        title: "Erreur",
        description: "Impossible de charger les réservations",
        variant: "destructive",
      });
    } else {
      setBookings(bookingsData || []);
    }

    setLoading(false);
  };

  const updateBookingStatus = async (bookingId: string, newStatus: string) => {
    const { error } = await supabase
      .from('bookings')
      .update({ status: newStatus })
      .eq('id', bookingId);

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour la réservation",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Succès",
        description: "Statut de la réservation mis à jour",
      });
      fetchData();
    }
  };

  const toggleVehicleAvailability = async (vehicleId: string, available: boolean) => {
    const { error } = await supabase
      .from('vehicles')
      .update({ available: !available })
      .eq('id', vehicleId);

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de modifier la disponibilité",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Succès",
        description: "Disponibilité du véhicule mise à jour",
      });
      fetchData();
    }
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      'vans': 'Vans',
      'camions': 'Camions',
      'vans_amenage': 'Vans Aménagés',
      'remorques': 'Remorques'
    };
    return labels[category as keyof typeof labels] || category;
  };

  const getStatusColor = (status: string) => {
    const colors = {
      'pending': 'bg-yellow-500',
      'confirmed': 'bg-green-500',
      'cancelled': 'bg-red-500',
      'completed': 'bg-blue-500'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-500';
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Administration - Horse Mobile GMBH</h1>
            <div className="flex gap-4">
              <Button onClick={() => navigate('/')} variant="outline">
                Retour au site
              </Button>
              <Button onClick={() => supabase.auth.signOut()}>
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="vehicles" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="vehicles">Véhicules ({vehicles.length})</TabsTrigger>
            <TabsTrigger value="bookings">Réservations ({bookings.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="vehicles" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Gestion des véhicules</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Ajouter un véhicule
              </Button>
            </div>

            <div className="grid gap-4">
              {vehicles.map((vehicle) => (
                <Card key={vehicle.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2">
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
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => toggleVehicleAvailability(vehicle.id, vehicle.available)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{vehicle.description}</p>
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <h2 className="text-xl font-semibold">Gestion des réservations</h2>

            <div className="grid gap-4">
              {bookings.map((booking) => (
                <Card key={booking.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {booking.customer_name}
                          <Badge className={getStatusColor(booking.status)}>
                            {booking.status}
                          </Badge>
                        </CardTitle>
                        <CardDescription>
                          {booking.vehicles?.name} • {booking.customer_email}
                        </CardDescription>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        {new Date(booking.created_at).toLocaleDateString('fr-FR')}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="font-medium">Période:</span> {' '}
                        {new Date(booking.start_date).toLocaleDateString('fr-FR')} - {' '}
                        {new Date(booking.end_date).toLocaleDateString('fr-FR')}
                      </div>
                      <div>
                        <span className="font-medium">Prix total:</span> {booking.total_price}€
                      </div>
                      {booking.customer_phone && (
                        <div>
                          <span className="font-medium">Téléphone:</span> {booking.customer_phone}
                        </div>
                      )}
                    </div>
                    
                    {booking.message && (
                      <div className="mb-4">
                        <span className="font-medium">Message:</span>
                        <p className="text-sm text-muted-foreground mt-1">{booking.message}</p>
                      </div>
                    )}

                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                        disabled={booking.status === 'confirmed'}
                      >
                        Confirmer
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                        disabled={booking.status === 'cancelled'}
                      >
                        Annuler
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => updateBookingStatus(booking.id, 'completed')}
                        disabled={booking.status === 'completed'}
                      >
                        Terminer
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;