import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ArrowLeft, Phone, Mail, Calendar, Euro, MessageSquare } from 'lucide-react';

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
  vehicles: { name: string; category: string };
}

interface BookingDetailsProps {
  bookingId: string;
  onBack: () => void;
}

export default function BookingDetails({ bookingId, onBack }: BookingDetailsProps) {
  const { toast } = useToast();
  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    loadBooking();
  }, [bookingId]);

  const loadBooking = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('bookings')
      .select(`
        *,
        vehicles (name, category)
      `)
      .eq('id', bookingId)
      .single();

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de charger la réservation",
        variant: "destructive",
      });
    } else {
      setBooking(data);
    }

    setLoading(false);
  };

  const updateStatus = async (newStatus: string) => {
    if (!booking) return;

    setUpdating(true);
    const { error } = await supabase
      .from('bookings')
      .update({ status: newStatus })
      .eq('id', booking.id);

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour le statut",
        variant: "destructive",
      });
    } else {
      setBooking({ ...booking, status: newStatus });
      toast({
        title: "Succès",
        description: "Statut mis à jour avec succès",
      });
    }

    setUpdating(false);
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

  const getStatusLabel = (status: string) => {
    const labels = {
      'pending': 'En attente',
      'confirmed': 'Confirmée',
      'cancelled': 'Annulée',
      'completed': 'Terminée'
    };
    return labels[status as keyof typeof labels] || status;
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

  const calculateDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Réservation non trouvée</p>
        <Button onClick={onBack} className="mt-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour
        </Button>
      </div>
    );
  }

  const duration = calculateDuration(booking.start_date, booking.end_date);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à la liste
        </Button>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Statut:</span>
          <Select 
            value={booking.status} 
            onValueChange={updateStatus}
            disabled={updating}
          >
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">En attente</SelectItem>
              <SelectItem value="confirmed">Confirmée</SelectItem>
              <SelectItem value="cancelled">Annulée</SelectItem>
              <SelectItem value="completed">Terminée</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl flex items-center gap-3">
                Réservation #{booking.id.slice(0, 8)}
                <Badge className={getStatusColor(booking.status)}>
                  {getStatusLabel(booking.status)}
                </Badge>
              </CardTitle>
              <CardDescription className="text-lg">
                {booking.vehicles?.name} • {getCategoryLabel(booking.vehicles?.category || '')}
              </CardDescription>
            </div>
            <div className="text-right text-sm text-muted-foreground">
              Créée le {new Date(booking.created_at).toLocaleDateString('fr-FR')}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Informations client
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <span className="font-medium">Nom:</span>
                  <span className="ml-2">{booking.customer_name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <a 
                    href={`mailto:${booking.customer_email}`}
                    className="text-primary hover:underline"
                  >
                    {booking.customer_email}
                  </a>
                </div>
                {booking.customer_phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <a 
                      href={`tel:${booking.customer_phone}`}
                      className="text-primary hover:underline"
                    >
                      {booking.customer_phone}
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Détails de la réservation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <span className="font-medium">Début:</span>
                  <span className="ml-2">
                    {new Date(booking.start_date).toLocaleDateString('fr-FR')}
                  </span>
                </div>
                <div>
                  <span className="font-medium">Fin:</span>
                  <span className="ml-2">
                    {new Date(booking.end_date).toLocaleDateString('fr-FR')}
                  </span>
                </div>
                <div>
                  <span className="font-medium">Durée:</span>
                  <span className="ml-2">{duration} jour{duration > 1 ? 's' : ''}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Euro className="w-5 h-5" />
                Facturation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">
                {booking.total_price}€
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Total pour {duration} jour{duration > 1 ? 's' : ''}
              </p>
            </CardContent>
          </Card>

          {booking.message && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Message du client
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {booking.message}
                </p>
              </CardContent>
            </Card>
          )}

          <div className="flex gap-3 pt-4 border-t">
            <Button 
              onClick={() => updateStatus('confirmed')}
              disabled={booking.status === 'confirmed' || updating}
              className="flex-1"
            >
              Confirmer la réservation
            </Button>
            <Button 
              variant="outline"
              onClick={() => updateStatus('cancelled')}
              disabled={booking.status === 'cancelled' || updating}
              className="flex-1"
            >
              Annuler la réservation
            </Button>
            <Button 
              variant="outline"
              onClick={() => updateStatus('completed')}
              disabled={booking.status === 'completed' || updating}
              className="flex-1"
            >
              Marquer comme terminée
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}