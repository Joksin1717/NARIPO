# Utility Functions

## formatters.ts

Fungsi untuk formatting data:

### formatPrice(price: number): string
Format harga ke format IDR
```typescript
formatPrice(15000000) // "Rp 15.000.000"
```

### formatDate(date: Date | string): string
Format tanggal ke format Indonesia
```typescript
formatDate(new Date()) // "9 September 2026"
```

### truncateText(text: string, length: number): string
Potong text dengan elipsis
```typescript
truncateText('Lorem ipsum dolor sit amet', 10) // "Lorem ipsu..."
```

## api.ts

Axios client dengan interceptor otomatis.

```typescript
import api from '@/utils/api';

const response = await api.get('/products');
const data = await api.post('/orders', orderData);
```

Token authentication ditambahkan otomatis dari localStorage.
