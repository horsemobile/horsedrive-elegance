import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { FloatingCTA } from '@/components/ui/floating-cta';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Truck, Zap, Shield, Heart, Star, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import categoryVans from '@/assets/category-vans.jpg';

const Vans = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">{t('vans.hero.badge')}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('vans.hero.title')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t('vans.hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/devis">
                    <Truck className="mr-2 h-5 w-5" />
                    {t('common.requestQuote')}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">
                    {t('common.contactUs')}
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={categoryVans} 
                alt={t('vans.hero.imageAlt')} 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Les avantages de nos vans équestres
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Conçus pour la praticité quotidienne tout en préservant le bien-être de vos chevaux.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-8 w-8 mx-auto text-primary mb-4" />
                <CardTitle>Maniabilité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Facile à conduire et à manœuvrer, idéal pour tous types de trajets
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-8 w-8 mx-auto text-primary mb-4" />
                <CardTitle>Sécurité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Équipements de sécurité adaptés pour protéger vos chevaux
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="h-8 w-8 mx-auto text-primary mb-4" />
                <CardTitle>Confort</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Aménagement pensé pour le bien-être et la tranquillité
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Star className="h-8 w-8 mx-auto text-primary mb-4" />
                <CardTitle>Polyvalence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Adapté à tous vos besoins, du quotidien aux sorties spéciales
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre Gamme de Vans
            </h2>
            <p className="text-lg text-muted-foreground">
              Des solutions adaptées à chaque cavalier et chaque budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Van 1 Cheval</CardTitle>
                <CardDescription>Parfait pour le cavalier individuel</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Capacité : 1 cheval</li>
                  <li>• Compartiment sellerie</li>
                  <li>• Facilité de conduite</li>
                  <li>• Économique à l'usage</li>
                </ul>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold">À partir de 45 000€</span>
                </div>
                <Button asChild className="w-full">
                  <Link to="/devis">
                    Demander un Devis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="ring-2 ring-primary">
              <CardHeader>
                <Badge className="w-fit mb-2">Le Plus Populaire</Badge>
                <CardTitle>Van 2 Chevaux</CardTitle>
                <CardDescription>Le choix polyvalent par excellence</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Capacité : 2 chevaux</li>
                  <li>• Grande sellerie</li>
                  <li>• Options de confort</li>
                  <li>• Modularité optimale</li>
                </ul>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold">À partir de 65 000€</span>
                </div>
                <Button asChild className="w-full">
                  <Link to="/devis">
                    Demander un Devis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Van 3 Chevaux</CardTitle>
                <CardDescription>Pour les groupes et professionnels</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Capacité : 3 chevaux</li>
                  <li>• Espace de rangement XXL</li>
                  <li>• Options premium disponibles</li>
                  <li>• Idéal pour l'enseignement</li>
                </ul>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold">À partir de 85 000€</span>
                </div>
                <Button asChild className="w-full">
                  <Link to="/devis">
                    Demander un Devis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Options Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Options et Équipements
            </h2>
            <p className="text-lg text-muted-foreground">
              Personnalisez votre van selon vos besoins spécifiques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Confort Chevaux</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Sol en caoutchouc antidérapant</li>
                  <li>• Ventilation naturelle ou forcée</li>
                  <li>• Éclairage LED</li>
                  <li>• Barres de charge rembourrées</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sellerie & Rangement</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Porte-selles pivotants</li>
                  <li>• Coffres de rangement étanches</li>
                  <li>• Porte-filets et licols</li>
                  <li>• Point d'eau intégré</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sécurité & Pratique</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Caméra de surveillance</li>
                  <li>• Rampe d'accès électrique</li>
                  <li>• Pneus renforcés</li>
                  <li>• Stabilisateurs automatiques</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trouvez le van équestre qui vous correspond
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Nos experts vous accompagnent dans le choix de votre véhicule idéal
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/devis">
                    Demander un Devis Gratuit
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to="/contact">
                    Voir nos Modèles
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Vans;