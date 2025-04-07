
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, Shield, Database, LineChart, Users, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Features = () => {
  const featuresList = [
    {
      icon: <Database className="h-12 w-12 text-geo-blue" />,
      title: "Stockage intelligent",
      description: "Centralisez toutes vos données géoscientifiques dans un espace cloud sécurisé avec organisation automatique et indexation avancée."
    },
    {
      icon: <LineChart className="h-12 w-12 text-geo-teal" />,
      title: "Analyse avancée",
      description: "Explorez vos données avec des outils d'analyse statistique, de modélisation prédictive et de visualisation interactive."
    },
    {
      icon: <Globe className="h-12 w-12 text-geo-green" />,
      title: "Cartographie dynamique",
      description: "Visualisez vos données sur des cartes interactives multicouches avec des fonctionnalités de filtrage et d'analyse spatiale."
    },
    {
      icon: <Users className="h-12 w-12 text-geo-earth" />,
      title: "Collaboration en temps réel",
      description: "Travaillez simultanément sur les mêmes données avec votre équipe, partagez des annotations et suivez les modifications."
    },
    {
      icon: <Shield className="h-12 w-12 text-geo-blue" />,
      title: "Sécurité renforcée",
      description: "Protégez vos données avec un chiffrement de bout en bout, des contrôles d'accès granulaires et des audits de sécurité réguliers."
    }
  ];
  
  const technicalFeatures = [
    {
      title: "Formats compatibles",
      items: [
        "Données sismiques (SEG-Y, SEG-D)",
        "Fichiers SIG (Shapefile, GeoJSON, KML)",
        "Données de forage (LAS, LIS)",
        "Images satellites (GeoTIFF)",
        "Données géochimiques (CSV, Excel)",
        "Modèles 3D (OBJ, GOCAD)"
      ]
    },
    {
      title: "Intégrations",
      items: [
        "ArcGIS & QGIS",
        "Petrel & Leapfrog",
        "Power BI & Tableau",
        "Python & R",
        "AWS & Azure",
        "API REST complète"
      ]
    },
    {
      title: "Fonctionnalités avancées",
      items: [
        "Apprentissage automatique intégré",
        "Reconnaissance de patterns géologiques",
        "Analyse de tendances temporelles",
        "Alertes et notifications personnalisées",
        "Tableaux de bord configurables",
        "Rapports automatisés"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-32 pb-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Fonctionnalités puissantes pour les <span className="text-geo-blue">géosciences</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Découvrez comment GeoDataHub transforme votre façon de travailler avec les données géoscientifiques.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {featuresList.map((feature, index) => (
                <div key={index} className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                  <div className="mb-5">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Spécifications techniques</h2>
              <p className="text-muted-foreground">
                GeoDataHub prend en charge une large gamme de formats et s'intègre avec vos outils existants.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {technicalFeatures.map((section, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border">
                  <h3 className="text-xl font-bold mb-6 text-center">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-geo-blue mr-3 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Application mobile pour la collecte de données terrain</h2>
                  <p className="text-muted-foreground mb-6">
                    Notre application mobile vous permet de collecter des données sur le terrain, même en mode hors ligne, et de les synchroniser automatiquement avec votre compte GeoDataHub dès que vous retrouvez une connexion.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-geo-blue mr-3 mt-0.5" />
                      <span>Fonctionne hors ligne</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-geo-blue mr-3 mt-0.5" />
                      <span>Capture photos géolocalisées</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-geo-blue mr-3 mt-0.5" />
                      <span>Formulaires personnalisables</span>
                    </li>
                  </ul>
                  <Button>Télécharger l'application</Button>
                </div>
                <div className="bg-muted aspect-[3/4] rounded-xl flex items-center justify-center">
                  <div className="text-muted-foreground">Aperçu de l'application</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Prêt à transformer votre gestion de données ?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Rejoignez les entreprises et institutions qui ont déjà adopté GeoDataHub pour optimiser leur travail.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg">Essai gratuit de 14 jours</Button>
              <Button variant="outline" size="lg">Demander une démo</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
