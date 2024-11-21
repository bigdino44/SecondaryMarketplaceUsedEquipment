import React from 'react';
import { Sliders, Tag, Star, Box } from 'lucide-react';

export default function FilterSidebar() {
  return (
    <div className="w-72 glass-card p-6 rounded-xl h-fit sticky top-20">
      <div className="flex items-center gap-2 mb-8">
        <Sliders className="h-5 w-5 text-indigo-600" />
        <h2 className="text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Filters
        </h2>
      </div>

      <div className="space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Tag className="h-4 w-4 text-indigo-600" />
            <h3 className="text-sm font-medium text-gray-700">Price Range</h3>
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <input
                type="number"
                placeholder="Min"
                className="input-primary pl-6"
              />
              <span className="absolute left-2.5 top-2.5 text-gray-400">$</span>
            </div>
            <div className="relative">
              <input
                type="number"
                placeholder="Max"
                className="input-primary pl-6"
              />
              <span className="absolute left-2.5 top-2.5 text-gray-400">$</span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <Star className="h-4 w-4 text-indigo-600" />
            <h3 className="text-sm font-medium text-gray-700">Condition</h3>
          </div>
          <div className="space-y-2">
            {['Like New', 'Excellent', 'Good', 'Fair'].map((condition) => (
              <label key={condition} className="flex items-center group cursor-pointer">
                <input 
                  type="checkbox"
                  className="rounded text-indigo-600 border-2 border-gray-300
                           focus:ring-indigo-500 focus:ring-offset-0"
                />
                <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                  {condition}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <Box className="h-4 w-4 text-indigo-600" />
            <h3 className="text-sm font-medium text-gray-700">Category</h3>
          </div>
          <div className="space-y-2">
            {['Processors', 'Memory Units', 'Sensors', 'Power Systems'].map((category) => (
              <label key={category} className="flex items-center group cursor-pointer">
                <input 
                  type="checkbox"
                  className="rounded text-indigo-600 border-2 border-gray-300
                           focus:ring-indigo-500 focus:ring-offset-0"
                />
                <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                  {category}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}