import Image from "next/image";

import BambooImage from "public/assets/img/bamboo.png";
import { merriweather } from "src/utils/font";

export default function Home() {
  return (
    <>
      <section className="topSectionHomePageContainer">
        <div>
          <Image src={BambooImage} alt="Logo du restaurant" />
        </div>
        <div>
          <p className={merriweather.className}>
            Situé dans le 13ème arrondissement de Paris depuis 1992, de la rue
            Pascal à la rue du Champ de l’Alouette, notre restaurant
            traditionnel vietnamien vous accueille dans un cadre simple et
            chaleureux. Tous nos plats sont élaborés sur place, à partir de
            produits frais, et vous rappelleront les saveurs subtiles <br /> de
            la cuisine vietnamienne.
          </p>
        </div>
        <div>
          <Image src={BambooImage} alt="Logo du restaurant" />
        </div>
      </section>
    </>
  );
}
