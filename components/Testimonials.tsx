import RevealOnScroll from './ui/RevealOnScroll';

const testimonials = [
    {
        quote: "Since adding Sea Buckthorn to my daily routine, my skin feels more radiant and my energy levels have stabilized.",
        author: "Aditi R.",
        role: "Wellness Advocate"
    },
    {
        quote: "The Buraansh juice takes me back to my childhood summers in the hills. The purity is unmistakable.",
        author: "Vikram S.",
        role: "Chef at Olam"
    },
    {
        quote: "Finally, a brand that respects the source. No sugar, no nonsense. Just pure Himalayan goodness.",
        author: "Sarah J.",
        role: "Yoga Instructor"
    }
];

export default function Testimonials() {
    return (
        <section className="w-full py-24 px-8 bg-white border-t border-heritage-charcoal/5">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl text-center font-serif text-heritage-charcoal mb-16">
                    Stories from the Community
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <RevealOnScroll key={i} className="p-10 bg-heritage-cream/30 text-center space-y-6 flex flex-col items-center justify-center">
                            <div className="text-4xl text-heritage-gold font-serif">"</div>
                            <p className="text-lg italic text-heritage-charcoal/80 leading-relaxed font-serif">
                                {t.quote}
                            </p>
                            <div className="pt-4 border-t border-heritage-gold/20 w-12"></div>
                            <div>
                                <p className="text-sm font-bold tracking-wider uppercase text-heritage-charcoal">
                                    {t.author}
                                </p>
                                <p className="text-xs text-heritage-charcoal/50 mt-1">
                                    {t.role}
                                </p>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
