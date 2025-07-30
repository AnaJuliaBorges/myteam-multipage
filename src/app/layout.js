import { Livvic } from "next/font/google";
import "./globals.css";
import { Header } from "@/Components/header";
import { Footer } from "@/Components/footer";

const livvic = Livvic({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
});

export const metadata = {
  title: "myteam",
  description: "site constitucional da myteam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={livvic.className}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
