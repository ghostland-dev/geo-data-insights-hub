
import React from 'react';
import { Database, BarChart2, Map, Share2, Code } from 'lucide-react';

const Features = () => {
  const featuresData = [
    {
      icon: <Database className="h-7 w-7" />,
      title: "Gestion centralisée",
      description: "Importez et normalisez tous vos formats de données géoscientifiques dans une plateforme unifiée et sécurisée."
    },
    {
      icon: <BarChart2 className="h-7 w-7" />,
      title: "Analyse intelligente",
      description: "Exploitez vos données avec des algorithmes de machine learning pour détecter des anomalies et générer des prédictions."
    },
    {
      icon: <Map className="h-7 w-7" />,
      title: "Visualisation interactive",
      description: "Explorez vos données via des cartes multi-couches et des modèles 3D pour une prise de décision optimale."
    },
    {
      icon: <Share2 className="h-7 w-7" />,
      title: "Collaboration efficace",
      description: "Partagez, annotez et travaillez ensemble sur vos projets avec une gestion fine des droits d'accès."
    },
    {
      icon: <Code className="h-7 w-7" />,
      title: "API & Intégration",
      description: "Connectez facilement GeoDataHub à vos outils existants grâce à notre API REST et nos webhooks."
    }
  ];

  return (
    <section id="features" className="section-padding bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Une solution complète pour vos besoins géoscientifiques
          </h2>
          <p className="text-lg text-muted-foreground">
            Notre plateforme intègre toutes les fonctionnalités essentielles pour transformer
            vos données brutes en insights stratégiques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl p-6 shadow-md border hover:shadow-lg transition-shadow"
            >
              <div className="h-12 w-12 rounded-lg geo-gradient flex items-center justify-center text-white mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-geo-blue/10 to-geo-teal/10 rounded-2xl p-8 border shadow-inner">
          <div className="md:flex items-center justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">
                Visualisez vos données comme jamais auparavant
              </h3>
              <p className="text-muted-foreground mb-4">
                Notre moteur de rendu 3D avancé transforme vos données brutes en modèles géologiques 
                interactifs pour une compréhension approfondie des structures souterraines.
              </p>
              <ul className="space-y-2">
                {['Cartes thermiques de concentration', 'Modèles stratigraphiques', 'Analyses de teneur', 'Coupes transversales dynamiques'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-geo-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="bg-geo-blue/5 rounded-lg p-2 border shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1503594384566-461fe158e797?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Visualisation 3D" 
                  className="rounded w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
