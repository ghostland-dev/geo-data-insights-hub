
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message envoyé",
      description: "Nous vous contacterons dans les plus brefs délais.",
    });
    
    // Reset form
    e.currentTarget.reset();
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contactez-nous
              </h1>
              
              <p className="text-lg text-muted-foreground mb-12">
                Une question ? Un projet à discuter ? Notre équipe est là pour vous aider.
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>
              
              <div className="grid md:grid-cols-5 gap-10">
                <div className="md:col-span-3">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">Prénom</label>
                        <Input id="firstName" placeholder="Votre prénom" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">Nom</label>
                        <Input id="lastName" placeholder="Votre nom" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" placeholder="votre@email.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">Entreprise</label>
                      <Input id="company" placeholder="Nom de votre entreprise" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Sujet</label>
                      <Input id="subject" placeholder="Sujet de votre message" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea 
                        id="message" 
                        placeholder="Comment pouvons-nous vous aider ?" 
                        className="min-h-[150px]" 
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full sm:w-auto">
                      Envoyer le message
                    </Button>
                  </form>
                </div>
                
                <div className="md:col-span-2">
                  <div className="bg-muted p-6 rounded-lg h-full">
                    <h3 className="text-xl font-bold mb-6">Informations de contact</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-geo-blue shrink-0 mt-1" />
                        <div>
                          <p className="font-medium">Adresse</p>
                          <p className="text-muted-foreground mt-1">
                            123 Avenue de la Géologie<br />
                            75008 Paris, France
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Phone className="w-5 h-5 text-geo-blue shrink-0 mt-1" />
                        <div>
                          <p className="font-medium">Téléphone</p>
                          <p className="text-muted-foreground mt-1">
                            +33 (0)1 23 45 67 89
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Mail className="w-5 h-5 text-geo-blue shrink-0 mt-1" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-muted-foreground mt-1">
                            contact@geodatahub.com
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <h4 className="font-medium mb-3">Horaires d'ouverture</h4>
                      <p className="text-muted-foreground">
                        Lundi - Vendredi: 9h00 - 18h00<br />
                        Weekend: Fermé
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
