
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "49",
      billing: "par utilisateur / mois",
      description: "Idéal pour les indépendants et petites équipes",
      features: [
        "5 Go de stockage",
        "Jusqu'à 3 utilisateurs",
        "Formats standards pris en charge",
        "Visualisation 2D",
        "Exportation basique",
        "Support par email"
      ],
      cta: "Commencer l'essai gratuit",
      popular: false
    },
    {
      name: "Professional",
      price: "149",
      billing: "par utilisateur / mois",
      description: "Parfait pour les équipes et projets avancés",
      features: [
        "100 Go de stockage",
        "Jusqu'à 10 utilisateurs",
        "Tous les formats pris en charge",
        "Visualisation 2D et 3D",
        "Analyses avancées",
        "API REST complète",
        "Support prioritaire",
        "Formations incluses"
      ],
      cta: "Commencer l'essai gratuit",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Personnalisé",
      billing: "contactez-nous pour un devis",
      description: "Solution sur mesure pour les grandes organisations",
      features: [
        "Stockage illimité",
        "Utilisateurs illimités",
        "Déploiement on-premise possible",
        "Intégrations personnalisées",
        "Sécurité renforcée",
        "SLA garantis",
        "Support dédié 24/7",
        "Formations sur site"
      ],
      cta: "Contacter l'équipe commerciale",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Comment fonctionne l'essai gratuit ?",
      answer: "Notre essai gratuit de 14 jours vous donne un accès complet à toutes les fonctionnalités de la formule Professional. Aucune carte de crédit n'est requise pour commencer."
    },
    {
      question: "Puis-je changer de formule à tout moment ?",
      answer: "Oui, vous pouvez passer à une formule supérieure à tout moment. Si vous souhaitez passer à une formule inférieure, le changement prendra effet à la fin de votre cycle de facturation."
    },
    {
      question: "Y a-t-il des frais cachés ?",
      answer: "Non, tous nos prix sont transparents. Le prix affiché correspond à ce que vous payerez, sans frais supplémentaires. Pour la formule Enterprise, nous proposons un devis personnalisé en fonction de vos besoins spécifiques."
    },
    {
      question: "Proposez-vous des remises pour les institutions académiques ?",
      answer: "Oui, nous proposons des remises spéciales pour les universités, centres de recherche et ONG. Contactez notre équipe commerciale pour en savoir plus."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Tarification simple et transparente
              </h1>
              <p className="text-xl text-muted-foreground mb-10">
                Choisissez la formule qui correspond le mieux à vos besoins. 
                Tous nos plans incluent un essai gratuit de 14 jours.
              </p>
              <div className="inline-flex items-center rounded-full border p-1 mb-8">
                <Button variant="outline" className="rounded-full">Mensuel</Button>
                <Button className="rounded-full ml-1">Annuel (-20%)</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`border rounded-xl p-8 ${plan.popular ? 'ring-2 ring-geo-blue shadow-lg' : ''} relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-geo-blue text-white text-sm font-medium py-1 px-4 rounded-full">
                      Recommandé
                    </div>
                  )}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-muted-foreground mt-2">{plan.description}</p>
                  </div>
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold">
                        {plan.price === "Personnalisé" ? "" : "€"}{plan.price}
                      </span>
                      <span className="text-muted-foreground ml-2">{plan.billing}</span>
                    </div>
                  </div>
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-geo-blue mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? '' : 'bg-muted-foreground hover:bg-muted-foreground/90'}`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center">Questions fréquentes sur la tarification</h2>
              <div className="space-y-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-medium mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="border rounded-2xl p-8 md:p-12 bg-muted/30">
              <div className="md:flex items-center justify-between">
                <div className="mb-8 md:mb-0 md:mr-8">
                  <h2 className="text-3xl font-bold mb-4">Besoin d'une solution sur mesure ?</h2>
                  <p className="text-muted-foreground">
                    Contactez notre équipe commerciale pour une démonstration personnalisée et un devis adapté à vos besoins spécifiques.
                  </p>
                </div>
                <Button size="lg">Demander un devis</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
