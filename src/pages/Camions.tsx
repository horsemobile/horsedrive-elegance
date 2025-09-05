import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { FloatingCTA } from '@/components/ui/floating-cta';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Truck, Users, Shield, Wrench, Star, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import categoryTrucks from '@/assets/category-trucks.jpg';

const Camions = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">{t('trucks.hero.badge')}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('trucks.hero.title')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t('trucks.hero.description')}
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
                src={categoryTrucks} 
                alt={t('trucks.hero.imageAlt')} 
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
              Pourquoi choisir nos camions équestres ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nos camions équestres combinent innovation, confort et sécurité 
              pour offrir la meilleure expérience de transport à vos chevaux.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-8 w-8 mx-auto text-primary mb-4" />
                <CardTitle>Sécurité Maximale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Systèmes de sécurité avancés et aménagements anti-stress pour vos chevaux
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-8 w-8 mx-auto text-primary mb-4" />
                <CardTitle>Capacité Élevée</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  De 2 à 8 chevaux selon vos besoins, avec espaces de vie intégrés
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Wrench className="h-8 w-8 mx-auto text-primary mb-4" />
                <CardTitle>Sur Mesure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Personnalisation complète selon vos besoins et préférences
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Star className="h-8 w-8 mx-auto text-primary mb-4" />
                <CardTitle>Qualité Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Matériaux haut de gamme et finitions exceptionnelles
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
              Nos Modèles de Camions
            </h2>
            <p className="text-lg text-muted-foreground">
              Une gamme complète pour tous vos besoins de transport équestre
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Camion 2 Chevaux</CardTitle>
                <CardDescription>Idéal pour les sorties locales</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Capacité : 2 chevaux</li>
                  <li>• Compartiment sellerie</li>
                  <li>• Système de ventilation</li>
                  <li>• Sol antidérapant</li>
                </ul>
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
                <CardTitle>Camion 4 Chevaux</CardTitle>
                <CardDescription>Pour les équipes et clubs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Capacité : 4 chevaux</li>
                  <li>• Espace de vie intégré</li>
                  <li>• Cuisine équipée</li>
                  <li>• Toilettes et douche</li>
                </ul>
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
                <CardTitle>Camion 6+ Chevaux</CardTitle>
                <CardDescription>Solution professionnelle</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Capacité : 6 à 8 chevaux</li>
                  <li>• Appartement complet</li>
                  <li>• Garage pour matériel</li>
                  <li>• Options premium</li>
                </ul>
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

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Prêt à découvrir votre camion équestre idéal ?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Contactez nos experts pour une consultation personnalisée
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/devis">
                    Demander un Devis Gratuit
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to="/contact">
                    Prendre Rendez-vous
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

export default Camions;