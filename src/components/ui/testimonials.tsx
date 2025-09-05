import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  vehicle: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Marie Dubois',
    role: 'Cavalière Professionnelle',
    company: 'Écurie des Chênes',
    content: 'Excellente qualité et service exceptionnel. Mon van HorseMobil me permet de voyager en toute sérénité avec mes chevaux. La finition allemande fait toute la différence.',
    rating: 5,
    avatar: '/api/placeholder/100/100',
    vehicle: 'Van Aménagé Prestige'
  },
  {
    id: 2,
    name: 'Pierre Martin',
    role: 'Éleveur',
    company: 'Haras de la Vallée',
    content: 'Un investissement parfait pour notre activité. Le camion équestre que nous avons acheté répond parfaitement à nos besoins de transport professionnel.',
    rating: 5,
    avatar: '/api/placeholder/100/100',
    vehicle: 'Camion Équestre Pro'
  },
  {
    id: 3,
    name: 'Sophie Laurent',
    role: 'Compétitrice CSO',
    company: 'Sport Équestre Elite',
    content: 'Service client remarquable et véhicules de très haute qualité. Je recommande vivement HorseMobil pour tous vos besoins de transport équestre.',
    rating: 5,
    avatar: '/api/placeholder/100/100',
    vehicle: 'Van Sport Compétition'
  },
  {
    id: 4,
    name: 'Thomas Weber',
    role: 'Instructeur',
    company: 'Centre Équestre Alpin',
    content: 'Fiabilité et confort exceptionnels. Nos déplacements en compétition sont désormais un plaisir grâce à notre nouveau van HorseMobil.',
    rating: 5,
    avatar: '/api/placeholder/100/100',
    vehicle: 'Van Confort Plus'
  }
];

export const Testimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits qui nous font confiance 
            pour leurs besoins de transport équestre.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-gradient-card border-border/50 shadow-card">
                    <CardContent className="p-8">
                      {/* Quote Icon */}
                      <div className="flex justify-center mb-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Quote className="h-6 w-6 text-primary" />
                        </div>
                      </div>

                      {/* Content */}
                      <blockquote className="text-lg text-center text-foreground leading-relaxed mb-8 italic">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* Author Info */}
                      <div className="text-center">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-primary/20"
                        />
                        <h4 className="font-semibold text-lg mb-1">{testimonial.name}</h4>
                        <p className="text-primary text-sm font-medium mb-1">{testimonial.role}</p>
                        <p className="text-muted-foreground text-sm mb-2">{testimonial.company}</p>
                        <div className="inline-block px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">
                          {testimonial.vehicle}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 glass-effect"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 glass-effect"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                onClick={() => goToTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};