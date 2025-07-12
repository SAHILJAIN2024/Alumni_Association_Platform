import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Alumni Association Platform',
  description: 'Reconnect with your alumni community and grow together.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">{children}</body>
    </html>
  );
}
