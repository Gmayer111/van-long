import type { Metadata } from "next";
import "../../assets/sass/core.scss";
import HeaderComponent from "src/components/layout/header.component";
import { merriweather_Sans } from "../utils/font";
import FooterComponent from "src/components/layout/footer.component";

export const metadata: Metadata = {
  title: "Le restaurant - Restaurant Van Long",
  description:
    "Situé dans le 13ème arrondissement de Paris depuis 1992,de la rue Pascal à la rue du Champ de l’Alouette,notre restaurant traditionnel vietnamien vous accueille dans un cadre simple et chaleureux. Tous nos plats sont élaborés sur place, à partir de produits frais, et vous rappelleront les saveurs subtiles de la cuisine vietnamienne. Précédent Suivant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={merriweather_Sans.className}>
      <body>
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
