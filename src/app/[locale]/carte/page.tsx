import Image from "next/image";
import { merriweather } from "src/utils/font";
import { getAllDishServicesMenuItems } from "src/app/actions/dishs-service/dish-services.actions";
import { getLocale } from "next-intl/server";
import { getAllDishServicesOnExtras } from "src/app/actions/dishs-services-on-extras/dishs-services-on-extras.actions";

enum ServerLocale {
  fr = "FR",
  en = "EN",
}

function convertToLocaleEnum(str: string): ServerLocale {
  const localeValue = ServerLocale[str as keyof typeof ServerLocale];
  return localeValue;
}

const MenuPage = async () => {
  const dishServicesItems = await getAllDishServicesMenuItems();
  const dishServicesOnExtras = await getAllDishServicesOnExtras();
  const currentLocale = await getLocale();
  const locale = convertToLocaleEnum(currentLocale);

  const menuData = {
    FR: dishServicesItems.map((dishServiceItems) => ({
      dishServiceTitlte: dishServiceItems.titleFR,
      dishs: dishServiceItems.dishs.map((item) => ({
        label: item.labelFR,
        price: item.price,
      })),
      extras: dishServicesOnExtras.map((dishServiceOnExtra) => ({
        extra:
          dishServiceItems.id === dishServiceOnExtra.dishServiceId &&
          dishServiceOnExtra.extra.labelFR,
      })),
      pictures: dishServiceItems.pictures.map((picture) => ({
        url: picture.pictureUrl,
        description: picture.descriptionFR,
      })),
    })),
    EN: dishServicesItems.map((dishServiceItems) => ({
      dishServiceTitlte: dishServiceItems.titleEN,
      dishs: dishServiceItems.dishs.map((item) => ({
        label: item.labelEN,
        price: item.price,
      })),
      extras: dishServicesOnExtras.map((dishServiceOnExtra) => ({
        extra:
          dishServiceItems.id === dishServiceOnExtra.dishServiceId &&
          dishServiceOnExtra.extra.labelEN,
      })),
      pictures: dishServiceItems.pictures.map((picture) => ({
        url: picture.pictureUrl,
        description: picture.descriptionEN,
      })),
    })),
  };

  return (
    <section
      id="menu-section"
      className={`${merriweather.className} menuPageContainer`}
    >
      <div>
        {menuData[locale].map((menuItem) => (
          <div key={menuItem.dishServiceTitlte}>
            <div>
              <div className="divider">
                <hr />
                <h3>{menuItem.dishServiceTitlte}</h3>
                <hr />
              </div>
              <ul>
                {menuItem.dishs.map((dish) => (
                  <li key={dish.label}>
                    <span>{dish.label}</span>
                    <span>{dish.price} €</span>
                  </li>
                ))}
              </ul>
              {menuItem.extras && (
                <ul>
                  {menuItem.extras.map((extra) => (
                    <li className="extra-list">{extra.extra}</li>
                  ))}
                </ul>
              )}
            </div>
            {menuItem.pictures && (
              <div
                className={
                  menuItem.pictures.length > 1
                    ? "picturesContainer"
                    : "pictureContainer"
                }
              >
                {menuItem.pictures.map((picture) => (
                  <div key={picture.description}>
                    <Image
                      src={picture.url}
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
