import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Eye, Lock, Database, Users, Mail } from 'lucide-react';

const Confidentialite = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4">
                <Shield className="w-4 h-4 mr-2" />
                Protection des données
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Politique de Confidentialité
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                HORSEMOBIL s'engage à protéger votre vie privée et vos données personnelles
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8">

              {/* Introduction */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-primary" />
                    Introduction
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    La présente politique de confidentialité décrit comment HORSEMOBIL collecte, utilise et protège vos informations personnelles lorsque vous utilisez notre site web ou nos services.
                  </p>
                  <p className="text-muted-foreground">
                    En utilisant notre site web, vous acceptez les pratiques décrites dans cette politique de confidentialité. Si vous n'acceptez pas ces pratiques, veuillez ne pas utiliser notre site.
                  </p>
                  <p className="text-muted-foreground">
                    Cette politique est conforme au Règlement Général sur la Protection des Données (RGPD) et à la loi française Informatique et Libertés.
                  </p>
                </CardContent>
              </Card>

              {/* Data Controller */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Responsable du traitement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Le responsable du traitement des données personnelles est :<br /><br />
                    <strong>HORSEMOBIL SARL</strong><br />
                    123 Avenue des Chevaux<br />
                    69000 Lyon, France<br />
                    Email : contact@horsemobil.fr<br />
                    Téléphone : +33 4 78 XX XX XX
                  </p>
                </CardContent>
              </Card>

              {/* Data Collection */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary" />
                    Collecte des données
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Données collectées automatiquement</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Adresse IP</li>
                      <li>Type de navigateur et version</li>
                      <li>Système d'exploitation</li>
                      <li>Pages visitées et temps passé</li>
                      <li>Date et heure des visites</li>
                      <li>Site web de référence</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Données fournies volontairement</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Nom et prénom</li>
                      <li>Adresse email</li>
                      <li>Numéro de téléphone</li>
                      <li>Adresse postale</li>
                      <li>Informations sur votre projet</li>
                      <li>Messages et commentaires</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Purpose of Processing */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Finalités du traitement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">Nous utilisons vos données personnelles pour :</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Répondre à vos demandes de devis et d'information</li>
                    <li>Vous contacter concernant nos services</li>
                    <li>Gérer votre relation client</li>
                    <li>Améliorer nos services et notre site web</li>
                    <li>Vous envoyer des informations commerciales (avec votre consentement)</li>
                    <li>Respecter nos obligations légales</li>
                    <li>Analyser l'utilisation de notre site web</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Legal Basis */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Base légale du traitement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Consentement</h4>
                    <p className="text-muted-foreground">Pour l'envoi de communications marketing et l'utilisation de cookies non essentiels.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Exécution d'un contrat</h4>
                    <p className="text-muted-foreground">Pour traiter vos commandes et gérer la relation contractuelle.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Intérêt légitime</h4>
                    <p className="text-muted-foreground">Pour améliorer nos services, analyser l'utilisation du site et assurer la sécurité.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Obligation légale</h4>
                    <p className="text-muted-foreground">Pour respecter nos obligations comptables, fiscales et réglementaires.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Data Retention */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Durée de conservation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li><strong>Données clients :</strong> 5 ans après la fin de la relation commerciale</li>
                    <li><strong>Demandes de devis :</strong> 3 ans à compter de la demande</li>
                    <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                    <li><strong>Données marketing :</strong> 3 ans à compter du dernier contact</li>
                    <li><strong>Données comptables :</strong> 10 ans conformément aux obligations légales</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Data Sharing */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Partage des données</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Nous ne vendons, ne louons, ni ne partageons vos données personnelles avec des tiers, sauf dans les cas suivants :
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Avec votre consentement explicite</li>
                    <li>Avec nos prestataires de services (hébergement, maintenance, support client)</li>
                    <li>Pour respecter une obligation légale</li>
                    <li>Pour protéger nos droits et notre sécurité</li>
                    <li>En cas de fusion, acquisition ou cession d'activité</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Security */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="w-5 h-5 text-primary" />
                    Sécurité des données
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre :
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>L'accès non autorisé</li>
                    <li>La modification, la divulgation ou la destruction</li>
                    <li>La perte accidentelle</li>
                  </ul>
                  <p className="text-muted-foreground">
                    Ces mesures incluent le chiffrement des données, l'authentification, les pare-feu, les sauvegardes régulières et la formation de notre personnel.
                  </p>
                </CardContent>
              </Card>

              {/* Rights */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Vos droits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">Conformément au RGPD, vous disposez des droits suivants :</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-1">Droit d'accès</h4>
                      <p className="text-sm text-muted-foreground">Obtenir une copie de vos données personnelles</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Droit de rectification</h4>
                      <p className="text-sm text-muted-foreground">Corriger des données inexactes ou incomplètes</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Droit d'effacement</h4>
                      <p className="text-sm text-muted-foreground">Demander la suppression de vos données</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Droit à la portabilité</h4>
                      <p className="text-sm text-muted-foreground">Récupérer vos données dans un format structuré</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Droit d'opposition</h4>
                      <p className="text-sm text-muted-foreground">Vous opposer au traitement de vos données</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Droit de limitation</h4>
                      <p className="text-sm text-muted-foreground">Limiter le traitement de vos données</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Exercise Rights */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Exercer vos droits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Pour exercer vos droits, contactez-nous :
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Par email : contact@horsemobil.fr</li>
                    <li>Par courrier : HORSEMOBIL SARL, 123 Avenue des Chevaux, 69000 Lyon</li>
                  </ul>
                  <p className="text-muted-foreground">
                    Nous vous répondrons dans un délai maximum d'un mois. Une pièce d'identité pourra vous être demandée pour vérifier votre identité.
                  </p>
                  <p className="text-muted-foreground">
                    Vous avez également le droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés).
                  </p>
                </CardContent>
              </Card>

              {/* Cookies */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Cookies et technologies similaires</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Notre site utilise des cookies et technologies similaires. Pour plus d'informations, consultez notre <a href="/cookies" className="text-primary hover:underline">politique de cookies</a>.
                  </p>
                </CardContent>
              </Card>

              {/* Updates */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Modifications de cette politique</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour.
                  </p>
                  <p className="text-muted-foreground">
                    Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques en matière de confidentialité.
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

export default Confidentialite;