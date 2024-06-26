import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "./component/header";
import NavLeft from "./component/navLeft";
import NavRight from "./component/navRight";

const arimo = Arimo({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Facebook Clone",
    description: "Generated by Facebook Clone",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={arimo.className}>
                <Header />
                <div className="flex bg-[#18191A] text-[#B5B7BB] pt-[65px]">
                    <NavLeft />
                    {children}
                    <NavRight />
                </div>
                <Analytics />
            </body>
        </html>
    );
}
