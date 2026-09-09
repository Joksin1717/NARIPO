# NARIPO - E-commerce Platform

NARIPO adalah platform e-commerce modern yang dibangun dengan Next.js 14, React 18, TypeScript, dan Tailwind CSS.

## 🚀 Fitur Utama

- ✅ Katalog Produk Dinamis
- ✅ Keranjang Belanja (Shopping Cart)
- ✅ Sistem Favorit (Wishlist)
- ✅ Manajemen Pengguna
- ✅ Halaman Detail Produk
- ✅ Filter & Pencarian Produk
- ✅ Responsive Design
- ✅ State Management dengan Zustand
- ✅ TypeScript untuk Type Safety
- ✅ Optimasi Performa dengan Next.js Image
- ✅ API Integration Ready

## 📋 Tech Stack

- **Frontend Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS + PostCSS
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Icons**: React Icons
- **Language**: TypeScript
- **Package Manager**: npm / yarn

## 🛠️ Instalasi

### 1. Clone Repository
```bash
git clone https://github.com/Joksin1717/NARIPO.git
cd NARIPO
```

### 2. Install Dependencies
```bash
npm install
# atau
yarn install
# atau
pnpm install
```

### 3. Setup Environment Variables
```bash
cp .env.example .env.local
```

Edit file `.env.local` dan sesuaikan dengan konfigurasi Anda:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_STRIPE_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_APP_NAME=NARIPO
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Jalankan Development Server
```bash
npm run dev
# atau
yarn dev
```

### 5. Buka di Browser
Akses `http://localhost:3000`

## 📁 Struktur Project

```
NARIPO/
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Header.tsx          # Header dengan navigation
│   │   │   ├── Footer.tsx          # Footer dengan links
│   │   │   └── index.tsx           # Main layout wrapper
│   │   └── ProductCard.tsx         # Reusable product card component
│   ├── pages/
│   │   ├── index.tsx               # Home page
│   │   ├── products/
│   │   │   ├── index.tsx           # Products listing
│   │   │   └── [id].tsx            # Product detail (coming soon)
│   │   ├── cart.tsx                # Shopping cart (coming soon)
│   │   ├── profile.tsx             # User profile (coming soon)
│   │   ├── _app.tsx                # Next.js App wrapper
│   │   └── _document.tsx           # Next.js Document
│   ├── store/
│   │   ├── cartStore.ts            # Cart state management
│   │   └── userStore.ts            # User state management
│   ├── styles/
│   │   └── globals.css             # Global styles
│   ├── types/
│   │   └── index.ts                # TypeScript interfaces
│   └── utils/
│       ├── api.ts                  # Axios API client
│       └── formatters.ts           # Utility functions
├── public/                         # Static assets
├── .env.example                    # Environment variables template
├── .gitignore                      # Git ignore rules
├── package.json                    # Dependencies
├── next.config.js                  # Next.js configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
├── tsconfig.json                   # TypeScript configuration
└── README.md                       # This file
```

## 📖 Cara Penggunaan

### Menambah Produk Baru

Edit file `src/pages/index.tsx` atau `src/pages/products/index.tsx` dan tambahkan ke array `sampleProducts`:

```typescript
const sampleProducts: Product[] = [
  {
    id: '9',
    name: 'Produk Baru',
    description: 'Deskripsi produk',
    price: 5000000,
    originalPrice: 6000000,
    image: 'https://via.placeholder.com/300x200?text=Product',
    category: 'Electronics',
    stock: 20,
    rating: 4.5,
    reviews: 100,
  },
];
```

### Menggunakan Cart Store

```typescript
import { useCartStore } from '@/store/cartStore';

export default function MyComponent() {
  const { items, addItem, removeItem, getTotal } = useCartStore();

  return (
    <div>
      <button onClick={() => addItem(product, 1)}>Add to Cart</button>
      <p>Total: {getTotal()}</p>
    </div>
  );
}
```

### Menggunakan User Store

```typescript
import { useUserStore } from '@/store/userStore';

export default function ProfilePage() {
  const { user, setUser, logout } = useUserStore();

  return (
    <div>
      {user ? (
        <p>Welcome, {user.name}</p>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
}
```

### API Integration

Gunakan axios client dari `src/utils/api.ts`:

```typescript
import api from '@/utils/api';

const getProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};
```

## 🎨 Customization

### Mengubah Warna Brand

Edit file `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#YOUR_COLOR',
      secondary: '#YOUR_COLOR',
      accent: '#YOUR_COLOR',
    }
  }
}
```

### Mengubah Font

```javascript
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
}
```

## 🔧 Scripts

```bash
# Development
npm run dev          # Jalankan dev server

# Production
npm run build        # Build untuk production
npm run start        # Jalankan production server

# Quality
npm run lint         # Jalankan ESLint
npm run export       # Export static site
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🚀 Deployment

### Deploy ke Vercel (Recommended)

1. Push code ke GitHub
2. Buka [Vercel.com](https://vercel.com)
3. Klik "New Project"
4. Pilih repository NARIPO
5. Klik "Deploy"

### Deploy ke Netlify

1. Jalankan `npm run build`
2. Deploy folder `.next` ke Netlify

### Deploy ke Server Sendiri

```bash
npm run build
npm run start
```

## 🐛 Troubleshooting

### Port 3000 sudah digunakan
```bash
npm run dev -- -p 3001
```

### Error TypeScript
```bash
rm -rf .next
npm run build
```

### Tailwind CSS tidak bekerja
```bash
rm -rf node_modules
npm install
npm run dev
```

## 📚 Dokumentasi & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Zustand Documentation](https://github.com/pmndrs/zustand)

## 🤝 Kontribusi

Kontribusi sangat diterima! Berikut adalah langkah-langkahnya:

1. Fork repository ini
2. Buat branch feature (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

## 📄 Lisensi

Proyek ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 👨‍💻 Author

Dibuat oleh [Joksin1717](https://github.com/Joksin1717)

## 📧 Kontak

Untuk pertanyaan atau saran, silakan hubungi:
- Email: info@naripo.com
- GitHub: [@Joksin1717](https://github.com/Joksin1717)

## 🙏 Terima Kasih

Terima kasih telah menggunakan NARIPO! Jika Anda menyukai project ini, jangan lupa untuk memberikan ⭐ di GitHub.

---

**Happy Coding! 🚀**
