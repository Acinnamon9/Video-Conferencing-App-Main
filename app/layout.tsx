import type { Metadata } from "next";
import "./globals.css";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";

import { Inter } from "next/font/google";

import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Video Conferencing App",
  description: "Video calling app",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: "/icons/yoom-logo.svg",
            socialButtonsVariant: "iconButton",
          },
          variables: {
            colorText: "#FFFFFF",
            colorPrimary: "#0E78F9",
            colorBackground: "#1C1F2E",
            colorInputBackground: "#252A41",
            colorInputText: "#FFFFFF",
          },
        }}
      >
        <body className={`${inter.className} bg-dark-2`}>
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
