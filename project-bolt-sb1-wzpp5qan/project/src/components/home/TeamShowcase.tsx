import React, { useState } from 'react';
import { teams } from '../../data/mockData';
import { Team } from '../../types';
import Button from '../ui/Button';

export default function TeamShowcase() {
  const [activeTeam, setActiveTeam] = useState<Team>(teams[0]);
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">
            Follow Your <span className="text-primary">Favorite Teams</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with the top Kenyan rugby teams, get exclusive updates, and support your heroes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Team Details */}
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold mb-4">{activeTeam.name}</h3>
            <p className="text-gray-600 mb-8">
              {activeTeam.description}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="text-sm text-gray-500">Founded</span>
                <p className="text-xl font-bold">{activeTeam.foundedYear}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="text-sm text-gray-500">Home Ground</span>
                <p className="text-xl font-bold">Rugby Stadium</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="text-sm text-gray-500">League Titles</span>
                <p className="text-xl font-bold">12</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="text-sm text-gray-500">Key Players</span>
                <p className="text-xl font-bold">24</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button variant="primary">
                Follow Team
              </Button>
              <Button variant="outline">
                Team Details
              </Button>
            </div>
          </div>
          
          {/* Team Logo and Selection */}
          <div className="order-1 lg:order-2">
            <div className="flex justify-center mb-8">
              <div 
                className="w-64 h-64 rounded-full overflow-hidden border-8"
                style={{ borderColor: activeTeam.primaryColor }}
              >
                <img 
                  src={activeTeam.logo} 
                  alt={activeTeam.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {teams.map((team) => (
                <button
                  key={team.id}
                  className={`w-16 h-16 rounded-full overflow-hidden transition-all duration-300 ${
                    activeTeam.id === team.id 
                      ? 'border-4 scale-110' 
                      : 'border-2 opacity-70 hover:opacity-100'
                  }`}
                  style={{ borderColor: team.primaryColor }}
                  onClick={() => setActiveTeam(team)}
                >
                  <img 
                    src={team.logo} 
                    alt={team.name} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}