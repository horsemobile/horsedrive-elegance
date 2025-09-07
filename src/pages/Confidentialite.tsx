import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Eye, Lock, Database, Users, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Confidentialite = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4">
                <Shield className="w-4 h-4 mr-2" />
                {t('confidentialite.badge')}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {t('confidentialite.title')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {t('confidentialite.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8">

              {/* Introduction */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-primary" />
                    {t('confidentialite.introduction.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {t('confidentialite.introduction.paragraph1')}
                  </p>
                  <p className="text-muted-foreground">
                    {t('confidentialite.introduction.paragraph2')}
                  </p>
                  <p className="text-muted-foreground">
                    {t('confidentialite.introduction.paragraph3')}
                  </p>
                </CardContent>
              </Card>

              {/* Data Controller */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    {t('confidentialite.dataController.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t('confidentialite.dataController.content')}<br /><br />
                    <strong>{t('confidentialite.dataController.company')}</strong><br />
                    {t('confidentialite.dataController.address')}<br />
                    {t('confidentialite.dataController.city')}<br />
                    {t('confidentialite.dataController.email')}<br />
                    {t('confidentialite.dataController.phone')}
                  </p>
                </CardContent>
              </Card>

              {/* Data Collection */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary" />
                    {t('confidentialite.dataCollection.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">{t('confidentialite.dataCollection.automaticData.title')}</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {(t('confidentialite.dataCollection.automaticData.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">{t('confidentialite.dataCollection.voluntaryData.title')}</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {(t('confidentialite.dataCollection.voluntaryData.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Purpose of Processing */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>{t('confidentialite.purposes.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{t('confidentialite.purposes.intro')}</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {(t('confidentialite.purposes.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Legal Basis */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>{t('confidentialite.legalBasis.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">{t('confidentialite.legalBasis.consent.title')}</h4>
                    <p className="text-muted-foreground">{t('confidentialite.legalBasis.consent.description')}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">{t('confidentialite.legalBasis.contract.title')}</h4>
                    <p className="text-muted-foreground">{t('confidentialite.legalBasis.contract.description')}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">{t('confidentialite.legalBasis.legitimateInterest.title')}</h4>
                    <p className="text-muted-foreground">{t('confidentialite.legalBasis.legitimateInterest.description')}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">{t('confidentialite.legalBasis.legalObligation.title')}</h4>
                    <p className="text-muted-foreground">{t('confidentialite.legalBasis.legalObligation.description')}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Data Retention */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>{t('confidentialite.retention.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    {(t('confidentialite.retention.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                      <li key={index}><strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Data Sharing */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>{t('confidentialite.sharing.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {t('confidentialite.sharing.intro')}
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {(t('confidentialite.sharing.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Security */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="w-5 h-5 text-primary" />
                    {t('confidentialite.security.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {t('confidentialite.security.intro')}
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {(t('confidentialite.security.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground">
                    {t('confidentialite.security.measures')}
                  </p>
                </CardContent>
              </Card>

              {/* Rights */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>{t('confidentialite.rights.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{t('confidentialite.rights.intro')}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-1">{t('confidentialite.rights.access.title')}</h4>
                      <p className="text-sm text-muted-foreground">{t('confidentialite.rights.access.description')}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t('confidentialite.rights.rectification.title')}</h4>
                      <p className="text-sm text-muted-foreground">{t('confidentialite.rights.rectification.description')}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t('confidentialite.rights.erasure.title')}</h4>
                      <p className="text-sm text-muted-foreground">{t('confidentialite.rights.erasure.description')}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t('confidentialite.rights.portability.title')}</h4>
                      <p className="text-sm text-muted-foreground">{t('confidentialite.rights.portability.description')}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t('confidentialite.rights.objection.title')}</h4>
                      <p className="text-sm text-muted-foreground">{t('confidentialite.rights.objection.description')}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t('confidentialite.rights.restriction.title')}</h4>
                      <p className="text-sm text-muted-foreground">{t('confidentialite.rights.restriction.description')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Exercise Rights */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    {t('confidentialite.exerciseRights.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {t('confidentialite.exerciseRights.intro')}
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {(t('confidentialite.exerciseRights.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground">
                    {t('confidentialite.exerciseRights.response')}
                  </p>
                  <p className="text-muted-foreground">
                    {t('confidentialite.exerciseRights.complaint')}
                  </p>
                </CardContent>
              </Card>

              {/* Cookies */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>{t('confidentialite.cookies.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {t('confidentialite.cookies.content')} <a href="/cookies" className="text-primary hover:underline">{t('confidentialite.cookies.link')}</a>.
                  </p>
                </CardContent>
              </Card>

              {/* Updates */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>{t('confidentialite.updates.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {t('confidentialite.updates.paragraph1')}
                  </p>
                  <p className="text-muted-foreground">
                    {t('confidentialite.updates.paragraph2')}
                  </p>
                  <p className="text-muted-foreground mt-4">
                    <strong>{t('confidentialite.updates.lastUpdate')}</strong> {t('confidentialite.updates.date')}
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Confidentialite;