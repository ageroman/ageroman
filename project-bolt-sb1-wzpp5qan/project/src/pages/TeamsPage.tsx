import React from 'react';
import { teams } from '../data/mockData';
import { Card, CardBody } from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function TeamsPage() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="heading-2 text-gray-900 mb-4">
            Kenyan Rugby <span className="text-primary">Teams</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Follow your favorite Kenyan rugby teams, get the latest updates, and connect with fellow fans.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teams.map((team) => (
            <Card key={team.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div 
                className="h-48 flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${team.primaryColor}, ${team.secondaryColor})` }}
              >
                <img 
                  src={team.logo} 
                  alt={team.name} 
                  className="w-24 h-24 object-contain"
                />
              </div>
              <CardBody>
                <h3 className="text-xl font-bold mb-2">{team.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{team.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Founded: {team.foundedYear}</span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-primary border-primary hover:bg-primary/10"
                  >
                    View Team
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}