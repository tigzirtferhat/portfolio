"use client";

import { useState } from "react";

export default function InscriptionPage() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!nom || !email || !password) {
      alert("Tous les champs sont obligatoires");
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Inscription réussie");
        window.location.href = "/login";
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Erreur serveur");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Inscription</h1>

      <form onSubmit={handleRegister}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            style={{
              width: "250px",
              padding: "10px",
              border: "1px solid black",
              borderRadius: "5px",
            }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "250px",
              padding: "10px",
              border: "1px solid black",
              borderRadius: "5px",
            }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "250px",
              padding: "10px",
              border: "1px solid black",
              borderRadius: "5px",
            }}
          />
        </div>

        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}