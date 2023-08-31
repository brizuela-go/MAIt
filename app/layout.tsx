import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ModalProvider } from "@/components/modal-provider";
import { ToastProvider } from "@/components/ToasterProvider";
import { CrispProvider } from "@/components/CrispProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MAIt",
  description: "Your AI Mate",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider />
        <body className={inter.className}>
          <ModalProvider />
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
