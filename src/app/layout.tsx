import type {Metadata} from 'next';
import './globals.css';
import { Background } from '@/components/background';
import { CustomCursor } from '@/components/custom-cursor';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  title: "HACK 'A' WAR | Heapify",
  description: 'Regulatory Intelligence Agent for the GRC track.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Space+Grotesk:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-black text-white relative">
        <Background />
        <CustomCursor />
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
