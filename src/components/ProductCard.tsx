import React from 'react';
import { Heart, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps extends Product {
  onClick: () => void;
}

export default function ProductCard({ onClick, ...product }: ProductCardProps) {
  return (
    <div className="glass-card rounded-xl hover-scale overflow-hidden">
      <div className="relative group">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-56 object-cover cursor-pointer transition-transform duration-500 group-hover:scale-110"
          onClick={onClick}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <button className="absolute top-3 right-3 p-2.5 rounded-full bg-white/90 hover:bg-white shadow-lg
                         transition-all duration-300 hover:scale-110 hover:shadow-xl">
          <Heart className="h-5 w-5 text-gray-700 hover:text-red-500 transition-colors" />
        </button>
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium text-white">{product.seller.rating}</span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800 cursor-pointer hover:text-indigo-600 transition-colors" 
              onClick={onClick}>
            {product.title}
          </h3>
          <span className="badge">{product.condition}</span>
        </div>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Price</span>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              ${product.price.toLocaleString()}
            </span>
          </div>
          <button
            onClick={onClick}
            className="button-primary px-4 py-2 rounded-lg flex items-center gap-2"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}