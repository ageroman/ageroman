import React, { useState } from 'react';
import { matches, teams } from '../data/mockData';
import { Match, Team } from '../types';
import { Card, CardBody } from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function MatchesPage() {
  const [activeTab, setActiveTab] = useState<'live' | 'upcoming' | 'completed'>('live');
  
  // Filter matches based on active tab
  const filteredMatches = matches.filter(match => match.status === activeTab);
  
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
    });
  };
  
  // Format time for display
  const formatMatchTime = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="heading-2 text-gray-900 mb-4">
            Rugby <span className="text-primary">Matches</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with live scores, upcoming fixtures, and match results for Kenyan rugby.
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg shadow-sm p-1">
            <button
              className={`px-6 py-2 rounded-lg text-sm font-medium ${
                activeTab === 'live' 
                  ? 'bg-primary text-white' 
                  : 'text-gray-700 hover:text-primary'
              }`}
              onClick={() => setActiveTab('live')}
            >
              Live Matches
            </button>
            <button
              className={`px-6 py-2 rounded-lg text-sm font-medium ${
                activeTab === 'upcoming' 
                  ? 'bg-primary text-white' 
                  : 'text-gray-700 hover:text-primary'
              }`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming
            </button>
            <button
              className={`px-6 py-2 rounded-lg text-sm font-medium ${
                activeTab === 'completed' 
                  ? 'bg-primary text-white' 
                  : 'text-gray-700 hover:text-primary'
              }`}
              onClick={() => setActiveTab('completed')}
            >
              Completed
            </button>
          </div>
        </div>
        
        {/* Matches List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredMatches.length > 0 ? (
            filteredMatches.map((match) => {
              const homeTeam = getTeam(match.homeTeamId);
              const awayTeam = getTeam(match.awayTeamId);
              
              return (
                <Card key={match.id} className="hover:shadow-lg transition-all duration-300">
                  <CardBody>
                    {/* Match Status */}
                    <div className="flex justify-between items-center mb-4">
                      {match.status === 'live' && (
                        <Badge variant="error" className="flex items-center">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-1 animate-pulse"></span>
                          LIVE
                        </Badge>
                      )}
                      {match.status === 'upcoming' && (
                        <Badge variant="warning">UPCOMING</Badge>
                      )}
                      {match.status === 'completed' && (
                        <Badge variant="success">COMPLETED</Badge>
                      )}
                      
                      <div className="text-sm text-gray-500 flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {formatMatchDate(match.date)}
                        <Clock size={16} className="ml-3 mr-1" />
                        {formatMatchTime(match.date)}
                      </div>
                    </div>
                    
                    {/* Teams */}
                    <div className="grid grid-cols-7 items-center mb-6">
                      <div className="col-span-3 text-center">
                        <div className="w-16 h-16 mx-auto mb-2">
                          <img 
                            src={homeTeam.logo} 
                            alt={homeTeam.name} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <h3 className="font-bold">{homeTeam.name}</h3>
                      </div>
                      
                      <div className="col-span-1 text-center">
                        {match.status === 'live' || match.status === 'completed' ? (
                          <div className="text-xl font-bold">
                            {match.score?.homeTeam} - {match.score?.awayTeam}
                          </div>
                        ) : (
                          <div className="text-xl font-bold text-gray-600">VS</div>
                        )}
                        
                        {match.status === 'live' && (
                          <div className="text-xs text-gray-500">70 MIN</div>
                        )}
                      </div>
                      
                      <div className="col-span-3 text-center">
                        <div className="w-16 h-16 mx-auto mb-2">
                          <img 
                            src={awayTeam.logo} 
                            alt={awayTeam.name} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <h3 className="font-bold">{awayTeam.name}</h3>
                      </div>
                    </div>
                    
                    {/* Match Details */}
                    <div className="mb-4 flex items-center justify-center text-gray-600">
                      <MapPin size={16} className="mr-1" />
                      {match.venue}
                    </div>
                    
                    {/* Actions */}
                    <div className="flex justify-center gap-4">
                      {match.status === 'live' && (
                        <Button variant="primary">
                          Watch Live
                        </Button>
                      )}
                      
                      {match.status === 'upcoming' && (
                        <>
                          <Button variant="outline">
                            Set Reminder
                          </Button>
                          <Button variant="primary">
                            Get Tickets
                          </Button>
                        </>
                      )}
                      
                      {match.status === 'completed' && (
                        <>
                          <Button variant="outline">
                            Match Stats
                          </Button>
                          <Button variant="primary">
                            Watch Highlights
                          </Button>
                        </>
                      )}
                    </div>
                  </CardBody>
                </Card>
              );
            })
          ) : (
            <div className="col-span-full bg-white rounded-lg p-8 text-center">
              <p className="text-gray-600 mb-2">No {activeTab} matches available at the moment.</p>
              <p className="text-gray-500">Check back later for updates.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}