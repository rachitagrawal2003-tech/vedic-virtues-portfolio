'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Header from "@/components/Header";
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const productData = {
    "sea-buckthorn": {
        id: "sea-buckthorn",
        name: "Sea Buckthorn",
        image: "/Assets/Products/Sea buckthorn.png",
        price: 40,
        tagline: "The Himalayan Miracle Berry",
        description: "Harvested from the high altitudes of the Himalayas, Sea Buckthorn (Hippophae rhamnoides) is a powerhouse of nutrients. Known as the 'Holy Fruit', it is the only plant source in the world to contain Omega 3, 6, 9, and the rare Omega 7 fatty acids. Our concentrate captures the essence of this vibrant orange berry, offering a tart, citrusy flavor that invigorates the senses.",
        benefits: [
            "Rich in Omega-7 for skin health and collagen production.",
            "High Vitamin C content boosts immunity.",
            "Supports cardiovascular health and vitality.",
            "Sustainably wild-harvested at 12,000ft."
        ],
        details: "100% Pure Concentrate | No Added Sugar | Gluten Free | Vegan"
    },
    "buraansh": {
        id: "buraansh",
        name: "Buraansh",
        image: "/Assets/Products/Buraansh.png",
        price: 35,
        tagline: "Nectar of the Rhododendron",
        description: "Buraansh is crafted from the vibrant red petals of the Rhododendron arboreum, the state flower of Uttarakhand. This cooling elixir has been used in Ayurvedic traditions for centuries to soothe the heart and liver. Our squash preserves the delicate floral aroma and the deep crimson hue, delivering a refreshing taste of the mountain springs.",
        benefits: [
            "Natural antioxidant properties.",
            "Promotes heart health and circulation.",
            "Cooling effect on the body, ideal for summer.",
            "Hand-picked petals from protected forests."
        ],
        details: "Traditional Recipe | Artificial Color Free | Preservative Free"
    }
};

export default function ProductPage() {
    const params = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState<any>(null);

    useEffect(() => {
        if (params.slug) {
            const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
            setProduct(productData[slug as keyof typeof productData]);
        }
    }, [params]);

    if (!product) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-heritage-cream">
                <p className="text-heritage-charcoal font-serif text-xl">Loading...</p>
            </main>
        );
    }

    return (
        <main className="min-h-screen relative bg-heritage-cream">
            <Header />
            <div className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-full aspect-[4/5] bg-white border border-heritage-charcoal/5 flex items-center justify-center p-12"
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Details Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <p className="text-heritage-gold uppercase tracking-widest text-xs font-semibold mb-2">
                                {product.tagline}
                            </p>
                            <h1 className="text-5xl md:text-6xl font-serif text-heritage-charcoal mb-4">
                                {product.name}
                            </h1>
                            <p className="text-3xl text-heritage-charcoal font-light">
                                ${product.price}
                            </p>
                        </div>

                        <div className="w-12 h-[1px] bg-heritage-gold/50"></div>

                        <p className="text-heritage-charcoal/80 leading-loose text-lg font-light">
                            {product.description}
                        </p>

                        <div className="space-y-4">
                            <h3 className="font-serif text-xl text-heritage-charcoal">Key Benefits</h3>
                            <ul className="grid grid-cols-1 gap-2">
                                {product.benefits.map((benefit: string, index: number) => (
                                    <li key={index} className="flex items-start text-sm text-heritage-charcoal/70">
                                        <span className="mr-2 text-heritage-gold">•</span>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="text-xs text-heritage-charcoal/40 uppercase tracking-widest pt-4">
                            {product.details}
                        </p>

                        <div className="pt-8">
                            <button
                                onClick={() => {
                                    addToCart(product);
                                    alert(`Added ${product.name} to cart!`);
                                }}
                                className="w-full md:w-auto px-12 py-4 bg-heritage-charcoal text-white text-sm uppercase tracking-[0.2em] hover:bg-heritage-gold transition-all duration-500"
                            >
                                Add to Cart
                            </button>
                        </div>

                    </motion.div>
                </div>
            </div>
        </main>
    );
}
