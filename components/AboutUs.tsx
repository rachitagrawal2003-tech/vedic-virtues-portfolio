import RevealOnScroll from './ui/RevealOnScroll';

export default function AboutUs() {
    return (
        <section className="w-full py-24 px-8 bg-heritage-gold/5 flex justify-center">
            <div className="max-w-3xl text-center space-y-6">
                <RevealOnScroll>
                    <h2 className="text-4xl text-heritage-charcoal font-serif mb-8">
                        Our Story
                    </h2>
                </RevealOnScroll>
                <RevealOnScroll>
                    <p className="text-lg md:text-xl leading-loose font-sans text-heritage-charcoal/90">
                        At Vedic Virtues, we bring ancient Indian wellness to modern living.
                        Our products are ethically sourced from the Himalayas and crafted using
                        time-tested traditions. Nutritious, delicious, and made for all ages—they
                        help build resilience, boost immunity, and restore balance, naturally.
                    </p>
                </RevealOnScroll>
            </div>
        </section>
    );
}
