'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import NotificationToast from '@/components/ui/NotificationToast';

type NotificationContextType = {
    showNotification: (message: string) => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: ReactNode }) {
    const [message, setMessage] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    const showNotification = (msg: string) => {
        setMessage(msg);
        setIsVisible(true);
    };

    const closeNotification = () => {
        setIsVisible(false);
    };

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {children}
            <NotificationToast
                message={message}
                isVisible={isVisible}
                onClose={closeNotification}
            />
        </NotificationContext.Provider>
    );
}

export function useNotification() {
    const context = useContext(NotificationContext);
    if (context === undefined) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
}
