import type { Metadata } from "next";
import "../../../assets/sass/core.scss";
import { merriweather_Sans } from "../../utils/font";
import FooterComponent from "src/components/layout/footer.component";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import HeaderComponent from "src/components/layout/header/header.component";

export const metadata: Metadata = {
  title: "Le restaurant - Restaurant Van Long",
  description:
    "Situé dans le 13ème arrondissement de Paris depuis 1992,de la rue Pascal à la rue du Champ de l’Alouette,notre restaurant traditionnel vietnamien vous accueille dans un cadre simple et chaleureux. Tous nos plats sont élaborés sur place, à partir de produits frais, et vous rappelleront les saveurs subtiles de la cuisine vietnamienne. Précédent Suivant",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale} className={merriweather_Sans.className}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <HeaderComponent />
          {children}
          <FooterComponent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
