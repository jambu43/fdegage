import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import Papa from "papaparse";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

export async function GET() {
  try {
    // Récupérer les données
    const { data, error } = await supabase.from("signatures").select("*");
    if (error) throw error;

    // Convertir en CSV
    const csv = Papa.unparse(data);
    const fileName = `signatures-${Date.now()}.csv`;

    // Sauvegarder dans Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from("signatures")
      .upload(fileName, csv, { contentType: "text/csv" });

    if (uploadError) throw uploadError;

    return NextResponse.json({ message: "CSV enregistré !" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de l'export" }, { status: 500 });
  }
}
