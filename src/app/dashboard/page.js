"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.log(error);
      }
    };

    loadProjects();
  }, []);

  const experiences = [
    {
      poste: "Technicien en maintenance",
      entreprise: "Industrie de médicaments injectable FRATER RAZES à Alger",
      date: "Juillet 2021 à Juin 2024",
      details: [
        "Assurer l’installation, la maintenance préventive et corrective ainsi que le réglage des équipements industriels.",
        "Diagnostiquer les pannes et effectuer les réparations nécessaires, incluant le remplacement des pièces défectueuses."
      ]
    },
    {
      poste: "Opérateur de production",
      entreprise: "Laboratoires pharmaceutiques frater-razes à Alger",
      date: "Novembre 2018 à Juin 2021",
      details: [
        "Effectué les opérations de production : montage et autoclavage des pièces machines de production de médicaments injectable.",
        "Assurer le bon déroulement de répartition de médicaments.",
        "Vérifier la qualité des produits en respectant les délais et la traçabilité en temps réel."
      ]
    },
    {
      poste: "Stage Pratique",
      entreprise: "CEVITAL SPA à Bejaia",
      date: "Mars 2016 à Avril 2016",
      details: [
        "Effectué à l'entreprise Agro-alimentaire CEVITAL sur les automates programmables de la firme SIEMENS."
      ]
    }
  ];

  const formations = [
    {
      diplome: "DEC en Programmation Informatique",
      ecole: "Collège La Cité Ottawa à Ottawa, ON",
      date: "Janvier 2025 à Avril 2026"
    },
    {
      diplome: "Master en Génie Electrique",
      ecole: "Université Abderrahmane Mira de Bejaia",
      date: "2014 à 2016"
    },
    {
      diplome: "Licence en Génie Electrique",
      ecole: "Université Abderrahmane Mira de Bejaia",
      date: "2011 à 2013"
    },
    {
      diplome: "Baccalauréat en Mathématiques",
      ecole: "Lycée de Tichy, Alger",
      date: "Septembre 2010 à Juillet 2011"
    }
  ];

  const competences = [
    "Service à la clientèle",
    "Réparation de moteurs",
    "Maintenance informatique logicielle et matériel",
    "Next.js",
    "Node.js",
    "SQLite",
    "JavaScript"
  ];

  return (
    <div
      style={{
        padding: "40px",
        background: "#f4f4f5",
        minHeight: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "16px",
            boxShadow: "0 0 10px rgba(0,0,0,0.08)",
            marginBottom: "30px",
          }}
        >
          <h1 style={{ marginBottom: "10px", fontSize: "32px" }}>
            Farhat TIGHZER
          </h1>
          <p style={{ color: "#555", lineHeight: "1.7", fontSize: "17px" }}>
            Étudiant en programmation informatique à La Cité. Passionné par le
            développement web, avec une expérience en maintenance industrielle,
            en production et en informatique.
          </p>
        </div>

        {/* PROJETS */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ marginBottom: "20px" }}>Mes Projets</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {projects.length === 0 ? (
              <div
                style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "16px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.08)",
                }}
              >
                Aucun projet pour le moment
              </div>
            ) : (
              projects.map((p) => (
                <div
                  key={p.id}
                  style={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "16px",
                    boxShadow: "0 0 10px rgba(0,0,0,0.08)",
                  }}
                >
                  <h3 style={{ marginBottom: "10px" }}>{p.titre}</h3>
                  <p style={{ color: "#555", marginBottom: "12px" }}>
                    {p.description}
                  </p>

                  <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
                    Technologies :
                  </p>

                  <div>
                    {p.technologies.split(",").map((tech, i) => (
                      <span
                        key={i}
                        style={{
                          display: "inline-block",
                          background: "#e4e4e7",
                          padding: "6px 10px",
                          borderRadius: "8px",
                          marginRight: "8px",
                          marginBottom: "8px",
                          fontSize: "13px",
                        }}
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ marginBottom: "20px" }}>Expérience professionnelle</h2>

          <div
            style={{
              display: "grid",
              gap: "20px",
            }}
          >
            {experiences.map((exp, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "16px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.08)",
                }}
              >
                <h3 style={{ marginBottom: "8px" }}>{exp.poste}</h3>
                <p style={{ color: "#444", marginBottom: "6px" }}>
                  {exp.entreprise}
                </p>
                <p style={{ color: "#777", marginBottom: "12px" }}>{exp.date}</p>

                <ul style={{ paddingLeft: "20px", color: "#555", lineHeight: "1.7" }}>
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FORMATION */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ marginBottom: "20px" }}>Formation</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {formations.map((formation, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "16px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.08)",
                }}
              >
                <h3 style={{ marginBottom: "8px" }}>{formation.diplome}</h3>
                <p style={{ color: "#444", marginBottom: "6px" }}>
                  {formation.ecole}
                </p>
                <p style={{ color: "#777" }}>{formation.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COMPETENCES */}
        <section>
          <h2 style={{ marginBottom: "20px" }}>Compétences</h2>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "16px",
              boxShadow: "0 0 10px rgba(0,0,0,0.08)",
            }}
          >
            {competences.map((comp, index) => (
              <span
                key={index}
                style={{
                  display: "inline-block",
                  background: "#111827",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "999px",
                  marginRight: "10px",
                  marginBottom: "10px",
                  fontSize: "14px",
                }}
              >
                {comp}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}