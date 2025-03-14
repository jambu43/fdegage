"use client";

import { useEffect, useState } from "react";
import { SuccessModal } from "./success-modal";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [signupsCount, setSignupsCount] = useState(0);
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
  const prevStep = () => setStep(step - 1);

  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)


  useEffect(() => {
    fetch("/api/register")
      .then(res => res.json())
      .then(data => setSignupsCount(data.count))
      .catch(() => setSignupsCount(0));
  }, []);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true)



    try {
      // Add your form submission logic here
      // Simulate API call

      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setSignupsCount(prev => prev + 1); // Met à jour le nombre d'inscrits
       
        setStep(1); // Retour à la première étape
      } else {
        alert("Erreur lors de signature.");
      }


      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Form submitted:", formData)

      // Show success modal
      setShowSuccess(true)

      setFormData({ firstName: "", lastName: "", phoneNumber: "", city: "", country: "" }); // Réinitialise le formulaire

    } catch (error) {
      console.error("Error submitting form:", error)
      // Add error handling here
    } finally {
      setIsSubmitting(false)
    }



    
  };


  
  return (
    <div className="flex justify-center h-screen mt-8">
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
                className="w-full p-4 bg-[#EDEDED] border-[#EEEEEE] text-black"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Nom"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-4 bg-[#EDEDED] border-[#EDEDED]  text-black"
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Téléphone ou Email"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-4 bg-[#EDEDED] border-[#EDEDED]  text-black"
                required
              />
              <button type="button" onClick={nextStep} className="bg-[#FF1212] text-white p-4 font-black w-full">
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
                className="w-full p-4 bg-[#EDEDED] border-[#EDEDED]  text-black"
                required
              />
              <input
                type="text"
                name="country"
                placeholder="Pays"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-4 bg-[#EDEDED] border-[#EDEDED]  text-black"
                required
              />
              <div className="flex justify-between">
              </div>
              <button type="button" onClick={prevStep} className="bg-gray-500 text-white p-4 font-black w-full">
                  PRECEDENT
                </button>
              <button type="submit" className="bg-[#FF1212] text-white p-4 font-black w-full" disabled={isSubmitting}>
                {isSubmitting ? "Envoi en cours..." : " JE SIGNE !"}
              </button>
              
            </div>
          )}
        </form>

        <p className="mt-4 text-gray-700">Nombre de personnes inscrites : <strong>{signupsCount}</strong></p>

        <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
      </div>
    </div>
  );
}
