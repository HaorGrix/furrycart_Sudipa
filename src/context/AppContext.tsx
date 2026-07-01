import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product, mockProducts } from '../data/mockData';

interface CartItem {
  product: Product;
  quantity: number;
  isSubscription: boolean;
}

interface AppContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number, isSubscription: boolean) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  cartTotal: number;
  
  wishlist: string[]; // Product IDs
  toggleWishlist: (productId: string) => void;
  
  compareList: string[]; // Product IDs
  toggleCompare: (productId: string) => void;

  user: { name: string; email: string } | null;
  login: (name: string, email: string) => void;
  logout: () => void;
  clearCart: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [compareList, setCompareList] = useState<string[]>([]);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const addToCart = (product: Product, quantity: number, isSubscription: boolean) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      }
      return [...prev, { product, quantity, isSubscription }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCart(prev => prev.map(item => 
      item.product.id === productId ? { ...item, quantity } : item
    ));
  };

  const cartTotal = cart.reduce((total, item) => {
    const price = item.isSubscription ? item.product.price * 0.85 : item.product.price;
    return total + (price * item.quantity);
  }, 0);

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleCompare = (productId: string) => {
    setCompareList(prev => {
      if (prev.includes(productId)) return prev.filter(id => id !== productId);
      if (prev.length >= 3) return prev; // Max 3 items
      return [...prev, productId];
    });
  };

  const clearCart = () => setCart([]);
  
  const login = (name: string, email: string) => setUser({ name, email });
  const logout = () => setUser(null);

  return (
    <AppContext.Provider value={{
      cart, addToCart, removeFromCart, updateQuantity, cartTotal, clearCart,
      wishlist, toggleWishlist,
      compareList, toggleCompare,
      user, login, logout
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
