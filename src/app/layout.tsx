import { ReactNode } from 'react'; // Import ReactNode type
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

// Metadata
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Specify that children is of type ReactNode
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
