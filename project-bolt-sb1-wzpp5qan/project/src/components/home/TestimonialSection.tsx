import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "The MMMNTM app has revolutionized how I follow Kenyan rugby. I never miss a match update, and the exclusive content keeps me connected to my favorite players and teams. It's a game-changer!",
    author: "David Mwangi",
    role: "Kenya Rugby Fan",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    content: "As a rugby coach, this app provides invaluable insights and analytics. Being able to analyze matches and player performance has helped our team improve tremendously. The community features also keep our fans engaged.",
    author: "Grace Akinyi",
    role: "Rugby Coach",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    content: "MMMNTM has made rugby accessible to new fans like me. The easy-to-understand statistics and match commentary have helped me learn more about the game, and now I'm completely hooked!",
    author: "James Odhiambo",
    role: "New Rugby Enthusiast",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">
            What Our <span className="text-primary">Users Say</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover how MMMNTM is transforming the rugby experience for fans, coaches, and players across Kenya.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -top-10 -left-10 text-primary opacity-30">
              <Quote size={80} />
            </div>
            
            <div className="relative z-10 bg-gray-800/50 rounded-xl p-8 md:p-12">
              <div className="mb-8">
                <p className="text-xl md:text-2xl leading-relaxed">
                  {testimonials[activeIndex].content}
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonials[activeIndex].author}</h4>
                  <p className="text-primary">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    activeIndex === index ? 'bg-primary' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}