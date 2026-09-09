'use client';

import Layout from '@/components/Layout';
import { useUserStore } from '@/store/userStore';
import Link from 'next/link';
import { FiUser, FiLogOut, FiEdit } from 'react-icons/fi';

export default function ProfilePage() {
  const { user, isLoggedIn, logout } = useUserStore();

  if (!isLoggedIn || !user) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Silakan Login Terlebih Dahulu</h1>
          <p className="text-gray-600 mb-6">Anda perlu login untuk melihat profil Anda</p>
          <Link
            href="/login"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Profil Saya</h1>

        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center">
                <FiUser size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              <FiEdit size={18} />
              Edit
            </button>
          </div>

          {/* User Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Nama</label>
              <p className="text-gray-900 font-semibold">{user.name}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <p className="text-gray-900 font-semibold">{user.email}</p>
            </div>
            {user.phone && (
              <div>
                <label className="text-sm text-gray-600">Nomor Telepon</label>
                <p className="text-gray-900 font-semibold">{user.phone}</p>
              </div>
            )}
          </div>
        </div>

        {/* Address Section */}
        {user.address && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Alamat</h3>
            <p className="text-gray-600">{user.address.street}</p>
            <p className="text-gray-600">{user.address.city}, {user.address.province} {user.address.postalCode}</p>
            <p className="text-gray-600">{user.address.country}</p>
          </div>
        )}

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Link href="/orders" className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg transition">
            <h3 className="font-bold text-gray-900 mb-2">Pesanan Saya</h3>
            <p className="text-gray-600">Lihat riwayat pembelian</p>
          </Link>
          <Link href="/wishlist" className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg transition">
            <h3 className="font-bold text-gray-900 mb-2">Wishlist</h3>
            <p className="text-gray-600">Produk favorit Anda</p>
          </Link>
          <Link href="/settings" className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg transition">
            <h3 className="font-bold text-gray-900 mb-2">Pengaturan</h3>
            <p className="text-gray-600">Atur preferensi akun</p>
          </Link>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => logout()}
          className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition flex items-center justify-center gap-2"
        >
          <FiLogOut size={20} />
          Logout
        </button>
      </div>
    </Layout>
  );
}
