import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { FloatingCTA } from '@/components/ui/floating-cta';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  CreditCard, 
  Calculator, 
  Shield, 
  CheckCircle, 
  Clock,
  Euro,
  FileText,
  Users,
  Percent,
  TrendingUp
} from 'lucide-react';

const Financement = () => {
  const { t } = useTranslation();

  const financingOptions = [
    {
      title: t('financing.options.classicCredit.title'),
      description: t('financing.options.classicCredit.description'),
      rate: t('financing.options.classicCredit.rate'),
      duration: t('financing.options.classicCredit.duration'),
      advantages: t('financing.options.classicCredit.advantages', { returnObjects: true }) as string[],
      icon: CreditCard
    },
    {
      title: t('financing.options.leasing.title'),
      description: t('financing.options.leasing.description'),
      rate: t('financing.options.leasing.rate'),
      duration: t('financing.options.leasing.duration'),
      advantages: t('financing.options.leasing.advantages', { returnObjects: true }) as string[],
      icon: FileText
    },
    {
      title: t('financing.options.balloonCredit.title'),
      description: t('financing.options.balloonCredit.description'),
      rate: t('financing.options.balloonCredit.rate'),
      duration: t('financing.options.balloonCredit.duration'),
      advantages: t('financing.options.balloonCredit.advantages', { returnObjects: true }) as string[],
      icon: TrendingUp
    }
  ];

  const stepsData = t('financing.process.steps', { returnObjects: true }) as Array<{title: string, description: string}>;
  const steps = stepsData.map((step, index) => ({
    number: String(index + 1).padStart(2, '0'),
    title: step.title,
    description: step.description
  }));

  const partners = [
    "BNP Paribas",
    "Crédit Agricole", 
    "Société Générale",
    "LCL",
    "Cofidis",
    "Sofinco"
  ];

  const documents = t('financing.documents.list', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4">
                <Euro className="w-4 h-4 mr-2" />
                {t('financing.hero.badge')}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {t('financing.hero.title')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {t('financing.hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/devis">{t('financing.hero.simulateButton')}</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">{t('financing.hero.advisorButton')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Financing Options */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t('financing.options.title')}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('financing.options.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {financingOptions.map((option, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 transform rotate-45 translate-x-8 -translate-y-8"></div>
                  
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <option.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle>{option.title}</CardTitle>
                    </div>
                    <CardDescription>{option.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <Percent className="w-5 h-5 mx-auto mb-1 text-primary" />
                        <div className="text-sm font-medium">{option.rate}</div>
                        <div className="text-xs text-muted-foreground">{t('financing.options.rateLabel')}</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <Clock className="w-5 h-5 mx-auto mb-1 text-primary" />
                        <div className="text-sm font-medium">{option.duration}</div>
                        <div className="text-xs text-muted-foreground">{t('financing.options.durationLabel')}</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">{t('financing.options.advantagesLabel')}</h4>
                      <ul className="space-y-1">
                        {option.advantages.map((advantage, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{advantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full" variant="outline" asChild>
                      <Link to="/devis">{t('financing.options.learnMoreButton')}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t('financing.process.title')}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('financing.process.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-8"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents Required */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4">
                  <FileText className="w-4 h-4 mr-2" />
                  {t('financing.documents.badge')}
                </Badge>
                <h2 className="text-3xl font-bold mb-6">{t('financing.documents.title')}</h2>
                <p className="text-muted-foreground mb-8">
                  {t('financing.documents.description')}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-primary" />
                    {t('financing.simulator.title')}
                  </CardTitle>
                  <CardDescription>
                    {t('financing.simulator.description')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg text-center">
                    <h3 className="text-2xl font-bold mb-2">{t('financing.simulator.freeSimulation')}</h3>
                    <p className="text-muted-foreground mb-4">
                      {t('financing.simulator.personalizedEstimate')}
                    </p>
                    <Button size="lg" className="w-full" asChild>
                      <Link to="/devis">{t('financing.simulator.startButton')}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t('financing.partners.title')}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('financing.partners.description')}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-medium text-sm">{partner}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">{t('financing.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t('financing.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">{t('financing.cta.appointmentButton')}</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/devis">{t('financing.cta.quoteButton')}</Link>
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

export default Financement;