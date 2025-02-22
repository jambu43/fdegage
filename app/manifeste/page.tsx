import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ManifestoPage() {
  return (
    <main className=" bg-white">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className='h-44 relative -mt-20'>
        <Link href={'/'}>
        <Image src='/fdlogo-black.svg' alt='banner'  height={150} width={120} className='absolute mt-10 ml-6'/></Link>
      </div>

        <article className="py-6 space-y-6 ml-6">
          <h2 className="text-red-600 text-3xl font-bold">
            L&apos;APPEL À L&apos;ACTION.
          </h2>

          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p>
              Frères et sœurs, regardez autour de vous. Qu&apos;est ce que vous
              voyez ? Des routes défoncées, des écoles qui tombent en ruines,
              des hôpitaux où on meurt faute de médicaments. À l&apos;Est, nos
              familles pleurent sous les bombes, pendant que d&apos;autres
              couvent de faim dans un pays qui déborde de richesses. Qui est
              responsable de tout ça ?
            </p>

            <p>
              Felix l&apos;avait dit son gouvernement. Ce type qui s&apos;est
              pointé en disant qu&apos;il allait tout changer, qu&apos;il allait
              nous sortir de la misère. On l&apos;a cru, on l&apos;a soutenu, on
              a même fermé les yeux sur la manière dont il est arrivé au
              pouvoir. Mais qu&apos;est-ce qu&apos;il a fait pour nous ? Rien.
              Pire, il nous a trahis, il nous a volés, il nous a divisés.
            </p>

            <p>Ses promesses ? Du vent, des mensonges :</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Des routes, des écoles, des emplois ? Il nous a promis tout ça
                et à la place, on a eu des dessous de table ratés, des chantiers
                abandonnés, et des milliards de dollars qui disparaissent dans
                les poches de ses copains.
              </li>
              <li>
                La paix et l&apos;unité ? Il a juré de ramener la paix, mais il
                a ramené la guerre à l&apos;Est, une guerre qui a déjà fait
                perdre. Il a divisé nos tribus, nos communautés, et maintenant
                on se tape dessus entre voisins à cause de lui.
              </li>
            </ul>

            <p>
              On est fatigués, c&apos;est vrai. On a peur, aussi. Mais vous
              savez quoi ? Lui, il continue à dépenser, à penser qu&apos;on va
              continuer à baisser la tête, à fermer nos bouches, à accepter le
              massacre. Mais on n&apos;est pas des moutons ! On est un peuple
              fier, un peuple fort, et quand on en a marre, on le dit !
            </p>

            <p>
              Aujourd&apos;hui, on est plus pauvres qu&apos;avant. Nos
              businessmen ne peuvent plus gagner pour manger pendant que lui et
              ses potes se remplissent les poches avec notre argent, nos
              minerais. Voilà notre misère, voilà leurs promesses des
              investissements, mais les seuls qu&apos;il a faits, c&apos;est
              pour ses proches, ses copains, sa clique.
            </p>

            <p className="text-red-600 font-bold text-lg">
              Ça suffit ! Tshisekedi doit dégager !
            </p>

            <p>
              On ne veut plus de ce président qui détruit notre pays, qui laisse
              nos enfants mourir, qui vole notre argent et qui a détruit
              l&apos;unité. Ce n&apos;est pas un leader, la sécurité, aucun un
              menteur, un diviseur.
            </p>

            <p>
              Cette pétition, c&apos;est notre arme. Signez-la, passez-la à vos
              voisins, à vos amis, à tous ceux qui en ont perdu. Faites du
              bruit, qu&apos;on entende notre colère jusqu&apos;à Kinshasa !
            </p>

            <p>
              Parlez aux journalistes, aux ONG, aux gens du monde entier.
              Montrez-leur la vérité, pour qu&apos;il ne puisse plus se cacher
              derrière ses mensonges.
            </p>

            <p>
              Frères et sœurs, le moment est venu de dire STOP. Stop aux
              misères, stop à la galère. Ensemble, on peut le virer. Ensemble,
              on peut rebâtir un Congo fort, où nos enfants auront un avenir.
            </p>
          </div>

          <div className="pt-6">
            <Button
              asChild
              className="w-full bg-black hover:bg-red-700 text-lg py-6"
            >
              <Link href="/">JE SIGNE LA PÉTITION !</Link>
            </Button>
          </div>
        </article>
      </div>
    </main>
  );
}
