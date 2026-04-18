import { NextResponse } from "next/server";
import "@/config/connection";
import Project from "@/models/Project";

export async function GET(req, context) {
  try {
    const params = await context.params;
    const project = await Project.findByPk(params.id);

    if (!project) {
      return NextResponse.json(
        { message: "Projet non trouvé" },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.log("Erreur GET /api/projects/[id] :", error);

    return NextResponse.json(
      { message: "Erreur serveur" },
      { status: 500 }
    );
  }
}