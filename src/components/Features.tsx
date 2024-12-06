import React from 'react';
import { Droplets, Users, Brain, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: Droplets,
    title: 'Ocean Literacy',
    description: 'Understand the fundamental principles of marine ecosystems and their global impact.'
  },
  {
    icon: Users,
    title: 'Human Connection',
    description: 'Explore how human activities and ocean systems are interconnected.'
  },
  {
    icon: Brain,
    title: 'Interactive Learning',
    description: 'Engage with dynamic content that makes complex concepts accessible.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Discover innovative solutions for ocean conservation and sustainable development.'
  }
];

export function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why This Journey Matters
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our interactive platform bridges the gap between scientific understanding and public awareness about ocean conservation.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}