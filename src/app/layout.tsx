import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "To-Do-List",
  description: "How do you have To-Do",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="bg-[#121212] flex flex-col ">
        {children}
        </body>
    </html>
  );
}
