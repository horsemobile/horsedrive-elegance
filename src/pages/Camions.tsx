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
              <Badge className="mb-4">{t('trucks.badge')}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('trucks.title')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t('trucks.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/devis">
                    <Truck className="mr-2 h-5 w-5" />
                    {t('trucks.quote_cta')}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">
                    {t('trucks.contact_cta')}
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={categoryTrucks} 
                alt={t('trucks.alt_image')} 
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
              {t('trucks.features.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('trucks.features.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-8 w-8 mx-auto text-primary mb-4" />
                <CardTitle>{t('trucks.features.safety.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('trucks.features.safety.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-8 w-8 mx-auto text-primary mb-4" />
                <CardTitle>{t('trucks.features.capacity.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('trucks.features.capacity.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Wrench className="h-8 w-8 mx-auto text-primary mb-4" />
                <CardTitle>{t('trucks.features.custom.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('trucks.features.custom.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Star className="h-8 w-8 mx-auto text-primary mb-4" />
                <CardTitle>{t('trucks.features.quality.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('trucks.features.quality.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real Vehicles */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('trucks.models.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('trucks.models.description')}
            </p>
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/vehicles/camions">
                {t('trucks.models.view_all')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('trucks.cta.title')}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {t('trucks.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/devis">
                    {t('trucks.cta.quote_cta')}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to="/contact">
                    {t('trucks.cta.appointment_cta')}
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