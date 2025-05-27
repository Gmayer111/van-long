import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { merriweather } from "src/utils/font";

const FooterComponent = () => {
  const t = useTranslations();
  return (
    <footer className={`${merriweather.className} footerContainer`}>
      <div>
        <div>
          <div>
            <span>{t("Common.restaurantName").toUpperCase()}</span>
            <span>{t("Common.shortRestaurantDescription")}</span>
          </div>
          <div>
            <span>9 rue du Champ de l'Aloutette</span>
            <span>75013 Paris</span>
            <a href="tel:+33 1 43 36 05 16">01 43 36 05 16</a>
          </div>
        </div>
        <div>
          <span>{t("Footer.openingHours")}</span>
          <table>
            <thead>
              <tr>
                <td></td>
                <th>{t("Footer.lunch")}</th>
                <th>{t("Footer.dinner")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{t("Footer.monday")}</th>
                <td>11:30 - 14:30</td>
                <td>19:00 - 22:00</td>
              </tr>
              <tr>
                <th>{t("Footer.tuesday")}</th>
                <td>11:30 - 14:30</td>
                <td>19:00 - 22:00</td>
              </tr>
              <tr>
                <th>{t("Footer.wednesday")}</th>
                <td>11:30 - 14:30</td>
                <td>19:00 - 22:00</td>
              </tr>
              <tr>
                <th>{t("Footer.thursday")}</th>
                <td>11:30 - 14:30</td>
                <td>19:00 - 22:00</td>
              </tr>
              <tr>
                <th>{t("Footer.friday")}</th>
                <td>11:30 - 14:30</td>
                <td>19:00 - 22:00</td>
              </tr>
              <tr>
                <th>{t("Footer.saturday")}</th>
                <td>{t("Footer.close")}</td>
                <td>{t("Footer.close")}</td>
              </tr>
              <tr>
                <th>{t("Footer.sunday")}</th>
                <td>{t("Footer.close")}</td>
                <td>{t("Footer.close")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <span>{t("Footer.webSiteCreated")}</span>
      </div>
    </footer>
  );
};

export default FooterComponent;
