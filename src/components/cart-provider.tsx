"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";
import type { Product } from "@/types/product";

export type CartItem = {
  product: Product;
  size: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  totalEUR: number;
  addItem: (product: Product, size: string) => void;
  removeItem: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalEUR = items.reduce(
      (sum, item) => sum + item.product.priceEUR * item.quantity,
      0,
    );

    return {
      items,
      itemCount,
      totalEUR,
      addItem(product, size) {
        setItems((current) => {
          const existing = current.find(
            (item) => item.product.id === product.id && item.size === size,
          );

          if (existing) {
            return current.map((item) =>
              item.product.id === product.id && item.size === size
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            );
          }

          return [...current, { product, size, quantity: 1 }];
        });
      },
      removeItem(productId, size) {
        setItems((current) =>
          current.filter(
            (item) => !(item.product.id === productId && item.size === size),
          ),
        );
      },
      updateQuantity(productId, size, quantity) {
        setItems((current) => {
          if (quantity <= 0) {
            return current.filter(
              (item) => !(item.product.id === productId && item.size === size),
            );
          }

          return current.map((item) =>
            item.product.id === productId && item.size === size
              ? { ...item, quantity }
              : item,
          );
        });
      },
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
