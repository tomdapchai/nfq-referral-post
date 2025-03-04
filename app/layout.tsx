import type { Metadata } from "next";
import { Geist, Geist_Mono, Sigmar_One, Quicksand } from "next/font/google";
import "./globals.css";
import { NameProvider } from "@/context/nameContext";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

const sigmarOne = Sigmar_One({
    weight: "400",
    variable: "--font-sigmar-one",
    subsets: ["latin"],
});

const quicksand = Quicksand({
    variable: "--font-quicksand",
    subsets: ["latin"],
});
export const metadata: Metadata = {
    title: "NFQ FORTUNE TELLER",
    description: "Fortune teller",
    openGraph: {
        title: "NFQ FORTUNE TELLER",
        description: "Fortune teller",
        images: [
            {
                url: "/img/preview.jpg",
                alt: "Preview image",
                width: 1200,
                height: 630,
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="no-scrollbar">
            <body
                className={`${sigmarOne.variable} ${quicksand.variable} antialiased w-full h-fullr`}>
                <NameProvider>{children}</NameProvider>
                <Toaster />
                <Analytics />
            </body>
        </html>
    );
}
