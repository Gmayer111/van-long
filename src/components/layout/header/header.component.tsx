"use client";
import Image from "next/image";
import HeaderImg from "public/assets/images/header-img.jpg";
import { merriweather } from "src/utils/font";
import { NavComponent } from "../nav/nav.component";
import HeaderTitleComponent from "./header-title.component";
import { THeaderTitles } from "src/types/header";
import { useTranslations } from "next-intl";
import { usePathname } from "src/navigation";
import { TPathnames } from "src/types/nav";

const HeaderComponent = () => {
  const currentPath = usePathname();

  const t = useTranslations();

  const HeaderTitles: { [key in TPathnames]: THeaderTitles | string } = {
    "/": t("Common.restaurantName").toUpperCase(),
    "/carte": t("Common.menuNavigation"),
    "/contact": t("Common.contactNavigation"),
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
