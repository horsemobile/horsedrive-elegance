import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Scale, Building, Phone, Mail, MapPin } from 'lucide-react';

const MentionsLegales = () => {
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
                Informations légales
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Mentions Légales
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Informations légales et réglementaires concernant HORSEMOBIL
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
                    Informations sur l'entreprise
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Raison sociale</h4>
                      <p className="text-muted-foreground">HORSEMOBIL SARL</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Forme juridique</h4>
                      <p className="text-muted-foreground">Société à Responsabilité Limitée</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Capital social</h4>
                      <p className="text-muted-foreground">50 000 € entièrement libéré</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">SIRET</h4>
                      <p className="text-muted-foreground">123 456 789 00012</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">APE/NAF</h4>
                      <p className="text-muted-foreground">4511Z - Commerce de voitures et véhicules automobiles légers</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">TVA Intracommunautaire</h4>
                      <p className="text-muted-foreground">FR 12 123456789</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    Coordonnées
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Adresse du siège social</h4>
                        <p className="text-muted-foreground">
                          123 Avenue des Chevaux<br />
                          69000 Lyon<br />
                          France
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Téléphone</h4>
                        <p className="text-muted-foreground">+33 4 78 XX XX XX</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-muted-foreground">contact@horsemobil.fr</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Director Information */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Direction de la publication</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    <strong>Directeur de la publication :</strong> Jean Dubois, Gérant<br />
                    <strong>Responsable de la rédaction :</strong> Marie Martin, Responsable Marketing
                  </p>
                </CardContent>
              </Card>

              {/* Hosting Information */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Hébergement du site</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ce site est hébergé par :<br />
                    <strong>Lovable Platform</strong><br />
                    123 Hosting Street<br />
                    San Francisco, CA 94105<br />
                    États-Unis
                  </p>
                </CardContent>
              </Card>

              {/* Intellectual Property */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Propriété intellectuelle</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                  </p>
                  <p className="text-muted-foreground">
                    La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                  </p>
                  <p className="text-muted-foreground">
                    Les marques et logos figurant sur le site sont des marques déposées de HORSEMOBIL ou de ses partenaires. Toute reproduction totale ou partielle de ces marques ou logos effectuée à partir des éléments du site sans l'autorisation expresse de HORSEMOBIL est prohibée.
                  </p>
                </CardContent>
              </Card>

              {/* Liability */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Responsabilité</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
                  </p>
                  <p className="text-muted-foreground">
                    Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, à l'adresse contact@horsemobil.fr, en décrivant le problème de la manière la plus précise possible.
                  </p>
                  <p className="text-muted-foreground">
                    Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa seule responsabilité. En conséquence, HORSEMOBIL ne saurait être tenu responsable d'un quelconque dommage subi par l'ordinateur de l'utilisateur ou d'une quelconque perte de données consécutives au téléchargement.
                  </p>
                </CardContent>
              </Card>

              {/* Links */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Liens hypertextes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Des liens hypertextes peuvent être présents sur le site. L'utilisateur est averti que lors du clic sur un lien hypertexte, il quitte le site de HORSEMOBIL et n'a plus aucun contrôle sur le site sur lequel atterrit l'utilisateur.
                  </p>
                  <p className="text-muted-foreground">
                    La responsabilité de HORSEMOBIL ne pourra en aucune façon être engagée du fait de l'existence de ces liens hypertextes.
                  </p>
                  <p className="text-muted-foreground">
                    Si vous désirez créer un lien hypertexte vers notre site, il vous faut demander une autorisation préalable écrite auprès de HORSEMOBIL.
                  </p>
                </CardContent>
              </Card>

              {/* Applicable Law */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Droit applicable et juridiction compétente</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tout litige en relation avec l'utilisation du site horsemobil.fr est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Lyon.
                  </p>
                </CardContent>
              </Card>

              {/* Last Update */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Mise à jour</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Les présentes mentions légales peuvent être amenées à évoluer, notamment en cas de modifications de la réglementation applicable ou de l'évolution du site.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    <strong>Dernière mise à jour :</strong> 5 septembre 2024
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