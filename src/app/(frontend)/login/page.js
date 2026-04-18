"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/userSlice";

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
      general: "",
    });
  }

  function validate() {
    const newErrors = {
      email: "",
      password: "",
      general: "",
    };

    let isValid = true;

    if (!form.email.trim()) {
      newErrors.email = "L'email est obligatoire";
      isValid = false;
    }

    if (!form.password.trim()) {
      newErrors.password = "Le mot de passe est obligatoire";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  async function handleLogin(e) {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        // Redux
        dispatch(setUser(data.user));

        // 🔥 REDIRECTION CORRIGÉE
        router.push("/projects");
      } else {
        setErrors((prev) => ({
          ...prev,
          general: data.message || "Erreur login",
        }));
      }
    } catch (error) {
      console.log(error);
      setErrors((prev) => ({
        ...prev,
        general: "Erreur serveur",
      }));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Connexion</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {errors.general && (
            <p className="text-red-500 text-sm">{errors.general}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-lg"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </div>
    </div>
  );
}