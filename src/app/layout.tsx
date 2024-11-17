import type { Metadata } from "next";
import "../styles/globals.css";



export const metadata: Metadata = {
  title: "Moviments",
  description: "Moviment Control App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased h-screen w-screen flex justify-center items-center`}
      >
        {children}
      </body>
    </html>
  );
}
