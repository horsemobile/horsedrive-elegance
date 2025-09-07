import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import VehiclesList from '@/components/admin/VehiclesList';
import VehicleForm from '@/components/admin/VehicleForm';
import VehicleDetails from '@/components/admin/VehicleDetails';
import BookingDetails from '@/components/admin/BookingDetails';

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
  created_at: string;
  updated_at: string;
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

  // Modal states
  const [showVehicleForm, setShowVehicleForm] = useState(false);
  const [showVehicleDetails, setShowVehicleDetails] = useState(false);
  const [showBookingDetails, setShowBookingDetails] = useState(false);
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | undefined>();
  const [selectedBookingId, setSelectedBookingId] = useState<string | undefined>();
  const [vehicleToDelete, setVehicleToDelete] = useState<string | null>(null);

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

  const handleAddVehicle = () => {
    setSelectedVehicleId(undefined);
    setShowVehicleForm(true);
  };

  const handleEditVehicle = (vehicleId: string) => {
    setSelectedVehicleId(vehicleId);
    setShowVehicleForm(true);
  };

  const handleViewVehicle = (vehicleId: string) => {
    setSelectedVehicleId(vehicleId);
    setShowVehicleDetails(true);
  };

  const handleDeleteVehicle = async () => {
    if (!vehicleToDelete) return;

    const { error } = await supabase
      .from('vehicles')
      .delete()
      .eq('id', vehicleToDelete);

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de supprimer le véhicule",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Succès",
        description: "Véhicule supprimé avec succès",
      });
      fetchData();
    }

    setVehicleToDelete(null);
  };

  const handleViewBooking = (bookingId: string) => {
    setSelectedBookingId(bookingId);
    setShowBookingDetails(true);
  };

  const closeModals = () => {
    setShowVehicleForm(false);
    setShowVehicleDetails(false);
    setShowBookingDetails(false);
    setSelectedVehicleId(undefined);
    setSelectedBookingId(undefined);
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
            <VehiclesList
              vehicles={vehicles}
              onAdd={handleAddVehicle}
              onEdit={handleEditVehicle}
              onView={handleViewVehicle}
              onDelete={(id) => setVehicleToDelete(id)}
            />
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Gestion des réservations</h2>
              
              <div className="grid gap-4">
                {bookings.map((booking) => (
                  <Card key={booking.id} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardHeader onClick={() => handleViewBooking(booking.id)}>
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
                    <CardContent onClick={() => handleViewBooking(booking.id)}>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <span className="font-medium">Période:</span> {' '}
                          {new Date(booking.start_date).toLocaleDateString('fr-FR')} - {' '}
                          {new Date(booking.end_date).toLocaleDateString('fr-FR')}
                        </div>
                        <div>
                          <span className="font-medium">Prix total:</span> {booking.total_price}€
                        </div>
                      </div>
                      
                      <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
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
            </div>
          </TabsContent>
        </Tabs>

        {/* Vehicle Form Dialog */}
        <Dialog open={showVehicleForm} onOpenChange={setShowVehicleForm}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <VehicleForm
              vehicleId={selectedVehicleId}
              onClose={closeModals}
              onSave={() => {
                fetchData();
                closeModals();
              }}
            />
          </DialogContent>
        </Dialog>

        {/* Vehicle Details Dialog */}
        <Dialog open={showVehicleDetails} onOpenChange={setShowVehicleDetails}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedVehicleId && (
              <VehicleDetails
                vehicleId={selectedVehicleId}
                onBack={closeModals}
                onEdit={(id) => {
                  setShowVehicleDetails(false);
                  handleEditVehicle(id);
                }}
                onDelete={(id) => {
                  setShowVehicleDetails(false);
                  setVehicleToDelete(id);
                }}
              />
            )}
          </DialogContent>
        </Dialog>

        {/* Booking Details Dialog */}
        <Dialog open={showBookingDetails} onOpenChange={setShowBookingDetails}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedBookingId && (
              <BookingDetails
                bookingId={selectedBookingId}
                onBack={closeModals}
              />
            )}
          </DialogContent>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <AlertDialog open={!!vehicleToDelete} onOpenChange={() => setVehicleToDelete(null)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Confirmer la suppression</AlertDialogTitle>
              <AlertDialogDescription>
                Êtes-vous sûr de vouloir supprimer ce véhicule ? Cette action est irréversible.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Annuler</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteVehicle}>
                Supprimer
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </main>
    </div>
  );
};

export default Admin;