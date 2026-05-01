import React, { useState, useEffect } from 'react';
import { Home, Search, ArrowLeft } from 'lucide-react';

function PageNotFound() {
  const [isVisible, setIsVisible] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Trigger glitch effect periodically
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 500);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const floatingElements = Array.from({ length: 6 }, (_, i) => (
    <div
      key={i}
      className="absolute w-2 h-2 bg-red-400 rounded-full opacity-20 animate-pulse"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${2 + Math.random() * 2}s`
      }}
    />
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-red-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      {floatingElements}
      
      {/* Main content */}
      <div className={`text-center max-w-2xl mx-auto transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        
        {/* 404 Number with glitch effect */}
        <div className="relative mb-8">
          <h1 className={`text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 select-none transition-all duration-300 ${
            glitchActive ? 'animate-pulse' : ''
          }`}>
            404
          </h1>
          
          {/* Glitch overlay */}
          <div className={`absolute inset-0 text-9xl md:text-[12rem] font-bold text-red-500 opacity-0 transition-opacity duration-100 ${
            glitchActive ? 'opacity-30' : ''
          }`} style={{
            transform: glitchActive ? 'translate(2px, -2px)' : 'none'
          }}>
            404
          </div>
        </div>

        {/* Error message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-white animate-fade-in">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-300 text-lg max-w-md mx-auto leading-relaxed">
            The page you're looking for seems to have vanished into the digital void. 
            Let's get you back on track!
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-lg font-medium transition-all duration-300 hover:from-blue-700 hover:to-red-700 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 active:scale-95"
          >
            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
            Go Back
          </button>
          
          <button 
            onClick={() => window.location.href = '/'}
            className="group flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium border border-white/20 transition-all duration-300 hover:bg-white/20 hover:shadow-lg transform hover:scale-105 active:scale-95"
          >
            <Home size={20} className="transition-transform group-hover:scale-110" />
            Home
          </button>

        </div>

        {/* Animated decorative elements */}
        <div className="mt-12 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out 0.5s both;
        }
      `}</style>
    </div>
  );
}

export default PageNotFound;
