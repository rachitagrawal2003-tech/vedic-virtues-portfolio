'use client';

import Image from 'next/image';
import Header from "@/components/Header";
import { useCart } from "@/context/CartContext";
import Link from 'next/link';

export default function Cart() {
    const { cart, removeFromCart, clearCart } = useCart();

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <main className="min-h-screen bg-heritage-cream/20">
            <Header />
            <div className="pt-32 pb-24 px-8 max-w-5xl mx-auto">
                {cart.length === 0 ? (
                    <div className="text-center py-24 space-y-6">
                        <p className="text-xl text-heritage-charcoal/60">Your cart is empty.</p>
                        <Link href="/shop" className="inline-block px-8 py-3 border border-heritage-charcoal text-heritage-charcoal hover:bg-heritage-charcoal hover:text-white transition-colors uppercase tracking-widest text-xs">
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-12">
                        <h1 className="text-4xl font-serif text-heritage-charcoal mb-12 text-center">
                            Your Cart
                        </h1>
                        <div className="bg-white p-8 rounded-sm shadow-sm space-y-8">
                            {cart.map((item) => (
                                <div key={item.id} className="flex items-center justify-between border-b border-heritage-charcoal/10 pb-8 last:border-0 last:pb-0">
                                    <div className="flex items-center space-x-6">
                                        <div className="relative w-24 h-24 bg-gray-50 rounded-sm">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-contain p-2"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-serif text-heritage-charcoal">{item.name}</h3>
                                            <p className="text-sm text-heritage-charcoal/60">Qty: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <div className="text-right space-y-2">
                                        <p className="text-lg font-medium text-heritage-charcoal">${item.price * item.quantity}</p>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-xs text-red-400 hover:text-red-900 underline"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col items-end space-y-6">
                            <div className="text-2xl font-serif text-heritage-charcoal">
                                Total: <span className="text-heritage-gold">${total}</span>
                            </div>
                            <div className="flex space-x-4">
                                <button
                                    onClick={clearCart}
                                    className="px-6 py-3 text-xs uppercase tracking-widest text-heritage-charcoal/60 hover:text-heritage-charcoal"
                                >
                                    Clear Cart
                                </button>
                                <button className="px-10 py-3 bg-heritage-charcoal text-white text-xs uppercase tracking-widest hover:bg-heritage-gold transition-colors">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
