
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "Qu'est-ce que GeoDataHub exactement ?",
      answer: "GeoDataHub est une plateforme SaaS (Software as a Service) qui permet aux professionnels des géosciences de centraliser, analyser et visualiser leurs données géologiques, géophysiques et environnementales. Notre solution combine stockage cloud, outils d'analyse avancés et fonctionnalités collaboratives pour optimiser la gestion de vos projets."
    },
    {
      question: "Quels formats de données sont pris en charge ?",
      answer: "GeoDataHub prend en charge une large gamme de formats de données géoscientifiques, notamment : données sismiques (SEG-Y, SEG-D), fichiers SIG (Shapefile, GeoJSON, KML), données de forage (LAS, LIS), images satellites (GeoTIFF), données géochimiques (CSV, Excel), modèles 3D (OBJ, GOCAD) et bien d'autres. Si vous utilisez un format spécifique non listé, contactez-nous pour vérifier sa compatibilité."
    },
    {
      question: "Comment fonctionne la période d'essai gratuit ?",
      answer: "Notre essai gratuit de 14 jours vous donne un accès complet à toutes les fonctionnalités de la formule Professional. Aucune carte de crédit n'est requise pour commencer. À la fin de la période d'essai, vous pouvez choisir l'abonnement qui correspond le mieux à vos besoins ou continuer avec un compte gratuit limité."
    },
    {
      question: "Mes données sont-elles sécurisées sur votre plateforme ?",
      answer: "Absolument. La sécurité est notre priorité. Toutes les données sont chiffrées au repos et en transit avec des protocoles de pointe. Nous utilisons l'authentification multi-facteurs, des audits de sécurité réguliers et notre infrastructure est conforme aux normes ISO 27001. De plus, vous restez propriétaire de vos données à tout moment et pouvez les exporter ou les supprimer selon vos besoins."
    },
    {
      question: "Puis-je intégrer GeoDataHub avec mes outils existants ?",
      answer: "Oui, GeoDataHub offre une API REST complète et des connecteurs spécifiques pour les logiciels couramment utilisés dans le secteur des géosciences, comme ArcGIS, QGIS, Petrel, Leapfrog et bien d'autres. Notre équipe peut également développer des connecteurs personnalisés pour vos outils spécifiques si nécessaire."
    },
    {
      question: "Comment fonctionne le modèle de tarification ?",
      answer: "Notre modèle de tarification est basé sur un abonnement mensuel ou annuel, avec trois formules principales : Basic, Professional et Enterprise. Les prix varient en fonction du volume de stockage, du nombre d'utilisateurs et des fonctionnalités avancées incluses. Nous proposons également des remises pour les institutions académiques et les ONG. Consultez notre page Tarifs pour plus de détails ou contactez-nous pour une offre personnalisée."
    },
    {
      question: "Quel type de support technique est disponible ?",
      answer: "Tous nos abonnements incluent un support par email avec un temps de réponse garanti. Les formules Professional et Enterprise bénéficient également d'un support prioritaire par téléphone et chat en direct. Les clients Enterprise disposent d'un gestionnaire de compte dédié et d'un support 24/7. Nous proposons aussi des sessions de formation et de la documentation complète pour tous nos utilisateurs."
    },
    {
      question: "GeoDataHub peut-il fonctionner hors ligne ?",
      answer: "Bien que GeoDataHub soit principalement une solution cloud, nous proposons une application de collecte de données terrain qui fonctionne hors ligne et synchronise les données une fois la connexion rétablie. Pour les clients Enterprise, nous pouvons également discuter de solutions hybrides ou on-premise adaptées à vos contraintes spécifiques."
    },
    {
      question: "Comment puis-je migrer mes données existantes vers GeoDataHub ?",
      answer: "Nous offrons plusieurs options de migration : import direct via notre interface web, transfert par lot via FTP sécurisé, ou service de migration assistée par notre équipe technique. Pour les grands volumes de données ou les structures complexes, nous proposons un service de migration clé en main dans le cadre de notre offre d'onboarding."
    },
    {
      question: "Proposez-vous des solutions personnalisées pour les grandes organisations ?",
      answer: "Absolument. Notre formule Enterprise inclut des possibilités de personnalisation étendues, notamment : développement de modules spécifiques, intégrations sur mesure, déploiements privés, formations dédiées et SLA personnalisés. Contactez notre équipe commerciale pour discuter de vos besoins spécifiques."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Questions fréquentes
              </h1>
              
              <p className="text-lg text-muted-foreground mb-12">
                Vous trouverez ci-dessous les réponses aux questions les plus fréquemment posées
                sur GeoDataHub et nos services. Si vous ne trouvez pas l'information que vous 
                cherchez, n'hésitez pas à nous contacter directement.
              </p>
              
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-medium text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <div className="mt-16 p-8 bg-muted rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-4">Vous avez d'autres questions ?</h3>
                <p className="mb-6 text-muted-foreground">
                  Notre équipe est prête à vous aider et à répondre à toutes vos interrogations.
                </p>
                <Button asChild>
                  <a href="/contact">Contactez-nous</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
