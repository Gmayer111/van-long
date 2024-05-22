"use client";

import { VanLongLogo } from "public/assets/logos/van-long";
import { TLinkItemList } from "src/types/nav";
import { LinkItemComponent } from "./linkItem.component";
import { useEffect, useState } from "react";
import MenuIcon from "public/assets/icons/menu-icon";
import CloseIcon from "public/assets/icons/close-icon";
import { merriweather } from "src/utils/font";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "src/navigation";
import { useWindowSize } from "src/hooks/use-window-size";

export const NavComponent = () => {
  const size = useWindowSize();
  const t = useTranslations();
  const [menuSize, setMenuSize] = useState(false);
  let pathName = usePathname();

  const [displayResponsiveMenu, setDisplayResponsiveMenu] = useState(false);

  const linkItems: TLinkItemList[] = [
    {
      label: t("Header.Navigation.home"),
      path: "/",
    },
    {
      label: t("Header.Navigation.restaurant"),
      path: "/#restaurant-section",
    },
    {
      label: <VanLongLogo />,
      path: "/",
    },
    {
      label: t("Common.menuNavigation"),
      path: "/carte/#menu-section",
    },
    {
      label: t("Common.contactNavigation"),
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
              <h1>{t("Common.restaurantName").toUpperCase()}</h1>
            </div>
            <span>{t("Common.shortRestaurantDescription")}</span>
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
        {!displayResponsiveMenu && (
          <div>
            <Link href={pathName} locale="fr">
              FR
            </Link>
            <Link href={pathName} locale="en">
              EN
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
