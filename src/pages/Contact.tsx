import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { FloatingCTA } from '@/components/ui/floating-cta';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('pages.contact.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('pages.contact.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>{t('pages.contact.formTitle')}</CardTitle>
                <CardDescription>
                  {t('pages.contact.formDescription')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{t('pages.contact.firstName')}</Label>
                    <Input id="firstName" placeholder={t('contact.firstName_placeholder')} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{t('pages.contact.lastName')}</Label>
                    <Input id="lastName" placeholder={t('contact.name_placeholder')} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t('contact.email')}</Label>
                  <Input id="email" type="email" placeholder={t('contact.email_placeholder')} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t('contact.phone')}</Label>
                  <Input id="phone" type="tel" placeholder={t('contact.phone_placeholder')} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">{t('pages.contact.subject')}</Label>
                  <Input id="subject" placeholder={t('contact.subject_placeholder')} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t('pages.contact.message')}</Label>
                  <Textarea 
                    id="message" 
                    placeholder={t('contact.message_placeholder')}
                    className="min-h-32"
                  />
                </div>
                <Button className="w-full" size="lg">
                  {t('pages.contact.sendMessage')}
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    {t('contact.phone')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">{t('pages.contact.phoneNumber')}</p>
                  <p className="text-muted-foreground">{t('pages.contact.phoneHours')}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    {t('contact.email')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">{t('pages.contact.email')}</p>
                  <p className="text-muted-foreground">{t('pages.contact.responseTime')}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    {t('contact.address')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">{t('pages.contact.address')}</p>
                  <p className="text-muted-foreground">{t('pages.contact.city')}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    {t('pages.contact.hours')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>{t('pages.contact.mondayFriday')}</span>
                      <span className="font-semibold">{t('pages.contact.timeWeekdays')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('pages.contact.saturday')}</span>
                      <span className="font-semibold">{t('pages.contact.timeSaturday')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('pages.contact.sunday')}</span>
                      <span className="text-muted-foreground">{t('pages.contact.closed')}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Contact;