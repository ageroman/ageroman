import React from 'react';
import Button from '../ui/Button';

export default function CallToActionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-secondary-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="pattern" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern)" />
          </svg>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 mb-6">
            Join the Rugby <span className="text-accent">Revolution</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-8">
            Be part of Kenya's growing rugby community. Get exclusive content, live match updates, and connect with fellow fans. Download the MMMNTM app today!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="accent"
              size="lg"
              className="text-gray-900 font-bold"
            >
              Get Started for Free
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-accent" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-accent" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free Forever Plan</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-accent" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}