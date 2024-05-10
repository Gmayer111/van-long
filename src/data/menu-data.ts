import { TMenuItems } from "src/types/menu";

export const MenuItems: TMenuItems[] = [
  {
    title: "Nos entrées",
    items: [
      {
        label: "Rouleau de printemps au porc et aux crevettes (Goi cuon)",
        price: "5€00",
      },
      {
        label: "Nems au porc (Cha gio)",
        price: "7€00",
      },
      {
        label: "Raviolis à la vapeur crevettes (Ha kao)",
        price: "7€00",
      },
      {
        label: "Crêpes vietnamiennes au porc (Banh cuon)",
        price: "8€50",
      },
      {
        label: "Raviolis frits aux crevettes (Tom chien)",
        price: "7€00",
      },
    ],
  },
  {
    title: "Nos salades",
    picture: [
      {
        path: "salad",
        description: "Salade de crevettes",
      },
    ],
    items: [
      {
        label: "Salade au boeuf piquant (Goi bo)",
        price: "9€80",
      },
      {
        label: "Salade aux crevettes (Goi tom)",
        price: "9€80",
      },
      {
        label: "Salade au poulet (Goi ga)",
        price: "9€80",
      },
    ],
  },
  {
    title: "Nos soupes",
    picture: [
      {
        path: "soup",
        description: "Soupe de Tamarin crevettes",
      },
      {
        path: "pho",
        description: "Soupe Pho",
      },
    ],
    items: [
      {
        label: "Soupe de Raviolis aux crevettes",
        price: "8€00",
      },
      {
        label: "Soupe Saïgonnaise (Hu Tieu)",
        price: "10€50",
      },
      {
        label: "Soupe Tonkinoise (Pho)",
        price: "11€80",
      },
      {
        label: "Soupe de Tamarin aux crevettes (Canh chua)",
        price: "10€50",
      },
    ],
  },
  {
    title: "Nos plats au porc",
    items: [
      {
        label: "Porc au Caramel",
        price: "13€50",
      },
      {
        label: "Porc au Gingembre",
        price: "13€50",
      },
      {
        label: "Travers de Porc à la Citronnelle",
        price: "14€00",
      },
      {
        label: "Travers de Porc laqué",
        price: "14€00",
        extra: "* Servis avec du riz nature",
      },
    ],
  },
  {
    title: "Nos plats au poulet",
    picture: [
      {
        path: "ga_curry",
        description: "Poulet au curry",
      },
    ],
    items: [
      {
        label: "Poulet à la Citronnelle",
        price: "13€50",
      },
      {
        label: "Poulet au Gingembre",
        price: "13€50",
      },
      {
        label: "Poulet au Curry et lait de Coco",
        price: "13€50",
        extra: "* Servis avec du riz nature",
      },
    ],
  },
  {
    title: "Nos plats au boeuf",
    picture: [
      {
        path: "bo_sate",
        description: "Boeuf au saté",
      },
    ],
    items: [
      {
        label: "Boeuf à la Citronnelle",
        price: "14€00",
      },
      {
        label: "Boeuf au Curry et lait de coco",
        price: "14€00",
      },
      {
        label: "Boeuf au Saté piquant",
        price: "14€00",
      },
      {
        label: "Boeuf Impérial au lait de coco",
        price: "14€00",
      },
      {
        label: "Boeuf sauté au Basilic au lait de coco",
        price: "14€00",
        extra: "* Servis avec du riz nature",
      },
    ],
  },
  {
    title: "Nos plats aux crevettes",
    picture: [
      {
        path: "tom_basilic",
        description: "Crevettes au Basilic",
      },
    ],
    items: [
      {
        label: "Crevettes au Caramel",
        price: "14€50",
      },
      {
        label: "Crevettes au Curry et lait de coco",
        price: "14€50",
      },
      {
        label: "Crevettes au Basilic et lait de coco",
        price: "14€50",
      },
      {
        label: "Crevettes Piquantes",
        price: "14€50",
      },
      {
        label: "Crevettes à l’Aigre douce",
        price: "14€50",
        extra: "* Servis avec du riz nature",
      },
    ],
  },
  {
    title: "Nos plats de poissons",
    items: [
      {
        label: "Filet de Poisson à la vapeur",
        price: "14€50",
      },
      {
        label: "Filet de Poisson au Curry et lait de coco",
        price: "14€50",
      },
      {
        label: "Filet de Poisson au Basilic et lait de coco",
        price: "14€50",
      },
      {
        label: "Filet de Poisson piquant",
        price: "14€50",
        extra: "* Servis avec du riz nature",
      },
    ],
  },
  {
    title: "Nos spécialités de la maison",
    picture: [
      {
        path: "bo_bun",
        description: "Bo Bun",
      },
      {
        path: "mi_mem",
        description: "Nouilles sautées garnies",
      },
    ],
    items: [
      {
        label: "Bo Bun",
        price: "11€00",
      },
      {
        label: "Grand Bo Bun",
        price: "13€00",
      },
      {
        label: "Nouilles croustillantes garnies",
        price: "13€50",
      },
      {
        label: "Nouilles sautées garnies",
        price: "13€50",
      },
      {
        label: "Nouilles sautées aux crevettes",
        price: "14€50",
      },
      {
        label: "Boeuf Luc Lac",
        price: "14€50",
      },
      {
        label: "Porc croustillant garnis",
        price: "14€00",
      },
      {
        label: "Filet de Canard aux cinq épices",
        price: "13€00",
      },
      {
        label: "Filet de Canard au basilic",
        price: "13€00",
      },
      {
        label: "Gambas sel et poivre",
        price: "15€90",
      },
    ],
  },
  {
    title: "Nos grillades (Servises avec riz et/ou vermicelles)",
    picture: [
      {
        path: "heo_lui",
        description: "Porc grillé",
      },
      {
        path: "bo_lui",
        description: "Brochettes de Boeuf",
      },
    ],
    items: [
      {
        label: "Porc grillé façon vietnamienne",
        price: "13€80",
      },
      {
        label: "Brochettes de Porc ou Poulet grillées",
        price: "14€00",
      },
      {
        label: "Brochettes de Boeuf grillées",
        price: "14€50",
      },
    ],
  },
  {
    title: "Nos accompagnements",
    items: [
      {
        label: "Riz nature",
        price: "2€50",
      },
      {
        label: "Riz cantonnais",
        price: "7€50",
      },
      {
        label: "Nouilles sautées natures",
        price: "7€50",
      },
      {
        label: "Légumes sautés",
        price: "8€00",
      },
    ],
  },
  {
    title: "Nos desserts",
    picture: [
      {
        path: "dessert-1",
        description: "Banane Tapioca et lait de coco",
      },
      { path: "dessert-2", description: "Mangue fraiche" },
    ],
    items: [
      {
        label: "Glace en boule (1 boule)",
        price: "2€80",
      },
      {
        label: "Gingembre confit",
        price: "4€50",
      },
      {
        label: "Nougat mou",
        price: "4€50",
      },
      {
        label: "Lychee en sirop",
        price: "4€50",
      },
      {
        label: "Perle de coco",
        price: "4€50",
      },
      {
        label: "Dessert maison du moment",
        price: "5€00",
      },
      {
        label: "1/2 Mangue",
        price: "5€00",
      },
      {
        label: "Beignet à l’Ananas",
        price: "6€00",
      },
      {
        label: "Beignet de Banane",
        price: "6€00",
      },
      {
        label: "Beignet de Pomme",
        price: "6€00",
      },
      {
        label: "Beignet à l’Ananas flambé",
        price: "6€80",
      },
      {
        label: "Beignet de Banane flambé",
        price: "6€80",
      },
      {
        label: "Beignet de Pomme flambé",
        price: "6€80",
      },
    ],
  },
  {
    title: "Nos boissons (carte des vins sur place)",
    items: [
      {
        label: "Café",
        price: "2€00",
      },
      {
        label: "Thé au Jasmin",
        price: "2€50",
      },
      {
        label: "Thé vert",
        price: "2€50",
      },
      {
        label: "Thé au gingembre",
        price: "2€50",
      },
      {
        label: "Jus de fruits et sodas",
        price: "4€00",
      },
      {
        label: "Lait de soja",
        price: "4€00",
      },
      {
        label: "Jus de coco",
        price: "4€00",
      },
    ],
  },
];
