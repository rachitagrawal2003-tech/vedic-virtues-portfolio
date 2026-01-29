export default function Footer() {
    return (
        <footer className="w-full bg-heritage-charcoal text-heritage-cream py-12 px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-center md:text-left">

                {/* Brand */}
                <div>
                    <h3 className="text-xl font-serif tracking-in-expand">Vedic Virtues</h3>
                    <p className="text-xs text-white/40 mt-1">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 text-sm font-sans tracking-wide">
                    <div className="group">
                        <span className="block text-white/40 text-xs uppercase tracking-widest mb-1">Contact Us</span>
                        <a href="mailto:support@vedicvirtues.com" className="hover:text-heritage-gold transition-colors">
                            support@vedicvirtues.com
                        </a>
                    </div>
                    <div className="group">
                        <span className="block text-white/40 text-xs uppercase tracking-widest mb-1">Call Us</span>
                        <a href="tel:+919884745186" className="hover:text-heritage-gold transition-colors">
                            +91 9884745186
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
