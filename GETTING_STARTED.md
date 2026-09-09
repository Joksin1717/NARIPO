# Getting Started Guide

## Quick Start

Panduan cepat untuk memulai development dengan NARIPO.

### 1. Instalasi

```bash
# Clone repository
git clone https://github.com/Joksin1717/NARIPO.git
cd NARIPO

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local
```

### 2. Jalankan Development Server

```bash
npm run dev
```

Buka http://localhost:3000 di browser Anda.

### 3. Struktur Folder

```
src/
├── components/   # React components
├── pages/       # Next.js pages/routes
├── hooks/       # Custom React hooks
├── store/       # State management (Zustand)
├── styles/      # CSS styles
├── types/       # TypeScript types
├── utils/       # Utility functions
└── constants.ts # App constants
```

### 4. Membuat Halaman Baru

**File: `src/pages/contact.tsx`**
```typescript
import Layout from '@/components/Layout';

export default function ContactPage() {
  return (
    <Layout>
      <h1>Contact Us</h1>
      {/* Your content here */}
    </Layout>
  );
}
```

Halaman akan otomatis accessible di `/contact`

### 5. Membuat Component Baru

**File: `src/components/Button.tsx`**
```typescript
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary' 
}: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`px-4 py-2 rounded ${variant === 'primary' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
    >
      {children}
    </button>
  );
}
```

Gunakan di component lain:
```typescript
import Button from '@/components/Button';

<Button variant="primary">Click Me</Button>
```

### 6. Menggunakan State Management

**Cart Store:**
```typescript
import { useCartStore } from '@/store/cartStore';

function MyComponent() {
  const { items, addItem } = useCartStore();
  
  return (
    <button onClick={() => addItem(product, 1)}>
      Add to Cart ({items.length})
    </button>
  );
}
```

### 7. Fetching Data

```typescript
import { useProduct } from '@/hooks/useProduct';

function ProductPage() {
  const { product, loading, error } = useProduct('1');
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return <div>{product?.name}</div>;
}
```

### 8. Styling dengan Tailwind

Gunakan Tailwind CSS classes langsung di JSX:

```typescript
<div className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition">
  Styled content
</div>
```

### 9. Common Issues

**TypeScript Error:**
```bash
rm -rf .next node_modules
npm install
npm run dev
```

**Tailwind not working:**
- Pastikan file ada di `src/styles/globals.css`
- Check `tailwind.config.js` content paths

**Import error:**
- Gunakan absolute imports: `import { Component } from '@/components/...'`
- Bukan relative imports: `import { Component } from '../components/...'`

### 10. Next Steps

- [ ] Tambahkan lebih banyak produk
- [ ] Buat product detail page
- [ ] Implementasikan authentication
- [ ] Connect dengan backend API
- [ ] Setup payment gateway
- [ ] Deploy ke production

## Dokumentasi Lebih Lanjut

- [README.md](../README.md) - Overview project
- [DOCUMENTATION.md](../DOCUMENTATION.md) - API documentation
- [CONTRIBUTING.md](../CONTRIBUTING.md) - Contribution guidelines
- [.env.guide.md](../.env.guide.md) - Environment variables guide

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Zustand](https://github.com/pmndrs/zustand)

Happy coding! 🚀
