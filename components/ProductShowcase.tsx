import Image from 'next/image';

const products = [
    {
        name: "Sea Buckthorn",
        image: "/Assets/Products/Sea buckthorn.png",
        description: "The Himalayan miracle berry, packed with Omega-7."
    },
    {
        name: "Buraansh",
        image: "/Assets/Products/Buraansh.png",
        description: "Rhododendron flower nectar, cooling and heart-healthy."
    }
];

export default function ProductShowcase() {
    return (
        <section className="w-full py-24 px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl text-center font-serif text-heritage-charcoal mb-16">
                    Our Collection
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {products.map((product) => (
                        <div key={product.name} className="group cursor-pointer">
                            <div className="relative w-full aspect-[4/5] overflow-hidden bg-white mb-6 p-12 flex items-center justify-center border border-heritage-charcoal/5">
                                <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-105">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <div className="text-center space-y-2">
                                <h3 className="text-2xl font-serif text-heritage-charcoal">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-heritage-charcoal/60">
                                    {product.description}
                                </p>
                                <button className="mt-4 px-6 py-2 border border-heritage-charcoal/20 text-xs uppercase tracking-widest hover:bg-heritage-charcoal hover:text-white transition-all">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
