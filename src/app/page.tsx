"use client";
import { merriweather } from "src/utils/font";

import CarouselComponent from "src/components/carousel/carousel.component";
import { VanLongLogo } from "public/assets/logos/van-long";

export default function Home() {
  return (
    <div className="homePageContainer">
      <section className="topSectionHomePageContainer">
        <div>
          <VanLongLogo />
        </div>
        <div>
          <p className={merriweather.className}>
            Situé dans le 13ème arrondissement de Paris depuis 1992, de la rue
            Pascal à la rue du Champ de l’Alouette, notre restaurant
            traditionnel vietnamien vous accueille dans un cadre simple et
            chaleureux. Tous nos plats sont élaborés sur place, à partir de
            produits frais, et vous rappelleront les saveurs subtiles de la
            cuisine vietnamienne.
          </p>
        </div>
      </section>
      <section className="bottomSectionHomePageContainer">
        <CarouselComponent />
      </section>
    </div>
  );
}
