import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SidebarProvider } from "./components/shared/sidebar";
import { ThemeProvider } from "./components/ThemeProvider";
import QueryClientWrapper from "./components/QueryClientWrapper";
import { EditProvider } from "./context/EditContext";
import { Toaster } from "./components/shared/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SocialMedia",
  description: "SocialMedia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark " }}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <QueryClientWrapper>
            <SidebarProvider>
              <Toaster />

              <EditProvider>{children}</EditProvider>
            </SidebarProvider>
          </QueryClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
