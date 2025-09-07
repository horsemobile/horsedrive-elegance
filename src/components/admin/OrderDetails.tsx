import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Calendar, Euro, Mail, Phone, User, Truck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Order {
  id: string;
  vehicle_id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  delivery_date: string;
  purchase_price: number;
  status: string;
  message: string;
  created_at: string;
  vehicles: { name: string; sale_price: number };
}

interface OrderDetailsProps {
  orderId: string;
  onBack: () => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ orderId, onBack }) => {
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchOrderDetails();
  }, [orderId]);

  const fetchOrderDetails = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          vehicles (name, sale_price)
        `)
        .eq('id', orderId)
        .single();

      if (error) throw error;
      setOrder(data);
    } catch (error) {
      console.error('Error fetching order details:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les détails de la commande",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (newStatus: string) => {
    try {
      const { error } = await supabase
        .from('orders')
        .update({ status: newStatus })
        .eq('id', orderId);

      if (error) throw error;

      setOrder(prev => prev ? { ...prev, status: newStatus } : null);
      toast({
        title: "Succès",
        description: "Statut de la commande mis à jour",
      });
    } catch (error) {
      console.error('Error updating order status:', error);
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour le statut",
        variant: "destructive",
      });
    }
  };

  const getStatusColor = (status: string) => {
    const colors = {
      'pending': 'bg-yellow-500',
      'confirmed': 'bg-blue-500',
      'processing': 'bg-orange-500',
      'shipped': 'bg-purple-500',
      'delivered': 'bg-green-500',
      'cancelled': 'bg-red-500'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-500';
  };

  const getStatusLabel = (status: string) => {
    const labels = {
      'pending': 'En attente',
      'confirmed': 'Confirmée',
      'processing': 'En préparation',
      'shipped': 'Expédiée',
      'delivered': 'Livrée',
      'cancelled': 'Annulée'
    };
    return labels[status as keyof typeof labels] || status;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="p-8 text-center">
        <p className="text-muted-foreground">Commande introuvable</p>
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
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
          <div>
            <h2 className="text-2xl font-bold">Détails de la commande</h2>
            <p className="text-muted-foreground">Commande #{order.id.slice(0, 8)}</p>
          </div>
        </div>
        <Badge className={getStatusColor(order.status)}>
          {getStatusLabel(order.status)}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Informations client */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Informations client
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-muted-foreground" />
              <span className="font-medium">{order.customer_name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <span>{order.customer_email}</span>
            </div>
            {order.customer_phone && (
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span>{order.customer_phone}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span>Commande du {new Date(order.created_at).toLocaleDateString('fr-FR')}</span>
            </div>
          </CardContent>
        </Card>

        {/* Informations véhicule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="w-5 h-5" />
              Véhicule commandé
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-medium text-lg">{order.vehicles?.name}</p>
              <p className="text-muted-foreground">Prix de vente: {order.vehicles?.sale_price}€</p>
            </div>
            {order.delivery_date && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span>Livraison souhaitée: {new Date(order.delivery_date).toLocaleDateString('fr-FR')}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Euro className="w-4 h-4 text-muted-foreground" />
              <span className="font-medium">Prix final: {order.purchase_price}€</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Message du client */}
      {order.message && (
        <Card>
          <CardHeader>
            <CardTitle>Message du client</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{order.message}</p>
          </CardContent>
        </Card>
      )}

      {/* Actions de gestion */}
      <Card>
        <CardHeader>
          <CardTitle>Gestion de la commande</CardTitle>
          <CardDescription>
            Mettre à jour le statut de la commande
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Button 
              size="sm" 
              onClick={() => updateOrderStatus('confirmed')}
              disabled={order.status === 'confirmed'}
              variant={order.status === 'confirmed' ? 'secondary' : 'default'}
            >
              Confirmer
            </Button>
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => updateOrderStatus('processing')}
              disabled={order.status === 'processing'}
            >
              En préparation
            </Button>
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => updateOrderStatus('shipped')}
              disabled={order.status === 'shipped'}
            >
              Expédier
            </Button>
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => updateOrderStatus('delivered')}
              disabled={order.status === 'delivered'}
            >
              Marquer comme livré
            </Button>
            <Separator orientation="vertical" className="h-8" />
            <Button 
              size="sm" 
              variant="destructive"
              onClick={() => updateOrderStatus('cancelled')}
              disabled={order.status === 'cancelled'}
            >
              Annuler
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderDetails;