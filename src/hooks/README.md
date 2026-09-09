# Hooks Kustom

## useProduct

Hook untuk fetch dan manage product data.

```typescript
import { useProduct } from '@/hooks/useProduct';

function ProductDetail() {
  const { product, loading, error } = useProduct(productId);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return <div>{product.name}</div>;
}
```

## useCart

Hook untuk manage shopping cart.

```typescript
import { useCart } from '@/hooks/useCart';

function AddToCart() {
  const { addItem, items, total } = useCart();
  
  return (
    <button onClick={() => addItem(product, 1)}>
      Add to Cart
    </button>
  );
}
```

## useAuth

Hook untuk authentication (coming soon).

## useLocalStorage

Hook untuk persist data ke localStorage.

```typescript
const [value, setValue] = useLocalStorage('key', defaultValue);
```
