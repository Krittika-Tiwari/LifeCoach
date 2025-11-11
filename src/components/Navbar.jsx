import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <div className="relative">
              <img 
                src="/images/logo.jpg" 
                alt="Sunita Life Coach" 
                className="h-12 w-12 rounded-full shadow-lg ring-2 ring-violet-500/30 hover:ring-violet-500/60 transition-all duration-300 hover:scale-105"
                style={{
                  filter: 'drop-shadow(0 4px 8px rgba(139, 92, 246, 0.3))',
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(99, 102, 241, 0.1))',
                }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500/20 to-transparent pointer-events-none"></div>
            </div>
            <h1 className="text-3xl font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent font-lora tracking-wide hover:from-violet-500 hover:to-indigo-500 transition-all duration-300">
              Sunita
            </h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-10 font-lora font-medium text-lg">
            <li>
              <a href="#home" className="text-foreground hover:text-primary transition-colors duration-200 capitalize relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-foreground hover:text-primary transition-colors duration-200 capitalize relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200">
                About Me
              </a>
            </li>
            <li>
              <a href="#services" className="text-foreground hover:text-primary transition-colors duration-200 capitalize relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200">
                Services
              </a>
            </li>
            <li>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors duration-200 capitalize relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors duration-200 capitalize relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors duration-200 capitalize relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200">
                Contact Me
              </a>
            </li>
          </ul>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              size="lg" 
              className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0 px-6 py-2.5 font-medium shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Book a Session
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="h-10 w-10"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        )}>
          <ul className="space-y-4 pt-6 font-lora text-lg">
            <li>
              <a href="#home" className="block text-foreground hover:text-primary py-2 transition-colors duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block text-foreground hover:text-primary py-2 transition-colors duration-200">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="block text-foreground hover:text-primary py-2 transition-colors duration-200">
                Services
              </a>
            </li>
            <li>
              <a href="#testimonials" className="block text-foreground hover:text-primary py-2 transition-colors duration-200">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#faq" className="block text-foreground hover:text-primary py-2 transition-colors duration-200">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="block text-foreground hover:text-primary py-2 transition-colors duration-200">
                Contact
              </a>
            </li>
            <li className="pt-4">
              <Button 
                size="lg" 
                className="w-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0 font-medium shadow-lg"
              >
                Book a Session
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;