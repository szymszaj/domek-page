import { AttractionGroup } from "@/components/Attractions";
import { Mountain, Waves, Zap } from "lucide-react";

const groups: AttractionGroup[] = [
  {
    icon: Waves,
    title: "Baseny Termalne",
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-200",
    items: [
      { name: "Gorący Potok", distance: "26 km" },
      { name: "Termy Bania", distance: "25 km" },
      { name: "Termy Bukovina", distance: "33 km" },
      { name: "Termy Zakopiańskie", distance: "40 km" },
    ],
  },
  {
    icon: Mountain,
    title: "Stacje Narciarskie",
    color: "text-forest-700",
    bg: "bg-forest-50 border-forest-200",
    items: [
      { name: "Czorsztyn-Ski", distance: "5 km" },
      { name: "Polana Sosny", distance: "14 km" },
      { name: "Kotelnica", distance: "24 km" },
      { name: "Grapa Ski", distance: "24 km" },
    ],
  },
  {
    icon: Zap,
    title: "Inne Atrakcje",
    color: "text-gold-dark",
    bg: "bg-amber-50 border-amber-200",
    items: [
      { name: "Velo Czorsztyn", distance: "2 km" },
      { name: "Plaża Maniowy", distance: "3 km" },
      { name: "BikePark Kluszkowce", distance: "5 km" },
      { name: "Zamek w Czorsztynie", distance: "8 km" },
    ],
  },
];

export default groups;
