
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "GeoDataHub a révolutionné notre approche de l'exploration minière. L'analyse prédictive nous a permis d'identifier des zones à haut potentiel que nous n'aurions jamais considérées autrement.",
      author: "Marie Dupont",
      position: "Directrice Exploration, MineTech Global",
      avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      content: "Après avoir essayé plusieurs solutions, GeoDataHub est la seule plateforme qui répond vraiment à nos besoins en matière d'intégration de données hétérogènes. Le gain en productivité est considérable.",
      author: "Thomas Laurent",
      position: "Géologue principal, EnergyCorp",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      content: "La visualisation 3D de GeoDataHub a transformé notre façon de communiquer avec les parties prenantes. Nous pouvons désormais présenter des modèles complexes de façon claire et intuitive.",
      author: "Sophie Bernard",
      position: "Responsable SIG, Bureau d'études GéoConseil",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez comment GeoDataHub aide des organisations de tous secteurs à exploiter 
            pleinement le potentiel de leurs données géoscientifiques.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl p-6 shadow-md border"
            >
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
              
              <blockquote className="text-muted-foreground italic">
                "{testimonial.content}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium">
            Rejoignez plus de 200+ entreprises qui utilisent GeoDataHub au quotidien
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-8 opacity-70">
            {["Company A", "Company B", "Company C", "Company D", "Company E"].map((company, index) => (
              <div key={index} className="text-2xl font-bold text-muted-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
