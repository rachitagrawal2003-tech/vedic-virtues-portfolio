'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from "@/components/Header";
import { useCart } from "@/context/CartContext";
import { useNotification } from "@/context/NotificationContext";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const products = [
    {
        id: "sea-buckthorn",
        name: "Sea Buckthorn",
        image: "/Assets/Products/Sea buckthorn.png",
        price: 40,
        description: "The Himalayan miracle berry, packed with Omega-7."
    },
    {
        id: "buraansh",
        name: "Buraansh",
        image: "/Assets/Products/Buraansh.png",
        price: 35,
        description: "Rhododendron flower nectar, cooling and heart-healthy."
    }
];

function ShopContent() {
    const { addToCart } = useCart();
    const { showNotification } = useNotification();
    const searchParams = useSearchParams();
    const query = searchParams.get('q')?.toLowerCase() || '';

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );

    return (
        <main className="min-h-screen relative bg-heritage-cream/20">
            <Header />
            <div className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
                <h1 className="text-5xl text-center font-serif text-heritage-charcoal mb-16">
                    Our Collection
                </h1>

                {filteredProducts.length === 0 ? (
                    <p className="text-center text-heritage-charcoal/60 text-lg">No products found matching "{query}".</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {filteredProducts.map((product) => (
                            <Link href={`/shop/${product.id}`} key={product.id} className="group bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 block">
                                <div className="relative w-full aspect-[4/5] overflow-hidden mb-8 flex items-center justify-center border-b border-heritage-charcoal/5">
                                    <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-105">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-contain p-8"
                                        />
                                    </div>
                                </div>
                                <div className="text-center space-y-4">
                                    <h3 className="text-3xl font-serif text-heritage-charcoal">
                                        {product.name}
                                    </h3>
                                    <p className="text-lg text-heritage-gold font-medium">
                                        ${product.price}
                                    </p>
                                    <p className="text-sm text-heritage-charcoal/60 leading-relaxed max-w-sm mx-auto">
                                        {product.description}
                                    </p>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault(); // Prevent navigation when clicking 'Add to Cart'
                                            addToCart(product);
                                            showNotification(`Added ${product.name} to your cart.`);
                                        }}
                                        className="mt-6 px-10 py-3 bg-heritage-charcoal text-white text-xs uppercase tracking-widest hover:bg-heritage-gold transition-colors duration-300"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}

export default function Shop() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ShopContent />
        </Suspense>
    );
}
