import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', url: '/about' },
        { label: 'Careers', url: '/careers' },
        { label: 'Partners', url: '/partners' },
        { label: 'Press', url: '/press' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', url: '/help' },
        { label: 'Contact Us', url: '/contact' },
        { label: 'FAQ', url: '/faq' },
        { label: 'Ticket Support', url: '/support' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms of Service', url: '/terms' },
        { label: 'Privacy Policy', url: '/privacy' },
        { label: 'Cookie Policy', url: '/cookies' },
        { label: 'Licensing', url: '/licensing' },
      ],
    },
  ];
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center mr-2">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-bold">MMMNTM</span>
            </div>
            <p className="text-gray-400 mb-4">
              Revolutionizing the rugby experience in Kenya through innovation, technology, and community engagement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.url} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} MMMNTM Sports & Entertainment. All rights reserved.
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <a href="mailto:info@mmmntm.co.ke" className="text-gray-400 hover:text-white transition-colors flex items-center">
              <Mail size={16} className="mr-2" /> info@mmmntm.co.ke
            </a>
            <a href="tel:+254700000000" className="text-gray-400 hover:text-white transition-colors flex items-center">
              <Phone size={16} className="mr-2" /> +254 700 000 000
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}