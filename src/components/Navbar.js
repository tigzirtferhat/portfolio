"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/userSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  function handleLogout() {
    document.cookie = "token=; path=/; max-age=0";
    dispatch(logout());
    window.location.href = "/login";
  }

  return (
    <nav className="w-full bg-blue-200 shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Mon Portfolio</h1>

      <div className="flex gap-4 items-center">
        <Link href="/">Accueil</Link>

        {user ? (
          <>
            <Link href="/projects">Projets</Link>
            <Link href="/temoignages">Témoignages</Link>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Déconnexion
            </button>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/inscription">Inscription</Link>
          </>
        )}
      </div>
    </nav>
  );
}