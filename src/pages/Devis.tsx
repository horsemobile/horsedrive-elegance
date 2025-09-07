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
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
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

  const calculatePrice = (): number => {
    const vehicle = getSelectedVehicleInfo();
    if (!vehicle || !startDate || !endDate) return 0;

    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

    if (days <= 0) return 0;

    // Calculate best price
    if (days >= 30) {
      const months = Math.floor(days / 30);
      const remainingDays = days % 30;
      return (months * vehicle.price_per_month) + (remainingDays * vehicle.price_per_day);
    } else if (days >= 7) {
      const weeks = Math.floor(days / 7);
      const remainingDays = days % 7;
      return (weeks * vehicle.price_per_week) + (remainingDays * vehicle.price_per_day);
    } else {
      return days * vehicle.price_per_day;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!selectedVehicle || !customerName || !customerEmail || !startDate || !endDate) {
        toast({
          title: "Erreur",
          description: "Veuillez remplir tous les champs obligatoires",
          variant: "destructive",
        });
        return;
      }

      const totalPrice = calculatePrice();

      const { error } = await supabase
        .from('bookings')
        .insert({
          vehicle_id: selectedVehicle,
          customer_name: customerName,
          customer_email: customerEmail,
          customer_phone: customerPhone,
          start_date: startDate,
          end_date: endDate,
          total_price: totalPrice,
          message: message,
          status: 'pending'
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Demande envoyée",
        description: "Votre demande de devis a été envoyée avec succès. Nous vous recontacterons rapidement.",
      });

      // Reset form
      setCustomerName('');
      setCustomerEmail('');
      setCustomerPhone('');
      setStartDate('');
      setEndDate('');
      setMessage('');
      if (!searchParams.get('vehicle')) {
        setSelectedVehicle('');
      }

    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre demande",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('pages.quote.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('pages.quote.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Calculator className="h-8 w-8 mx-auto text-primary mb-4" />
                <CardTitle>{t('pages.quote.freeQuote')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('pages.quote.freeDesc')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-8 w-8 mx-auto text-primary mb-4" />
                <CardTitle>{t('pages.quote.fastResponse')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('pages.quote.fastDesc')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <FileText className="h-8 w-8 mx-auto text-primary mb-4" />
                <CardTitle>{t('pages.quote.detailedQuote')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('pages.quote.detailedDesc')}
                </p>
              </CardContent>
            </Card>
          </div>

          <form onSubmit={handleSubmit}>
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle>Demande de réservation</CardTitle>
                <CardDescription>
                  Remplissez ce formulaire pour réserver un véhicule
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
                            {vehicle.name} - {vehicle.price_per_day}€/jour
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {getSelectedVehicleInfo() && (
                    <div className="mt-4 p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold">{getSelectedVehicleInfo()?.name}</h4>
                      <p className="text-sm text-muted-foreground">{getSelectedVehicleInfo()?.description}</p>
                      <div className="grid grid-cols-3 gap-4 mt-2 text-sm">
                        <div>Jour: {getSelectedVehicleInfo()?.price_per_day}€</div>
                        <div>Semaine: {getSelectedVehicleInfo()?.price_per_week}€</div>
                        <div>Mois: {getSelectedVehicleInfo()?.price_per_month}€</div>
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

                {/* Rental Period */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Période de location</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="startDate">Date de début *</Label>
                      <Input 
                        id="startDate" 
                        type="date" 
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="endDate">Date de fin *</Label>
                      <Input 
                        id="endDate" 
                        type="date" 
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required 
                      />
                    </div>
                  </div>
                  
                  {startDate && endDate && getSelectedVehicleInfo() && (
                    <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Prix total estimé:</span>
                        <span className="text-xl font-bold text-primary">
                          {calculatePrice().toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                        </span>
                      </div>
                    </div>
                  )}
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
                  {loading ? 'Envoi en cours...' : 'Envoyer la demande'}
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