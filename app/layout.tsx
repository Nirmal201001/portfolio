import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Nirmal Kushwah | Fullstack Developer',
  description: 'Portfolio of Nirmal Kushwah, a Software Engineer specializing in Full Stack development with React, Node.js, and FastAPI.',
  keywords: ['Nirmal Kushwah', 'Fullstack Developer', 'Software Engineer', 'React', 'Node.js', 'FastAPI', 'Portfolio'],
  authors: [{ name: 'Nirmal Kushwah' }],
  openGraph: {
    title: 'Nirmal Kushwah | Fullstack Developer',
    description: 'Portfolio of Nirmal Kushwah, a Software Engineer specializing in Full Stack development.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-[#08080a] text-zinc-100 antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
        {children}
      </body>
    </html>
  );
}
