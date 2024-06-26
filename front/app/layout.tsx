import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import SideNav from "@/components/SideNav";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "群峰之巅",
    description: "Generated by create JiT",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`min-h-screen w-full flex  ${inter.className}`}>
        <SideNav/>
          {children}
        </body>
        </html>
    );
}
