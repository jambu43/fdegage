"use client";

import Header from "@/components/home/header";
import MultiStepForm from "@/components/home/sign-petition-form";
import { useEffect, useState } from "react";

export default function Home() {
  const [signupsCount, setSignupsCount] = useState(0);

  useEffect(() => {
    fetch("/api/register")
      .then(res => res.json())
      .then(data => setSignupsCount(data.count))
      .catch(() => setSignupsCount(0));
  }, []);



  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />
      <div className="max-w-md mx-auto p-4 bg-[#F4F4F4] min-h-screen">
        <h1 className="text-black font-bold text-xl">
        IL A ÉCHOUÉ, <br /> IL DOIT PARTIR <br /> MAINTENANT !
        </h1>
        <p className="text-black text-sm mt-4">
       {signupsCount} ont signé. <br /> Prochain objectif 10.000 !
        </p>
        <MultiStepForm />
      </div>

      <p className="mt-4 text-gray-700">Nombre de personnes inscrites : <strong>{signupsCount}</strong></p>



    </main>
  );
}
