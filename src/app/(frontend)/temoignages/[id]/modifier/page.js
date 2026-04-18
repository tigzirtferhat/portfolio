"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ModifierTemoignagePage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id;

  const [form, setForm] = useState({
    nom: "",
    message: "",
  });

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/testimonials/${id}`);
        const data = await res.json();

        setForm({
          nom: data.nom,
          message: data.message,
        });
      } catch (error) {
        console.log(error);
      }
    }

    if (id) load();
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await fetch(`/api/testimonials/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      router.push("/temoignages");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">Modifier témoignage</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="nom"
            value={form.nom}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Nom"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Message"
          />

          <button className="bg-black text-white px-4 py-2 rounded">
            Enregistrer
          </button>
        </form>
      </div>
    </div>
  );
}