import React from "react";
import { merriweather } from "src/utils/font";

const FooterComponent = () => {
  return (
    <footer className={`${merriweather.className} footerContainer`}>
      <div className="leftFooterSide">
        <div className={`${merriweather.className} footerTitle`}>
          <div>RESTAURANT VAN LONG</div>
          <div>Cuisine Vietnamienne traditionnelle</div>
        </div>
        <div className="footerAddress">
          <div>9 rue du Champ de l'Aloutette</div>
          <div>75013 Paris</div>
        </div>
        <div className="footerPhone">
          <div>+33 1 43 36 05 16</div>
          <div>Créé par Restaurant Van Long</div>
        </div>
      </div>
      <div className="rightFooterSide">
        <div>HORAIRES D'OUVERTURE</div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Midi</th>
              <th>Soir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Lundi</th>
              <td>11:30 - 14:30</td>
              <td>19:00 - 22:00</td>
            </tr>
            <tr>
              <th>Mardi</th>
              <td>11:30 - 14:30</td>
              <td>19:00 - 22:00</td>
            </tr>
            <tr>
              <th>Mercredi</th>
              <td>11:30 - 14:30</td>
              <td>19:00 - 22:00</td>
            </tr>
            <tr>
              <th>Jeudi</th>
              <td>11:30 - 14:30</td>
              <td>19:00 - 22:00</td>
            </tr>
            <tr>
              <th>Vendredi</th>
              <td>11:30 - 14:30</td>
              <td>19:00 - 22:00</td>
            </tr>
            <tr>
              <th>Samedi</th>
              <td>Fermé</td>
              <td>Fermé</td>
            </tr>
            <tr>
              <th>Dimanche</th>
              <td>Fermé</td>
              <td>Fermé</td>
            </tr>
          </tbody>
        </table>
      </div>
    </footer>
  );
};

export default FooterComponent;
