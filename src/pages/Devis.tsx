import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { FloatingCTA } from '@/components/ui/floating-cta';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, FileText, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useVehicles, Vehicle } from '@/hooks/useVehicles';

const Devis = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const { vehicles } = useVehicles();
  
  const [selectedVehicle, setSelectedVehicle] = useState<string>('');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Pre-select vehicle from URL parameter
  useEffect(() => {
    const vehicleId = searchParams.get('vehicle');
    if (vehicleId) {
      setSelectedVehicle(vehicleId);
    }
  }, [searchParams]);

  const getSelectedVehicleInfo = (): Vehicle | null => {
    return vehicles.find(v => v.id === selectedVehicle) || null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!selectedVehicle || !customerName || !customerEmail) {
        toast({
          title: "Erreur",
          description: "Veuillez remplir tous les champs obligatoires",
          variant: "destructive",
        });
        return;
      }

      const selectedVehicleInfo = getSelectedVehicleInfo();
      const purchasePrice = selectedVehicleInfo?.sale_price || 0;

      const { error } = await supabase
        .from('orders')
        .insert({
          vehicle_id: selectedVehicle,
          customer_name: customerName,
          customer_email: customerEmail,
          customer_phone: customerPhone,
          delivery_date: deliveryDate || null,
          purchase_price: purchasePrice,
          message: message,
          status: 'pending'
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Commande envoyée",
        description: "Votre commande a été envoyée avec succès. Nous vous recontacterons rapidement.",
      });

      // Reset form
      setCustomerName('');
      setCustomerEmail('');
      setCustomerPhone('');
      setDeliveryDate('');
      setMessage('');
      if (!searchParams.get('vehicle')) {
        setSelectedVehicle('');
      }

    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre commande",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Commander un véhicule</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Commandez directement votre véhicule professionnel. Nous vous accompagnons dans votre achat.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Calculator className="h-8 w-8 mx-auto text-primary mb-4" />
                <CardTitle>Prix transparents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tous nos prix sont affichés clairement, sans frais cachés
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-8 w-8 mx-auto text-primary mb-4" />
                <CardTitle>Livraison rapide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Livraison dans les meilleurs délais partout en Europe
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <FileText className="h-8 w-8 mx-auto text-primary mb-4" />
                <CardTitle>Service complet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Accompagnement complet de l'achat à la livraison
                </p>
              </CardContent>
            </Card>
          </div>

          <form onSubmit={handleSubmit}>
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle>Commande de véhicule</CardTitle>
                <CardDescription>
                  Remplissez ce formulaire pour commander votre véhicule
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Vehicle Selection */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Véhicule</h3>
                  <div className="space-y-2">
                    <Label htmlFor="vehicle">Sélectionnez un véhicule *</Label>
                    <Select value={selectedVehicle} onValueChange={setSelectedVehicle}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisissez un véhicule" />
                      </SelectTrigger>
                      <SelectContent>
                        {vehicles.map((vehicle) => (
                          <SelectItem key={vehicle.id} value={vehicle.id}>
                            {vehicle.name} - {vehicle.sale_price}€
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {getSelectedVehicleInfo() && (
                    <div className="mt-4 p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold">{getSelectedVehicleInfo()?.name}</h4>
                      <p className="text-sm text-muted-foreground">{getSelectedVehicleInfo()?.description}</p>
                      <div className="mt-2 text-lg font-bold text-primary">
                        Prix: {getSelectedVehicleInfo()?.sale_price}€
                      </div>
                    </div>
                  )}
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Informations de contact</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="customerName">Nom complet *</Label>
                      <Input 
                        id="customerName" 
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Votre nom complet" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        placeholder="votre@email.com" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="+33 1 23 45 67 89" 
                      />
                    </div>
                  </div>
                </div>

                {/* Delivery Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Livraison</h3>
                  <div className="space-y-2">
                    <Label htmlFor="deliveryDate">Date de livraison souhaitée</Label>
                    <Input 
                      id="deliveryDate" 
                      type="date" 
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                    />
                    <p className="text-sm text-muted-foreground">
                      Cette date est indicative, nous vous confirmerons la date exacte
                    </p>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Message</h3>
                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Informations complémentaires
                    </Label>
                    <Textarea 
                      id="message" 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Décrivez vos besoins spécifiques..."
                      className="min-h-32"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={loading}>
                  {loading ? 'Envoi en cours...' : 'Envoyer la commande'}
                </Button>
              </CardContent>
            </Card>
          </form>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Devis;