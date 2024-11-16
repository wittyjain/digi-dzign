import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ApolloWrapper } from "@/lib/ApolloWrapper";
import SocialMediaSidebar from "./sections/SocialMediaSidebar";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digi Dzign | Miami's AI Web Design Agency",
  description: "Miami's AI Web Design Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <ApolloWrapper>
          <div className="w-full flex flex-col">
            <Header />
            <SocialMediaSidebar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ApolloWrapper>
      </body>
    </html>
  );
}
