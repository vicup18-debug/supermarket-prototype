"use client";
import React from 'react';
import { ShoppingBag, Search, MapPin, User, ChevronDown, Phone, Menu } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
    const { cartCount, setIsCartOpen, searchQuery, setSearchQuery } = useCart();

    // Professional prototype alert for links that aren't built yet
    const handlePrototypeClick = (feature: string) => {
        alert(`The ${feature} module will be connected to the backend in the final enterprise build.`);
    };

    return (
        <nav className="sticky top-0 z-50 w-full flex flex-col shadow-md">
            {/* 1. TOP ANNOUNCEMENT BAR (Trust & Contact) */}
            <div className="bg-blue-950 text-gray-200 py-1.5 px-4 text-xs font-medium">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <span className="hidden md:inline-block">Welcome to Kaduna's Largest Supermarket</span>
                        <div className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer transition-colors">
                            <Phone size={12} />
                            <span>Order via WhatsApp: +234 800 SIDI</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span
                            className="hover:text-white cursor-pointer"
                            onClick={() => handlePrototypeClick('Order Tracking')}
                        >
                            Track Order
                        </span>
                        <span className="opacity-40">|</span>
                        <span
                            className="hover:text-white cursor-pointer"
                            onClick={() => handlePrototypeClick('Help Center')}
                        >
                            Help Center
                        </span>
                    </div>
                </div>
            </div>

            {/* 2. MAIN NAVIGATION (Search & Branding) */}
            <div className="bg-blue-900 text-white py-4 px-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 md:gap-8">

                    {/* SIDI & SONS LOGO */}
                    <div className="flex items-center gap-2 shrink-0 cursor-pointer">
                        <Menu className="lg:hidden text-white" size={28} />
                        <div className="flex flex-col">
                            <span className="text-2xl md:text-3xl font-black tracking-tight text-white leading-none">
                                SIDI <span className="text-yellow-400">&</span> SONS
                            </span>
                            <span className="text-[10px] text-blue-200 font-semibold tracking-widest uppercase mt-1">
                                Supermarket
                            </span>
                        </div>
                    </div>

                    {/* THE ENTERPRISE SEARCH BAR */}
                    <div className="hidden lg:flex flex-1 max-w-3xl relative">
                        <div className="flex w-full bg-white rounded-lg overflow-hidden border-2 border-transparent focus-within:border-yellow-400 focus-within:ring-4 focus-within:ring-yellow-400/20 transition-all shadow-inner">
                            <div className="bg-gray-100 px-4 py-3 border-r border-gray-200 text-gray-600 text-sm font-medium flex items-center gap-1 cursor-pointer hover:bg-gray-200 shrink-0">
                                All Depts <ChevronDown size={14} />
                            </div>

                            <input
                                type="text"
                                placeholder="Search groceries, electronics, home goods..."
                                className="flex-1 py-3 px-4 text-gray-800 outline-none text-sm placeholder-gray-400"
                                value={searchQuery || ""}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />

                            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 px-8 font-bold text-sm transition-colors flex items-center gap-2">
                                <Search size={18} strokeWidth={2.5} />
                                SEARCH
                            </button>
                        </div>
                    </div>

                    {/* USER ACTIONS */}
                    <div className="flex items-center gap-5 md:gap-8 shrink-0">
                        {/* Location (Kaduna) */}
                        <div className="hidden md:flex flex-col items-start cursor-pointer group">
                            <span className="text-[10px] text-blue-200 font-semibold">Delivery to</span>
                            <div className="flex items-center gap-1 font-bold group-hover:text-yellow-400 transition-colors">
                                <MapPin size={16} />
                                <span className="text-sm">Kaduna Central</span>
                            </div>
                        </div>

                        {/* Account (Wired to Prototype Alert) */}
                        <div
                            className="hidden md:flex flex-col items-start cursor-pointer group"
                            onClick={() => handlePrototypeClick('User Authentication')}
                        >
                            <span className="text-[10px] text-blue-200 font-semibold">Hello, Sign in</span>
                            <div className="flex items-center gap-1 font-bold group-hover:text-yellow-400 transition-colors">
                                <span className="text-sm">Account & Lists</span>
                                <ChevronDown size={14} />
                            </div>
                        </div>

                        {/* The Cart Button */}
                        <div
                            className="relative cursor-pointer group flex items-center gap-2 hover:opacity-80 transition-opacity"
                            onClick={() => setIsCartOpen(true)}
                        >
                            <div className="relative">
                                <ShoppingBag size={32} className="text-yellow-400" strokeWidth={1.5} />
                                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-1 text-[11px] font-black text-white">
                                    {cartCount || 0}
                                </span>
                            </div>
                            <span className="hidden sm:block text-sm font-bold text-yellow-400 mt-2">Cart</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. CATEGORY RIBBON (Wired to Search State) */}
            <div className="bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                    <div className="flex gap-6 overflow-x-auto no-scrollbar py-2.5 text-sm font-bold text-blue-950 whitespace-nowrap">
                        <button onClick={() => setSearchQuery('')} className="flex items-center gap-1 hover:text-blue-600 cursor-pointer outline-none">
                            <Menu size={16} /> All Categories
                        </button>
                        <span className="text-gray-300">|</span>
                        <button onClick={() => setSearchQuery('Fresh Produce')} className="hover:text-blue-600 cursor-pointer outline-none">Fresh Produce</button>
                        <button onClick={() => setSearchQuery('Meat')} className="hover:text-blue-600 cursor-pointer outline-none">Meat & Poultry</button>
                        <button onClick={() => setSearchQuery('Beverages')} className="hover:text-blue-600 cursor-pointer outline-none">Beverages</button>
                        <button onClick={() => setSearchQuery('Household')} className="hover:text-blue-600 cursor-pointer outline-none">Household Cleaning</button>
                        <button onClick={() => setSearchQuery('Personal Care')} className="hover:text-blue-600 cursor-pointer outline-none">Personal Care</button>
                        <button onClick={() => setSearchQuery('sale')} className="text-red-600 hover:text-red-700 cursor-pointer flex items-center gap-1 outline-none">Today's Deals</button>
                    </div>
                </div>
            </div>

            {/* 4. MOBILE-ONLY SEARCH BAR */}
            <div className="lg:hidden bg-blue-900 px-4 py-3 border-t border-blue-800">
                <div className="flex w-full bg-white rounded-lg overflow-hidden border-2 border-transparent focus-within:border-yellow-400 transition-all shadow-inner">
                    <div className="pl-3 flex items-center justify-center text-gray-400">
                        <Search size={18} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search groceries..."
                        className="flex-1 py-2.5 px-3 text-gray-800 outline-none text-sm placeholder-gray-400"
                        value={searchQuery || ""}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>
        </nav>
    );
}