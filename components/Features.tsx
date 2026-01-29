import { Leaf, Droplet, UserCheck, Heart } from 'lucide-react';
import RevealOnScroll from './ui/RevealOnScroll';

const features = [
    {
        icon: <Leaf size={32} />,
        title: "No Additives",
        description: "Pure ingredients. No artificial flavors, colors, or hidden chemicals."
    },
    {
        icon: <Droplet size={32} />,
        title: "No Added Sugar",
        description: "Free from added sugars — only the natural sweetness of real ingredients."
    },
    {
        icon: <UserCheck size={32} />,
        title: "Sustainably Sourced",
        description: "Ethically harvested from indigenous, local farms and natural forests of India."
    },
    {
        icon: <Heart size={32} />,
        title: "Ayurveda + Science",
        description: "Rooted in ancient Ayurvedic wisdom, perfected with modern science for everyday wellness."
    }
];

export default function Features() {
    return (
        <section className="w-full py-10 md:py-24 px-8 bg-heritage-cream">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {features.map((feature, index) => (
                    <RevealOnScroll key={index} className="flex flex-col items-center text-center space-y-4 p-6 hover:bg-white/50 transition-colors duration-500 rounded-sm">
                        <div className="text-heritage-gold mb-2">
                            {feature.icon}
                        </div>
                        <h3 className="text-lg font-serif font-semibold text-heritage-charcoal tracking-wide">
                            {feature.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-heritage-charcoal/80">
                            {feature.description}
                        </p>
                    </RevealOnScroll>
                ))}
            </div>
        </section>
    );
}
