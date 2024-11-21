import React from 'react';
import { Search, ShoppingCart, User, Zap } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
}

export default function Header({ onCartClick }: HeaderProps) {
  const { state } = useCart();
  const itemCount = state.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Zap className="h-8 w-8 text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              LucidMarket
            </h1>
          </div>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search for equipment..."
                className="input-primary pl-10"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onCartClick}
              className="p-2 rounded-full hover:bg-gray-100 relative transition-colors"
            >
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center
                               rounded-full text-xs text-white font-medium
                               bg-gradient-to-r from-indigo-600 to-purple-600
                               shadow-lg animate-float">
                  {itemCount}
                </span>
              )}
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <User className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}