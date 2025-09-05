import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, FileText, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const FloatingCTA = () => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(t('floating_cta.whatsapp_message'));
    window.open(`https://wa.me/49123456789?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Menu */}
      {isExpanded && (
        <div className="mb-4 space-y-3 animate-scale-in">
          {/* WhatsApp */}
          <Button
            onClick={handleWhatsApp}
            className="w-full justify-start bg-green-600 hover:bg-green-700 text-white shadow-premium group"
            size="lg"
          >
            <MessageCircle className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
            {t('floating_cta.whatsapp')}
          </Button>

          {/* Devis */}
          <Button asChild className="w-full justify-start shadow-premium group" size="lg">
            <Link to="/devis">
              <FileText className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
              {t('floating_cta.quote')}
            </Link>
          </Button>

          {/* Contact */}
          <Button
            asChild
            variant="outline"
            className="w-full justify-start glass-effect group"
            size="lg"
          >
            <Link to="/contact">
              <Phone className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
              {t('floating_cta.call')}
            </Link>
          </Button>
        </div>
      )}

      {/* Main Toggle Button */}
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 rounded-full shadow-premium floating group ${
          isExpanded ? 'bg-destructive hover:bg-destructive/90' : 'bg-primary hover:bg-primary/90'
        }`}
        size="icon"
      >
        {isExpanded ? (
          <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
        ) : (
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
        )}
      </Button>
    </div>
  );
};