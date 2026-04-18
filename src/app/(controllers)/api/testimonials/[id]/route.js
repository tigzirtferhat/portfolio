import { NextResponse } from "next/server";
import "@/config/connection";
import Testimonial from "@/models/Testimonial";

export async function GET(req, context) {
  try {
    const params = await context.params;
    const testimonial = await Testimonial.findByPk(params.id);

    if (!testimonial) {
      return NextResponse.json(
        { message: "Témoignage non trouvé" },
        { status: 404 }
      );
    }

    return NextResponse.json(testimonial);
  } catch (error) {
    console.log("Erreur GET /api/testimonials/[id] :", error);
    return NextResponse.json(
      { message: "Erreur serveur" },
      { status: 500 }
    );
  }
}

export async function PUT(req, context) {
  try {
    const params = await context.params;
    const body = await req.json();

    const testimonial = await Testimonial.findByPk(params.id);

    if (!testimonial) {
      return NextResponse.json(
        { message: "Témoignage non trouvé" },
        { status: 404 }
      );
    }

    if (!body.nom || !body.message) {
      return NextResponse.json(
        { message: "Nom et message sont obligatoires" },
        { status: 400 }
      );
    }

    await testimonial.update({
      nom: body.nom,
      message: body.message,
    });

    return NextResponse.json(testimonial);
  } catch (error) {
    console.log("Erreur PUT /api/testimonials/[id] :", error);
    return NextResponse.json(
      { message: "Erreur modification témoignage" },
      { status: 500 }
    );
  }
}