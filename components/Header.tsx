'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShoppingCart, User, Search, X } from 'lucide-react';
import { useCart } from "@/context/CartContext";
import { useState, useEffect } from 'react';

export default function Header() {
    const { cartCount } = useCart();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const query = e.currentTarget.value;
            if (query.trim()) {
                router.push(`/shop?q=${encodeURIComponent(query)}`);
                setIsSearchOpen(false);
            }
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-heritage-charcoal/5
            ${scrolled ? 'bg-white/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-12 items-center gap-4">

                {/* Left Section: Logo & Nav (Desktop) */}
                <div className="flex items-center md:col-span-4 gap-8">
                    <Link href="/" className="relative w-28 h-8 md:w-32 md:h-10 shrink-0">
                        <Image
                            src="/Assets/logo/Logo.avif"
                            alt="Vedic Virtues Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {['Home', 'Shop', 'About'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : item === 'Shop' ? '/shop' : '/about'}
                                className="text-heritage-charcoal uppercase tracking-[0.1em] text-xs font-semibold hover:text-heritage-gold transition-colors duration-300"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Center Section: Search (Desktop) */}
                <div className="hidden md:flex md:col-span-4 justify-center relative">
                    <div className="relative w-full max-w-xs group">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full bg-transparent border-b border-heritage-charcoal/20 py-2 pl-2 pr-8 text-sm focus:border-heritage-gold outline-none transition-colors text-heritage-charcoal font-serif placeholder:font-sans placeholder:text-heritage-charcoal/40"
                        />
                        <Search size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-heritage-charcoal/40 group-focus-within:text-heritage-gold transition-colors" />
                    </div>
                </div>

                {/* Right Section: Icons */}
                <div className="flex items-center justify-end md:col-span-4 space-x-6 text-heritage-charcoal">
                    {/* Mobile Search Toggle */}
                    <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="md:hidden hover:text-heritage-gold transition-colors">
                        <Search size={20} />
                    </button>

                    <Link href="/account" className="hover:text-heritage-gold transition-colors">
                        <User size={20} />
                    </Link>
                    <Link href="/cart" className="hover:text-heritage-gold transition-colors relative">
                        <ShoppingCart size={20} />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-heritage-gold text-[10px] text-white font-bold">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>

                {/* Mobile Nav Row */}
                <div className="col-span-2 md:hidden flex justify-center border-t border-heritage-charcoal/5 pt-4 mt-2">
                    <nav className="flex items-center space-x-6">
                        {['Home', 'Shop', 'About'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : item === 'Shop' ? '/shop' : '/about'}
                                className="text-heritage-charcoal uppercase tracking-[0.1em] text-[10px] font-semibold hover:text-heritage-gold transition-colors duration-300"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Mobile Search Overlay */}
                {isSearchOpen && (
                    <div className="absolute top-full left-0 w-full bg-white p-4 shadow-lg md:hidden border-t border-heritage-charcoal/10">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                onKeyDown={handleSearch}
                                className="w-full bg-gray-50 border border-heritage-charcoal/10 rounded-sm py-2 px-4 text-sm outline-none focus:border-heritage-gold"
                                autoFocus
                            />
                            <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-heritage-charcoal/40" />
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
