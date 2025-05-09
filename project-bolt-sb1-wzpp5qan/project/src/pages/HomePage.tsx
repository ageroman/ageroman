import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import LiveMatchesSection from '../components/home/LiveMatchesSection';
import TeamShowcase from '../components/home/TeamShowcase';
import NewsSection from '../components/home/NewsSection';
import DownloadAppSection from '../components/home/DownloadAppSection';
import TestimonialSection from '../components/home/TestimonialSection';
import CallToActionSection from '../components/home/CallToActionSection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <LiveMatchesSection />
      <TeamShowcase />
      <NewsSection />
      <DownloadAppSection />
      <TestimonialSection />
      <CallToActionSection />
    </div>
  );
}