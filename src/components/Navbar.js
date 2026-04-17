import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-200 shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Mon Portfolio</h1>

      <div className="flex gap-4">
        <Link href="/">Accueil</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/projects">Projets</Link>
        <Link href="/testimonials">Témoignages</Link>
        <Link href="/login">Login</Link>
        <Link href="/inscription">Inscription</Link>
      </div>
    </nav>
  );
}