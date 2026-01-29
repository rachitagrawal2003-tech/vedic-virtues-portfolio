import Header from "@/components/Header";

export default function Account() {
    return (
        <main className="min-h-screen bg-heritage-cream/20">
            <Header />
            <div className="pt-32 pb-24 px-8 max-w-xl mx-auto">
                <h1 className="text-4xl text-center font-serif text-heritage-charcoal mb-12">
                    Account Setup
                </h1>

                <form className="bg-white p-10 rounded-sm shadow-sm space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-heritage-charcoal/60">Full Name</label>
                        <input type="text" className="w-full border-b border-heritage-charcoal/20 py-2 focus:outline-none focus:border-heritage-gold bg-transparent" placeholder="Enter your name" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-heritage-charcoal/60">Email Address</label>
                        <input type="email" className="w-full border-b border-heritage-charcoal/20 py-2 focus:outline-none focus:border-heritage-gold bg-transparent" placeholder="Enter your email" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-heritage-charcoal/60">Password</label>
                        <input type="password" className="w-full border-b border-heritage-charcoal/20 py-2 focus:outline-none focus:border-heritage-gold bg-transparent" placeholder="Create a password" />
                    </div>

                    <button className="w-full mt-8 py-4 bg-heritage-charcoal text-white text-xs uppercase tracking-widest hover:bg-heritage-gold transition-colors">
                        Create Account
                    </button>
                </form>
            </div>
        </main>
    );
}
