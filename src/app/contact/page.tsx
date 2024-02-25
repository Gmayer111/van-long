import Image from "next/image";
import { VanLongLogo } from "public/assets/logos/van-long";
import React from "react";
import GoogleMapComponent from "src/components/map/google-map.component";
import MapPicture from "public/assets/images/map.png";
import { merriweather } from "src/utils/font";
import Link from "next/link";
import { MapPinIcon } from "public/assets/icons/map-pin-icon";
import { CalendarIcon } from "public/assets/icons/calendar-icon";

const ContactPage = () => {
  return (
    <div className={`${merriweather.className} contactPageContainer`}>
      <section>
        <div>
          <h2>
            INFOS <br /> DU RESTAURANT
          </h2>
        </div>
        <div>
          <div>
            <MapPinIcon />
          </div>
          <div>
            <span>Restaurant Van Long</span>
            <span>9 rue du Champ de l'Aloutette</span>
            <span>75013 Paris</span>
            <span>+33 1 43 36 05 16</span>
          </div>
        </div>
        <div>
          <div>
            <CalendarIcon />
          </div>
          <div>
            <span>Horaires</span>
            <span>Du lundi au vendredi :</span>
            <span>Le midi de 11h30 à 14h30 Le soir de 19h à 21h</span>
            <span>Le samedi et dimanche : Fermé</span>
            {/* <span>Fermé</span> */}
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
          Itinéraire
        </Link>
      </section>
    </div>
  );
};

export default ContactPage;
