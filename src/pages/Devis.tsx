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

const Devis = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  // Removed useVehicles hook as we no longer need it
  
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [vehicleName, setVehicleName] = useState<string>('');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Debug logging
  console.log('Selected category:', selectedCategory);
  console.log('Vehicle name:', vehicleName);

  // Pre-select category from URL parameter if vehicle ID is provided
  useEffect(() => {
    const vehicleId = searchParams.get('vehicle');
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
    // We could potentially fetch vehicle name from ID if needed in the future
  }, [searchParams]);

  const getVehicleInfo = () => {
    if (!vehicleName || !selectedCategory) return null;
    return {
      name: vehicleName,
      category: selectedCategory
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      if (!vehicleName || !selectedCategory || !customerName || !customerEmail) {
        toast({
          title: t('order.form.error.title'),
          description: t('order.form.validation.required'),
          variant: "destructive",
        });
        return;
      }

      // For custom vehicle orders, we don't have a predefined price
      const { error } = await supabase
        .from('orders')
        .insert({
          vehicle_id: null, // No specific vehicle ID since it's a custom request
          customer_name: customerName,
          customer_email: customerEmail,
          customer_phone: customerPhone,
          delivery_date: deliveryDate || null,
          purchase_price: null, // Will be determined later
          message: `Catégorie: ${selectedCategory}\nVéhicule demandé: ${vehicleName}\n\n${message}`,
          status: 'pending'
        });

      if (error) {
        throw error;
      }

      toast({
        title: t('order.form.success.title'),
        description: t('order.form.success.description'),
      });

      // Reset form
      setCustomerName('');
      setCustomerEmail('');
      setCustomerPhone('');
      setDeliveryDate('');
      setMessage('');
      if (!searchParams.get('category')) {
        setSelectedCategory('');
        setVehicleName('');
      }

    } catch (error) {
      toast({
        title: t('order.form.error.title'),
        description: t('order.form.error.description'),
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('order.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('order.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Calculator className="h-8 w-8 mx-auto text-primary mb-4" />
                <CardTitle>{t('order.features.transparent.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('order.features.transparent.description')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-8 w-8 mx-auto text-primary mb-4" />
                <CardTitle>{t('order.features.delivery.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('order.features.delivery.description')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <FileText className="h-8 w-8 mx-auto text-primary mb-4" />
                <CardTitle>{t('order.features.service.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('order.features.service.description')}
                </p>
              </CardContent>
            </Card>
          </div>

          <form onSubmit={handleSubmit}>
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle>{t('order.form.title')}</CardTitle>
                <CardDescription>
                  {t('order.form.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Vehicle Selection */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">{t('order.form.vehicle.title')}</h3>
                  
                  {/* Category Selection */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">{t('order.form.vehicle.category')}</Label>
                      <Select value={selectedCategory} onValueChange={(value) => {
                        setSelectedCategory(value);
                        setVehicleName(''); // Reset vehicle name when category changes
                      }}>
                        <SelectTrigger>
                          <SelectValue placeholder={t('order.form.vehicle.categoryPlaceholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vans">{t('order.form.vehicle.categories.vans')}</SelectItem>
                          <SelectItem value="camions">{t('order.form.vehicle.categories.camions')}</SelectItem>
                          <SelectItem value="vans_amenage">{t('order.form.vehicle.categories.vans_amenage')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Vehicle Name Input */}
                    <div className="space-y-2">
                      <Label htmlFor="vehicleName">{t('order.form.vehicle.name')}</Label>
                      <Input 
                        id="vehicleName"
                        value={vehicleName}
                        onChange={(e) => setVehicleName(e.target.value)}
                        placeholder={t('order.form.vehicle.namePlaceholder')}
                        required
                      />
                      <p className="text-sm text-muted-foreground">
                        {t('order.form.vehicle.nameDescription')}
                      </p>
                    </div>
                  </div>
                  
                  {getVehicleInfo() && (
                    <div className="mt-4 p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold">{t('order.form.vehicle.summary')}</h4>
                      <p className="text-sm text-muted-foreground">
                        <strong>{t('order.form.vehicle.category').replace(' *', '')} :</strong> {t(`order.form.vehicle.categories.${selectedCategory}`)}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>{t('order.form.vehicle.name').replace(' *', '')} :</strong> {vehicleName}
                      </p>
                      <div className="mt-2 text-sm text-primary">
                        {t('order.form.vehicle.customPrice')}
                      </div>
                    </div>
                  )}
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">{t('order.form.contact.title')}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="customerName">{t('order.form.contact.name')}</Label>
                      <Input 
                        id="customerName" 
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder={t('order.form.contact.namePlaceholder')} 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('order.form.contact.email')}</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        placeholder={t('order.form.contact.emailPlaceholder')} 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('order.form.contact.phone')}</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder={t('order.form.contact.phonePlaceholder')} 
                      />
                    </div>
                  </div>
                </div>

                {/* Delivery Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">{t('order.form.delivery.title')}</h3>
                  <div className="space-y-2">
                    <Label htmlFor="deliveryDate">{t('order.form.delivery.date')}</Label>
                    <Input 
                      id="deliveryDate" 
                      type="date" 
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                    />
                    <p className="text-sm text-muted-foreground">
                      {t('order.form.delivery.dateNote')}
                    </p>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">{t('order.form.message.title')}</h3>
                  <div className="space-y-2">
                    <Label htmlFor="message">
                      {t('order.form.message.label')}
                    </Label>
                    <Textarea 
                      id="message" 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t('order.form.message.placeholder')}
                      className="min-h-32"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={submitting}>
                  {submitting ? t('order.form.submitting') : t('order.form.submit')}
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