import { Metadata } from "next";
import React, { ReactNode } from "react";

import StreamVideoProvider from "@/providers/StreamClientProvider";

export const metadata: Metadata = {
  title: "Video Conferencing App",
  description: "Video calling app",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
