import Header from "@/components/Header";
import { Leaf, Droplet, UserCheck, Heart } from 'lucide-react';

export default function About() {
    return (
        <main className="min-h-screen bg-heritage-cream/20">
            <Header />

            {/* Story Section */}
            <section className="pt-32 pb-24 px-8 max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-serif text-heritage-charcoal mb-12">
                    About Us
                </h1>
                <p className="text-xl md:text-2xl leading-loose font-sans text-heritage-charcoal/80 font-light">
                    At Vedic Virtues, we bring ancient Indian wellness to modern living.
                    Our products are ethically sourced from the Himalayas and crafted using
                    time-tested traditions. Nutritious, delicious, and made for all ages—they
                    help build resilience, boost immunity, and restore balance, naturally.
                </p>
            </section>

            {/* Values Section */}
            <section className="py-24 px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl text-center font-serif text-heritage-charcoal mb-16">
                        Our Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { icon: <Leaf size={40} />, title: "No Additives", text: "Pure ingredients. No artificial flavors, colors, or hidden chemicals." },
                            { icon: <Droplet size={40} />, title: "No Added Sugar", text: "Free from added sugars — only the natural sweetness of real ingredients." },
                            { icon: <UserCheck size={40} />, title: "Sustainably Sourced", text: "Ethically harvested from indigenous, local farms and natural forests of India." },
                            { icon: <Heart size={40} />, title: "Ayurveda + Science", text: "Rooted in ancient Ayurvedic wisdom, perfected with modern science for everyday wellness." }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center space-y-6">
                                <div className="text-heritage-gold">{item.icon}</div>
                                <h3 className="text-xl font-serif font-semibold">{item.title}</h3>
                                <p className="text-base text-heritage-charcoal/70 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}
