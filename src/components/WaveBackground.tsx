import React from 'react';

export function WaveBackground() {
  return (
    <div className="wave-container absolute inset-0 z-0">
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
    </div>
  );
}