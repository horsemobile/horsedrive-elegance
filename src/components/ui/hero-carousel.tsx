import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Véhicules Équestres Premium',
    subtitle: 'Transport de Chevaux Haut de Gamme',
    description: 'Découvrez notre gamme complète de véhicules équestres : camions, vans et remorques conçus pour le confort et la sécurité de vos chevaux.',
    ctaText: 'Voir nos Véhicules',
    ctaLink: '/camions',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=1920&h=1080&fit=crop&crop=center'
  },
  {
    id: 2,
    title: 'Vans Aménagés sur Mesure',
    subtitle: 'Personnalisation Complète',
    description: 'Nos vans aménagés offrent une solution parfaite pour les déplacements équestres avec tout le confort nécessaire pour cavaliers et chevaux.',
    ctaText: 'Découvrir les Vans',
    ctaLink: '/van-amenage',
    image: 'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=1920&h=1080&fit=crop&crop=center'
  },
  {
    id: 3,
    title: 'Expertise Allemande',
    subtitle: 'Qualité et Fiabilité',
    description: 'Fort de notre expertise allemande, nous proposons des véhicules équestres alliant innovation, sécurité et performance exceptionnelle.',
    ctaText: 'En Savoir Plus',
    ctaLink: '/about',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center'
  }
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div 
      className="relative h-[calc(100vh-4rem)] w-full overflow-hidden"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex items-center h-full">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <div className="fade-in-up">
                  <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
                    <span className="gradient-text">{slide.title}</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="text-lg px-8 py-6 group">
                      <Link to={slide.ctaLink}>
                        {slide.ctaText}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                      <Link to="/contact">
                        Nous Contacter
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 glass-effect hover:bg-primary/20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 glass-effect hover:bg-primary/20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 z-20 glass-effect px-4 py-2 rounded-lg">
        <span className="text-sm font-medium">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};