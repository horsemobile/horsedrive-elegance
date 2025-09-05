import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { FloatingCTA } from '@/components/ui/floating-cta';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
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
  const stats = [
    { icon: Calendar, label: "Années d'expérience", value: "15+" },
    { icon: Users, label: "Clients satisfaits", value: "500+" },
    { icon: Wrench, label: "Véhicules livrés", value: "1000+" },
    { icon: Award, label: "Certifications", value: "5" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Une équipe passionnée par l'automobile et l'aménagement de véhicules spécialisés"
    },
    {
      icon: Shield,
      title: "Qualité",
      description: "Des standards de qualité élevés pour chaque véhicule que nous livrons"
    },
    {
      icon: Target,
      title: "Précision",
      description: "Une attention particulière aux détails pour répondre parfaitement à vos besoins"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "À la pointe des dernières technologies et tendances du marché"
    }
  ];

  const team = [
    {
      name: "Jean Dubois",
      role: "Directeur Général",
      experience: "20 ans d'expérience",
      description: "Expert en véhicules équestres et aménagements spécialisés"
    },
    {
      name: "Marie Martin",
      role: "Responsable Commercial",
      experience: "12 ans d'expérience", 
      description: "Spécialiste en conseil client et solutions sur mesure"
    },
    {
      name: "Pierre Durand",
      role: "Chef d'Atelier",
      experience: "15 ans d'expérience",
      description: "Maître artisan en aménagement et modification de véhicules"
    }
  ];

  const milestones = [
    {
      year: "2009",
      title: "Création de l'entreprise",
      description: "Début de l'aventure avec une passion pour les véhicules équestres"
    },
    {
      year: "2012",
      title: "Premier atelier",
      description: "Ouverture de notre premier atelier d'aménagement"
    },
    {
      year: "2016",
      title: "Expansion",
      description: "Agrandissement et diversification vers les vans aménagés"
    },
    {
      year: "2020",
      title: "Innovation",
      description: "Intégration des dernières technologies d'aménagement"
    },
    {
      year: "2024",
      title: "Excellence",
      description: "Leader régional en véhicules équestres et vans aménagés"
    }
  ];

  const certifications = [
    "Certification ISO 9001",
    "Agrément FFEMA",
    "Qualification RGE",
    "Certification QUALIBAT",
    "Label Artisan de Confiance"
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
                <Heart className="w-4 h-4 mr-2" />
                Notre histoire
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                À Propos de Nous
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Depuis 15 ans, nous accompagnons les passionnés d'équitation et de voyage dans la 
                réalisation de leurs projets de véhicules sur mesure.
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
                  Notre mission
                </Badge>
                <h2 className="text-3xl font-bold mb-6">Votre projet, notre expertise</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Chez HORSEMOBIL, nous croyons que chaque passionné mérite un véhicule à la hauteur 
                  de ses ambitions. Que vous soyez cavalier professionnel, amateur éclairé ou 
                  aventurier en quête de liberté, nous mettons notre savoir-faire à votre service.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Notre équipe d'experts combine tradition artisanale et innovations technologiques 
                  pour créer des véhicules uniques, parfaitement adaptés à vos besoins spécifiques.
                </p>
                <Button asChild>
                  <Link to="/contact">Découvrir nos réalisations</Link>
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
              <h2 className="text-3xl font-bold mb-4">Notre parcours</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                15 années d'innovation et de passion au service de nos clients
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
              <h2 className="text-3xl font-bold mb-4">Notre équipe</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Des professionnels passionnés à votre écoute
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
              <h2 className="text-3xl font-bold mb-4">Nos certifications</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Gage de qualité et de confiance pour tous nos clients
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
            <h2 className="text-3xl font-bold mb-4">Prêt à démarrer votre projet ?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contactez notre équipe pour discuter de votre projet et découvrir comment nous pouvons vous aider
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Nous contacter</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/devis">Demander un devis</Link>
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