//import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white opacity-5 animate-pulse"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 rounded-full bg-white opacity-5 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-white opacity-5 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Hi, I'm <span className="text-yellow-300">Anjali Krishnan</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-blue-100 animate-fade-in-up animation-delay-300">
            Web Developer
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed animate-fade-in-up animation-delay-600">
            I'm a MERN Stack Developer passionate about building digital products that improve everyday experience
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-900">
            <button
              onClick={scrollToContact}
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-all duration-300 flex items-center gap-2 hover:transform hover:scale-105 shadow-lg"
            >
              Contact Me
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center gap-2 hover:transform hover:scale-105">
              Download CV
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;