"use client";
import React, { useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CartDrawer() {
    const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();
    const router = useRouter();

    // Prevent scrolling on the main page when the drawer is open
    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isCartOpen]);

    // High-Tech Animation Classes
    const overlayClass = isCartOpen ? "opacity-100 visible" : "opacity-0 invisible";
    const drawerClass = isCartOpen ? "translate-x-0 shadow-[-20px_0_50px_-10px_rgba(23,37,84,0.3)]" : "translate-x-full";

    return (
        <>
            {/* 1. GLASSMORPHISM OVERLAY */}
            <div
                className={`fixed inset-0 bg-blue-950/30 backdrop-blur-sm z-[60] transition-all duration-300 ease-in-out ${overlayClass}`}
                onClick={() => setIsCartOpen(false)}
            />

            {/* 2. THE HIGH-TECH DRAWER */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-gray-50 z-[70] flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] ${drawerClass}`}
            >
                {/* HEADER - Enterprise Deep Blue */}
                <div className="bg-blue-950 text-white px-6 py-5 flex items-center justify-between border-b border-blue-900">
                    <div className="flex items-center gap-3">
                        <ShoppingCart size={24} className="text-yellow-400" />
                        <h2 className="text-xl font-black tracking-tight">Your Cart</h2>
                        <span className="bg-yellow-400 text-blue-950 text-xs font-bold px-2.5 py-0.5 rounded-full ml-2">
                            {cart.length} Items
                        </span>
                    </div>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="p-2 bg-blue-900/50 rounded-full hover:bg-yellow-400 hover:text-blue-950 transition-colors"
                    >
                        <X size={20} strokeWidth={2.5} />
                    </button>
                </div>

                {/* BODY - Scrollable Item List */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
                    {cart.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center opacity-60">
                            <ShoppingCart size={64} className="text-gray-300 mb-4" strokeWidth={1} />
                            <h3 className="text-xl font-bold text-blue-950 mb-2">Your cart is empty</h3>
                            <p className="text-sm text-gray-500 max-w-[200px]">Looks like you haven't added any groceries yet.</p>
                        </div>
                    ) : (
                        cart.map((item: any) => (
                            <div key={item.id || item.name} className="group flex gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative">

                                {/* Item Image */}
                                <div className="w-20 h-20 bg-gray-50 rounded-xl overflow-hidden shrink-0 border border-gray-100">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>

                                {/* Item Details */}
                                <div className="flex-1 flex flex-col justify-between py-1">
                                    <div className="pr-6">
                                        <h4 className="font-bold text-blue-950 text-sm leading-tight line-clamp-2">{item.name}</h4>
                                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{item.unit}</span>
                                    </div>

                                    {/* Controls & Price */}
                                    <div className="flex items-center justify-between mt-2">
                                        <span className="font-black text-blue-600 text-lg">
                                            ₦{((item.price || 0) * 1500).toLocaleString()}
                                        </span>

                                        {/* High-Tech Quantity Toggle */}
                                        <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1 border border-gray-200">
                                            <button
                                                onClick={() => updateQuantity(item.id || item.name, 'decrease')}
                                                className="w-7 h-7 flex items-center justify-center bg-white rounded shadow-sm text-gray-600 hover:text-blue-600 hover:border-blue-200 transition-colors"
                                            >
                                                <Minus size={14} strokeWidth={3} />
                                            </button>
                                            <span className="w-8 text-center text-sm font-black text-blue-950">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => updateQuantity(item.id || item.name, 'increase')}
                                                className="w-7 h-7 flex items-center justify-center bg-white rounded shadow-sm text-gray-600 hover:text-blue-600 hover:border-blue-200 transition-colors"
                                            >
                                                <Plus size={14} strokeWidth={3} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Remove Button (Appears on hover) */}
                                <button
                                    onClick={() => removeFromCart(item.id || item.name)}
                                    className="absolute top-4 right-4 text-gray-300 hover:text-red-500 md:opacity-0 group-hover:opacity-100 transition-all bg-white rounded-full p-1"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {/* FOOTER - Sticky Checkout Area */}
                <div className="bg-white border-t border-gray-100 p-6 z-10 shadow-[0_-10px_30px_rgba(0,0,0,0.02)]">
                    <div className="flex justify-between items-end mb-4">
                        <span className="text-sm text-gray-500 font-bold uppercase tracking-wider">Estimated Total</span>
                        <span className="text-3xl font-black text-blue-950 tracking-tight">
                            ₦{(cartTotal * 1500).toLocaleString()}
                        </span>
                    </div>
                    {/* Update the hook at the top of your component: const router = useRouter(); */}
                    <button
                        disabled={cart.length === 0}
                        onClick={() => {
                            setIsCartOpen(false); // Close the drawer
                            router.push('/checkout'); // Send them to the money page
                        }}
                        className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-100 disabled:text-gray-400 text-blue-950 font-black py-4 rounded-xl flex justify-center items-center gap-2 transition-all shadow-sm text-base tracking-wide"
                    >
                        PROCEED TO CHECKOUT <ArrowRight size={20} strokeWidth={2.5} />
                    </button>
                </div>

            </div>
        </>
    );
}