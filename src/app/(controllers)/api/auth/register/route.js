import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { User } from "@/models/relation";

export async function POST(req) {
  try {
    const body = await req.json();
    const { nom, email, password } = body;

    if (!nom || !email || !password) {
      return NextResponse.json(
        { message: "Tous les champs sont obligatoires" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Utilisateur existe déjà" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      nom,
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      {
        message: "Inscription réussie",
        user: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("REGISTER ERROR =", error);
    return NextResponse.json(
      { message: "Erreur serveur" },
      { status: 500 }
    );
  }
}