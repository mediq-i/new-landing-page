import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/partials";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased relative`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
