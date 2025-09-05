import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { FloatingCTA } from '@/components/ui/floating-cta';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Award, 
  Users, 
  Calendar, 
  MapPin, 
  Heart, 
  Shield,
  Target,
  Zap,
  CheckCircle,
  Star,
  Clock,
  Wrench
} from 'lucide-react';

const APropos = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Calendar, label: t('about.stats.experience.label'), value: t('about.stats.experience.value') },
    { icon: Users, label: t('about.stats.clients.label'), value: t('about.stats.clients.value') },
    { icon: Wrench, label: t('about.stats.vehicles.label'), value: t('about.stats.vehicles.value') },
    { icon: Award, label: t('about.stats.certifications.label'), value: t('about.stats.certifications.value') }
  ];

  const values = [
    {
      icon: Heart,
      title: t('about.values.passion.title'),
      description: t('about.values.passion.description')
    },
    {
      icon: Shield,
      title: t('about.values.quality.title'),
      description: t('about.values.quality.description')
    },
    {
      icon: Target,
      title: t('about.values.precision.title'),
      description: t('about.values.precision.description')
    },
    {
      icon: Zap,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
    }
  ];

  const team = [
    {
      name: t('about.team.director.name'),
      role: t('about.team.director.role'),
      experience: t('about.team.director.experience'),
      description: t('about.team.director.description')
    },
    {
      name: t('about.team.commercial.name'),
      role: t('about.team.commercial.role'),
      experience: t('about.team.commercial.experience'), 
      description: t('about.team.commercial.description')
    },
    {
      name: t('about.team.workshop.name'),
      role: t('about.team.workshop.role'),
      experience: t('about.team.workshop.experience'),
      description: t('about.team.workshop.description')
    }
  ];

  const milestones = [
    {
      year: "2009",
      title: t('about.timeline.2009.title'),
      description: t('about.timeline.2009.description')
    },
    {
      year: "2012",
      title: t('about.timeline.2012.title'),
      description: t('about.timeline.2012.description')
    },
    {
      year: "2016",
      title: t('about.timeline.2016.title'),
      description: t('about.timeline.2016.description')
    },
    {
      year: "2020",
      title: t('about.timeline.2020.title'),
      description: t('about.timeline.2020.description')
    },
    {
      year: "2024",
      title: t('about.timeline.2024.title'),
      description: t('about.timeline.2024.description')
    }
  ];

  const certifications = t('about.certifications.list', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4">
                <Heart className="w-4 h-4 mr-2" />
                {t('about.hero.badge')}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {t('about.hero.title')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {t('about.hero.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4">
                  <Target className="w-4 h-4 mr-2" />
                  {t('about.mission.badge')}
                </Badge>
                <h2 className="text-3xl font-bold mb-6">{t('about.mission.title')}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t('about.mission.description1')}
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {t('about.mission.description2')}
                </p>
                <Button asChild>
                  <Link to="/contact">{t('about.mission.cta')}</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">{value.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t('about.timeline.title')}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('about.timeline.description')}
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <Card className="border-none shadow-lg">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="text-primary">
                              {milestone.year}
                            </Badge>
                            <CardTitle className="text-lg">{milestone.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>{milestone.description}</CardDescription>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-md"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t('about.team.title')}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('about.team.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-10 h-10 text-primary" />
                    </div>
                    <CardTitle>{member.name}</CardTitle>
                    <Badge variant="secondary" className="mx-auto">
                      {member.role}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {member.experience}
                    </div>
                    <CardDescription className="text-center">
                      {member.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t('about.certifications.title')}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('about.certifications.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">{t('about.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t('about.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">{t('about.cta.contact')}</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/devis">{t('about.cta.quote')}</Link>
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

export default APropos;