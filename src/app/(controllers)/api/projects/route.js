import { NextResponse } from "next/server";
import Project from "@/models/Project";

// GET → récupérer projets
export async function GET() {
  try {
    const projects = await Project.findAll();

    return NextResponse.json(projects);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Erreur serveur" },
      { status: 500 }
    );
  }
}

// POST → ajouter projet
export async function POST(req) {
  try {
    const body = await req.json();

    const { titre, description, technologies } = body;

    if (!titre || !description || !technologies) {
      return NextResponse.json(
        { message: "Champs obligatoires manquants" },
        { status: 400 }
      );
    }

    const newProject = await Project.create({
      titre,
      description,
      technologies,
    });

    return NextResponse.json(newProject, { status: 201 });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Erreur serveur" },
      { status: 500 }
    );
  }
}