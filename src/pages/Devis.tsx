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

const Devis = () => {
  const { t } = useTranslation();
  
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
              {/* Informations personnelles */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Informations de contact</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom *</Label>
                    <Input id="firstName" placeholder="Votre prénom" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom *</Label>
                    <Input id="lastName" placeholder="Votre nom" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="votre@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input id="phone" type="tel" placeholder="06 12 34 56 78" required />
                  </div>
                </div>
              </div>

              {/* Type de véhicule */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Type de véhicule souhaité</h3>
                <div className="space-y-2">
                  <Label htmlFor="vehicleType">Catégorie *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez le type de véhicule" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="camion-equestre">Camion Équestre</SelectItem>
                      <SelectItem value="van-equestre">Van Équestre</SelectItem>
                      <SelectItem value="van-amenage">Van Aménagé</SelectItem>
                      <SelectItem value="remorque">Remorque</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Spécifications */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Spécifications</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="horsesNumber">Nombre de chevaux</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 cheval</SelectItem>
                        <SelectItem value="2">2 chevaux</SelectItem>
                        <SelectItem value="3">3 chevaux</SelectItem>
                        <SelectItem value="4">4 chevaux</SelectItem>
                        <SelectItem value="5+">5 chevaux ou plus</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget approximatif</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50k-100k">50 000€ - 100 000€</SelectItem>
                        <SelectItem value="100k-150k">100 000€ - 150 000€</SelectItem>
                        <SelectItem value="150k-200k">150 000€ - 200 000€</SelectItem>
                        <SelectItem value="200k+">Plus de 200 000€</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Options */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Options souhaitées</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sellerie" />
                    <Label htmlFor="sellerie">Compartiment sellerie</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="eau" />
                    <Label htmlFor="eau">Réservoir d'eau</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="couchage" />
                    <Label htmlFor="couchage">Espace couchage</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="cuisine" />
                    <Label htmlFor="cuisine">Coin cuisine</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="climatisation" />
                    <Label htmlFor="climatisation">Climatisation</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="eclairage" />
                    <Label htmlFor="eclairage">Éclairage LED</Label>
                  </div>
                </div>
              </div>

              {/* Description du projet */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Description de votre projet</h3>
                <div className="space-y-2">
                  <Label htmlFor="projectDescription">
                    Décrivez-nous votre projet, vos besoins spécifiques et vos contraintes
                  </Label>
                  <Textarea 
                    id="projectDescription" 
                    placeholder="Exemple: Je recherche un van 2 chevaux pour des concours le weekend, avec un petit espace de vie pour les déplacements de plusieurs jours..."
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