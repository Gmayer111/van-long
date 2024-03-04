import Image from "next/image";
import React from "react";
import HeaderImg from "public/assets/images/header-img.jpg";
import { merriweather } from "src/utils/font";
import { NavComponent } from "./nav/nav.component";

const HeaderComponent = () => {
  return (
    <header>
      <div>
        <NavComponent />
        <div className={`${merriweather.className} headerImgContainer`}>
          <Image priority={true} src={HeaderImg} alt="Image de l'en-tête" />
          <div>
            <h1>RESTAURANT VAN LONG</h1>
          </div>
          <span>Cuisine vietnamienne traditionnelle</span>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
