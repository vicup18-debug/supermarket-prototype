"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Product = any;

type CartItem = Product & { quantity: number };

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: any) => void;
  updateQuantity: (productId: any, action: 'increase' | 'decrease') => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  // 1. ADDED SEARCH TYPES
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 2. ADDED SEARCH STATE
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const id = product.id || product.name;
      const existing = prev.find((item) => (item.id || item.name) === id);
      if (existing) {
        return prev.map((item) =>
          (item.id || item.name) === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: any, action: 'increase' | 'decrease') => {
    setCart((prev) =>
      prev.map((item) => {
        if ((item.id || item.name) === productId) {
          if (action === 'decrease' && item.quantity === 1) return item;
          return {
            ...item,
            quantity: action === 'increase' ? item.quantity + 1 : item.quantity - 1
          };
        }
        return item;
      })
    );
  };

  const removeFromCart = (productId: any) => {
    setCart((prev) => prev.filter((item) => (item.id || item.name) !== productId));
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((total, item) => total + (item.price || 0) * (item.quantity || 1), 0);
  const cartCount = cart.reduce((count, item) => count + (item.quantity || 1), 0);

  return (
    <CartContext.Provider value={{
      cart, addToCart, removeFromCart, updateQuantity, clearCart,
      cartTotal, cartCount, isCartOpen, setIsCartOpen,
      searchQuery, setSearchQuery // 3. EXPORTED SEARCH STATE
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}