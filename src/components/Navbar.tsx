
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-md bg-gradient-to-r from-geo-blue to-geo-teal flex items-center justify-center text-white font-bold text-xl mr-2">
              G
            </div>
            <span className="font-bold text-xl tracking-tight">GeoData<span className="text-geo-blue">Hub</span></span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
              Fonctionnalités
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">
              Abonnements
            </a>
            <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
              À propos
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">Se connecter</Button>
            <Button>Essai Gratuit</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors py-2">
              Fonctionnalités
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors py-2">
              Abonnements
            </a>
            <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors py-2">
              À propos
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors py-2">
              Contact
            </a>
            <div className="flex flex-col space-y-3 pt-2">
              <Button variant="outline">Se connecter</Button>
              <Button>Essai Gratuit</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
