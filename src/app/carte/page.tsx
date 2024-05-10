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
      <div>
        <h2>Notre carte</h2>
        {MenuItems.map((menuItem) => (
          <div key={menuItem.title}>
            <div>
              <div className="divider">
                <hr />
                <h3>{menuItem.title}</h3>
                <hr />
              </div>
              <ul>
                {menuItem.items.map((item) => (
                  <>
                    <li key={item.label}>
                      <span>{item.label}</span>
                      <span>{item.price}</span>
                    </li>
                    {item.extra && <span>{item.extra}</span>}
                  </>
                ))}
              </ul>
            </div>
            {menuItem.picture && (
              <div
                className={
                  menuItem.picture.length > 1
                    ? "picturesContainer"
                    : "pictureContainer"
                }
              >
                {menuItem.picture.map((picture) => (
                  <div key={picture.description}>
                    <Image
                      src={`/assets/images/menu/${picture.path}.jpg`}
                      width={180}
                      height={180}
                      alt={picture.description}
                    />
                    <span>{picture.description}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuPage;
