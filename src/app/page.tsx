"use client"; // 1. We must add this because we are using context/hooks now
import HeroSection from '@/components/herosection';
import ProductCard from '@/components/ProductCard';
import products from '@/data/product.json';
import { useCart } from '@/context/CartContext';
import { SearchX } from 'lucide-react'; // Icon for empty search results

interface Product {
  id: number;
  name: string;
  price: number;
  unit: string;
  category: string;
  aisle: string;
  image: string;
}

export default function Home() {
  // 2. Pull the search query from our "Brain"
  const { searchQuery } = useCart();

  // 3. The Filtering Logic
  // We make sure everything is lowercase so "MILK" and "milk" both work.
  const filteredProducts = products.filter((product: Product) => {
    if (!searchQuery) return true; // Show all if search is empty
    const query = searchQuery.toLowerCase();
    return (
      (product.name && product.name.toLowerCase().includes(query)) ||
      (product.category && product.category.toLowerCase().includes(query))
    );
  });

  return (
    <main className="min-h-screen bg-gray-50 pb-20">

      {/* 4. Dynamic Hero Section: Disappears when searching! */}
      {!searchQuery && <HeroSection />}

      <div className="max-w-7xl mx-auto px-4 mt-12">

        {/* Dynamic Section Header */}
        <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-black text-blue-950">
            {searchQuery ? `Search Results for "${searchQuery}"` : "Popular Essentials"}
          </h2>
          {!searchQuery && (
            <span className="text-sm font-bold text-blue-600 hover:text-yellow-500 cursor-pointer transition-colors">
              View All &rarr;
            </span>
          )}
        </div>

        {/* 5. Display the Grid OR the Empty State */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product: Product) => (
              <ProductCard key={product.id || product.name} product={product} />
            ))}
          </div>
        ) : (
          /* The Enterprise Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-2xl border border-gray-100 shadow-sm">
            <SearchX size={64} className="text-gray-300 mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-bold text-blue-950 mb-2">No products found</h3>
            <p className="text-sm text-gray-500 max-w-sm">
              We couldn't find anything matching "{searchQuery}". Try checking for typos or searching a broader category.
            </p>
          </div>
        )}

      </div>
    </main>
  );
}