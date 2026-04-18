"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params?.id;
  const [project, setProject] = useState(null);

  useEffect(() => {
    async function loadProject() {
      try {
        const res = await fetch(`/api/projects/${id}`);

        if (!res.ok) {
          throw new Error("Projet introuvable");
        }

        const data = await res.json();
        console.log("Projet reçu :", data);
        setProject(data);
      } catch (error) {
        console.log(error);
        setProject({});
      }
    }

    if (id) {
      loadProject();
    }
  }, [id]);

  if (project === null) {
    return <p className="p-10">Chargement...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-4">
          {project.title || "Titre non disponible"}
        </h1>

        <p className="text-gray-600 mb-6">
          {project.description || "Description non disponible"}
        </p>

        <h3 className="font-semibold mb-2">Technologies :</h3>

        <div className="mb-6">
          {(project.technologies || "")
            .split(",")
            .filter(Boolean)
            .map((tech, i) => (
              <span
                key={i}
                className="inline-block bg-gray-200 px-3 py-1 rounded mr-2 mb-2"
              >
                {tech.trim()}
              </span>
            ))}
        </div>

        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="bg-black text-white px-4 py-2 rounded"
            >
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="border px-4 py-2 rounded"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}