import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, User, Bell, Search } from 'lucide-react';
import Button from '../ui/Button';

interface HeaderProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

export default function Header({ onNavigate, currentPath }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Live Matches', path: '/matches' },
    { label: 'Teams', path: '/teams' },
    { label: 'News', path: '/news' },
    { label: 'Community', path: '/community' },
    { label: 'Shop', path: '/shop' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleNavigation = (path: string) => {
    onNavigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => handleNavigation('/')}
          >
            <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center mr-2">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-bold text-gray-900">MMMNTM</span>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.path}
                className={`font-medium hover:text-primary transition-colors ${
                  currentPath === item.path ? 'text-primary' : 'text-gray-700'
                }`}
                onClick={() => handleNavigation(item.path)}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-primary">
              <Search size={20} />
            </button>
            <button className="text-gray-700 hover:text-primary">
              <Bell size={20} />
            </button>
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => handleNavigation('/login')}
            >
              Sign In
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-slide-down">
          <div className="container mx-auto py-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  className={`py-2 px-4 font-medium hover:bg-gray-100 rounded-md ${
                    currentPath === item.path ? 'text-primary' : 'text-gray-700'
                  }`}
                  onClick={() => handleNavigation(item.path)}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <Button 
                  variant="primary" 
                  fullWidth
                  onClick={() => handleNavigation('/login')}
                >
                  Sign In
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}