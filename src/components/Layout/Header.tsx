'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import { useCartStore } from '@/store/cartStore';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getItemCount } = useCartStore();
  const itemCount = getItemCount();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">NARIPO</h1>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className="w-full relative">
              <input
                type="text"
                placeholder="Cari produk..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FiSearch className="absolute right-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600">Produk</Link>
            <Link href="/categories" className="text-gray-700 hover:text-blue-600">Kategori</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">Tentang</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4 ml-8">
            <Link href="/cart" className="relative">
              <FiShoppingCart size={24} className="text-gray-700 hover:text-blue-600" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <Link href="/profile">
              <FiUser size={24} className="text-gray-700 hover:text-blue-600" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/products" className="block py-2 text-gray-700 hover:text-blue-600">Produk</Link>
            <Link href="/categories" className="block py-2 text-gray-700 hover:text-blue-600">Kategori</Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-600">Tentang</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
