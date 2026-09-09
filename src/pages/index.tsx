import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { Product } from '@types/index';
import Link from 'next/link';

const sampleProducts: Product[] = [
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
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg py-16 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Selamat Datang di NARIPO</h1>
          <p className="text-xl mb-8">Platform e-commerce terpercaya dengan produk berkualitas dan harga terbaik</p>
          <Link
            href="/products"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Belanja Sekarang
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Produk Unggulan</h2>
          <Link href="/products" className="text-blue-600 hover:text-blue-800 font-semibold">
            Lihat Semua →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Kategori Populer</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {['Electronics', 'Fashion', 'Home & Living', 'Sports'].map((category) => (
            <Link
              key={category}
              href={`/categories/${category}`}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition text-center cursor-pointer"
            >
              <div className="text-4xl mb-3">📦</div>
              <h3 className="font-semibold text-gray-900">{category}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Dapatkan Diskon Hingga 50%</h3>
        <p className="text-gray-600 mb-4">Gunakan kode promo NARIPO50 untuk pembelian pertama Anda</p>
        <Link
          href="/products"
          className="inline-block bg-yellow-500 text-white px-8 py-2 rounded-lg font-bold hover:bg-yellow-600 transition"
        >
          Belanja Sekarang
        </Link>
      </section>
    </Layout>
  );
}
