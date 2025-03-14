"use client";
import { useEffect, useState, useActionState } from "react";
import { createPetition } from "@/actions/strapi/petitions/create";
import Form from "next/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Select from "react-select";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SuccessModal } from "../home/success-modal";

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

type Props = {
  count: number;
};

function PetitionForm({ count }: Props) {
  const router = useRouter();
  const [state, dispatch, isPending] = useActionState(
    createPetition,
    undefined
  );
  const [step, setStep] = useState(1);
  const [countries, setCountries] = useState<CountryOption[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(
    null
  );
  const [errorMessages, setErrorMessages] = useState<{ [key: string]: string }>({});

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
          .sort((a: CountryOption, b: CountryOption) =>
            a.label.localeCompare(b.label)
          ); // Tri alphabétique

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

  const nextStep = () => {
    const prenom = document.querySelector('input[name="prenom"]') as HTMLInputElement;
    const nom = document.querySelector('input[name="nom"]') as HTMLInputElement;
    const phoneOrEmail = document.querySelector('input[name="phoneOrEmail"]') as HTMLInputElement;

    // Réinitialiser les messages d'erreur
    setErrorMessages({});

    // Vérifier si tous les champs sont remplis
    const newErrorMessages: { [key: string]: string } = {};
    if (!prenom.value) newErrorMessages.prenom = "Ce champ est obligatoire.";
    if (!nom.value) newErrorMessages.nom = "Ce champ est obligatoire.";
    if (!phoneOrEmail.value) newErrorMessages.phoneOrEmail = "Ce champ est obligatoire.";

    if (Object.keys(newErrorMessages).length === 0) {
      setStep(step + 1);
    } else {
      setErrorMessages(newErrorMessages);
    }
  };

  useEffect(() => {
    if (state?.success) {
      setTimeout(() => {
        router.replace("/share");
      }, 5000); // Délai de 5 secondes
    }
  }, [state?.success, router]);

  return (
    <div className=" bg-[#F4F4F4] container -mt-4  max-h-[100vh]">
      <div className="mx-auto max-w-md mb-4">
        <h1 className=" font-extrabold text-[30px] leading-[27px]">
          IL A ÉCHOUÉ, <br /> IL DOIT <br /> PARTIR <br /> MAINTENANT !
        </h1>
        <p className="text-light text-md mt-2">
          {count} personnes ont signées. <br /> Prochain objectif 10.000 !
        </p>
      </div>

      <div className="mx-auto max-w-md">
        <Form action={dispatch}>
          <div className={`${step === 1 ? "block" : "hidden"}`}>
            <div className="space-y-4">
              <Input
                type="text"
                name="prenom"
                placeholder="Prénom"
                className="w-full p-4 bg-[#EDEDED] border border-[#b8b8b8] text-black rounded-sm"
                required
              />
              {errorMessages.prenom && <p className="text-red-500">{errorMessages.prenom}</p>}
              <Input
                type="text"
                name="nom"
                placeholder="Nom"
                className="w-full p-4 bg-[#EDEDED] border border-[#b8b8b8] text-black rounded-sm"
                required
              />
              {errorMessages.nom && <p className="text-red-500">{errorMessages.nom}</p>}
              <Input
                type="text"
                name="phoneOrEmail"
                placeholder="Téléphone ou Email"
                className="w-full p-4 bg-[#EDEDED] border border-[#b8b8b8] text-black rounded-sm"
                required
              />
              {errorMessages.phoneOrEmail && <p className="text-red-500">{errorMessages.phoneOrEmail}</p>}
              <Button
                type="button"
                onClick={nextStep}
                className="bg-[#FF1212] text-white p-4 rounded-sm font-black w-full"
              >
                SUIVANT
              </Button>
            </div>
          </div>

          {step === 2 && (
            <div className="space-y-4">
              <Select
                options={countries}
                value={selectedCountry}
                name="pays"
                onChange={(option) => setSelectedCountry(option)}
                getOptionLabel={(e) => e.label}
                formatOptionLabel={(e) => (
                  <div className="flex items-center gap-2">
                    <Image
                      src={e.flag}
                      alt={e.label}
                      className="w-5 h-5"
                      width={50}
                      height={50}
                    />
                    {e.label}
                  </div>
                )}
                placeholder="Sélectionner un pays"
                className="w-full p-3 bg-[#EDEDED] border border-[#b8b8b8] text-black"
              />

              <Input
                type="text"
                name="ville"
                placeholder="Ville"
                className="w-full p-4 bg-[#EDEDED] border border-[#b8b8b8]  text-black rounded-sm"
                required
              />
              <div className="flex items-center">
                <Input
                  type="checkbox"
                  name="accept_to_show_progress"
                  className=" w-[40px] h-[30px] bg-[#EDEDED] border border-[#b8b8b8] checked:bg-[#ff1212] checked:border-[#ff1212] cursor-pointer flex items-center justify-center rounded-sm"
                />

                <label
                  htmlFor="accept_to_show_progress"
                  className="ml-2 font-light text-sm"
                >
                  Je veux être tenu.e au courant de l&apos;avancée de la
                  pétition.
                </label>
              </div>
              <div className="flex items-center">
                <Input
                  type="checkbox"
                  name="accept_to_show_my_name"
                  className=" w-[40px] h-[30px] bg-[#EDEDED] border border-[#b8b8b8] checked:bg-[#ff1212] checked:border-[#ff1212] cursor-pointer flex items-center justify-center rounded-sm"
                />

                <label
                  htmlFor="accept_to_show_my_name"
                  className="ml-2 font-light text-sm"
                >
                  Ne pas faire apparaître mes nom et contact sur cette pétition.
                </label>
              </div>

              <Button
                type="submit"
                className="bg-[#FF1212] text-white p-4 rounded-sm font-black w-full"
                disabled={isPending}
              >
                {isPending ? "Envoi en cours..." : " JE SIGNE !"}
              </Button>
              <p className="font-light text-sm">
                Les informations que vous nous communiquez sont uniquement
                utilisées dans le cadre de la campagne fatshi-degage.
              </p>
            </div>
          )}
        </Form>
        <SuccessModal
          isOpen={state?.success as boolean}
          onClose={() => setStep(1)}
        />
      </div>
    </div>
  );
}

export default PetitionForm;
