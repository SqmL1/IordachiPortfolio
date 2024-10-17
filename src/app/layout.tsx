// app/layout.tsx
import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Samuil Iordachi Portfolio',
  description: 'Digital Resume',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow">
          <nav className="container mx-auto px-6 py-3 text-center">
            <h1 className="text-2xl font-bold text-gray-800">My portfolio
            </h1>
          </nav>
        </header>
        <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
          {children}
        </main>
        <footer className="bg-white border-t">
          <div className="container mx-auto px-6 py-4 text-center text-gray-600">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}