import React from 'react';
import { matches, teams } from '../../data/mockData';
import { Match, Team } from '../../types';
import Button from '../ui/Button';
import { Card, CardBody } from '../ui/Card';
import Badge from '../ui/Badge';
import { ChevronRight } from 'lucide-react';

export default function LiveMatchesSection() {
  // Get live and upcoming matches
  const liveMatches = matches.filter(match => match.status === 'live');
  const upcomingMatches = matches.filter(match => match.status === 'upcoming').slice(0, 2);
  
  // Function to find team data by ID
  const getTeam = (teamId: string): Team => {
    return teams.find(team => team.id === teamId) as Team;
  };
  
  // Format date for display
  const formatMatchDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="heading-3 text-gray-900">
            Live & Upcoming <span className="text-primary">Matches</span>
          </h2>
          <Button 
            variant="outline" 
            className="flex items-center"
            onClick={() => console.log('View all matches')}
          >
            View All <ChevronRight size={16} className="ml-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Live Matches Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">Live Now</h3>
            
            {liveMatches.length > 0 ? (
              liveMatches.map((match) => {
                const homeTeam = getTeam(match.homeTeamId);
                const awayTeam = getTeam(match.awayTeamId);
                
                return (
                  <Card key={match.id} className="mb-6 overflow-hidden border border-red-100 relative animate-pulse-slow">
                    {/* Live Indicator */}
                    <div className="absolute top-4 right-4 flex items-center">
                      <span className="animate-pulse w-3 h-3 bg-red-600 rounded-full mr-2"></span>
                      <Badge variant="error">LIVE</Badge>
                    </div>
                    
                    <CardBody>
                      <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center">
                        {/* Home Team */}
                        <div className="md:col-span-3 flex flex-col items-center md:items-end text-center md:text-right">
                          <div className="w-16 h-16 mb-2">
                            <img 
                              src={homeTeam.logo} 
                              alt={homeTeam.name} 
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <h4 className="text-lg font-bold">{homeTeam.name}</h4>
                        </div>
                        
                        {/* Score */}
                        <div className="md:col-span-1 flex flex-col items-center">
                          <div className="bg-gray-100 rounded-lg p-4 w-full text-center">
                            <div className="text-2xl font-bold">
                              {match.score?.homeTeam} - {match.score?.awayTeam}
                            </div>
                            <div className="text-sm text-gray-500">
                              70 MIN
                            </div>
                          </div>
                        </div>
                        
                        {/* Away Team */}
                        <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
                          <div className="w-16 h-16 mb-2">
                            <img 
                              src={awayTeam.logo} 
                              alt={awayTeam.name} 
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <h4 className="text-lg font-bold">{awayTeam.name}</h4>
                        </div>
                      </div>
                      
                      <div className="mt-6 text-center">
                        <p className="text-gray-600 mb-4">{match.venue}</p>
                        <Button>
                          Watch Live
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                );
              })
            ) : (
              <div className="bg-gray-100 rounded-lg p-6 text-center">
                <p className="text-gray-600">No live matches at the moment</p>
                <p className="text-gray-500 text-sm mt-2">Check back later for live updates</p>
              </div>
            )}
          </div>
          
          {/* Upcoming Matches */}
          <div>
            <h3 className="text-xl font-bold mb-4">Coming Up</h3>
            
            {upcomingMatches.map((match) => {
              const homeTeam = getTeam(match.homeTeamId);
              const awayTeam = getTeam(match.awayTeamId);
              
              return (
                <Card key={match.id} className="mb-4 hover:shadow-md transition-shadow">
                  <CardBody>
                    <p className="text-sm text-gray-500 mb-3">
                      {formatMatchDate(match.date)}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 mr-2">
                          <img 
                            src={homeTeam.logo} 
                            alt={homeTeam.name} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="font-semibold">{homeTeam.name}</span>
                      </div>
                      <span className="text-sm font-bold">VS</span>
                      <div className="flex items-center">
                        <span className="font-semibold">{awayTeam.name}</span>
                        <div className="w-10 h-10 ml-2">
                          <img 
                            src={awayTeam.logo} 
                            alt={awayTeam.name} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      {match.venue}
                    </div>
                    
                    <div className="mt-4 flex justify-between">
                      <Button variant="outline" size="sm">
                        Set Reminder
                      </Button>
                      <Button variant="primary" size="sm">
                        Get Tickets
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              );
            })}
            
            {upcomingMatches.length === 0 && (
              <div className="bg-gray-100 rounded-lg p-6 text-center">
                <p className="text-gray-600">No upcoming matches scheduled</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}