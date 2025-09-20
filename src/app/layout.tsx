import { ConvexClientProvider } from "@/components/provider/convex-client-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "My Docs: Your Premier Hub for Effortless Document Creation",
    description:
        "My Docs - A cutting-edge document creation and collaboration platform built with Next.js, Shadcn, TypeScript, and Tailwind CSS. Seamlessly craft and collaborate on your documents with flair.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className}`}>
                <NuqsAdapter>
                    <ConvexClientProvider>
                        <Toaster richColors />
                        {children}
                    </ConvexClientProvider>
                </NuqsAdapter>
            </body>
        </html>
    );
}
