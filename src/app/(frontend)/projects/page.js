"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Mes Projets</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">{p.title}</h2>
            <p className="text-gray-600 mb-4">{p.description}</p>
            <p className="mb-4">
              <strong>Technologies :</strong> {p.technologies}
            </p>

            <Link
              href={`/projects/${p.id}`}
              className="inline-block bg-black text-white px-4 py-2 rounded-lg"
            >
              Voir détails
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}