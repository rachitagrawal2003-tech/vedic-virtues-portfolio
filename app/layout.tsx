import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { NotificationProvider } from "@/context/NotificationContext";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vedic Virtues",
  description: "High-end wellness with an Earthy Heritage aesthetic.",
};

// ... (keep existing fonts and metadata)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${montserrat.variable} antialiased`}
      >
        <NotificationProvider>
          <CartProvider>
            {children}
            <Footer />
            <CustomCursor />
          </CartProvider>
        </NotificationProvider>
      </body>
    </html>
  );
}
