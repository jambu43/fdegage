import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-red-600 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 text-center">
        <div className="mb-6">
          <h1 className="text-6xl font-bold text-red-600 mb-2">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page non trouvée</h2>
          <p className="text-gray-600 mb-6">Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.</p>
        </div>

        {/* You can replace this with an actual illustration */}
        <div className="mb-8 flex justify-center">
          <svg className="w-32 h-32 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <Button asChild className="bg-red-600 hover:bg-red-700 text-lg py-6 px-8">
          <Link href="/">Retour à l&apos;accueil</Link>
        </Button>
      </div>
    </main>
  )
}

