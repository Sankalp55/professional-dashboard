import CursorGradient from "../components/CursorGradient";

import Navbar from "@/src/components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CursorGradient />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
