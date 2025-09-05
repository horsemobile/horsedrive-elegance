import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            {/* 404 Animation */}
            <div className="mb-8">
              <h1 className="text-8xl md:text-9xl font-display font-bold gradient-text mb-4 floating">
                404
              </h1>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>

            {/* Error Message */}
            <div className="fade-in-up mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
                Page Introuvable
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Désolé, la page que vous recherchez n'existe pas ou a été déplacée. 
                Explorez nos véhicules équestres premium ou retournez à l'accueil.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 group">
                <Link to="/">
                  <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Retour à l'Accueil
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="text-lg px-8 group">
                <Link to="/camions">
                  <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                  Voir nos Véhicules
                </Link>
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="mt-16 pt-8 border-t border-border/50">
              <p className="text-muted-foreground mb-4">Vous cherchez peut-être :</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/camions" 
                  className="text-primary hover:text-primary-light transition-colors underline underline-offset-4"
                >
                  Camions Équestres
                </Link>
                <Link 
                  to="/vans" 
                  className="text-primary hover:text-primary-light transition-colors underline underline-offset-4"
                >
                  Vans Équestres
                </Link>
                <Link 
                  to="/van-amenage" 
                  className="text-primary hover:text-primary-light transition-colors underline underline-offset-4"
                >
                  Vans Aménagés
                </Link>
                <Link 
                  to="/contact" 
                  className="text-primary hover:text-primary-light transition-colors underline underline-offset-4"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;