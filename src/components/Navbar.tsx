
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-10 w-10 rounded-md bg-gradient-to-r from-geo-blue to-geo-teal flex items-center justify-center text-white font-bold text-xl mr-2">
                G
              </div>
              <span className="font-bold text-xl tracking-tight">GeoData<span className="text-geo-blue">Hub</span></span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-foreground/80 hover:text-foreground transition-colors">
              Fonctionnalités
            </Link>
            <Link to="/pricing" className="text-foreground/80 hover:text-foreground transition-colors">
              Abonnements
            </Link>
            <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
              À propos
            </Link>
            <Link to="/faq" className="text-foreground/80 hover:text-foreground transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link to="/login">Se connecter</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Essai Gratuit</Link>
            </Button>
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
            <Link to="/features" className="text-foreground/80 hover:text-foreground transition-colors py-2" onClick={() => setIsOpen(false)}>
              Fonctionnalités
            </Link>
            <Link to="/pricing" className="text-foreground/80 hover:text-foreground transition-colors py-2" onClick={() => setIsOpen(false)}>
              Abonnements
            </Link>
            <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors py-2" onClick={() => setIsOpen(false)}>
              À propos
            </Link>
            <Link to="/faq" className="text-foreground/80 hover:text-foreground transition-colors py-2" onClick={() => setIsOpen(false)}>
              FAQ
            </Link>
            <Link to="/contact" className="text-foreground/80 hover:text-foreground transition-colors py-2" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <div className="flex flex-col space-y-3 pt-2">
              <Button variant="outline" asChild onClick={() => setIsOpen(false)}>
                <Link to="/login">Se connecter</Link>
              </Button>
              <Button asChild onClick={() => setIsOpen(false)}>
                <Link to="/register">Essai Gratuit</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
