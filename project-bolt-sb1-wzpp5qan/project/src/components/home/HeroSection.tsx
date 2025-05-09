import React from 'react';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/163398/football-american-game-runner-163398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90" />
      </div>
      
      {/* Content */}
      <div className="relative h-full container mx-auto flex flex-col justify-center items-start px-4 sm:px-6">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary text-white">
              GAME CHANGER
            </span>
          </div>
          
          <h1 className="heading-1 text-white mb-6">
            Experience Rugby Like <span className="text-primary">Never Before</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            The MMMNTM app connects you with your favorite Kenyan rugby teams, players, and fellow fans. Get live updates, exclusive content, and interactive experiences all in one place.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="bg-gray-800/50 text-white border-gray-600 hover:bg-gray-700/50">
              Explore Features
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">15+</p>
              <p className="text-gray-400">Rugby Teams</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">50K+</p>
              <p className="text-gray-400">Active Fans</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">200+</p>
              <p className="text-gray-400">Live Matches</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">24/7</p>
              <p className="text-gray-400">Rugby Content</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-slow">
        <span className="text-white mb-2 text-sm">Scroll Down</span>
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}