import Image from "next/image";
import React from "react";
import HeaderImg from "public/assets/img/header-img.jpg";
import { merriweather } from "src/utils/font";

const HeaderComponent = () => {
  return (
    <header>
      <div className={`${merriweather.className} headerImgContainer`}>
        <Image src={HeaderImg} alt="Image de l'en-tête" />
        <div className="mainTitleContainer">
          <h1>RESTAURANT VAN LONG</h1>
        </div>
        <span>Cuisine vietnamienne traditionnelle</span>
      </div>
    </header>
  );
};

export default HeaderComponent;
