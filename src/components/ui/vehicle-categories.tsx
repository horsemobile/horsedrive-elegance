import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Truck, Car, Home } from 'lucide-react';

interface Category {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  link: string;
  vehicleCount: number;
  badge?: string;
}

const categories: Category[] = [
  {
    id: 'camions',
    title: 'Camions Équestres',
    description: 'Camions professionnels pour le transport de chevaux avec un maximum de sécurité et de confort.',
    icon: <Truck className="h-8 w-8" />,
    image: '/src/assets/category-trucks.jpg',
    link: '/camions',
    vehicleCount: 24,
    badge: 'Bestseller'
  },
  {
    id: 'vans',
    title: 'Vans Équestres',
    description: 'Vans compacts et maniables, parfaits pour les déplacements courts et moyens avec vos chevaux.',
    icon: <Car className="h-8 w-8" />,
    image: '/src/assets/category-vans.jpg',
    link: '/vans',
    vehicleCount: 18
  },
  {
    id: 'van-amenage',
    title: 'Vans Aménagés',
    description: 'Solutions complètes avec espace de vie intégré pour les longs voyages et compétitions.',
    icon: <Home className="h-8 w-8" />,
    image: '/src/assets/category-van-amenage.jpg',
    link: '/van-amenage',
    vehicleCount: 12,
    badge: 'Nouveau'
  }
];

export const VehicleCategories = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Nos <span className="gradient-text">Catégories</span> de Véhicules
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez notre gamme complète de véhicules équestres, conçus avec l'expertise allemande 
            pour répondre à tous vos besoins de transport.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.id} 
              className="group hover:shadow-premium transition-all duration-500 border-border/50 bg-gradient-card overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                {/* Category Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Badge */}
                {category.badge && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {category.badge}
                  </div>
                )}

                {/* Icon */}
                <div className="absolute -bottom-6 left-6 w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
              </div>

              <CardContent className="p-6 pt-10">
                <div className="mb-4">
                  <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-muted-foreground">
                    {category.vehicleCount} véhicules disponibles
                  </span>
                </div>

                <Button asChild className="w-full group/btn" size="sm">
                  <Link to={category.link}>
                    Découvrir
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Vous ne trouvez pas ce que vous cherchez ?
          </p>
          <Button asChild variant="outline" size="lg" className="text-lg px-8">
            <Link to="/contact">
              Contactez nos Experts
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};