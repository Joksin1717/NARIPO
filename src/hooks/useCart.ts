import { useCallback } from 'react';
import { useCartStore } from '@/store/cartStore';
import { Product } from '@types/index';

export function useCart() {
  const { items, addItem, removeItem, updateQuantity, clearCart, getTotal, getItemCount } = useCartStore();

  const handleAddItem = useCallback(
    (product: Product, quantity: number) => {
      addItem(product, quantity);
    },
    [addItem]
  );

  const handleRemoveItem = useCallback(
    (productId: string) => {
      removeItem(productId);
    },
    [removeItem]
  );

  const handleUpdateQuantity = useCallback(
    (productId: string, quantity: number) => {
      updateQuantity(productId, quantity);
    },
    [updateQuantity]
  );

  return {
    items,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
    updateQuantity: handleUpdateQuantity,
    clearCart,
    total: getTotal(),
    itemCount: getItemCount(),
  };
}
