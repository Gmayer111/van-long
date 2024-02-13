"use client";

import { VanLongLogo } from "public/assets/logos/van-long";
import { TLinkItemList } from "src/types/nav";
import { LinkItemComponent } from "./linkItem.component";
import { useWindowSize } from "src/utils/windowSize";
import { useEffect, useState } from "react";
import MenuIcon from "public/assets/icons/menu-icon";
import CloseIcon from "public/assets/icons/close-icon";
import { merriweather } from "src/utils/font";

export const NavComponent = () => {
  const size = useWindowSize();
  const [menuSize, setMenuSize] = useState(false);
  const [displayResponsiveMenu, setDisplayResponsiveMenu] = useState(false);
  const linkItems: TLinkItemList[] = [
    {
      label: "ACCUEIL",
      path: "/",
    },
    {
      label: "LE RESTAURANT",
      path: "/#first-section",
    },
    {
      label: <VanLongLogo />,
      path: "/",
    },
    {
      label: "LA CARTE",
      path: "/carte",
    },
    {
      label: "NOUS TROUVER",
      path: "/contact",
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
              <h1>RESTAURANT VAN LONG</h1>
            </div>
            <span>Cuisine vietnamienne traditionnelle</span>
          </div>
        )}
        <ul>
          {linkItems.map((linkItem) =>
            menuSize && typeof linkItem.label !== "string" ? undefined : (
              <LinkItemComponent
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
