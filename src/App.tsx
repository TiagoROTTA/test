import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CallToAction } from './components/CallToAction';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <CallToAction />
    </div>
  );
}

export default App;