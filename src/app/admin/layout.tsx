import React from "react";
import "assets/sass/core.scss";
import { Inter } from "next/font/google";
import { DishServiceTitleProvider } from "../providers/dish-service-title.provider";
import { ToastProvider } from "../providers/toast.provider";

const inter = Inter({ subsets: ["latin"] });

export type TAdminLayout = {
  children: React.ReactNode;
};

const AdminLayout = ({ children }: TAdminLayout) => {
  return (
    <DishServiceTitleProvider>
      <ToastProvider>
        <div className={`admin-layout-container ${inter.className}`}>
          {children}
        </div>
      </ToastProvider>
    </DishServiceTitleProvider>
  );
};

export default AdminLayout;
