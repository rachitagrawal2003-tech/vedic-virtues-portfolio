'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';

type NotificationToastProps = {
    message: string | null;
    isVisible: boolean;
    onClose: () => void;
};

export default function NotificationToast({ message, isVisible, onClose }: NotificationToastProps) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000); // Auto dismiss after 3 seconds
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    className="fixed bottom-8 right-8 z-[100] bg-white border border-heritage-gold/20 shadow-xl rounded-sm p-6 flex items-start gap-4 max-w-sm"
                >
                    <div className="text-heritage-gold shrink-0 mt-0.5">
                        <CheckCircle size={20} />
                    </div>
                    <div className="flex-1 mr-4">
                        <h4 className="text-sm font-serif font-bold text-heritage-charcoal uppercase tracking-wider mb-1">
                            Success
                        </h4>
                        <p className="text-sm text-heritage-charcoal/80 leading-relaxed">
                            {message}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-heritage-charcoal/40 hover:text-heritage-charcoal transition-colors ml-auto"
                    >
                        <X size={16} />
                    </button>

                    {/* Progress bar for auto-dismiss */}
                    <motion.div
                        initial={{ width: "100%" }}
                        animate={{ width: "0%" }}
                        transition={{ duration: 3, ease: "linear" }}
                        className="absolute bottom-0 left-0 h-0.5 bg-heritage-gold/30"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
