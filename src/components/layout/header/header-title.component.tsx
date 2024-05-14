import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { THeaderTitles } from "src/types/header";

export type TMenuTitleProps = {
  headerTitle?: THeaderTitles | string;
};

const HeaderTitleComponent = ({ headerTitle }: TMenuTitleProps) => {
  const [homePage, setHomePage] = useState(true);
  const t = useTranslations("Header.HeaderTitleComponent");
  useEffect(() => {
    setHomePage(false);
    if (
      headerTitle === "RESTAURANT VAN LONG" ||
      headerTitle === "VAN LONG RESTAURANT"
    )
      setHomePage(true);
  }, [headerTitle]);

  return (
    <>
      <div>
        <h1 className={homePage ? "customTitle" : ""}>{headerTitle}</h1>
      </div>
      {homePage && <span>{t("responsiveTextLogo")}</span>}
    </>
  );
};

export default HeaderTitleComponent;
