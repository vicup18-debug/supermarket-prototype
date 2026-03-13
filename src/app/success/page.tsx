"use client";
import React, { useEffect, useState } from 'react';
import { CheckCircle, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function SuccessPage() {
    const [orderNumber, setOrderNumber] = useState('');

    // Generate a random, authentic-looking order ID when the page loads
    useEffect(() => {
        const randomId = Math.random().toString(36).substring(2, 10).toUpperCase();
        setOrderNumber(`SIDI-${randomId}`);
    }, []);

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 px-4 py-12">

            {/* The Animated Success Card */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 max-w-lg w-full text-center animate-in zoom-in duration-500">

                {/* Massive Green Checkmark */}
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <CheckCircle className="text-green-500 w-12 h-12" strokeWidth={2.5} />
                </div>

                <h1 className="text-3xl md:text-4xl font-black text-blue-950 mb-3 tracking-tight">
                    Order Confirmed!
                </h1>

                <p className="text-gray-500 mb-8 font-medium text-sm md:text-base px-4">
                    Thank you for shopping with Sidi & Sons. Your groceries are being prepped and will be on their way shortly.
                </p>

                {/* Dynamic Order Number Box */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-200 shadow-sm">
                    <p className="text-xs font-bold text-gray-400 mb-1 uppercase tracking-widest">
                        Order Reference
                    </p>
                    <p className="text-2xl md:text-3xl font-black text-blue-950 tracking-wider">
                        {orderNumber || 'GENERATING...'}
                    </p>
                </div>

                {/* Back to Home Button */}
                <Link href="/">
                    <button className="w-full bg-blue-950 hover:bg-blue-900 text-white font-black py-4 rounded-xl transition-all shadow-md flex justify-center items-center gap-3">
                        <ShoppingBag size={20} /> CONTINUE SHOPPING
                    </button>
                </Link>

            </div>
        </div>
    );
}