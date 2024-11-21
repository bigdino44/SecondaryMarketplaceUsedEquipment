import React from 'react';
import { ArrowLeft, Star, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
}

export default function ProductDetails({ product, onBack }: ProductDetailsProps) {
  const { dispatch } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-8"
      >
        <ArrowLeft className="h-5 w-5" />
        Back to listings
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full aspect-square object-cover rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-bold text-indigo-600">
              ${product.price.toLocaleString()}
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              {product.condition}
            </span>
          </div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="border-t border-b py-6 mb-6">
            <h2 className="font-semibold mb-4">Specifications</h2>
            <dl className="grid grid-cols-1 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex">
                  <dt className="w-1/3 text-gray-600">{key}</dt>
                  <dd className="w-2/3 font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex items-center gap-2 mb-2">
              <img
                src={`https://ui-avatars.com/api/?name=${product.seller.name}&background=random`}
                alt={product.seller.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">{product.seller.name}</p>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm">{product.seller.rating} · {product.seller.totalSales} sales</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}
              className="flex-1 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Add to Cart
            </button>
            <button className="flex-1 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50">
              Contact Seller
            </button>
          </div>

          <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
            <Truck className="h-4 w-4" />
            <span>Free shipping on orders over $1000</span>
          </div>
        </div>
      </div>
    </div>
  );
}