import React from 'react';
import { ArrowRight, Clock, ShieldCheck, Truck } from 'lucide-react';

export default function HeroSection() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-6">

            {/* THE BENTO GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto lg:h-[480px]">

                {/* 1. THE MASSIVE MAIN BANNER (Spans 2 columns) */}
                <div className="lg:col-span-2 relative bg-blue-950 rounded-2xl overflow-hidden group shadow-lg flex items-center">
                    {/* Background Image with Dark/Blue Gradient Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop"
                            alt="Fresh Groceries"
                            className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/90 to-transparent"></div>
                    </div>

                    {/* Banner Content */}
                    <div className="relative z-10 p-8 md:p-12 max-w-xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-yellow-400/20 text-yellow-400 text-xs font-black tracking-wider uppercase mb-4 border border-yellow-400/50">
                            Same-Day Delivery in Kaduna
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-4">
                            Freshness Delivered <br />
                            <span className="text-yellow-400">To Your Doorstep.</span>
                        </h1>
                        <p className="text-blue-100 text-base md:text-lg mb-8 font-medium max-w-md leading-relaxed">
                            Shop Sidi & Sons for the widest selection of premium groceries, household essentials, and fresh local produce.
                        </p>
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 text-sm md:text-base font-black py-4 px-8 rounded-lg shadow-[0_0_20px_rgba(250,204,21,0.3)] transition-all flex items-center gap-2 hover:gap-4">
                            Shop The Aisles Now <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                {/* 2. THE SIDE PROMOS (Stacked) */}
                <div className="grid grid-rows-2 gap-4 h-[400px] lg:h-full">

                    {/* Top Side Promo - Fresh Meat/Deli */}
                    <div className="relative bg-red-900 rounded-2xl overflow-hidden group shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=800&auto=format&fit=crop"
                            alt="Fresh Meat"
                            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-red-900/60 to-transparent"></div>
                        <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
                            <h3 className="text-2xl font-black leading-tight mb-1">Premium Cuts</h3>
                            <p className="text-red-100 text-sm font-medium mb-3">Fresh from our butchery to your table.</p>
                            <button className="bg-white text-red-900 text-xs font-black py-2 px-4 rounded-md w-fit hover:bg-gray-100 transition-colors">
                                Order Meat & Poultry
                            </button>
                        </div>
                    </div>

                    {/* Bottom Side Promo - Weekly Deals */}
                    <div className="relative bg-emerald-900 rounded-2xl overflow-hidden group shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?q=80&w=800&auto=format&fit=crop"
                            alt="Fresh Produce"
                            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/60 to-transparent"></div>
                        <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
                            <span className="bg-yellow-400 text-emerald-950 text-[10px] font-black px-2 py-1 rounded w-fit mb-2 uppercase">Ends Sunday</span>
                            <h3 className="text-2xl font-black leading-tight mb-1">Weekly Mega Deals</h3>
                            <p className="text-emerald-100 text-sm font-medium mb-3">Up to 40% off household essentials.</p>
                            <button className="bg-white text-emerald-900 text-xs font-black py-2 px-4 rounded-md w-fit hover:bg-gray-100 transition-colors">
                                View All Deals
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* 3. TRUST BADGES (Crucial for Enterprise feel) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                    <div className="bg-blue-50 p-3 rounded-full text-blue-600"><Truck size={24} /></div>
                    <div>
                        <h4 className="font-bold text-blue-950 text-sm">Fast Delivery</h4>
                        <p className="text-xs text-gray-500 font-medium">Across all zones in Kaduna</p>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                    <div className="bg-yellow-50 p-3 rounded-full text-yellow-600"><ShieldCheck size={24} /></div>
                    <div>
                        <h4 className="font-bold text-blue-950 text-sm">100% Secure Payment</h4>
                        <p className="text-xs text-gray-500 font-medium">Pay on delivery or online</p>
                    </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                    <div className="bg-green-50 p-3 rounded-full text-green-600"><Clock size={24} /></div>
                    <div>
                        <h4 className="font-bold text-blue-950 text-sm">Freshness Guaranteed</h4>
                        <p className="text-xs text-gray-500 font-medium">Quality checks on all items</p>
                    </div>
                </div>
            </div>

        </div>
    );
}