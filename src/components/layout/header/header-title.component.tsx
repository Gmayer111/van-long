import React, { useEffect, useState } from "react";

export type TMenuTitleProps = {
  headerTitle?: string;
};

const HeaderTitleComponent = ({ headerTitle }: TMenuTitleProps) => {
  const [homePage, setHomePage] = useState(true);
  useEffect(() => {
    setHomePage(false);
    if (headerTitle === "RESTAURANT VAN LONG") setHomePage(true);
  }, [headerTitle]);

  return (
    <>
      <div>
        <h1 className={homePage ? "customTitle" : ""}>{headerTitle}</h1>
      </div>
      {homePage && <span>Cuisine vietnamienne traditionnelle</span>}
    </>
  );
};

export default HeaderTitleComponent;
