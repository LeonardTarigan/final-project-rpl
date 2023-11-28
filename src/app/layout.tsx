import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/shared/sidebar";

const mainFont = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LOS | Home",
  description: "Aplikasi Barang Hilang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mainFont.className}>
        <div className="mx-auto flex max-w-screen-md">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
