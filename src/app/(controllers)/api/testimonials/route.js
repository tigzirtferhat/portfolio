import { NextResponse } from "next/server";
import "@/config/connection";
import Testimonial from "@/models/Testimonial";

export async function GET() {
  try {
    const testimonials = await Testimonial.findAll({
      order: [["id", "DESC"]],
    });

    return NextResponse.json(testimonials);
  } catch (error) {
    console.log("Erreur GET /api/testimonials :", error);
    return NextResponse.json(
      { message: "Erreur serveur" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.nom || !body.message) {
      return NextResponse.json(
        { message: "Nom et message sont obligatoires" },
        { status: 400 }
      );
    }

    const testimonial = await Testimonial.create({
      nom: body.nom,
      message: body.message,
    });

    return NextResponse.json(testimonial, { status: 201 });
  } catch (error) {
    console.log("Erreur POST /api/testimonials :", error);
    return NextResponse.json(
      { message: "Erreur création témoignage" },
      { status: 500 }
    );
  }
}