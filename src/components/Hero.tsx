import React from 'react';
import { Waves } from 'lucide-react';
import { WaveBackground } from './waves/WaveBackground';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <WaveBackground />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="relative">
          <Waves className="w-16 h-16 text-blue-100 mx-auto mb-8 animate-bounce" />
          <div className="absolute inset-0 blur-3xl bg-blue-400/20 rounded-full"></div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Discover the Vital Connection Between Oceans and Humanity
        </h1>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto drop-shadow-lg">
          Join us on an interactive journey exploring the delicate balance between human systems and our oceans, created during Nuit de l'Info 2024.
        </p>
        <button 
          className="group relative px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent shadow-xl"
          onClick={() => window.location.href = '/experience'}
        >
          Let's embark on the journey
          <div className="absolute inset-0 -z-10 blur-xl bg-blue-300/30 rounded-full group-hover:bg-blue-300/40 transition-colors"></div>
        </button>
      </div>
    </div>
  );
}