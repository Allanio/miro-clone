import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import {Toaster} from "@/components/ui/sonner";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { ModalProvider } from "@/providers/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wire",
  description: "Miro clone - A collaborative, real-time whiteboard. Packed with features such as real-time database, whiteboard from scratch with ability to add shapes like Rectangles and Ellipses, Sticky notes and Pencil drawing. Using the newest technologies such as Next.js. 14, Clerk, Convex and LiveBlocks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          <Toaster />
          <ModalProvider />
            {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
