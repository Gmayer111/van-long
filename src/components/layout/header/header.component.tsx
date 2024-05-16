"use client";
import Image from "next/image";
import React from "react";
import HeaderImg from "public/assets/images/header-img.jpg";
import { merriweather } from "src/utils/font";
import { NavComponent } from "../nav/nav.component";
import HeaderTitleComponent from "./header-title.component";
import { usePathname } from "next/navigation";
import { THeaderTitles } from "src/types/header";
import { useTranslations } from "next-intl";

const HeaderComponent = () => {
  const currentPath = usePathname();
  const t = useTranslations();

  const HeaderTitles: { [key: string]: THeaderTitles | string } = {
    "/fr": t("Common.restaurantName").toUpperCase(),
    "/fr/carte": t("Common.menuNavigation"),
    "/fr/contact": t("Common.contactNavigation"),
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
