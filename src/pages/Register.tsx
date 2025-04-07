
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptTerms) {
      toast({
        title: "Conditions requises",
        description: "Veuillez accepter les conditions d'utilisation pour continuer.",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would normally register with your backend
    // This is just a simulation
    toast({
      title: "Création de compte en cours",
      description: "Veuillez patienter...",
    });
    
    // Simulate API call
    setTimeout(() => {
      if (email && password && firstName && lastName) {
        toast({
          title: "Compte créé avec succès",
          description: "Bienvenue sur GeoDataHub! Vous allez recevoir un email de confirmation.",
        });
        // Redirect would happen here
      } else {
        toast({
          title: "Erreur lors de l'inscription",
          description: "Veuillez vérifier vos informations et réessayer.",
          variant: "destructive",
        });
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        {/* Left side - Image */}
        <div className="hidden lg:block lg:w-1/2 bg-muted">
          <div className="h-full flex flex-col items-center justify-center p-12">
            <div className="max-w-md text-center">
              <h2 className="text-2xl font-bold mb-4">Révolutionnez votre approche des données géoscientifiques</h2>
              <p className="text-muted-foreground">
                Rejoignez des centaines d'organisations qui utilisent déjà GeoDataHub pour optimiser leurs projets et prendre des décisions éclairées.
              </p>
            </div>
          </div>
        </div>
        
        {/* Right side - Registration form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="mb-12 text-center">
              <Link to="/" className="inline-flex items-center">
                <div className="h-10 w-10 rounded-md bg-gradient-to-r from-geo-blue to-geo-teal flex items-center justify-center text-white font-bold text-xl mr-2">
                  G
                </div>
                <span className="font-bold text-xl tracking-tight">GeoData<span className="text-geo-blue">Hub</span></span>
              </Link>
            </div>
            
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Créez votre compte</h1>
              <p className="text-muted-foreground">
                Commencez votre essai gratuit de 14 jours, aucune carte de crédit n'est requise
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input 
                    id="firstName" 
                    placeholder="Prénom" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Nom" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Adresse email professionnelle</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="votre@entreprise.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Créer un mot de passe</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
                <p className="text-sm text-muted-foreground">
                  Minimum 8 caractères avec au moins une lettre majuscule et un chiffre
                </p>
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={acceptTerms}
                  onCheckedChange={(checked) => setAcceptTerms(!!checked)}
                  className="mt-1"
                />
                <Label htmlFor="terms" className="text-sm">
                  J'accepte les{" "}
                  <Link to="/terms" className="text-geo-blue hover:underline">
                    Conditions d'utilisation
                  </Link>{" "}
                  et la{" "}
                  <Link to="/privacy" className="text-geo-blue hover:underline">
                    Politique de confidentialité
                  </Link>
                </Label>
              </div>
              
              <Button type="submit" className="w-full">
                Créer mon compte
              </Button>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                Vous avez déjà un compte? {' '}
                <Link to="/login" className="text-geo-blue hover:underline font-medium">
                  Se connecter
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
