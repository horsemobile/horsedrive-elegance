import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, AlertTriangle, Shield, Gavel } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CGU = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4">
                <FileText className="w-4 h-4 mr-2" />
                {t('cgu.badge')}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {t('cgu.title')}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {t('cgu.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8">

              {/* Introduction */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    {t('cgu.preamble.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {t('cgu.preamble.paragraph1')}
                  </p>
                  <p className="text-muted-foreground">
                    {t('cgu.preamble.paragraph2')}
                  </p>
                  <p className="text-muted-foreground">
                    {t('cgu.preamble.paragraph3')}
                  </p>
                </CardContent>
              </Card>

              {/* Definitions */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Définitions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Site</h4>
                    <p className="text-muted-foreground">Le site web horsemobil.fr et l'ensemble de ses pages.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Utilisateur</h4>
                    <p className="text-muted-foreground">Toute personne physique ou morale qui accède au site et l'utilise.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Services</h4>
                    <p className="text-muted-foreground">L'ensemble des prestations proposées par HORSEMOBIL (vente, aménagement, conseil, etc.).</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Contenu</h4>
                    <p className="text-muted-foreground">Tous les éléments présents sur le site : textes, images, vidéos, sons, logos, etc.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Access */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Accès au site</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. Tous les frais supportés par l'utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont exclusivement à sa charge.
                  </p>
                  <p className="text-muted-foreground">
                    HORSEMOBIL se réserve le droit de suspendre, limiter ou interrompre l'accès au site pour des raisons de maintenance, de mise à jour ou pour tout autre motif d'ordre technique.
                  </p>
                  <p className="text-muted-foreground">
                    L'accès au site peut être interrompu en cas de force majeure, panne informatique, panne de réseau, etc.
                  </p>
                </CardContent>
              </Card>

              {/* Use */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Utilisation du site
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Utilisation autorisée</h4>
                    <p className="text-muted-foreground">
                      Le site est destiné à un usage personnel et non commercial. Vous pouvez consulter les pages, imprimer les contenus pour votre usage personnel et nous contacter via les moyens mis à disposition.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Utilisations interdites</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Utilisation du site à des fins commerciales sans autorisation</li>
                      <li>Reproduction, copie ou distribution du contenu sans autorisation</li>
                      <li>Modification, adaptation ou création d'œuvres dérivées</li>
                      <li>Tentative d'accès non autorisé aux systèmes</li>
                      <li>Utilisation de robots, scripts ou autres moyens automatisés</li>
                      <li>Diffusion de contenus illégaux, diffamatoires ou nuisibles</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Content */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Contenu du site</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    HORSEMOBIL s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, HORSEMOBIL ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                  </p>
                  <p className="text-muted-foreground">
                    Toutes les informations indiquées sur le site sont données à titre indicatif, et sont susceptibles d'évoluer. Par ailleurs, les renseignements figurant sur le site ne sont pas exhaustifs.
                  </p>
                </CardContent>
              </Card>

              {/* User Data */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Données fournies par l'utilisateur</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    L'utilisateur s'engage à fournir des informations exactes et sincères lors de toute communication avec HORSEMOBIL (formulaires de contact, demandes de devis, etc.).
                  </p>
                  <p className="text-muted-foreground">
                    L'utilisateur s'engage à mettre à jour ces informations en cas de modification et à ne pas usurper l'identité d'un tiers.
                  </p>
                  <p className="text-muted-foreground">
                    Pour plus d'informations sur le traitement de vos données personnelles, consultez notre <a href="/confidentialite" className="text-primary hover:underline">politique de confidentialité</a>.
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
                    Le contenu du site (textes, images, vidéos, logos, etc.) est protégé par les droits de propriété intellectuelle et appartient à HORSEMOBIL ou à ses partenaires.
                  </p>
                  <p className="text-muted-foreground">
                    Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de HORSEMOBIL.
                  </p>
                  <p className="text-muted-foreground">
                    Toute exploitation non autorisée du site ou de son contenu sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
                  </p>
                </CardContent>
              </Card>

              {/* Liability */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-primary" />
                    Responsabilité
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Limitation de responsabilité</h4>
                    <p className="text-muted-foreground">
                      HORSEMOBIL ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications requises, soit de l'apparition d'un bug ou d'une incompatibilité.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Responsabilité de l'utilisateur</h4>
                    <p className="text-muted-foreground">
                      L'utilisateur est seul responsable de l'utilisation qu'il fait du site et des informations qu'il consulte. Il s'engage à respecter les présentes CGU et la législation en vigueur.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* External Links */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Liens externes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Le site peut contenir des liens vers d'autres sites web. HORSEMOBIL n'exerce aucun contrôle sur ces sites et n'assume aucune responsabilité quant à leur contenu.
                  </p>
                  <p className="text-muted-foreground">
                    L'existence d'un lien vers un autre site ne constitue pas une approbation de ce site ou de son contenu par HORSEMOBIL.
                  </p>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Contact et réclamations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Pour toute question relative aux présentes CGU ou au fonctionnement du site, vous pouvez nous contacter :
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Par email : contact@horsemobil.fr</li>
                    <li>Par téléphone : +33 4 78 XX XX XX</li>
                    <li>Par courrier : HORSEMOBIL SARL, 123 Avenue des Chevaux, 69000 Lyon</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Applicable Law */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gavel className="w-5 h-5 text-primary" />
                    Droit applicable et juridiction
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Les présentes CGU sont régies par le droit français. En cas de litige, et après échec de toute tentative de recherche d'une solution amiable, les tribunaux français seront seuls compétents pour connaître de ce litige.
                  </p>
                  <p className="text-muted-foreground">
                    Pour tout litige avec un consommateur, l'utilisateur peut recourir à la médiation de la consommation ou saisir la juridiction de son lieu de résidence.
                  </p>
                </CardContent>
              </Card>

              {/* Updates */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Évolution des CGU</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    HORSEMOBIL se réserve le droit de modifier les présentes CGU à tout moment, en fonction de l'évolution de la législation ou de l'activité de l'entreprise.
                  </p>
                  <p className="text-muted-foreground">
                    Les CGU modifiées seront publiées sur le site et prennent effet immédiatement. Il appartient à l'utilisateur de consulter régulièrement les CGU pour prendre connaissance des éventuelles modifications.
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

export default CGU;