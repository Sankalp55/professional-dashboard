import CursorGradient from "../components/CursorGradient";
import Navbar from "../components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        {/* Cursor gradient background layer */}
        <div className="cursor-gradient" />

        {/* Cursor tracker */}
        <CursorGradient />

        {/* App content */}
        <div className="relative z-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
