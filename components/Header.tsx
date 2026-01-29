'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, User, Search, X } from 'lucide-react';
import { useCart } from "@/context/CartContext";
import { useState } from 'react';

export default function Header() {
    const { cartCount } = useCart();
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-white shadow-sm">

            {/* Left Station: Navigation Buttons */}
            <nav className="flex items-center space-x-8">
                <Link href="/" className="text-heritage-charcoal uppercase tracking-[0.1em] text-xs font-semibold hover:text-heritage-gold transition-colors duration-300">
                    Home
                </Link>
                <Link href="/shop" className="text-heritage-charcoal uppercase tracking-[0.1em] text-xs font-semibold hover:text-heritage-gold transition-colors duration-300">
                    Shop
                </Link>
                <Link href="/about" className="text-heritage-charcoal uppercase tracking-[0.1em] text-xs font-semibold hover:text-heritage-gold transition-colors duration-300">
                    About Us
                </Link>
            </nav>

            {/* Center Station: Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-32 h-10 md:w-36 md:h-12">
                <Link href="/">
                    <Image
                        src="/Assets/logo/Logo.avif"
                        alt="Vedic Virtues Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>
            </div>

            {/* Right Station: Icons */}
            <div className="flex items-center space-x-6 text-heritage-charcoal relative">

                {/* Search Input Overlay */}
                {isSearchOpen && (
                    <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-heritage-charcoal/10 p-2 shadow-md flex items-center">
                        <input type="text" placeholder="Search..." className="w-full text-xs p-2 outline-none" autoFocus />
                        <button onClick={() => setIsSearchOpen(false)}><X size={14} /></button>
                    </div>
                )}

                <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="hover:text-heritage-gold transition-colors">
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
        </header>
    );
}
