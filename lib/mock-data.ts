import type { Campaign } from "@/types/campaign";

const categories = [
  "À la Une",
  "Aide d'Urgence",
  "Éducation",
  "Santé",
  "Eau & Assainissement",
  "Aide Alimentaire",
  "Développement Durable",
  "Protection de l'Enfance",
  "Droits Humains",
];

const organizations = [
  "Médecins Sans Frontières",
  "UNICEF France",
  "Croix-Rouge française",
  "Action Contre la Faim",
  "Handicap International",
  "Care France",
];

export function generateMockCampaigns(count: number): Promise<Campaign[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const campaigns = Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        image: `/guerre.jpg`,
        title:
          i === 0
            ? "Aide aux enfants déplacés de guerre à Goma en RDC SOS"
            : `Campagne humanitaire ${i + 1}`,
        organizer:
          organizations[Math.floor(Math.random() * organizations.length)],
        description:
          "Soutenez notre action humanitaire pour venir en aide aux populations touchées par cette crise.",
        progress: Math.floor(Math.random() * 100),
        current: `${Math.floor(Math.random() * 10000)}$`,
        goal: `${Math.floor(Math.random() * 20000) + 10000}$`,
        daysLeft: `J-${Math.floor(Math.random() * 50)}`,
        category: categories[Math.floor(Math.random() * categories.length)],
        keyPoints: [
          "Aide médicale d'urgence",
          "Distribution de nourriture",
          "Accès à l'eau potable",
          "Abris temporaires",
        ],
        organizerImage: "/placeholder.svg?height=100&width=100",
        location: "Région affectée",
      }));
      resolve(campaigns);
    }, 1500);
  });
}
