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

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Inscription réussie !",
        description: "Vous recevrez bientôt nos dernières actualités.",
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
                Spécialiste allemand en véhicules équestres haut de gamme. 
                Nous offrons des solutions complètes pour le transport de vos chevaux 
                avec la qualité et la fiabilité allemandes.
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
              <h4 className="text-lg font-display font-semibold">Nos Véhicules</h4>
              <nav className="space-y-3">
                <Link to="/camions" className="block text-muted-foreground hover:text-primary transition-colors">
                  Camions Équestres
                </Link>
                <Link to="/vans" className="block text-muted-foreground hover:text-primary transition-colors">
                  Vans Équestres
                </Link>
                <Link to="/van-amenage" className="block text-muted-foreground hover:text-primary transition-colors">
                  Vans Aménagés
                </Link>
                <Link to="/remorques" className="block text-muted-foreground hover:text-primary transition-colors">
                  Remorques
                </Link>
              </nav>
            </div>

            {/* Company Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-display font-semibold">Entreprise</h4>
              <nav className="space-y-3">
                <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                  À Propos
                </Link>
                <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
                <Link to="/devis" className="block text-muted-foreground hover:text-primary transition-colors">
                  Demander un Devis
                </Link>
                <Link to="/financing" className="block text-muted-foreground hover:text-primary transition-colors">
                  Financement
                </Link>
              </nav>
            </div>

            {/* Newsletter & Contact */}
            <div className="space-y-6">
              <h4 className="text-lg font-display font-semibold">Restons en Contact</h4>
              
              {/* Newsletter */}
              <div>
                <p className="text-muted-foreground text-sm mb-4">
                  Recevez nos dernières actualités et offres spéciales.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Votre email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background/50"
                  />
                  <Button type="submit" className="w-full group">
                    S'inscrire
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">+49 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">info@horsemobil.de</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    Musterstraße 123<br />
                    12345 Berlin, Deutschland
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Lun-Ven: 8h-18h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} HorseMobil GmbH. Tous droits réservés.
            </div>
            <nav className="flex space-x-6 text-sm">
              <Link to="/legal" className="text-muted-foreground hover:text-primary transition-colors">
                Mentions Légales
              </Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Confidentialité
              </Link>
              <Link to="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                CGV
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;