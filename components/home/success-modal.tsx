import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md rounded-3xl p-6 gap-6">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="rounded-full bg-green-50 p-3">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Merci pour votre signature !</h2>
            <p className="text-gray-600">
              Votre soutien est important. Partagez la pétition pour avoir plus d&apos;impact.
            </p>
          </div>

          <div className="flex flex-col w-full gap-3 mt-2">
            <Button
              className="w-full bg-red-600 hover:bg-red-700"
              onClick={() => {
                // Add share functionality here
                console.log("Share petition")
              }}
            >
              Partager la pétition
            </Button>

            <Button variant="outline" className="w-full" onClick={onClose}>
              Fermer
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

