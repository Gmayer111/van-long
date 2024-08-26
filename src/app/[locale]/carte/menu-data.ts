import { useTranslations } from "next-intl";
import { TMenuItems } from "src/types/menu";

export const MenuItemsComponent = () => {
  const t = useTranslations("MenuPage.Menu");
  const menuItems: TMenuItems[] = [
    {
      title: t("starters.title"),
      picture: [
        {
          path: "nems",
          description: t("starters.nem.description"),
        },
        {
          path: "goi_cuon",
          description: t("starters.springRolls.description"),
        },
      ],
      items: [
        {
          label: t("starters.springRolls.label"),
          price: "5€00",
        },
        {
          label: t("starters.nem.label"),
          price: "7€00",
        },
        {
          label: t("starters.haKao"),
          price: "7€00",
        },
        {
          label: t("starters.banhCuon"),
          price: "8€50",
        },
        {
          label: t("starters.tomChien"),
          price: "7€00",
        },
      ],
    },
    {
      title: t("salads.title"),
      picture: [
        {
          path: "salad",
          description: t("salads.prawnsSalad.description"),
        },
      ],
      items: [
        {
          label: t("salads.spicyBeefSalad"),
          price: "9€80",
        },
        {
          label: t("salads.prawnsSalad.label"),
          price: "9€80",
        },
        {
          label: t("salads.chickenSalad"),
          price: "9€80",
        },
      ],
    },
    {
      title: t("soups.title"),
      picture: [
        {
          path: "soup",
          description: t("soups.tamarindSoup.description"),
        },
        {
          path: "pho",
          description: t("soups.pho.description"),
        },
      ],
      items: [
        {
          label: t("soups.raviolisSoup"),
          price: "8€00",
        },
        {
          label: t("soups.saigoneseSoup"),
          price: "11€00",
        },
        {
          label: t("soups.pho.label"),
          price: "12€00",
        },
        {
          label: t("soups.tamarindSoup.label"),
          price: "10€80",
        },
      ],
    },
    {
      title: t("porkDishes.title"),
      items: [
        {
          label: t("porkDishes.caramelPork"),
          price: "13€50",
        },
        {
          label: t("porkDishes.gingerPork"),
          price: "13€50",
        },
        {
          label: t("porkDishes.lemongrassPork"),
          price: "14€00",
        },
        {
          label: t("porkDishes.glazedPork"),
          price: "14€00",
          extra: t("supplement"),
        },
      ],
    },
    {
      title: t("chickenDishes.title"),
      picture: [
        {
          path: "ga_curry",
          description: t("chickenDishes.curryChicken.description"),
        },
      ],
      items: [
        {
          label: t("chickenDishes.lemongrassChicken"),
          price: "13€50",
        },
        {
          label: t("chickenDishes.gingerChicken"),
          price: "13€50",
        },
        {
          label: t("chickenDishes.curryChicken.label"),
          price: "13€50",
          extra: t("supplement"),
        },
      ],
    },
    {
      title: t("beefDishes.title"),
      picture: [
        {
          path: "bo_sate",
          description: t("beefDishes.satayBeef.description"),
        },
      ],
      items: [
        {
          label: t("beefDishes.lemongrassBeef"),
          price: "14€00",
        },
        {
          label: t("beefDishes.curryBeef"),
          price: "14€00",
        },
        {
          label: t("beefDishes.satayBeef.label"),
          price: "14€00",
        },
        {
          label: t("beefDishes.imperialBeef"),
          price: "14€00",
        },
        {
          label: t("beefDishes.basilBeef"),
          price: "14€00",
          extra: t("supplement"),
        },
      ],
    },
    {
      title: t("prawnsDishes.title"),
      picture: [
        {
          path: "tom_basilic",
          description: t("prawnsDishes.basilPrawns.description"),
        },
      ],
      items: [
        {
          label: t("prawnsDishes.caramelPrawns"),
          price: "14€50",
        },
        {
          label: t("prawnsDishes.curryPrawns"),
          price: "14€50",
        },
        {
          label: t("prawnsDishes.basilPrawns.label"),
          price: "14€50",
        },
        {
          label: t("prawnsDishes.spicyPrawns"),
          price: "14€50",
        },
        {
          label: t("prawnsDishes.sweetSourPrawns"),
          price: "14€50",
          extra: t("supplement"),
        },
      ],
    },
    {
      title: t("fishesDishes.title"),
      items: [
        {
          label: t("fishesDishes.steamedFishe"),
          price: "14€50",
        },
        {
          label: t("fishesDishes.curryFish"),
          price: "14€50",
        },
        {
          label: t("fishesDishes.basilFish"),
          price: "14€50",
        },
        {
          label: t("fishesDishes.spicyFish"),
          price: "14€50",
          extra: t("supplement"),
        },
      ],
    },
    {
      title: t("specialities.title"),
      picture: [
        {
          path: "bo_bun",
          description: t("specialities.boBun"),
        },
        {
          path: "mi_mem",
          description: t("specialities.friedNoodles"),
        },
      ],
      items: [
        {
          label: t("specialities.boBun"),
          price: "11€00",
        },
        {
          label: t("specialities.largeBoBun"),
          price: "13€00",
        },
        {
          label: t("specialities.crispyNoodles"),
          price: "13€50",
        },
        {
          label: t("specialities.friedNoodles"),
          price: "13€50",
        },
        {
          label: t("specialities.prawnsFriedNoodles"),
          price: "14€50",
        },
        {
          label: t("specialities.lucLacBeef"),
          price: "14€50",
        },
        {
          label: t("specialities.crispyPork"),
          price: "14€00",
        },
        {
          label: t("specialities.spicyDuck"),
          price: "13€00",
        },
        {
          label: t("specialities.basilDuck"),
          price: "13€00",
        },
      ],
    },
    {
      title: t("grills.title"),
      picture: [
        {
          path: "heo_lui",
          description: t("grills.grilledPork.description"),
        },
        {
          path: "bo_lui",
          description: t("grills.brochettesBeef.description"),
        },
      ],
      items: [
        {
          label: t("grills.grilledPork.label"),
          price: "13€80",
        },
        {
          label: t("grills.brochettesPork"),
          price: "14€00",
        },
        {
          label: t("grills.brochettesBeef.label"),
          price: "14€50",
        },
      ],
    },
    {
      title: t("extra.title"),
      items: [
        {
          label: t("extra.rice"),
          price: "2€50",
        },
        {
          label: t("extra.cantoneseRice"),
          price: "7€80",
        },
        {
          label: t("extra.plainFriedNoodles"),
          price: "7€50",
        },
        {
          label: t("extra.stirFriedVegetables"),
          price: "8€00",
        },
      ],
    },
    {
      title: t("desserts.title"),
      picture: [
        {
          path: "dessert-1",
          description: t("desserts.bananaTapioca.description"),
        },
        {
          path: "dessert-2",
          description: t("desserts.freshMango.description"),
        },
      ],
      items: [
        {
          label: t("desserts.iceCream"),
          price: "2€80",
        },
        {
          label: t("desserts.ginger"),
          price: "4€50",
        },
        {
          label: t("desserts.nougat"),
          price: "4€50",
        },
        {
          label: t("desserts.lychees"),
          price: "4€50",
        },
        {
          label: t("desserts.cocoPearl"),
          price: "4€50",
        },
        {
          label: t("desserts.homemadeDessert"),
          price: "5€00",
        },
        {
          label: t("desserts.freshMango.label"),
          price: "5€00",
        },
        {
          label: t("desserts.pineappleFritter"),
          price: "6€00",
        },
        {
          label: t("desserts.bananaFritter"),
          price: "6€00",
        },
        {
          label: t("desserts.appleFritter"),
          price: "6€00",
        },
        {
          label: t("desserts.appleFritter"),
          price: "6€80",
        },
        {
          label: t("desserts.flamedBananaFritter"),
          price: "6€80",
        },
        {
          label: t("desserts.flamedAppleFritter"),
          price: "6€80",
        },
      ],
    },
    {
      title: t("drinks.title"),
      items: [
        {
          label: t("drinks.coffee"),
          price: "2€20",
        },
        {
          label: t("drinks.jasminTea"),
          price: "2€50",
        },
        {
          label: t("drinks.greenTea"),
          price: "2€50",
        },
        {
          label: t("drinks.gingerTea"),
          price: "2€50",
        },
        {
          label: t("drinks.sodaAndJuice"),
          price: "4€00",
        },
        {
          label: t("drinks.soyMilk"),
          price: "4€00",
        },
        {
          label: t("drinks.cocoJuice"),
          price: "4€00",
        },
      ],
    },
  ];
  return menuItems;
};
