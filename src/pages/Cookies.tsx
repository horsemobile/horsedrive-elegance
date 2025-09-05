import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Cookie, Settings, BarChart, Target, Shield, Clock } from 'lucide-react';

const Cookies = () => {
  const cookieCategories = [
    {
      icon: Shield,
      title: "Cookies essentiels",
      description: "Nécessaires au fonctionnement du site",
      duration: "Session",
      canDisable: false,
      examples: ["Session utilisateur", "Panier d'achat", "Préférences de langue"]
    },
    {
      icon: BarChart,
      title: "Cookies analytiques",
      description: "Nous aident à comprendre l'utilisation du site",
      duration: "13 mois",
      canDisable: true,
      examples: ["Google Analytics", "Statistiques de visite", "Pages populaires"]
    },
    {
      icon: Target,
      title: "Cookies marketing",
      description: "Personnalisent votre expérience publicitaire",
      duration: "13 mois",
      canDisable: true,
      examples: ["Publicités ciblées", "Réseaux sociaux", "Remarketing"]
    },
    {
      icon: Settings,
      title: "Cookies fonctionnels",
      description: "Améliorent votre expérience utilisateur",
      duration: "12 mois",
      canDisable: true,
      examples: ["Préférences utilisateur", "Chat en ligne", "Localisation"]
    }
  ];

  const specificCookies = [
    {
      name: "_ga",
      provider: "Google Analytics",
      purpose: "Distingue les utilisateurs uniques",
      duration: "2 ans",
      type: "Analytique"
    },
    {
      name: "_gid",
      provider: "Google Analytics", 
      purpose: "Distingue les utilisateurs uniques",
      duration: "24 heures",
      type: "Analytique"
    },
    {
      name: "sessionid",
      provider: "HORSEMOBIL",
      purpose: "Maintient la session utilisateur",
      duration: "Session",
      type: "Essentiel"
    },
    {
      name: "language",
      provider: "HORSEMOBIL",
      purpose: "Mémorise la langue choisie",
      duration: "1 an",
      type: "Fonctionnel"
    },
    {
      name: "consent",
      provider: "HORSEMOBIL",
      purpose: "Mémorise vos préférences de cookies",
      duration: "1 an",
      type: "Essentiel"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4">
                <Cookie className="w-4 h-4 mr-2" />
                Gestion des cookies
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Politique de Cookies
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Informations sur l'utilisation des cookies et technologies similaires sur notre site
              </p>
            </div>
          </div>
        </section>

        {/* What are Cookies */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cookie className="w-5 h-5 text-primary" />
                  Qu'est-ce qu'un cookie ?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, tablette, smartphone) lors de votre visite sur notre site web. Il permet de reconnaître votre navigateur et de mémoriser certaines informations vous concernant ou concernant vos préférences.
                </p>
                <p className="text-muted-foreground">
                  Les cookies facilitent votre navigation, permettent de sécuriser votre connexion et nous aident à mieux comprendre l'utilisation de notre site pour l'améliorer.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cookie Categories */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Types de cookies utilisés</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nous utilisons différents types de cookies selon leur fonction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {cookieCategories.map((category, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <category.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{category.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{category.description}</p>
                        </div>
                      </div>
                      <Badge variant={category.canDisable ? "secondary" : "default"}>
                        {category.canDisable ? "Optionnel" : "Obligatoire"}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Durée : {category.duration}</span>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Exemples :</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {category.examples.map((example, i) => (
                          <li key={i}>{example}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specific Cookies Table */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Liste détaillée des cookies</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Informations détaillées sur chaque cookie utilisé sur notre site
              </p>
            </div>

            <Card className="border-none shadow-lg max-w-6xl mx-auto">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left p-4 font-semibold">Nom</th>
                        <th className="text-left p-4 font-semibold">Fournisseur</th>
                        <th className="text-left p-4 font-semibold">Finalité</th>
                        <th className="text-left p-4 font-semibold">Durée</th>
                        <th className="text-left p-4 font-semibold">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {specificCookies.map((cookie, index) => (
                        <tr key={index} className="border-t">
                          <td className="p-4 font-mono text-sm">{cookie.name}</td>
                          <td className="p-4">{cookie.provider}</td>
                          <td className="p-4 text-sm">{cookie.purpose}</td>
                          <td className="p-4 text-sm">{cookie.duration}</td>
                          <td className="p-4">
                            <Badge 
                              variant={cookie.type === "Essentiel" ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {cookie.type}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Your Choices */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold mb-6">Vos choix concernant les cookies</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <span className="text-xs font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Paramètres du navigateur</h4>
                      <p className="text-muted-foreground text-sm">
                        Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté avant leur dépôt.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <span className="text-xs font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Centre de préférences</h4>
                      <p className="text-muted-foreground text-sm">
                        Utilisez notre centre de préférences pour choisir quels cookies accepter.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <span className="text-xs font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Suppression</h4>
                      <p className="text-muted-foreground text-sm">
                        Vous pouvez supprimer les cookies déjà stockés dans votre navigateur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-primary" />
                    Gérer mes préférences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Personnalisez votre expérience en choisissant quels cookies accepter.
                  </p>
                  
                  <div className="space-y-3">
                    <Button className="w-full" size="lg">
                      Ouvrir les préférences de cookies
                    </Button>
                    <Button variant="outline" className="w-full">
                      Tout accepter
                    </Button>
                    <Button variant="outline" className="w-full">
                      Tout refuser (sauf essentiels)
                    </Button>
                  </div>
                  
                  <p className="text-xs text-muted-foreground">
                    Note : Refuser certains cookies peut affecter le bon fonctionnement du site.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Browser Instructions */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Configuration des navigateurs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Vous pouvez configurer votre navigateur pour gérer les cookies :
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Navigateurs desktop</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><strong>Chrome :</strong> Paramètres &gt; Confidentialité et sécurité &gt; Cookies</li>
                      <li><strong>Firefox :</strong> Paramètres &gt; Vie privée et sécurité &gt; Cookies</li>
                      <li><strong>Safari :</strong> Préférences &gt; Confidentialité &gt; Cookies</li>
                      <li><strong>Edge :</strong> Paramètres &gt; Cookies et autorisations</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Navigateurs mobile</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><strong>Chrome Mobile :</strong> Menu &gt; Paramètres &gt; Paramètres du site</li>
                      <li><strong>Safari iOS :</strong> Réglages &gt; Safari &gt; Confidentialité</li>
                      <li><strong>Firefox Mobile :</strong> Menu &gt; Paramètres &gt; Confidentialité</li>
                      <li><strong>Samsung Internet :</strong> Menu &gt; Paramètres &gt; Sites web</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Questions sur les cookies ?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Notre équipe est disponible pour répondre à toutes vos questions concernant l'utilisation des cookies
            </p>
            <Button size="lg" variant="secondary">
              Nous contacter
            </Button>
            <p className="mt-6 text-sm opacity-75">
              <strong>Dernière mise à jour :</strong> 5 septembre 2024
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Cookies;