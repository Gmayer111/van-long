import Image from "next/image";
import React from "react";
import MapPicture from "public/assets/images/map.png";
import { merriweather } from "src/utils/font";
import Link from "next/link";
import { MapPinIcon } from "public/assets/icons/map-pin-icon";
import { CalendarIcon } from "public/assets/icons/calendar-icon";
import { useTranslations } from "next-intl";

const ContactPage = () => {
  const t = useTranslations("ContactPage");
  return (
    <div
      id="contact-section"
      className={`${merriweather.className} contactPageContainer`}
    >
      <section>
        <div>
          <h2>{t("restaurantInfos")}</h2>
        </div>
        <div>
          <div>
            <MapPinIcon />
          </div>
          <div>
            <span>{t("restaurantName")}</span>
            <span>9 rue du Champ de l'Aloutette</span>
            <span>75013 Paris</span>
            <a href="tel:+33 1 43 36 05 16">01 43 36 05 16</a>
          </div>
        </div>
        <div>
          <div>
            <CalendarIcon />
          </div>
          <div>
            <span>{t("openingHours")}</span>
            <span>{t("weekly")}</span>
            <span>{t("lunchTime")}</span>
            <span>{t("dinner")}</span>
            <span>{t("closeTime")}</span>
          </div>
        </div>
      </section>
      <section>
        <Image src={MapPicture} alt="Localisation du restaurant" />
        <Link
          href={
            "https://www.google.com/maps/dir//Van+Long,+Rue+du+Champ+de+l'Alouette,+Paris/@48.8322748,2.2636588,12z/data=!3m2!4b1!5s0x47e671943805a657:0x152f23ebdb77a836!4m9!4m8!1m0!1m5!1m1!1s0x47e6719447bb806d:0xfc445b45169f90be!2m2!1d2.3460592!2d48.8323042!3e3?entry=ttu"
          }
          target="_blank"
        >
          {t("itinerary")}
        </Link>
      </section>
    </div>
  );
};

export default ContactPage;
