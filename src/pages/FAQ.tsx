
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Mail, Phone } from 'lucide-react';

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "Qu'est-ce que GeoDataHub ?",
      answer: "GeoDataHub est une plateforme SaaS dédiée à la gestion, l'analyse et la visualisation de données géoscientifiques. Elle permet aux professionnels des sciences de la terre de centraliser leurs données, d'extraire des insights pertinents et de collaborer efficacement sur des projets communs."
    },
    {
      question: "Quels formats de données sont supportés ?",
      answer: "GeoDataHub prend en charge une large gamme de formats spécifiques aux géosciences, notamment les formats SEG-Y et SEG-D pour les données sismiques, les fichiers SIG (Shapefile, GeoJSON, KML), les données de forage (LAS, LIS), les images satellites (GeoTIFF), les données géochimiques (CSV, Excel), ainsi que différents formats de modèles 3D (OBJ, GOCAD)."
    },
    {
      question: "Comment fonctionne l'essai gratuit ?",
      answer: "Nous proposons un essai gratuit de 14 jours qui vous donne accès à toutes les fonctionnalités de notre formule Professional. Aucune carte de crédit n'est requise pour commencer. À la fin de la période d'essai, vous pouvez choisir de souscrire à l'une de nos formules ou d'arrêter l'utilisation sans frais."
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer: "Absolument. La sécurité est notre priorité. Toutes les données sont chiffrées de bout en bout, stockées dans des centres de données sécurisés et conformes aux normes industrielles (ISO 27001, SOC 2). Nous proposons également des contrôles d'accès granulaires pour vous permettre de gérer précisément qui peut voir et modifier vos données."
    },
    {
      question: "Puis-je utiliser GeoDataHub hors ligne ?",
      answer: "Oui, notre application mobile permet de collecter des données sur le terrain même sans connexion Internet. Ces données sont stockées localement et synchronisées automatiquement avec votre compte GeoDataHub dès que vous retrouvez une connexion. Pour l'accès à la plateforme complète, une connexion Internet est nécessaire."
    },
    {
      question: "Comment fonctionne la visualisation 3D ?",
      answer: "Notre moteur de visualisation 3D avancé vous permet d'explorer vos données géologiques sous tous les angles. Vous pouvez naviguer librement dans des modèles géologiques complexes, ajuster la transparence des couches, réaliser des coupes transversales dynamiques et superposer différents types de données pour une compréhension approfondie des structures souterraines."
    },
    {
      question: "Est-il possible d'intégrer GeoDataHub à nos outils existants ?",
      answer: "Tout à fait. GeoDataHub propose une API REST complète et des connecteurs prédéfinis pour les logiciels courants du secteur (ArcGIS, QGIS, Petrel, Leapfrog, etc.). Nos équipes peuvent également développer des connecteurs personnalisés pour répondre à vos besoins spécifiques d'intégration."
    },
    {
      question: "Proposez-vous des formations pour utiliser la plateforme ?",
      answer: "Oui, nous proposons plusieurs options de formation : des webinaires réguliers gratuits, une documentation complète et des tutoriels vidéo. Les formules Professional et Enterprise incluent également des sessions de formation personnalisées pour votre équipe. Notre objectif est de vous rendre autonome le plus rapidement possible."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <section className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Questions fréquemment posées
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Tout ce que vous devez savoir sur GeoDataHub et nos services
            </p>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className={`border rounded-lg transition-all duration-200 ${
                    activeQuestion === index ? "bg-muted/30" : "hover:bg-muted/10"
                  }`}
                >
                  <button
                    className="flex items-center justify-between w-full text-left p-6"
                    onClick={() => toggleQuestion(index)}
                  >
                    <h3 className="text-xl font-medium">{faq.question}</h3>
                    {activeQuestion === index ? (
                      <ChevronUp className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                    )}
                  </button>
                  {activeQuestion === index && (
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 mt-16 max-w-3xl">
          <div className="bg-muted/30 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Vous ne trouvez pas de réponse à votre question ?</h2>
            <p className="mb-8 text-muted-foreground">
              Notre équipe est disponible pour vous aider. N'hésitez pas à nous contacter.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="flex items-center gap-2" asChild>
                <a href="mailto:contact@geodatahub.com">
                  <Mail className="h-5 w-5" />
                  <span>Nous envoyer un email</span>
                </a>
              </Button>
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <a href="tel:+33123456789">
                  <Phone className="h-5 w-5" />
                  <span>Nous appeler</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
