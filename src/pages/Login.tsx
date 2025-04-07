
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally authenticate with your backend
    // This is just a simulation
    toast({
      title: "Connexion en cours",
      description: "Vérification de vos identifiants...",
    });
    
    // Simulate API call
    setTimeout(() => {
      if (email && password) {
        toast({
          title: "Connexion réussie",
          description: "Bienvenue sur GeoDataHub!",
        });
        // Redirect would happen here
      } else {
        toast({
          title: "Erreur de connexion",
          description: "Veuillez vérifier vos identifiants et réessayer.",
          variant: "destructive",
        });
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        {/* Left side - Login form */}
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
              <h1 className="text-3xl font-bold mb-2">Connectez-vous à votre compte</h1>
              <p className="text-muted-foreground">
                Entrez vos identifiants ci-dessous pour accéder à votre espace GeoDataHub
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Adresse email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="votre@email.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Link to="/reset-password" className="text-sm text-geo-blue hover:underline">
                    Mot de passe oublié?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="remember" 
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(!!checked)}
                  />
                  <Label htmlFor="remember" className="text-sm cursor-pointer">Se souvenir de moi</Label>
                </div>
              </div>
              
              <Button type="submit" className="w-full">
                Se connecter
              </Button>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                Pas encore de compte? {' '}
                <Link to="/register" className="text-geo-blue hover:underline font-medium">
                  S'inscrire
                </Link>
              </p>
            </div>
          </div>
        </div>
        
        {/* Right side - Image */}
        <div className="hidden lg:block lg:w-1/2 bg-muted">
          <div className="h-full flex flex-col items-center justify-center p-12">
            <div className="max-w-md text-center">
              <h2 className="text-2xl font-bold mb-4">Centralisez vos données géoscientifiques</h2>
              <p className="text-muted-foreground">
                Accédez à tous vos projets, visualisez vos données et collaborez avec votre équipe, le tout depuis une seule plateforme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
