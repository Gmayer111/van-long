"use client";
import Image from "next/image";
import HeaderImg from "public/assets/images/header-img.jpg";
import { merriweather } from "src/utils/font";
import { NavComponent } from "../nav/nav.component";
import HeaderTitleComponent from "./header-title.component";
import { usePathname } from "next/navigation";
import { THeaderTitles } from "src/types/header";
import { useLocale, useTranslations } from "next-intl";

const HeaderComponent = () => {
  const currentPath = usePathname();
  const locale = useLocale();

  const t = useTranslations();

  const HeaderTitles: { [key: string]: THeaderTitles | string } = {
    [`/${locale}`]: t("Common.restaurantName").toUpperCase(),
    [locale === "fr" ? "/fr/carte" : "/en/menu"]: t("Common.menuNavigation"),
    [`/${locale}/contact`]: t("Common.contactNavigation"),
  };

  return (
    <header>
      <div>
        <NavComponent />
        <div className={`${merriweather.className} headerImgContainer`}>
          <Image priority={true} src={HeaderImg} alt="Image de l'en-tête" />
          <HeaderTitleComponent headerTitle={HeaderTitles[currentPath]} />
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
