import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomContainer from '@/components/global/CustomContainer';
import Navbar from "@/components/navbar/Navbar";
import Providers from "../providers/providers";
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Store Updated",
  description: "Built by Monte Sina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressContentEditableWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Toaster />
          <Providers>
            <Navbar />
            <CustomContainer className='py-20'>
              {children}
            </CustomContainer>
          </Providers>
        </body>
      </html >
    </ClerkProvider>
  );
}
