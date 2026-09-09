'use client';

import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { Product } from '@types/index';
import { useState } from 'react';

const allProducts: Product[] = [
  {
    id: '1',
    name: 'Laptop Pro Max',
    description: 'Laptop berkinerja tinggi dengan prosesor terbaru',
    price: 15000000,
    originalPrice: 18000000,
    image: 'https://via.placeholder.com/300x200?text=Laptop+Pro',
    category: 'Electronics',
    stock: 10,
    rating: 4.8,
    reviews: 150,
  },
  {
    id: '2',
    name: 'Smartphone X1',
    description: 'Smartphone dengan kamera 108MP terbaik',
    price: 8000000,
    image: 'https://via.placeholder.com/300x200?text=Smartphone',
    category: 'Electronics',
    stock: 25,
    rating: 4.6,
    reviews: 320,
  },
  {
    id: '3',
    name: 'Wireless Headphones',
    description: 'Headphone dengan noise cancellation aktif',
    price: 2000000,
    originalPrice: 2500000,
    image: 'https://via.placeholder.com/300x200?text=Headphones',
    category: 'Electronics',
    stock: 50,
    rating: 4.5,
    reviews: 200,
  },
  {
    id: '4',
    name: 'Smart Watch Pro',
    description: 'Jam tangan pintar dengan fitur kesehatan lengkap',
    price: 3500000,
    image: 'https://via.placeholder.com/300x200?text=Smart+Watch',
    category: 'Electronics',
    stock: 30,
    rating: 4.7,
    reviews: 180,
  },
  {
    id: '5',
    name: 'Tablet Ultra',
    description: 'Tablet dengan layar AMOLED 12 inch',
    price: 7000000,
    originalPrice: 9000000,
    image: 'https://via.placeholder.com/300x200?text=Tablet',
    category: 'Electronics',
    stock: 15,
    rating: 4.7,
    reviews: 120,
  },
  {
    id: '6',
    name: 'Camera Pro 4K',
    description: 'Kamera digital dengan resolusi 4K UHD',
    price: 12000000,
    image: 'https://via.placeholder.com/300x200?text=Camera',
    category: 'Electronics',
    stock: 8,
    rating: 4.9,
    reviews: 95,
  },
  {
    id: '7',
    name: 'USB-C Hub Portable',
    description: 'Hub multifungsi dengan 7 port',
    price: 500000,
    image: 'https://via.placeholder.com/300x200?text=USB+Hub',
    category: 'Electronics',
    stock: 100,
    rating: 4.4,
    reviews: 280,
  },
  {
    id: '8',
    name: 'Wireless Charger',
    description: 'Charger nirkabel fast charging 30W',
    price: 800000,
    originalPrice: 1000000,
    image: 'https://via.placeholder.com/300x200?text=Charger',
    category: 'Electronics',
    stock: 60,
    rating: 4.6,
    reviews: 340,
  },
];

export default function ProductsPage() {
  const [sortBy, setSortBy] = useState('latest');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = allProducts.filter((product) => {
    const matchCategory = selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'popular':
        return (b.rating || 0) - (a.rating || 0);
      default:
        return 0;
    }
  });

  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Semua Produk</h1>
          <p className="text-gray-600">Temukan produk terbaik dengan harga terjangkau</p>
        </div>

        {/* Search */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <input
            type="text"
            placeholder="Cari produk..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Filters & Sort */}
        <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Kategori</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Semua Kategori</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home & Living</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Urutkan</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="latest">Terbaru</option>
              <option value="price-low">Harga Terendah</option>
              <option value="price-high">Harga Tertinggi</option>
              <option value="popular">Paling Populer</option>
            </select>
          </div>
        </div>

        {/* Product Count */}
        <div className="text-gray-600">
          Menampilkan {sortedProducts.length} dari {allProducts.length} produk
        </div>

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Tidak ada produk yang cocok dengan pencarian Anda</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
