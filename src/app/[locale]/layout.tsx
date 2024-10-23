import React from "react";
import "../../../assets/sass/core.scss";
import HeaderComponent from "src/components/layout/header/header.component";
import FooterComponent from "src/components/layout/footer.component";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export type TMainLayout = {
  children: React.ReactNode;
};

const MainLayout = async ({ children }: TMainLayout) => {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </NextIntlClientProvider>
  );
};

export default MainLayout;
