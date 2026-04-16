import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { sequelize } from "@/models/relation";

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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}