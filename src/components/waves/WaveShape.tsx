import React from 'react';

interface WaveShapeProps {
  className?: string;
  animationDuration: string;
  color: string;
  delay?: string;
}

export function WaveShape({ className = '', animationDuration, color, delay = '0s' }: WaveShapeProps) {
  return (
    <div 
      className={`absolute bottom-0 left-0 w-[200%] h-[50vh] ${className}`}
      style={{
        animation: `waveFloat ${animationDuration} ease-in-out infinite`,
        animationDelay: delay,
      }}
    >
      <svg 
        className="w-[100%] h-full"
        viewBox="0 0 1440 320" 
        preserveAspectRatio="none"
      >
        <path
          fill={color}
          fillOpacity="1"
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
}