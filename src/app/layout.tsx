import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Topbar from "./topbar";
import AppBar from "./appbar";
import Footer from "./footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nike UI - Hackathon Project",
  description:
    "A pixel-perfect responsive UI based on the Nike design template.",
  keywords: "Nike, UI, Hackathon, Responsive Design, Next.js, Tailwind CSS",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Muhammad Bilal Khalid" />
        <meta property="og:title" content="Nike UI - Hackathon Project" />
        <meta
          property="og:description"
          content="A pixel-perfect responsive UI based on the Nike design template."
        />
        <meta property="og:image" content="/nike.png" />
        <meta
          property="og:url"
          content="https://github.com/bilalkhalidshaikh/nike-ui-hackathon-project"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nike UI - Hackathon Project" />
        <meta
          name="twitter:description"
          content="A pixel-perfect responsive UI based on the Nike design template."
        />
        <meta name="twitter:image" content="/nike.png" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/*Topbar and Appbar */}
        <div className="fixed top-0 left-0 w-full z-20">
          <Topbar />
          <AppBar />
        </div>

        {/* Main Content */}
        <main className="flex-grow ">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
