"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function TemoignagesPage() {
  const [temoignages, setTemoignages] = useState([]);

  useEffect(() => {
    async function loadTemoignages() {
      try {
        const res = await fetch("/api/testimonials");
        const data = await res.json();
        setTemoignages(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadTemoignages();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Témoignages</h1>

          <Link
            href="/temoignages/ajout"
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Ajouter
          </Link>
        </div>

        {temoignages.length === 0 ? (
          <p className="text-gray-600">Aucun témoignage disponible.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {temoignages.map((t) => (
              <div key={t.id} className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-2">{t.nom}</h2>
                <p className="text-gray-600 mb-4">"{t.message}"</p>

                <Link
                  href={`/temoignages/${t.id}/modifier`}
                  className="inline-block bg-black text-white px-4 py-2 rounded-lg"
                >
                  Voir détails
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}