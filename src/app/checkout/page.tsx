"use client";
import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { MapPin, Truck, Store, CreditCard, ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
    const { cart, cartTotal, clearCart } = useCart();
    const router = useRouter();

    // State to toggle between Delivery and Pickup
    const [logisticsMethod, setLogisticsMethod] = useState<'delivery' | 'pickup'>('delivery');

    // If they somehow get here with an empty cart, send them back home
    if (cart.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <h2 className="text-2xl font-black text-blue-950 mb-4">Your cart is empty</h2>
                <button onClick={() => router.push('/')} className="bg-yellow-400 text-blue-950 font-bold py-3 px-8 rounded-lg">
                    Return to Store
                </button>
            </div>
        );
    }

    const deliveryFee = logisticsMethod === 'delivery' ? 1500 : 0;
    const grandTotal = (cartTotal * 1500) + deliveryFee;

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* LEFT COLUMN: LOGISTICS & PAYMENT */}
                <div className="lg:col-span-2 space-y-6">

                    {/* 1. Logistics Toggle */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                        <h2 className="text-xl font-black text-blue-950 mb-6 flex items-center gap-2">
                            <MapPin className="text-yellow-500" /> How would you like to get your order?
                        </h2>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <button
                                onClick={() => setLogisticsMethod('delivery')}
                                className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${logisticsMethod === 'delivery' ? 'border-blue-600 bg-blue-50/50' : 'border-gray-100 hover:border-blue-200'}`}
                            >
                                <Truck size={32} className={logisticsMethod === 'delivery' ? 'text-blue-600' : 'text-gray-400'} />
                                <span className={`font-bold ${logisticsMethod === 'delivery' ? 'text-blue-950' : 'text-gray-500'}`}>Home Delivery</span>
                            </button>
                            <button
                                onClick={() => setLogisticsMethod('pickup')}
                                className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${logisticsMethod === 'pickup' ? 'border-blue-600 bg-blue-50/50' : 'border-gray-100 hover:border-blue-200'}`}
                            >
                                <Store size={32} className={logisticsMethod === 'pickup' ? 'text-blue-600' : 'text-gray-400'} />
                                <span className={`font-bold ${logisticsMethod === 'pickup' ? 'text-blue-950' : 'text-gray-500'}`}>Store Pickup</span>
                            </button>
                        </div>

                        {/* Dynamic Forms based on selection */}
                        {logisticsMethod === 'delivery' ? (
                            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <h3 className="font-bold text-blue-950">Delivery Address</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" placeholder="First Name" className="col-span-1 p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-600" />
                                    <input type="text" placeholder="Last Name" className="col-span-1 p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-600" />
                                    <input type="text" placeholder="Street Address (e.g., 15 Ahmadu Bello Way)" className="col-span-2 p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-600" />
                                    <input type="text" placeholder="Phone Number" className="col-span-2 p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-600" />
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <h3 className="font-bold text-blue-950">Select Pickup Branch</h3>
                                <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-600 text-blue-950 font-medium">
                                    <option>Kaduna Central (Main Branch)</option>
                                    <option>Barnawa Outlet</option>
                                    <option>Malali Branch</option>
                                </select>
                                <p className="text-sm text-gray-500 mt-2">Pickup is free. Your order will be ready in 30 minutes.</p>
                            </div>
                        )}
                    </div>

                    {/* 2. Dummy Payment Section */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm opacity-50 pointer-events-none">
                        <h2 className="text-xl font-black text-blue-950 mb-4 flex items-center gap-2">
                            <CreditCard className="text-gray-400" /> Payment Details
                        </h2>
                        <p className="text-sm text-gray-500 mb-4">Payment integration will be handled via Paystack in the final build.</p>
                        <div className="h-12 bg-gray-100 rounded-lg border border-gray-200 w-full mb-2"></div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-12 bg-gray-100 rounded-lg border border-gray-200"></div>
                            <div className="h-12 bg-gray-100 rounded-lg border border-gray-200"></div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: ORDER SUMMARY */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm sticky top-28">
                        <h2 className="text-xl font-black text-blue-950 mb-6">Order Summary</h2>

                        {/* Tiny item list to remind them what they are buying */}
                        <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto no-scrollbar border-b border-gray-100 pb-4">
                            {cart.map((item: any) => (
                                <div key={item.id || item.name} className="flex justify-between text-sm">
                                    <div className="flex gap-2">
                                        <span className="font-bold text-gray-400">{item.quantity}x</span>
                                        <span className="text-blue-950 font-medium truncate w-40">{item.name}</span>
                                    </div>
                                    <span className="font-bold text-blue-950">₦{((item.price * 1500) * item.quantity).toLocaleString()}</span>
                                </div>
                            ))}
                        </div>

                        {/* Price Calculations */}
                        <div className="space-y-3 text-sm text-gray-600 mb-6">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span className="font-bold text-blue-950">₦{(cartTotal * 1500).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>{logisticsMethod === 'delivery' ? 'Delivery Fee (Kaduna)' : 'Pickup Fee'}</span>
                                <span className="font-bold text-blue-950">{deliveryFee === 0 ? 'FREE' : `₦${deliveryFee.toLocaleString()}`}</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center border-t border-gray-200 pt-4 mb-6">
                            <span className="text-lg font-bold text-blue-950">Total</span>
                            <span className="text-3xl font-black text-blue-600">₦{grandTotal.toLocaleString()}</span>
                        </div>

                        {/* The Final Action Button */}
                        {/* The Final Action Button */}
                        <button
                            onClick={() => {
                                clearCart(); // 1. Empty the cart
                                router.push('/success'); // 2. Send them to the success page
                            }}
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-black py-4 rounded-xl flex justify-center items-center gap-2 transition-all shadow-sm text-lg"
                        >
                            <ShieldCheck size={20} /> PLACE MOCK ORDER
                        </button>
                        <p className="text-center text-[10px] font-bold text-gray-400 mt-4 uppercase tracking-wider">
                            Secure Checkout • 256-Bit Encryption
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}