import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import dynamic from "next/dynamic";
import { Unbounded } from 'next/font/google'

const unbounded = Unbounded({ subsets: ['latin'], weight: '300' })

export const metadata: Metadata = {
  title: "R3STAK3D",
  description: "R3STAK3D",
};

const WalletContext = dynamic(() => import('@/api/WalletContext'), {
  ssr: false,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${unbounded.className} antialiased`}
      >
        <WalletContext>{children}</WalletContext>
      </body>
    </html>
  );
}
