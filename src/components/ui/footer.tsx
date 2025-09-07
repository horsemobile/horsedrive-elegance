import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: t('footer.newsletter_success_title'),
        description: t('footer.newsletter_success_description'),
      });
      setEmail('');
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                  <span className="text-lg font-bold text-white">H</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold gradient-text">HorseMobil</h3>
                  <p className="text-xs text-muted-foreground">GmbH</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t('footer.description')}
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-display font-semibold">{t('footer.vehicles_title')}</h4>
              <nav className="space-y-3">
                <Link to="/camions" className="block text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.trucks')}
                </Link>
                <Link to="/vans" className="block text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.vans')}
                </Link>
                <Link to="/van-amenage" className="block text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.amenaged_vans')}
                </Link>
              </nav>
            </div>

            {/* Company Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-display font-semibold">{t('footer.company_title')}</h4>
              <nav className="space-y-3">
                <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.about')}
                </Link>
                <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.contact')}
                </Link>
                <Link to="/devis" className="block text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.quote')}
                </Link>
                <Link to="/financing" className="block text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.financing')}
                </Link>
              </nav>
            </div>

            {/* Newsletter & Contact */}
            <div className="space-y-6">
              <h4 className="text-lg font-display font-semibold">{t('footer.newsletter_title')}</h4>
              
              {/* Newsletter */}
              <div>
                <p className="text-muted-foreground text-sm mb-4">
                  {t('footer.newsletter_description')}
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <Input
                    type="email"
                    placeholder={t('footer.newsletter_placeholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background/50"
                  />
                  <Button type="submit" className="w-full group">
                    {t('footer.newsletter_submit')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{t('footer.phone')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{t('footer.email')}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    {t('footer.address')}<br />
                    {t('footer.address_city')}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{t('footer.hours')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} HorseMobil GmbH. {t('footer.rights')}
            </div>
            <nav className="flex space-x-6 text-sm">
              <Link to="/mentions-legales" className="text-muted-foreground hover:text-primary transition-colors">
                {t('footer.legal_notices')}
              </Link>
              <Link to="/confidentialite" className="text-muted-foreground hover:text-primary transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link to="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                {t('footer.cookies')}
              </Link>
              <Link to="/cgu" className="text-muted-foreground hover:text-primary transition-colors">
                {t('footer.terms')}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;