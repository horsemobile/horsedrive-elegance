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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('contact.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('contact.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>{t('contact.form.title')}</CardTitle>
                <CardDescription>
                  {t('contact.form.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{t('contact.form.first_name')}</Label>
                    <Input id="firstName" placeholder={t('contact.form.first_name')} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{t('contact.form.last_name')}</Label>
                    <Input id="lastName" placeholder={t('contact.form.last_name')} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t('contact.form.email')}</Label>
                  <Input id="email" type="email" placeholder={t('contact.form.email')} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                  <Input id="phone" type="tel" placeholder={t('contact.form.phone')} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">{t('contact.form.subject')}</Label>
                  <Input id="subject" placeholder={t('contact.form.subject_placeholder')} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.form.message')}</Label>
                  <Textarea 
                    id="message" 
                    placeholder={t('contact.form.message_placeholder')}
                    className="min-h-32"
                  />
                </div>
                <Button className="w-full" size="lg">
                  {t('contact.form.submit')}
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    {t('contact.info.phone.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">{t('contact.info.phone.value')}</p>
                  <p className="text-muted-foreground">{t('contact.info.phone.schedule')}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    {t('contact.info.email.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">{t('contact.info.email.value')}</p>
                  <p className="text-muted-foreground">{t('contact.info.email.response')}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    {t('contact.info.address.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">{t('contact.info.address.street')}</p>
                  <p className="text-muted-foreground">{t('contact.info.address.city')}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    {t('contact.info.hours.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>{t('contact.info.hours.weekdays')}</span>
                      <span className="font-semibold">{t('contact.info.hours.weekdays_hours')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('contact.info.hours.saturday')}</span>
                      <span className="font-semibold">{t('contact.info.hours.saturday_hours')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('contact.info.hours.sunday')}</span>
                      <span className="text-muted-foreground">{t('contact.info.hours.sunday_status')}</span>
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