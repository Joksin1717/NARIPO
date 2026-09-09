import { useCallback, useEffect, useState } from 'react';
import { cartAPI } from '@/utils/laravelAPI';

export interface CartItem {
  id: string | number;
  product_id: string | number;
  quantity: number;
  product?: any;
}

interface UseCartAPIReturn {
  items: CartItem[];
  loading: boolean;
  error: string | null;
  addItem: (productId: string | number, quantity: number) => Promise<void>;
  updateItem: (productId: string | number, quantity: number) => Promise<void>;
  removeItem: (productId: string | number) => Promise<void>;
  clear: () => Promise<void>;
  refetch: () => Promise<void>;
}

export function useCartAPI(): UseCartAPIReturn {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch cart items
  const fetchCart = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await cartAPI.get();
      const data = response.data || response;
      setItems(Array.isArray(data) ? data : data.items || []);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch cart');
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Add item to cart
  const addItem = useCallback(
    async (productId: string | number, quantity: number) => {
      try {
        setError(null);
        await cartAPI.addItem(productId, quantity);
        await fetchCart(); // Refresh cart
      } catch (err: any) {
        setError(err.message || 'Failed to add item');
        throw err;
      }
    },
    [fetchCart]
  );

  // Update item quantity
  const updateItem = useCallback(
    async (productId: string | number, quantity: number) => {
      try {
        setError(null);
        await cartAPI.updateItem(productId, quantity);
        await fetchCart(); // Refresh cart
      } catch (err: any) {
        setError(err.message || 'Failed to update item');
        throw err;
      }
    },
    [fetchCart]
  );

  // Remove item from cart
  const removeItem = useCallback(
    async (productId: string | number) => {
      try {
        setError(null);
        await cartAPI.removeItem(productId);
        await fetchCart(); // Refresh cart
      } catch (err: any) {
        setError(err.message || 'Failed to remove item');
        throw err;
      }
    },
    [fetchCart]
  );

  // Clear entire cart
  const clear = useCallback(async () => {
    try {
      setError(null);
      await cartAPI.clear();
      setItems([]);
    } catch (err: any) {
      setError(err.message || 'Failed to clear cart');
      throw err;
    }
  }, []);

  // Fetch cart on mount and when authenticated
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchCart();
    }
  }, [fetchCart]);

  return {
    items,
    loading,
    error,
    addItem,
    updateItem,
    removeItem,
    clear,
    refetch: fetchCart,
  };
}
