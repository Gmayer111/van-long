"use client";

import Image from "next/image";
import { MenuItems } from "src/data/menu-data";
import { useWindowSize } from "src/hooks/use-window-size";
import { merriweather } from "src/utils/font";

const MenuPage = () => {
  const size = useWindowSize();
  return (
    <section
      id="menu-section"
      className={`${merriweather.className} menuPageContainer`}
    >
      <h2>Notre carte</h2>
      {MenuItems.map((menuItem) => (
        <div>
          <div>
            <div className="divider">
              <hr />
              <h3>{menuItem.title}</h3>
              <hr />
            </div>
            <ul>
              {menuItem.items.map((item) => (
                <li>
                  <span>{item.label}</span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
          {menuItem.picture && size.width > 768 && (
            <div
              className={menuItem.picture.length > 1 ? "picturesContainer" : ""}
            >
              {menuItem.picture.map((picture) => (
                <Image
                  src={`/assets/images/menu/${picture.path}.jpg`}
                  width={180}
                  height={180}
                  alt={picture.description}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default MenuPage;
