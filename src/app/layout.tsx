import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - Sort Visualization",
    absolute: "Sort Visualization",
  },
  description: "A site built with next.js to visualize sort algorithms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <SidebarProvider>
          <AppSidebar />
          <div className="relative flex flex-1 flex-col min-h-screen overflow-y-auto overflow-x-hidden">
            <Header />
            <main className="flex-grow m-4">{children}</main>
            <Footer />
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
