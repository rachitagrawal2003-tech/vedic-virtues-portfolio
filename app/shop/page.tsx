'use client';

import Image from 'next/image';
import Header from "@/components/Header";
import { useCart } from "@/context/CartContext";

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

export default function Shop() {
    const { addToCart } = useCart();

    return (
        <main className="min-h-screen relative bg-heritage-cream/20">
            <Header />
            <div className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
                <h1 className="text-5xl text-center font-serif text-heritage-charcoal mb-16">
                    Our Collection
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {products.map((product) => (
                        <div key={product.id} className="group bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all duration-300">
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
                                    onClick={() => {
                                        addToCart(product);
                                        alert(`Added ${product.name} to cart!`);
                                    }}
                                    className="mt-6 px-10 py-3 bg-heritage-charcoal text-white text-xs uppercase tracking-widest hover:bg-heritage-gold transition-colors duration-300"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
