import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Définition du chemin du fichier CSV
const filePath = path.join(process.cwd(), "public", "signups.csv");

// Vérifie si le fichier existe, sinon le crée avec un en-tête
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "Nom,Prénom,Téléphone,Ville,Pays\n");
}

// ✅ Route pour enregistrer un nouvel utilisateur
export async function POST(req: Request) {
  try {
    const { firstName, lastName, phoneNumber, city, country } = await req.json();

    const newEntry = `${firstName},${lastName},${phoneNumber},${city},${country}\n`;
    fs.appendFileSync(filePath, newEntry);

    return NextResponse.json({ message: "Inscription enregistrée avec succès!" }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Erreur lors de l'inscription." }, { status: 500 });
  }
}

// ✅ Route pour récupérer le nombre d'inscrits
export async function GET() {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const lines = data.split("\n").filter(line => line.trim() !== "").length - 1; // Exclure l'en-tête

    return NextResponse.json({ count: lines }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Erreur lors du comptage des inscriptions." }, { status: 500 });
  }
}
