export default function Philosophy() {
    return (
        <section className="w-full py-24 px-8 flex justify-center items-center">
            <div className="max-w-2xl w-full text-center space-y-12">

                {/* Top Divider */}
                <div className="w-24 h-[1px] bg-heritage-gold mx-auto"></div>

                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl text-heritage-charcoal font-serif">
                        The Vedic Way.
                    </h2>
                    <p className="text-base md:text-lg leading-loose opacity-80 font-sans">
                        We believe in the purity of the source. Our ingredients are harvested at peak
                        potency from the high-altitude terrains of the Himalayas, respecting the cycles
                        of nature and the traditions of those who came before us.
                    </p>
                </div>

                {/* Bottom Divider */}
                <div className="w-24 h-[1px] bg-heritage-gold mx-auto"></div>

            </div>
        </section>
    );
}
