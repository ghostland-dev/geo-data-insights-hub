
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "299€",
      period: "/mois",
      description: "Pour les petites équipes et projets simples",
      features: [
        "Stockage limité à 100 Go",
        "3 utilisateurs inclus",
        "Fonctionnalités essentielles",
        "Import multi-format standard",
        "Visualisation 2D",
        "Support par email",
      ],
      buttonText: "Commencer l'essai gratuit",
      isPopular: false,
      buttonVariant: "outline" as const,
    },
    {
      name: "Professional",
      price: "799€",
      period: "/mois",
      description: "Pour les équipes professionnelles et projets complexes",
      features: [
        "Stockage étendu à 1 To",
        "10 utilisateurs inclus",
        "Toutes les fonctionnalités Basic +",
        "Analyse de données avancée",
        "Visualisation 3D interactive",
        "API REST complète",
        "Support prioritaire",
      ],
      buttonText: "Commencer l'essai gratuit",
      isPopular: true,
      buttonVariant: "default" as const,
    },
    {
      name: "Enterprise",
      price: "Sur mesure",
      period: "",
      description: "Pour les grandes organisations avec besoins spécifiques",
      features: [
        "Stockage illimité",
        "Utilisateurs illimités",
        "Toutes les fonctionnalités Professional +",
        "Déploiement private cloud possible",
        "Services de consulting inclus",
        "SLA personnalisé",
        "Support technique dédié 24/7",
        "Formations sur mesure",
      ],
      buttonText: "Contacter l'équipe commerciale",
      isPopular: false,
      buttonVariant: "outline" as const,
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-topo-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Un plan adapté à chaque besoin
          </h2>
          <p className="text-lg text-muted-foreground">
            Choisissez l'offre qui correspond le mieux à vos objectifs et à votre budget.
            Tous nos plans incluent un essai gratuit de 14 jours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-background rounded-xl p-8 shadow-lg border overflow-hidden
                ${plan.isPopular ? 'ring-2 ring-geo-teal shadow-xl scale-105 md:scale-105 z-10' : ''}
              `}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="text-xs font-semibold bg-geo-teal text-white py-1 px-3 rounded-bl-lg">
                    Recommandé
                  </div>
                </div>
              )}
              
              <div className="mb-5">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="ml-1 text-base text-muted-foreground">{plan.period}</span>
                </div>
                <p className="mt-3 text-muted-foreground">{plan.description}</p>
              </div>
              
              <ul className="mt-6 space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-geo-teal shrink-0 mr-3 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full" 
                variant={plan.buttonVariant}
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Vous avez des besoins spécifiques ou des questions sur nos forfaits ?
          </p>
          <Button variant="outline">
            Contactez notre équipe commerciale
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
