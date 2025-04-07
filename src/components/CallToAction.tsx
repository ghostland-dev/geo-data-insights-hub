
import React from 'react';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl geo-gradient">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-20 bg-topo-pattern"></div>
          
          <div className="relative p-8 md:p-12 lg:p-16 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à transformer vos données géoscientifiques en insights ?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Rejoignez les entreprises leaders qui utilisent déjà GeoDataHub pour accélérer leurs projets
                et prendre des décisions basées sur des données fiables.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-geo-blue hover:bg-white/90">
                  Démarrer l'essai gratuit
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Demander une démo
                </Button>
              </div>
              
              <div className="mt-8 text-sm opacity-90">
                Pas de carte de crédit requise • Annulez à tout moment • Support 24/7
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
