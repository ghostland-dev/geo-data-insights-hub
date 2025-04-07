
import React from 'react';
import { Button } from "@/components/ui/button";
import { Database, BarChartBig, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-topo-pattern">
      {/* Abstract shapes */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-geo-teal/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-geo-blue/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              La plateforme intelligente pour vos
              <span className="geo-text-gradient"> données géoscientifiques</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Centralisez, analysez et valorisez vos données géologiques avec notre solution SaaS innovante. 
              Optimisez vos décisions grâce à des outils d'analyse avancés et une gestion intuitive.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg">Démarrer l'essai gratuit</Button>
              <Button size="lg" variant="outline">
                Découvrir la démo
              </Button>
            </div>
            
            <div className="flex items-center space-x-2 pt-4 text-sm text-muted-foreground">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Aucune carte de crédit requise</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-gradient-to-br from-geo-blue/10 via-geo-teal/10 to-geo-green/10 backdrop-blur-sm rounded-xl p-2 border shadow-xl animate-float">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Carte géologique" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
              
              {/* Floating UI Elements */}
              <div className="absolute -top-10 -right-8 bg-white p-3 rounded-lg shadow-lg flex items-center space-x-3">
                <Database className="h-6 w-6 text-geo-blue" />
                <div>
                  <p className="font-semibold">Données intégrées</p>
                  <p className="text-sm text-muted-foreground">Multi-formats</p>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -left-8 bg-white p-3 rounded-lg shadow-lg flex items-center space-x-3">
                <BarChartBig className="h-6 w-6 text-geo-teal" />
                <div>
                  <p className="font-semibold">Analyses avancées</p>
                  <p className="text-sm text-muted-foreground">AI & ML</p>
                </div>
              </div>
              
              <div className="absolute -bottom-5 right-10 bg-white p-3 rounded-lg shadow-lg flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-geo-green" />
                <div>
                  <p className="font-semibold">Visualisation 3D</p>
                  <p className="text-sm text-muted-foreground">Interactive</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
