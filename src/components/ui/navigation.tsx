import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, User, LogOut } from 'lucide-react';
import { LanguageSelector } from './language-selector';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/contexts/AuthContext';
const horsemobilLogo = '/lovable-uploads/f869f300-720d-4cf2-99ba-4ef11507f810.png';

const Navigation = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user, isAdmin, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.trucks'), path: '/camions' },
    { name: t('nav.vans'), path: '/vans' },
    { name: t('nav.amenaged_vans'), path: '/van-amenage' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-card' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={horsemobilLogo} 
              alt="HORSEMOBIL GmbH" 
              className="h-16 w-auto group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            
            {/* Contact Info - Hidden on mobile */}
            <div className="hidden xl:flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+49 123 456 789</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>info@horsemobil.de</span>
              </div>
            </div>

            <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
              <Link to="/devis">{t('nav.quote')}</Link>
            </Button>

            {/* Auth Section */}
            {user ? (
              <div className="hidden md:flex items-center space-x-2">
                {isAdmin && (
                  <Button asChild variant="ghost" size="sm">
                    <Link to="/admin">Admin</Link>
                  </Button>
                )}
                <Button variant="ghost" size="sm" onClick={signOut}>
                  <LogOut className="h-4 w-4 mr-1" />
                  Déconnexion
                </Button>
              </div>
            ) : (
              <Button asChild variant="ghost" size="sm" className="hidden md:inline-flex">
                <Link to="/auth">
                  <User className="h-4 w-4 mr-1" />
                  Connexion
                </Link>
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-muted rounded-lg ${
                    location.pathname === item.path 
                      ? 'text-primary bg-muted' 
                      : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-2 space-y-2">
                <Button asChild className="w-full" size="sm">
                  <Link to="/devis">{t('nav.quote')}</Link>
                </Button>
                {user ? (
                  <>
                    {isAdmin && (
                      <Button asChild variant="outline" className="w-full" size="sm">
                        <Link to="/admin">Administration</Link>
                      </Button>
                    )}
                    <Button variant="ghost" className="w-full" size="sm" onClick={signOut}>
                      <LogOut className="h-4 w-4 mr-1" />
                      Déconnexion
                    </Button>
                  </>
                ) : (
                  <Button asChild variant="ghost" className="w-full" size="sm">
                    <Link to="/auth">
                      <User className="h-4 w-4 mr-1" />
                      Connexion
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;