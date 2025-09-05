import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { FloatingCTA } from '@/components/ui/floating-cta';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calculator, FileText, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Devis = () => {
  const { t } = useTranslation();
  const [vehicleType, setVehicleType] = useState('');
  
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

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>{t('pages.quote.formTitle')}</CardTitle>
              <CardDescription>
                {t('pages.quote.formDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">{t('pages.quote.contactInfo')}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{t('pages.quote.firstName')} *</Label>
                    <Input id="firstName" placeholder={t('pages.quote.firstNamePlaceholder')} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{t('pages.quote.lastName')} *</Label>
                    <Input id="lastName" placeholder={t('pages.quote.lastNamePlaceholder')} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('pages.quote.email')} *</Label>
                    <Input id="email" type="email" placeholder={t('pages.quote.emailPlaceholder')} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('pages.quote.phone')} *</Label>
                    <Input id="phone" type="tel" placeholder={t('pages.quote.phonePlaceholder')} required />
                  </div>
                </div>
              </div>

              {/* Vehicle Type */}
              <div>
                <h3 className="text-lg font-semibold mb-4">{t('pages.quote.vehicleType')}</h3>
                <div className="space-y-2">
                  <Label htmlFor="vehicleType">{t('pages.quote.category')} *</Label>
                  <Select onValueChange={setVehicleType}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('pages.quote.selectVehicleType')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="camion-equestre">{t('pages.quote.equestrianTruck')}</SelectItem>
                      <SelectItem value="van-equestre">{t('pages.quote.equestrianVan')}</SelectItem>
                      <SelectItem value="van-amenage">{t('pages.quote.convertedVan')}</SelectItem>
                      <SelectItem value="remorque">{t('pages.quote.trailer')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="text-lg font-semibold mb-4">{t('pages.quote.specifications')}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Conditional field based on vehicle type */}
                  {vehicleType === 'van-amenage' ? (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="passengers">{t('quote.passengersNumber')}</Label>
                        <Input 
                          id="passengers" 
                          placeholder={t('pages.quote.passengersPlaceholder')} 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="usage">{t('quote.vanUsage')}</Label>
                        <Input 
                          id="usage" 
                          placeholder={t('pages.quote.vanUsagePlaceholder')} 
                        />
                      </div>
                    </>
                  ) : (
                    <div className="space-y-2">
                      <Label htmlFor="horsesNumber">{t('pages.quote.horsesNumber')}</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder={t('pages.quote.selectNumber')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">{t('pages.quote.oneHorse')}</SelectItem>
                          <SelectItem value="2">{t('pages.quote.twoHorses')}</SelectItem>
                          <SelectItem value="3">{t('pages.quote.threeHorses')}</SelectItem>
                          <SelectItem value="4">{t('pages.quote.fourHorses')}</SelectItem>
                          <SelectItem value="5+">{t('pages.quote.fiveOrMoreHorses')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <Label htmlFor="budget">{t('pages.quote.approximateBudget')}</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t('pages.quote.selectBudget')} />
                      </SelectTrigger>
                      <SelectContent>
                        {vehicleType === 'remorque' ? (
                          <>
                            <SelectItem value="4k-15k">{t('pages.quote.budget4k15k')}</SelectItem>
                            <SelectItem value="15k-25k">{t('pages.quote.budget15k25k')}</SelectItem>
                            <SelectItem value="25k-35k">{t('pages.quote.budget25k35k')}</SelectItem>
                            <SelectItem value="35k+">{t('pages.quote.budget35kPlus')}</SelectItem>
                          </>
                        ) : (
                          <>
                            <SelectItem value="35k-50k">{t('pages.quote.budget35k50k')}</SelectItem>
                            <SelectItem value="50k-75k">{t('pages.quote.budget50k75k')}</SelectItem>
                            <SelectItem value="75k-100k">{t('pages.quote.budget75k100k')}</SelectItem>
                            <SelectItem value="100k+">{t('pages.quote.budget100kPlus')}</SelectItem>
                          </>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Options */}
              <div>
                <h3 className="text-lg font-semibold mb-4">{t('pages.quote.desiredOptions')}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="tack-compartment" />
                    <Label htmlFor="tack-compartment">{t('pages.quote.tackCompartment')}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="water-tank" />
                    <Label htmlFor="water-tank">{t('pages.quote.waterTank')}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sleeping-area" />
                    <Label htmlFor="sleeping-area">{t('pages.quote.sleepingArea')}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="kitchen-area" />
                    <Label htmlFor="kitchen-area">{t('pages.quote.kitchenArea')}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="air-conditioning" />
                    <Label htmlFor="air-conditioning">{t('pages.quote.airConditioning')}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="led-lighting" />
                    <Label htmlFor="led-lighting">{t('pages.quote.ledLighting')}</Label>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <h3 className="text-lg font-semibold mb-4">{t('pages.quote.projectDescription')}</h3>
                <div className="space-y-2">
                  <Label htmlFor="projectDescription">
                    {t('pages.quote.projectDescriptionLabel')}
                  </Label>
                  <Textarea 
                    id="projectDescription" 
                    placeholder={t('pages.quote.projectDescriptionPlaceholder')}
                    className="min-h-32"
                  />
                </div>
              </div>

                <Button className="w-full" size="lg">
                  {t('pages.quote.submitQuote')}
                </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Devis;