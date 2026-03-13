"use client";
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Zap } from 'lucide-react';

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 p-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_40px_-10px_rgba(30,58,138,0.15)] flex flex-col justify-between h-full">

      {/* 1. THE IMAGE CONTAINER (With zoom effect) */}
      <div className="relative w-full h-48 bg-gray-50 rounded-xl overflow-hidden mb-4">
        {/* Dynamic Badge */}
        <div className="absolute top-2 left-2 z-10 bg-yellow-400 text-blue-950 text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-wide flex items-center gap-1 shadow-sm">
          <Zap size={12} className="fill-blue-950" /> Fast Selling
        </div>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>

      {/* 2. PRODUCT INFO (Text changes color on hover) */}
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-1">
          <span className="text-[10px] font-black text-blue-400 uppercase tracking-wider">
            {product.category}
          </span>
          <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
            Aisle {product.aisle}
          </span>
        </div>

        <h3 className="font-bold text-blue-950 leading-tight mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {product.name}
        </h3>

        {/* Price & Unit */}
        <div className="mt-auto flex items-baseline gap-1 mb-4">
          <span className="text-xl font-black text-blue-950">
            ₦{(product.price * 1500).toLocaleString()} {/* Simulated Naira Conversion */}
          </span>
          <span className="text-xs font-bold text-gray-400">/{product.unit}</span>
        </div>
      </div>

      {/* 3. THE TACTILE BUTTON (Springs down on click) */}
      <button
        onClick={() => addToCart(product)}
        className="w-full bg-blue-50 text-blue-600 hover:bg-yellow-400 hover:text-blue-950 font-black py-2.5 rounded-xl transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 border border-blue-100 hover:border-transparent shadow-sm"
      >
        <ShoppingCart size={18} />
        ADD TO CART
      </button>

    </div>
  );
}