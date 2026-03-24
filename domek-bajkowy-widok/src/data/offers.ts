import { OfferCard } from "@/components/Offers";

const offers: OfferCard[] = [
  {
    id: "zima",
    title: "Oferta zimowa",
    subtitle: "Stoki narciarskie i śnieżne widoki",
    img: "https://domekbajkowywidok.pl/images/frontpage/01.jpg",
    accentColor: "from-blue-900 to-blue-700",
    headerBg: "bg-blue-900",
    items: [
      {
        name: "Boże Narodzenie",
        price: "1500 zł",
        period: "od 22 do 28 grudnia",
        nights: "min. 4 noce",
      },
      {
        name: "Sylwester",
        price: "1500 zł",
        period: "od 28 grudnia do 2 stycznia",
        nights: "min. 4 noce",
      },
      {
        name: "Ferie i zima",
        price: "700 zł",
        period: "od 3 stycznia do 1 marca",
        nights: "min. 4 noce",
      },
    ],
  },
  {
    id: "lato",
    title: "Oferta letnia",
    subtitle: "Zalew, kajaki i górskie szlaki",
    img: "https://domekbajkowywidok.pl/images/frontpage/02.jpg",
    accentColor: "from-emerald-800 to-emerald-600",
    headerBg: "bg-emerald-700",
    items: [
      {
        name: "Wielkanoc",
        price: "700 zł",
        period: "okres wielkanocny",
        nights: "min. 3 noce",
      },
      {
        name: "Majówka",
        price: "700 zł",
        period: "okres majówkowy",
        nights: "min. 3 noce",
      },
      {
        name: "Wakacje",
        price: "700 zł",
        period: "od 22 czerwca do 13 września",
        nights: "min. 3 noce",
      },
    ],
  },
  {
    id: "poza",
    title: "Poza sezonem",
    subtitle: "Cisza, spacery i złota jesień",
    img: "https://domekbajkowywidok.pl/images/frontpage/03.jpg",
    accentColor: "from-stone-700 to-stone-500",
    headerBg: "bg-stone-600",
    items: [
      {
        name: "Jesień",
        price: "600 zł",
        period: "od 14 września do 30 listopada",
        nights: "min. 2 noce",
      },
      {
        name: "Wiosna",
        price: "600 zł",
        period: "od 2 marca do 21 czerwca",
        nights: "min. 2 noce",
      },
      {
        name: "Grudzień",
        price: "600 zł",
        period: "od 1 do 22 grudnia",
        nights: "min. 2 noce",
      },
    ],
  },
];

export default offers;
