import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { sequelize } from "@/models/relation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "Projet portfolio",
};

// 🔹 Initialisation DB
async function initDb() {
  try {
    await sequelize.sync();
  } catch (error) {
    console.log(error);
  }
}

export default async function RootLayout({ children }) {
  await initDb();

  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* NAVBAR */}
        <Navbar />

        {/* CONTENU PRINCIPAL */}
        <main className="flex-1">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />

      </body>
    </html>
  );
}