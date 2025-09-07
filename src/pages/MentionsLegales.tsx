import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Scale, Building, Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MentionsLegales = () => {
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
                <Scale className="w-4 h-4 mr-2" />
                {t('mentionsLegales.badge')}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {t('mentionsLegales.title')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {t('mentionsLegales.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Legal Information */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8">
              
              {/* Company Information */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-primary" />
                    {t('mentionsLegales.companyInfo.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">{t('mentionsLegales.companyInfo.companyName')}</h4>
                      <p className="text-muted-foreground">{t('mentionsLegales.companyInfo.companyNameValue')}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{t('mentionsLegales.companyInfo.legalForm')}</h4>
                      <p className="text-muted-foreground">{t('mentionsLegales.companyInfo.legalFormValue')}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{t('mentionsLegales.companyInfo.capital')}</h4>
                      <p className="text-muted-foreground">{t('mentionsLegales.companyInfo.capitalValue')}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{t('mentionsLegales.companyInfo.siret')}</h4>
                      <p className="text-muted-foreground">{t('mentionsLegales.companyInfo.siretValue')}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{t('mentionsLegales.companyInfo.ape')}</h4>
                      <p className="text-muted-foreground">{t('mentionsLegales.companyInfo.apeValue')}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{t('mentionsLegales.companyInfo.vat')}</h4>
                      <p className="text-muted-foreground">{t('mentionsLegales.companyInfo.vatValue')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    {t('mentionsLegales.contact.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">{t('mentionsLegales.contact.address')}</h4>
                        <p className="text-muted-foreground whitespace-pre-line">
                          {t('mentionsLegales.contact.addressValue')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">{t('mentionsLegales.contact.phone')}</h4>
                        <p className="text-muted-foreground">{t('mentionsLegales.contact.phoneValue')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">{t('mentionsLegales.contact.email')}</h4>
                        <p className="text-muted-foreground">{t('mentionsLegales.contact.emailValue')}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Director Information */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>{t('mentionsLegales.director.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {t('mentionsLegales.director.content')}
                  </p>
                </CardContent>
              </Card>

              {/* Hosting Information */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>{t('mentionsLegales.hosting.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {t('mentionsLegales.hosting.content')}
                  </p>
                </CardContent>
              </Card>

              {/* Intellectual Property */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>{t('mentionsLegales.intellectualProperty.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {t('mentionsLegales.intellectualProperty.paragraph1')}
                  </p>
                  <p className="text-muted-foreground">
                    {t('mentionsLegales.intellectualProperty.paragraph2')}
                  </p>
                  <p className="text-muted-foreground">
                    {t('mentionsLegales.intellectualProperty.paragraph3')}
                  </p>
                </CardContent>
              </Card>

              {/* Liability */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>{t('mentionsLegales.responsibility.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {t('mentionsLegales.responsibility.paragraph1')}
                  </p>
                  <p className="text-muted-foreground">
                    {t('mentionsLegales.responsibility.paragraph2')}
                  </p>
                  <p className="text-muted-foreground">
                    {t('mentionsLegales.responsibility.paragraph3')}
                  </p>
                </CardContent>
              </Card>

              {/* Links */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>{t('mentionsLegales.links.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {t('mentionsLegales.links.paragraph1')}
                  </p>
                  <p className="text-muted-foreground">
                    {t('mentionsLegales.links.paragraph2')}
                  </p>
                  <p className="text-muted-foreground">
                    {t('mentionsLegales.links.paragraph3')}
                  </p>
                </CardContent>
              </Card>

              {/* Applicable Law */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>{t('mentionsLegales.law.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t('mentionsLegales.law.content')}
                  </p>
                </CardContent>
              </Card>

              {/* Last Update */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>{t('mentionsLegales.update.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t('mentionsLegales.update.paragraph1')}
                  </p>
                  <p className="text-muted-foreground mt-4">
                    <strong>{t('mentionsLegales.update.lastUpdate')}</strong> {t('mentionsLegales.update.lastUpdateValue')}
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

export default MentionsLegales;