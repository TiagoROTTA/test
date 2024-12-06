import React from 'react';
import { WaveShape } from './WaveShape';

export function WaveBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-900 to-blue-700 overflow-hidden">
      <WaveShape 
        animationDuration="7s"
        color="rgba(255, 255, 255, 0.1)"
        className="transform translate-y-1/2"
      />
      <WaveShape 
        animationDuration="11s"
        color="rgba(255, 255, 255, 0.15)"
        delay="0.5s"
        className="transform translate-y-1/3"
      />
      <WaveShape 
        animationDuration="13s"
        color="rgba(255, 255, 255, 0.2)"
        delay="1s"
        className="transform translate-y-1/4"
      />
    </div>
  );
}