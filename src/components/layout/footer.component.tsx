import React from "react";
import { merriweather } from "src/utils/font";

const FooterComponent = () => {
  return (
    <footer className={`${merriweather.className} footerContainer`}>
      <div>
        <div>
          <div>
            <span>RESTAURANT VAN LONG</span>
            <span>Cuisine Vietnamienne traditionnelle</span>
          </div>
          <div>
            <span>9 rue du Champ de l'Aloutette</span>
            <span>75013 Paris</span>
            <span>+33 1 43 36 05 16</span>
          </div>
        </div>
        <div>
          <span>HORAIRES D'OUVERTURE</span>
          <table>
            <thead>
              <tr>
                <td></td>
                <th>Midi</th>
                <th>Soir</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Lundi</th>
                <td>11:30 - 14:30</td>
                <td>19:00 - 21:30</td>
              </tr>
              <tr>
                <th>Mardi</th>
                <td>11:30 - 14:30</td>
                <td>19:00 - 21:30</td>
              </tr>
              <tr>
                <th>Mercredi</th>
                <td>11:30 - 14:30</td>
                <td>19:00 - 21:30</td>
              </tr>
              <tr>
                <th>Jeudi</th>
                <td>11:30 - 14:30</td>
                <td>19:00 - 21:30</td>
              </tr>
              <tr>
                <th>Vendredi</th>
                <td>11:30 - 14:30</td>
                <td>19:00 - 21:30</td>
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
      </div>
      <div>
        <span>Créé par Restaurant Van Long</span>
      </div>
    </footer>
  );
};

export default FooterComponent;
