import { NextResponse } from "next/server";
import "@/config/connection";
import Project from "@/models/Project";

export async function GET() {
  try {
    const projects = await Project.findAll();
    return NextResponse.json(projects);
  } catch (error) {
    console.log("Erreur GET /api/projects :", error);
    return NextResponse.json(
      { message: "Erreur serveur" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    const project = await Project.create({
      title: body.title,
      description: body.description,
      technologies: body.technologies,
      github: body.github,
      demo: body.demo,
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.log("Erreur POST /api/projects :", error);
    return NextResponse.json(
      { message: "Erreur création projet" },
      { status: 500 }
    );
  }
}