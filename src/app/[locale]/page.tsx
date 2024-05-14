"use client";
import { merriweather } from "src/utils/font";

import CarouselComponent from "src/components/carousel/carousel.component";
import { VanLongLogo } from "public/assets/logos/van-long";
import { useEffect, useState } from "react";
import ModalComponent from "src/components/modal/modal.component";
import { useTranslations } from "next-intl";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const t = useTranslations("HomePage");

  useEffect(() => {
    if (typeof window !== "undefined" && window.sessionStorage.length === 0) {
      sessionStorage.setItem("visited", "true");
    }

    if (
      typeof window !== "undefined" &&
      !openModal &&
      sessionStorage.getItem("visited") === "true"
    ) {
      setOpenModal(true);
      sessionStorage.setItem("visited", "false");
    }
  }, []);

  const handleCLoseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className={`homePageContainer ${openModal ? "modalIsOpen" : ""}`}>
        <section
          id="restaurant-section"
          className="topSectionHomePageContainer"
        >
          <div>
            <VanLongLogo />
          </div>
          <div>
            <p className={merriweather.className}>{t("mainParagraph")}</p>
          </div>
        </section>
        <section className="bottomSectionHomePageContainer">
          <CarouselComponent />
        </section>
      </div>
      <ModalComponent isOpen={openModal} toggle={handleCLoseModal} />
    </>
  );
}
