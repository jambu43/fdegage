import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

export async function POST(req: Request) {
  try {
    const { nom, prenom, telephone, ville, pays } = await req.json();
    
    const { data, error } = await supabase.from("signatures").insert([{ nom, prenom, telephone, ville, pays }]);
    if (error) throw error;

    return NextResponse.json({ message: "Signature enregistrée !" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Erreur d'enregistrement" }, { status: 500 });
  }
}
