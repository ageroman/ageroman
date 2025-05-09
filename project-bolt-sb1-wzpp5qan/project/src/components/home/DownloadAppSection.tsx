import React from 'react';
import { QrCode, Smartphone } from 'lucide-react';

export default function DownloadAppSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-primary">
                DOWNLOAD NOW
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Take MMMNTM Everywhere You Go
            </h2>
            
            <p className="text-lg text-white/90 mb-8">
              Download the MMMNTM app to experience Kenyan rugby like never before. Get live updates, exclusive content, and connect with fans anytime, anywhere.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-black hover:bg-gray-900 text-white py-3 px-6 rounded-lg flex items-center">
                <svg viewBox="0 0 24 24" className="w-8 h-8 mr-3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5227 10.2431C17.4429 10.3091 14.1934 12.0352 14.1934 15.0293C14.1934 18.4606 18.1425 20.0052 18.2611 20.0486C18.2419 20.1077 17.7385 21.8774 16.4892 23.6827C15.4012 25.2548 14.2747 26.8269 12.5428 26.8269C10.8109 26.8269 10.4123 25.8359 8.40034 25.8359C6.43604 25.8359 5.73889 26.8558 4.13921 26.8558C2.53953 26.8558 1.32126 25.1826 0.17615 23.6394C-1.19512 21.699 -2.74047 18.1726 -2.74047 14.8137C-2.74047 9.63822 0.911543 6.86278 4.48994 6.86278C6.1642 6.86278 7.55335 7.96286 8.60282 7.96286C9.59985 7.96286 11.1807 6.79381 13.057 6.79381C13.818 6.79381 16.3893 6.86278 18.2611 9.31002C18.1329 9.38882 17.5227 10.2045 17.5227 10.2431V10.2431ZM12.7225 5.05756C13.3327 4.30966 13.7313 3.31863 13.7313 2.32761C13.7313 2.19966 13.7313 2.07171 13.7121 1.96342C12.7129 1.99308 11.5334 2.60303 10.8397 3.42991C10.2871 4.05951 9.79362 5.05054 9.79362 6.0609C9.79362 6.20818 9.81281 6.35545 9.82242 6.3941C9.88002 6.40393 9.97678 6.42375 10.0735 6.42375C10.9696 6.42375 12.0767 5.84278 12.7225 5.05756V5.05756Z" fill="white"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-xl font-medium">App Store</div>
                </div>
              </button>
              
              <button className="bg-black hover:bg-gray-900 text-white py-3 px-6 rounded-lg flex items-center">
                <svg viewBox="0 0 24 24" className="w-8 h-8 mr-3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.58333 0C1.15833 0 0 1.15833 0 2.58333V21.4167C0 22.8417 1.15833 24 2.58333 24H21.4167C22.8417 24 24 22.8417 24 21.4167V2.58333C24 1.15833 22.8417 0 21.4167 0H2.58333ZM2.58333 1.5H21.4167C22.0083 1.5 22.5 1.99167 22.5 2.58333V21.4167C22.5 22.0083 22.0083 22.5 21.4167 22.5H2.58333C1.99167 22.5 1.5 22.0083 1.5 21.4167V2.58333C1.5 1.99167 1.99167 1.5 2.58333 1.5ZM12 4.5L6.5 6.91667V8.33333L9.75 9.93333L6.5 11.5V12.9167L12 15.3333L17.5 12.9167V11.5L14.25 9.93333L17.5 8.33333V6.91667L12 4.5ZM12 6.08333L14.5 7.41667L12 8.75L9.5 7.41667L12 6.08333ZM12 10.9167L14.5 12.25L12 13.5833L9.5 12.25L12 10.9167ZM6.5 17V18.5H17.5V17H6.5Z" fill="white"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-xl font-medium">Google Play</div>
                </div>
              </button>
            </div>
            
            <div className="flex items-center">
              <div className="bg-white rounded-lg p-3 mr-4">
                <QrCode size={64} className="text-primary" />
              </div>
              <p className="text-sm">
                Scan this QR code to download<br />
                the app directly to your device
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/30 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/30 rounded-full filter blur-xl"></div>
              
              <div className="relative bg-gray-900 w-64 h-[500px] rounded-[36px] border-[8px] border-gray-800 overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 flex justify-center items-end pb-1">
                  <div className="w-20 h-1 bg-gray-600 rounded-full"></div>
                </div>
                
                <div className="absolute inset-0 p-2 pt-8">
                  <Smartphone className="text-gray-300 mx-auto mb-4" size={32} />
                  <div className="text-center text-white mb-4">
                    <h4 className="font-bold text-lg">MMMNTM App</h4>
                    <p className="text-xs text-gray-400">Experience Rugby, Redefined</p>
                  </div>
                  
                  <div className="w-full h-[320px] bg-gradient-to-b from-primary/90 to-primary-dark/90 rounded-lg mb-2 p-3 overflow-hidden">
                    <div className="bg-white/10 w-full h-32 rounded-lg mb-2"></div>
                    <div className="bg-white/10 w-3/4 h-6 rounded-lg mb-2"></div>
                    <div className="bg-white/5 w-full h-10 rounded-lg mb-2"></div>
                    <div className="flex space-x-2">
                      <div className="bg-white/10 w-1/2 h-16 rounded-lg"></div>
                      <div className="bg-white/10 w-1/2 h-16 rounded-lg"></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-around">
                    <div className="w-12 h-12 bg-white/10 rounded-full"></div>
                    <div className="w-12 h-12 bg-white/10 rounded-full"></div>
                    <div className="w-12 h-12 bg-white/10 rounded-full"></div>
                    <div className="w-12 h-12 bg-white/10 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}