'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import { Product } from '@types/index';
import { formatPrice } from '@utils/formatters';
import { useCartStore } from '@/store/cartStore';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 1);
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden cursor-pointer">
        {/* Image */}
        <div className="relative w-full h-48 bg-gray-200">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
          {product.originalPrice && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
              -{Math.round((1 - product.price / product.originalPrice) * 100)}%
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 truncate">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

          {/* Price */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</p>
              {product.originalPrice && (
                <p className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</p>
              )}
            </div>
          </div>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-1 mb-3">
              <span className="text-yellow-400">★</span>
              <span className="text-sm text-gray-700">{product.rating}</span>
              <span className="text-sm text-gray-500">({product.reviews})</span>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              <FiShoppingCart size={18} />
              Keranjang
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsFavorite(!isFavorite);
              }}
              className={`px-3 py-2 rounded-lg border-2 transition ${
                isFavorite
                  ? 'bg-red-50 border-red-500 text-red-500'
                  : 'border-gray-300 text-gray-700 hover:border-red-500'
              }`}
            >
              <FiHeart fill={isFavorite ? 'currentColor' : 'none'} size={18} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
