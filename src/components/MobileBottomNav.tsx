"use client";
import React from 'react';
import { Home, Search, ShoppingBag, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function MobileBottomNav() {
    const { cartCount, setIsCartOpen } = useCart();

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16 z-40 shadow-[0_-5px_10px_rgba(0,0,0,0.05)] pb-safe">

            {/* Home Tab */}
            <Link href="/" className="flex flex-col items-center justify-center w-full h-full text-blue-950 hover:text-blue-600 transition-colors">
                <Home size={22} strokeWidth={2} />
                <span className="text-[10px] font-bold mt-1">Home</span>
            </Link>

            {/* Search Tab */}
            <div className="flex flex-col items-center justify-center w-full h-full text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                <Search size={22} strokeWidth={2} />
                <span className="text-[10px] font-bold mt-1">Search</span>
            </div>

            {/* Cart Tab (The Money Maker) */}
            <div
                onClick={() => setIsCartOpen(true)}
                className="flex flex-col items-center justify-center w-full h-full text-gray-400 hover:text-yellow-500 transition-colors cursor-pointer relative"
            >
                <div className="relative">
                    <ShoppingBag size={22} strokeWidth={2} className={cartCount > 0 ? "text-yellow-500" : ""} />
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">
                            {cartCount}
                        </span>
                    )}
                </div>
                <span className={`text-[10px] font-bold mt-1 ${cartCount > 0 ? "text-yellow-500" : ""}`}>Cart</span>
            </div>

            {/* Account Tab */}
            <div className="flex flex-col items-center justify-center w-full h-full text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                <User size={22} strokeWidth={2} />
                <span className="text-[10px] font-bold mt-1">Account</span>
            </div>

        </div>
    );
}