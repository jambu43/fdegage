"use client";

import Header from "@/components/home/header";
import { SuccessModal } from "@/components/home/success-modal";
import { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import Image from "next/image";

interface Country {
  name: {
    common: string;
  };
  flags: {
    svg: string;
  };
  cca2: string;
}

interface CountryOption {
  label: string;
  value: string;
  flag: string;
}

export default function Home() {
  const [step, setStep] = useState(1);
  const [signupsCount, setSignupsCount] = useState(0);

  const [countries, setCountries] = useState<CountryOption[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(null);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryData: CountryOption[] = response.data
          .map((country: Country) => ({
            label: country.name.common,
            value: country.cca2,
            flag: country.flags.svg,
          }))
          .sort((a: CountryOption, b: CountryOption) => a.label.localeCompare(b.label)); // Tri alphabétique

        setCountries(countryData);

        // Sélectionner RDC par défaut (code ISO "CD")
        const defaultCountry = countryData.find((c) => c.value === "CD");
        setSelectedCountry(defaultCountry || null);
      } catch (error) {
        console.error("Erreur lors du chargement des pays", error);
      }
    }

    fetchCountries();
  }, []);


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    city: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  // const prevStep = () => setStep(step - 1);

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetch("/api/register")
      .then((res) => res.json())
      .then((data) => setSignupsCount(data.count))
      .catch(() => setSignupsCount(0));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/save-signature", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSignupsCount((prev) => prev + 1); // Met à jour le nombre d'inscrits

        setStep(1); // Retour à la première étape
      } else {
        alert("Erreur lors de signature.");
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);

      // Show success modal
      setShowSuccess(true);

      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        city: "",
        country: "",
      }); // Réinitialise le formulaire
    } catch (error) {
      console.error("Error submitting form:", error);
      // Add error handling here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className=" ">
      {/* Header */}
      <Header />
      <div
        className="relative max-w-md mx-auto ml-5 p-4 bg-[#F4F4F4]"
        style={{ blockSize: "90vh", overflowY: "hidden" }}
      >
        <h1 className=" font-extrabold text-[40px] leading-[37px]">
          IL A ÉCHOUÉ, <br /> IL DOIT <br /> PARTIR <br /> MAINTENANT !
        </h1>
        <p className="text-light text-md mt-2">
          {signupsCount} ont signé. <br /> Prochain objectif 10.000 !
        </p>
        <div className="flex justify-center h-screen mt-3">
          <div className="w-96">
            {/* <h2 className="text-xl font-semibold mb-4">
          {step === 1 ? "Étape 1 : Informations personnelles" : "Étape 2 : Localisation"}
        </h2> */}

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Prénom"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-11/12 p-4 bg-[#EDEDED] border border-[#b8b8b8] text-black"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Nom"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-11/12 p-4 bg-[#EDEDED] border border-[#b8b8b8]  text-black"
                    required
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Téléphone ou Email"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-11/12 p-4 bg-[#EDEDED] border border-[#b8b8b8]  text-black"
                    required
                  />
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-[#FF1212] text-white p-4 rounded-sm font-black w-11/12"
                  >
                    SUIVANT
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="Ville"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-11/12 p-4 bg-[#EDEDED] border border-[#b8b8b8]  text-black"
                    required
                  />
                  <input
                    type="text"
                    name="country"
                    placeholder="Pays"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-11/12 p-4 bg-[#EDEDED] border border-[#b8b8b8]  text-black"
                    required
                  />
                  <Select
                    options={countries}
                    value={selectedCountry}
                    onChange={(option) => setSelectedCountry(option)}
                    getOptionLabel={(e) => e.label}
                    formatOptionLabel={(e) => (
                      <div className="flex items-center gap-2">
                        <Image src={e.flag} alt={e.label} className="w-5 h-5" width={50} height={50} />
                        {e.label}
                      </div>
                    )}
                    placeholder="Sélectionner un pays"
                    className="w-11/12 p-4 bg-[#EDEDED] border border-[#b8b8b8] text-black"
                  />

                  {/* <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-500 text-white p-4 rounded-sm font-black w-11/12"
                  >
                    PRECEDENT
                  </button> */}
                  <button
                    type="submit"
                    className="bg-[#FF1212] text-white p-6 rounded-sm font-black w-11/12"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Envoi en cours..." : " JE SIGNE !"}
                  </button>
                  <p className="font-light text-sm">
                    Les informations que vous nous communiquez sont uniquement
                    utilisées dans le cadre de la campagne fatshi-degage.
                  </p>
                </div>
              )}
            </form>

            <SuccessModal
              isOpen={showSuccess}
              onClose={() => setShowSuccess(false)}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
