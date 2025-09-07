import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';

import { Award, Users, Truck, ThumbsUp } from 'lucide-react';

interface Stat {
  id: string;
  title: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
  description: string;
}

const useStatsData = () => {
  const { t } = useTranslation();
  
  return [
    {
      id: 'experience',
      title: t('stats.experience'),
      value: 25,
      suffix: '+',
      icon: <Award className="h-8 w-8" />,
      description: t('stats.experienceDesc')
    },
    {
      id: 'clients',
      title: t('stats.customers'),
      value: 1200,
      suffix: '+',
      icon: <Users className="h-8 w-8" />,
      description: t('stats.customersDesc')
    },
    {
      id: 'vehicles',
      title: t('stats.vehicles'),
      value: 500,
      suffix: '+',
      icon: <Truck className="h-8 w-8" />,
      description: t('stats.vehiclesDesc')
    },
    {
      id: 'satisfaction',
      title: t('stats.satisfactionTitle'),
      value: 98,
      suffix: '%',
      icon: <ThumbsUp className="h-8 w-8" />,
      description: t('stats.satisfactionDesc')
    }
  ];
};

// Hook pour animer les compteurs
const useCountAnimation = (endValue: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(endValue * easeOutCubic));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [endValue, duration, isVisible]);

  return { count, elementRef };
};

const StatCard = ({ stat }: { stat: Stat }) => {
  const { count, elementRef } = useCountAnimation(stat.value);

  return (
    <Card 
      ref={elementRef}
      className="text-center bg-gradient-card border-border/50 hover:shadow-premium transition-all duration-500 group"
    >
      <CardContent className="p-8">
        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
          <div className="text-primary">
            {stat.icon}
          </div>
        </div>

        {/* Value */}
        <div className="mb-4">
          <span className="text-4xl md:text-5xl font-bold gradient-text">
            {count}
          </span>
          <span className="text-2xl md:text-3xl font-bold text-primary ml-1">
            {stat.suffix}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
          {stat.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {stat.description}
        </p>
      </CardContent>
    </Card>
  );
};

export const StatsSection = () => {
  const { t, ready } = useTranslation();
  const stats = useStatsData();
  
  // Debug logs
  console.log('StatsSection render:', { 
    ready, 
    title: t('stats.title'),
    subtitle: t('stats.subtitle')
  });
  
  if (!ready) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse">Chargement des statistiques...</div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            {t('stats.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('stats.subtitle')}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <StatCard stat={stat} />
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('stats.conclusion')}
          </p>
        </div>
      </div>
    </section>
  );
};