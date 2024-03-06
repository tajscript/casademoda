import type { Metadata } from "next";
import { Inter, Roboto_Serif,  } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
 });
const roboto = Roboto_Serif({ 
  subsets: ["latin"],
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  title: "Casa De Moda",
  description: "Original, Exclusive and Latest sneakers & clothing Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable}`}>
      {children}
      </body>
    </html>
  );
}
