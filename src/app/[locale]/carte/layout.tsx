"use client";
import { PhoneIcon } from "@heroicons/react/24/solid";
import React, { ReactNode } from "react";
import { useTranslations } from "next-intl";

const LayoutMenu = ({ children }: { children: ReactNode }) => {
  const t = useTranslations("MenuPage");

  return (
    <>
      <a className="click-to-call-container" href="tel:+33 1 43 36 05 16">
        <PhoneIcon />
        <span>{t("clickToCall")}</span>
      </a>
      {children}
    </>
  );
};

export default LayoutMenu;
