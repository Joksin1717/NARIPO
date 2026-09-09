'use client';

import Layout from '@/components/Layout';
import { useCartStore } from '@/store/cartStore';
import { formatPrice } from '@utils/formatters';
import Link from 'next/link';
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCartStore();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Keranjang Belanja Kosong</h1>
          <p className="text-gray-600 mb-6">Mulai berbelanja dan tambahkan produk ke keranjang Anda</p>
          <Link
            href="/products"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Belanja Sekarang
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Keranjang Belanja</h1>
          <div className="bg-white rounded-lg shadow-sm">
            {items.map((item) => (
              <div key={item.id} className="p-4 border-b flex gap-4 last:border-b-0">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-lg font-bold text-blue-600">{formatPrice(item.price)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 hover:bg-gray-200 rounded"
                  >
                    <FiMinus size={18} />
                  </button>
                  <span className="px-3 py-1 bg-gray-100 rounded">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 hover:bg-gray-200 rounded"
                  >
                    <FiPlus size={18} />
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <FiTrash2 size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Ringkasan</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal:</span>
                <span>{formatPrice(getTotal())}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Pengiriman:</span>
                <span>Gratis</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Pajak:</span>
                <span>{formatPrice(getTotal() * 0.1)}</span>
              </div>
            </div>
            <div className="border-t pt-4 mb-4">
              <div className="flex justify-between text-lg font-bold text-gray-900">
                <span>Total:</span>
                <span>{formatPrice(getTotal() * 1.1)}</span>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition mb-3">
              Lanjut ke Checkout
            </button>
            <button
              onClick={() => clearCart()}
              className="w-full bg-gray-200 text-gray-900 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Kosongkan Keranjang
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
