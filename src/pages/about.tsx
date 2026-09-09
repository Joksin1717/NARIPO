'use client';

import Layout from '@/components/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Tentang NARIPO</h1>

        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Apa itu NARIPO?</h2>
          <p className="text-gray-600 mb-4">
            NARIPO adalah platform e-commerce modern yang dirancang untuk memberikan pengalaman berbelanja online yang terbaik. 
            Kami menyediakan berbagai macam produk berkualitas dengan harga terjangkau dan layanan pelanggan yang responsif.
          </p>
          <p className="text-gray-600">
            Dengan teknologi terkini dan tim yang berpengalaman, kami berkomitmen untuk menjadi pilihan utama Anda dalam berbelanja online.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Menyediakan produk berkualitas dengan harga terbaik</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Memberikan pengalaman berbelanja yang mudah dan aman</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Layanan pelanggan yang cepat dan responsif</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Pengiriman tepat waktu ke seluruh Indonesia</span>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Mengapa Memilih NARIPO?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🛒</div>
              <h3 className="font-bold text-gray-900 mb-2">Belanja Mudah</h3>
              <p className="text-gray-600 text-sm">Antarmuka yang intuitif dan user-friendly</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💳</div>
              <h3 className="font-bold text-gray-900 mb-2">Pembayaran Aman</h3>
              <p className="text-gray-600 text-sm">Berbagai metode pembayaran yang aman</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="font-bold text-gray-900 mb-2">Pengiriman Cepat</h3>
              <p className="text-gray-600 text-sm">Pengiriman gratis untuk pembelian tertentu</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
