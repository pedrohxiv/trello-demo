import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Trello",
    template: "%s - Trello",
  },
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
    },
  ],
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
