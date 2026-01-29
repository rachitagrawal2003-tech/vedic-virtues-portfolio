'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import MagneticButton from './ui/MagneticButton';
import { useState, useRef, useEffect } from 'react';

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!isMobile || !videoRef.current) return;

        const video = videoRef.current;
        let timeoutId: NodeJS.Timeout;

        const onEnded = () => {
            setIsPlaying(false);
            timeoutId = setTimeout(() => {
                setIsPlaying(true);
                video.play().catch(() => { }); // Catch autoplay restrictions
            }, 5000);
        };

        video.addEventListener('ended', onEnded);

        // Initial start after a delay
        timeoutId = setTimeout(() => {
            setIsPlaying(true);
            video.play().catch(() => { });
        }, 3000);

        return () => {
            video.removeEventListener('ended', onEnded);
            clearTimeout(timeoutId);
            setIsPlaying(false);
            video.pause();
            video.currentTime = 0;
        };
    }, [isMobile]);

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden pt-16 md:pt-32">

            {/* Banner Image Area */}
            {/* Takes up significant height to be the 'big banner' */}
            <div className="relative w-full h-[65vh] md:h-[75vh] flex items-center justify-center">
                <div
                    className="relative w-full h-full group cursor-pointer"
                >
                    {/* Static Image (Visible by default) */}
                    <Image
                        src="/Assets/Hero shot/Hero shot.png"
                        alt="Vedic Virtues Hero Bottle"
                        fill
                        className={`object-contain object-bottom pb-8 md:pb-0 transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100 md:group-hover:opacity-0'}`}
                        priority
                    />

                    {/* Hover Animation Video */}
                    <video
                        ref={videoRef}
                        src="/Assets/Animation/Main animation.mp4"
                        className={`absolute inset-0 w-full h-full object-contain object-bottom pb-8 md:pb-0 transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}
                        loop={!isMobile}
                        muted
                        playsInline
                        onMouseEnter={(e) => {
                            if (!isMobile) e.currentTarget.play();
                        }}
                        onMouseLeave={(e) => {
                            if (!isMobile) {
                                e.currentTarget.pause();
                                e.currentTarget.currentTime = 0;
                            }
                        }}
                    />
                </div>
            </div>

            {/* Text Area - Below the banner */}
            <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center pb-12 md:pb-24 mt-8 md:mt-12 flex flex-col items-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.3
                            }
                        }
                    }}
                >
                    <motion.h1
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                        className="text-3xl md:text-5xl lg:text-6xl leading-tight mb-6 text-heritage-charcoal font-serif"
                    >
                        Ancient Himalayan Wisdom. <br />
                        <span className="italic text-heritage-gold">Bottled for the Modern Soul.</span>
                    </motion.h1>

                    <motion.p
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                        className="text-sm md:text-base text-heritage-charcoal/80 max-w-lg mx-auto tracking-wide leading-relaxed font-sans mb-10"
                    >
                        Small-batch concentrates crafted from hand-picked wild berries and roots.
                    </motion.p>

                    <motion.div
                        variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } } }}
                    >
                        <Link href="/shop">
                            <MagneticButton className="px-10 py-4 bg-heritage-charcoal text-white text-xs uppercase tracking-[0.2em] hover:bg-heritage-gold transition-colors duration-500 rounded-full">
                                Shop Collection
                            </MagneticButton>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

        </section>
    );
}
