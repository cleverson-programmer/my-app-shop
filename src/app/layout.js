import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { FloatingDockDemo } from "../components/PageHome/FloatingDockDemo";
import { FavoritesProvider } from "@/context/FavoritesContext";

export const metadata = {
  title: "Virtual Shop",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <FavoritesProvider>
          <CartProvider>
            {children}
            <FloatingDockDemo/>
          </CartProvider>
        </FavoritesProvider>
      </body>
    </html>
  );
}
