export type Car = {
  id: string;
  make: string;
  model: string;
  year: number;
  km: number;
  fuel: string;
  transmission: string;
  price: number;
  location: string;
  badge: string | null;
  image: string | null;
  type: "personenwagen" | "bestelwagen";
};

export const stock: Car[] = [
  {
    id: "bmw-320e",
    make: "BMW",
    model: "320e",
    year: 2021,
    km: 54000,
    fuel: "Hybride (Benzine)",
    transmission: "Automaat",
    price: 34499,
    location: "Sint-Michiels, Brugge",
    badge: null,
    image: "/bmw-320e.jpg",
    type: "personenwagen",
  },
  {
    id: "jaguar-f-type",
    make: "Jaguar",
    model: "F-Type",
    year: 2020,
    km: 39900,
    fuel: "Benzine",
    transmission: "Automaat",
    price: 48750,
    location: "Brugge",
    badge: "Premium",
    image: "/jaguar-f-type.jpg",
    type: "personenwagen",
  },
  {
    id: "audi-a1",
    make: "Audi",
    model: "A1",
    year: 2021,
    km: 25210,
    fuel: "Benzine",
    transmission: "Manueel",
    price: 21200,
    location: "Brugge",
    badge: "Weinig km",
    image: "/audi-a1.jpg",
    type: "personenwagen",
  },
  {
    id: "citroen-berlingo",
    make: "Citroën",
    model: "Berlingo",
    year: 2019,
    km: 82000,
    fuel: "Benzine",
    transmission: "Manueel",
    price: 13800,
    location: "Brugge",
    badge: "Scherpe prijs",
    image: "/citroen-berlingo.jpg",
    type: "bestelwagen",
  },
  {
    id: "bmw-x1",
    make: "BMW",
    model: "X1",
    year: 2022,
    km: 33000,
    fuel: "Plug-in Hybride",
    transmission: "Automaat",
    price: 44850,
    location: "Brugge",
    badge: null,
    image: "/bmw-x1.jpg",
    type: "personenwagen",
  },
  {
    id: "ford-transit-connect",
    make: "Ford",
    model: "Transit Connect",
    year: 2020,
    km: 46500,
    fuel: "Diesel",
    transmission: "Manueel",
    price: 18900,
    location: "Brugge",
    badge: null,
    image: "/ford-transit-connect.jpg",
    type: "bestelwagen",
  },
  {
    id: "bmw-ix1",
    make: "BMW",
    model: "iX1",
    year: 2023,
    km: 25450,
    fuel: "Elektrisch",
    transmission: "Automaat",
    price: 36250,
    location: "Brugge",
    badge: "Nieuw binnen",
    image: "/bmw-ix1.jpg",
    type: "personenwagen",
  },
  {
    id: "mini-jcw-countryman",
    make: "MINI",
    model: "John Cooper Works Countryman",
    year: 2024,
    km: 15210,
    fuel: "Hybride",
    transmission: "Automaat",
    price: 38750,
    location: "Brugge",
    badge: "Topkeuze",
    image: "/mini-jcw-countryman.jpg",
    type: "personenwagen",
  },
];

export const fuelColors: Record<string, string> = {
  Benzine: "bg-orange-500/20 text-orange-300",
  "Hybride (Benzine)": "bg-green-500/20 text-green-300",
  "Plug-in Hybride": "bg-emerald-500/20 text-emerald-300",
  Hybride: "bg-green-500/20 text-green-300",
  Diesel: "bg-blue-500/20 text-blue-300",
  Elektrisch: "bg-teal-500/20 text-teal-300",
};
