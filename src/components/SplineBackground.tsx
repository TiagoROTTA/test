import React from 'react';
import Spline from '@splinetool/react-spline';

export function SplineBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Spline 
        className="w-full h-full"
        scene="https://prod.spline.design/dde5e06f3f68c85c3c3b9f8d771fd827/scene.splinecode" 
      />
      <div className="absolute inset-0 bg-blue-900/30 backdrop-blur-[2px]"></div>
    </div>
  );
}