
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                À propos de <span className="geo-text-gradient">GeoDataHub</span>
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  GeoDataHub est né d'une vision simple : rendre les données géoscientifiques 
                  accessibles, exploitables et valorisables pour tous les professionnels du secteur.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4">Notre mission</h2>
                <p>
                  Notre mission est de transformer la façon dont les organisations interagissent avec leurs données 
                  géoscientifiques. En combinant stockage intelligent, outils d'analyse avancés et visualisation intuitive, 
                  nous permettons aux équipes de prendre des décisions plus rapides et plus précises.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4">Notre expertise</h2>
                <p>
                  Fondée par une équipe d'experts en géologie, science des données et développement logiciel, 
                  GeoDataHub allie une connaissance approfondie du secteur à une maîtrise des technologies 
                  les plus innovantes.
                </p>

                <div className="bg-muted rounded-xl p-8 my-12">
                  <h3 className="text-xl font-bold mb-4">Notre équipe en chiffres</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-geo-blue">15+</div>
                      <div className="text-muted-foreground">Experts</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-geo-teal">35+</div>
                      <div className="text-muted-foreground">Années d'expérience</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-geo-green">12</div>
                      <div className="text-muted-foreground">Pays</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-geo-earth">50+</div>
                      <div className="text-muted-foreground">Projets réalisés</div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-4">Notre approche</h2>
                <p>
                  Nous croyons que la technologie doit s'adapter aux besoins métier, et non l'inverse. 
                  C'est pourquoi notre plateforme est conçue en collaboration étroite avec des professionnels 
                  du terrain, garantissant des fonctionnalités parfaitement alignées avec les challenges réels 
                  rencontrés par nos utilisateurs.
                </p>

                <div className="grid md:grid-cols-3 gap-8 my-12">
                  <div className="border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-2">Innovation</h3>
                    <p className="text-muted-foreground">
                      Nous repoussons constamment les limites de ce qui est possible en matière 
                      d'analyse de données géoscientifiques.
                    </p>
                  </div>
                  <div className="border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-2">Précision</h3>
                    <p className="text-muted-foreground">
                      Nos algorithmes sont conçus pour offrir des résultats d'une fiabilité et 
                      d'une précision inégalées.
                    </p>
                  </div>
                  <div className="border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-2">Accessibilité</h3>
                    <p className="text-muted-foreground">
                      Nous rendons les analyses complexes accessibles à tous les utilisateurs, 
                      quelle que soit leur expertise technique.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-4">Notre vision</h2>
                <p>
                  Nous aspirons à créer un écosystème où les données géoscientifiques circulent librement 
                  entre les différentes parties prenantes, stimulant l'innovation et accélérant les découvertes 
                  dans des secteurs clés comme l'exploration minière, l'énergie et l'environnement.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
