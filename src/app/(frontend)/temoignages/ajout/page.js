"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AjoutTemoignagePage() {
  const router = useRouter();

  const [form, setForm] = useState({
    nom: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Erreur ajout témoignage");
      }

      router.push("/temoignages");
    } catch (error) {
      console.log(error);
      alert("Erreur lors de l'ajout du témoignage");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6">Ajouter un témoignage</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">Nom</label>
            <input
              type="text"
              name="nom"
              value={form.nom}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
              rows="5"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            {loading ? "Ajout..." : "Ajouter"}
          </button>
        </form>
      </div>
    </div>
  );
}