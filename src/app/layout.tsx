import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sharmila Devarajan - AI Engineer & Full Stack Developer",
  description: "Experienced Software Engineer with 2.5+ years building scalable AI-driven and agentic automation platforms. Skilled in designing intelligent workflows, developing adaptive multi-agent systems, and creating robust full-stack applications.",
  keywords: "AI Engineer, Full Stack Developer, Software Engineer, Machine Learning, Multi-Agent Systems, Automation, Next.js, Python, TypeScript",
  authors: [{ name: "Sharmila Devarajan" }],
  creator: "Sharmila Devarajan",
  metadataBase: new URL('https://sharmila-portfolio.vercel.app'),
  icons: {
    icon: [
      { url: '/profile.png', sizes: '32x32', type: 'image/png' },
      { url: '/profile.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: '/profile.png',
    shortcut: '/profile.png',
  },
  openGraph: {
    title: "Sharmila Devarajan - AI Engineer & Full Stack Developer",
    description: "Experienced Software Engineer specializing in AI-driven automation platforms and full-stack development",
    url: 'https://sharmila-portfolio.vercel.app',
    siteName: 'Sharmila Devarajan Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/profile.png',
        width: 1200,
        height: 630,
        alt: 'Sharmila Devarajan - AI Engineer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sharmila Devarajan - AI Engineer & Full Stack Developer",
    description: "Experienced Software Engineer specializing in AI-driven automation platforms and full-stack development",
    creator: '@sharmishrini26',
    images: ['/profile.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
