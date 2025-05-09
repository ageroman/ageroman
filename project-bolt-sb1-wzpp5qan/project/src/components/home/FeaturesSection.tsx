import React from 'react';
import { Smartphone, Users, Radio, ShoppingBag, Tv, Trophy } from 'lucide-react';

const features = [
  {
    icon: <Radio size={48} className="text-primary" />,
    title: 'Live Match Updates',
    description: 'Get real-time score updates, play-by-play commentary, and match statistics as the action unfolds.',
  },
  {
    icon: <Tv size={48} className="text-primary" />,
    title: 'Exclusive Content',
    description: 'Access behind-the-scenes footage, player interviews, and exclusive documentaries about Kenyan rugby.',
  },
  {
    icon: <Users size={48} className="text-primary" />,
    title: 'Fan Community',
    description: 'Connect with fellow rugby enthusiasts, participate in discussions, and share your passion for the game.',
  },
  {
    icon: <ShoppingBag size={48} className="text-primary" />,
    title: 'Team Merchandise',
    description: 'Shop for official team merchandise and support your favorite Kenyan rugby clubs.',
  },
  {
    icon: <Trophy size={48} className="text-primary" />,
    title: 'Interactive Challenges',
    description: 'Predict match outcomes, participate in rugby trivia, and win exclusive prizes and experiences.',
  },
  {
    icon: <Smartphone size={48} className="text-primary" />,
    title: 'Mobile Ticketing',
    description: 'Purchase match tickets directly through the app and enjoy seamless entry to stadiums.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">
            Transforming the <span className="text-primary">Rugby Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The MMMNTM app brings Kenyan rugby to your fingertips with innovative features designed for the most passionate fans.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}