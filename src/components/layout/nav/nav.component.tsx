"use client";

import { VanLongLogo } from "public/assets/logos/van-long";
import { TLinkItemList } from "src/types/nav";
import { LinkItemComponent } from "./linkItem.component";
import { useWindowSize } from "src/hooks/use-window-size";
import { useEffect, useState } from "react";
import MenuIcon from "public/assets/icons/menu-icon";
import CloseIcon from "public/assets/icons/close-icon";
import { merriweather } from "src/utils/font";
import { useTranslations } from "next-intl";

export const NavComponent = () => {
  const size = useWindowSize();
  const t = useTranslations("Header.Navigation");
  const [menuSize, setMenuSize] = useState(false);
  const [displayResponsiveMenu, setDisplayResponsiveMenu] = useState(false);
  const linkItems: TLinkItemList[] = [
    {
      label: t("home"),
      path: "/",
    },
    {
      label: t("restaurant"),
      path: "/#restaurant-section",
    },
    {
      label: <VanLongLogo />,
      path: "/",
    },
    {
      label: t("menu"),
      path: "/carte/#menu-section",
    },
    {
      label: t("contact"),
      path: "/contact/#contact-section",
    },
  ];

  useEffect(() => {
    if (size.width < 768) {
      setMenuSize(true);
    } else {
      setMenuSize(false);
      setDisplayResponsiveMenu(false);
    }
  }, [size, menuSize]);

  return (
    <section className="navBarContainer">
      {menuSize && (
        <div className="navBarIconsContainer">
          <span
            onClick={() => setDisplayResponsiveMenu(true)}
            className={displayResponsiveMenu ? "burgerMenuIcon" : ""}
          >
            {<MenuIcon />}
          </span>
          <span
            className={!displayResponsiveMenu ? "closeMenuIcon" : ""}
            onClick={() => setDisplayResponsiveMenu(false)}
          >
            {<CloseIcon />}
          </span>
        </div>
      )}

      <div
        className={
          displayResponsiveMenu ? "responsiveMenuContainer" : "menuContainer"
        }
      >
        {displayResponsiveMenu && (
          <div className={`${merriweather.className} mainTitleContainer`}>
            <VanLongLogo />
            <div>
              <h1>{t("responsiveH1Logo")}</h1>
            </div>
            <span>{t("responsiveTextLogo")}</span>
          </div>
        )}
        <ul>
          {linkItems.map((linkItem, index) =>
            menuSize && typeof linkItem.label !== "string" ? undefined : (
              <LinkItemComponent
                key={`${linkItem}-${index}`}
                isResponsive={displayResponsiveMenu}
                path={linkItem.path}
                label={linkItem.label}
                setDisplayResponsiveMenu={setDisplayResponsiveMenu}
              />
            )
          )}
        </ul>
      </div>
    </section>
  );
};
