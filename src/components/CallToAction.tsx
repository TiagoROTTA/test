import React from 'react';
import { Anchor } from 'lucide-react';

export function CallToAction() {
  return (
    <div className="bg-blue-900 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Anchor className="h-12 w-12 text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Make a Difference?
          </h2>
          <p className="mt-6 text-lg leading-8 text-blue-200">
            Join thousands of ocean advocates and learn how your actions impact marine ecosystems.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button 
              className="rounded-full bg-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
              onClick={() => window.location.href = '/experience'}
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}