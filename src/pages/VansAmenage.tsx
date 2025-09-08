import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { FloatingCTA } from '@/components/ui/floating-cta';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Bed, 
  Car, 
  Zap, 
  Wifi, 
  Coffee, 
  Droplets, 
  Wind,
  Shield,
  Star,
  MapPin,
  Users,
  Calendar,
  ArrowRight
} from 'lucide-react';

const VansAmenage = () => {
  const { t } = useTranslation();

  const vanModels = [
    {
      id: 1,
      name: t('vansAmenage.models.comfort.title'),
      price: t('vansAmenage.models.comfort.price'),
      image: "/src/assets/category-van-amenage.jpg",
      features: t('vansAmenage.models.comfort.features', { returnObjects: true }) as string[],
      specs: {
        longueur: "5.4m",
        largeur: "2.05m",
        hauteur: "2.7m",
        couchages: t('vansAmenage.models.comfort.specs.couchages')
      }
    },
    {
      id: 2,
      name: t('vansAmenage.models.family.title'),
      price: t('vansAmenage.models.family.price'),
      image: "/src/assets/hero-van-interior.jpg",
      features: t('vansAmenage.models.family.features', { returnObjects: true }) as string[],
      specs: {
        longueur: "6.4m",
        largeur: "2.05m",
        hauteur: "2.8m",
        couchages: t('vansAmenage.models.family.specs.couchages')
      }
    },
    {
      id: 3,
      name: t('vansAmenage.models.premium.title'),
      price: t('vansAmenage.models.premium.price'),
      image: "/src/assets/hero-van-sunset.jpg",
      features: t('vansAmenage.models.premium.features', { returnObjects: true }) as string[],
      specs: {
        longueur: "7.2m",
        largeur: "2.3m",
        hauteur: "2.9m",
        couchages: t('vansAmenage.models.premium.specs.couchages')
      }
    }
  ];

  const amenagementFeatures = [
    {
      icon: Bed,
      title: t('vansAmenage.features.sleeping.title'),
      description: t('vansAmenage.features.sleeping.description')
    },
    {
      icon: Coffee,
      title: t('vansAmenage.features.kitchen.title'),
      description: t('vansAmenage.features.kitchen.description')
    },
    {
      icon: Droplets,
      title: t('vansAmenage.features.bathroom.title'),
      description: t('vansAmenage.features.bathroom.description')
    },
    {
      icon: Zap,
      title: t('vansAmenage.features.electricity.title'),
      description: t('vansAmenage.features.electricity.description')
    },
    {
      icon: Wind,
      title: t('vansAmenage.features.ventilation.title'),
      description: t('vansAmenage.features.ventilation.description')
    },
    {
      icon: Shield,
      title: t('vansAmenage.features.insulation.title'),
      description: t('vansAmenage.features.insulation.description')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4">
                <Star className="w-4 h-4 mr-2" />
                {t('vansAmenage.badge')}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {t('vansAmenage.title')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {t('vansAmenage.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/devis">{t('vansAmenage.quote_cta')}</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">{t('vansAmenage.contact_cta')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t('vansAmenage.equipment.title')}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('vansAmenage.equipment.description')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {amenagementFeatures.map((feature, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Real Vehicles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t('vansAmenage.models.title')}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('vansAmenage.models.description')}
              </p>
            </div>

            <div className="text-center">
              <Button asChild size="lg">
                <Link to="/vehicles/van-amenage">
                  {t('vansAmenage.models.view_all')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">{t('vansAmenage.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t('vansAmenage.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/devis">{t('vansAmenage.cta.quote_cta')}</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/contact">{t('vansAmenage.cta.contact_cta')}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default VansAmenage;