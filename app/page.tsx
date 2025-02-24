
import PetitionForm from "@/components/form/petition";
import Header from "@/components/home/header";
import { numberOfPetitions } from "@/actions/strapi/petitions/find";


export default async function Home() {

  const count = await numberOfPetitions();
 

  return (
    <main className="" >
      <Header />
      <PetitionForm count={count} />
     
    </main>
  );
}
