import { ChartNoAxesCombinedIcon, Users2, Briefcase } from "lucide-react";
export const MOBILE_MENU = [
  {
    label: "Créer une pétition",
    href: "/#",
  },
  {
    label: "Découvrir ",
    href: "/#",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Contact",
    href: "/#",
  },
];

export const adminMenu = [
  {
    title: "Campagnes",
    url: "#",
    icon: Briefcase,
    isActive: true,
    items: [
      {
        title: "Créer une campagne",
        url: "/dashboard/campagnes/create",
      },
      {
        title: "Mes campagnes",
        url: "/dashboard/campagnes",
      },
    ],
  },
  {
    title: "Donateurs",
    url: "#",
    icon: Users2,
    items: [
      {
        title: "Liste de donateurs",
        url: "/dashboard/donateurs",
      },
    ],
  },

  {
    title: "Rapports",
    url: "#",
    icon: ChartNoAxesCombinedIcon,
    items: [
      {
        title: "Rapports Globaux",
        url: "/dashboard/rapports/globaux",
      },
    ],
  },
];
