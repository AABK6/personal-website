import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import WebGLCanvas from "@/components/layout/WebGLCanvas";
import SceneManager from "@/components/canvas/SceneManager";

export const metadata: Metadata = {
  title: "Big Bang",
  description: "An interactive journey through time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-[#111]">
        <WebGLCanvas>
          <SceneManager />
        </WebGLCanvas>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}

