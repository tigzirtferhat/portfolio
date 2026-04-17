"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Tous les champs sont obligatoires");
      return;
    }

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const text = await res.text();
      const data = text ? JSON.parse(text) : {};

      if (res.ok) {
        document.cookie = `token=${data.token}; path=/`;
        window.location.href = "/dashboard";
      } else {
        alert(data.message || "Erreur login");
      }
    } catch (error) {
      alert("Erreur serveur");
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
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

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}