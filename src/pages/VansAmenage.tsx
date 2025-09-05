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
  Calendar
} from 'lucide-react';

const VansAmenage = () => {
  const { t } = useTranslation();
  
  const vanModels = [
    {
      id: 1,
      name: "Van Confort",
      price: "À partir de 45 000€",
      image: "/src/assets/category-van-amenage.jpg",
      features: ["Lit double", "Cuisine équipée", "Douche", "WC"],
      specs: {
        longueur: "5.4m",
        largeur: "2.05m",
        hauteur: "2.7m",
        couchages: "2 personnes"
      }
    },
    {
      id: 2,
      name: "Van Famille",
      price: "À partir de 65 000€",
      image: "/src/assets/hero-van-interior.jpg",
      features: ["Lit double + lit superposé", "Grande cuisine", "Douche séparée", "WC", "Salon"],
      specs: {
        longueur: "6.4m",
        largeur: "2.05m",
        hauteur: "2.8m",
        couchages: "4 personnes"
      }
    },
    {
      id: 3,
      name: "Van Premium",
      price: "À partir de 85 000€",
      image: "/src/assets/hero-van-sunset.jpg",
      features: ["Lit king size", "Cuisine haut de gamme", "Salle de bain complète", "Salon spacieux", "Climatisation"],
      specs: {
        longueur: "7.2m",
        largeur: "2.3m",
        hauteur: "2.9m",
        couchages: "2-4 personnes"
      }
    }
  ];

  const amenagementFeatures = [
    {
      icon: Bed,
      title: "Espace nuit",
      description: "Lit confortable avec matelas haute qualité et rangements intégrés"
    },
    {
      icon: Coffee,
      title: "Cuisine équipée",
      description: "Réfrigérateur, plaques de cuisson, évier et rangements optimisés"
    },
    {
      icon: Droplets,
      title: "Salle d'eau",
      description: "Douche, lavabo et WC avec système d'évacuation adapté"
    },
    {
      icon: Zap,
      title: "Électricité",
      description: "Batterie auxiliaire, panneau solaire et convertisseur 220V"
    },
    {
      icon: Wind,
      title: "Ventilation",
      description: "Lanterneau et aérations pour un confort optimal"
    },
    {
      icon: Shield,
      title: "Isolation",
      description: "Isolation thermique et phonique pour toutes saisons"
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
                Aménagements sur mesure
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Vans Aménagés
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Découvrez nos vans aménagés pour voyager en liberté. Confort, autonomie et qualité 
                pour vos aventures sur les routes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/devis">Demander un devis</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Nous contacter</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Équipements inclus</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tous nos vans sont équipés des meilleurs aménagements pour votre confort
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

        {/* Models Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nos modèles</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choisissez le van aménagé qui correspond à vos besoins
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {vanModels.map((van) => (
                <Card key={van.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={van.image} 
                      alt={van.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">
                        {van.price}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {van.name}
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{van.specs.couchages}</span>
                      </div>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Car className="w-4 h-4 text-muted-foreground" />
                        <span>{van.specs.longueur}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span>{van.specs.hauteur}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold">Équipements:</h4>
                      <div className="flex flex-wrap gap-1">
                        {van.features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button className="flex-1" asChild>
                        <Link to="/devis">Demander un devis</Link>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <Link to="/contact">
                          <Calendar className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt pour l'aventure ?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contactez-nous pour discuter de votre projet d'aménagement ou découvrir nos vans disponibles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/devis">Obtenir un devis gratuit</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/contact">Nous contacter</Link>
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