import React from "react";
import "../../../assets/sass/core.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export type TAdminLayout = {
  children: React.ReactNode;
};

const AdminLayout = ({ children }: TAdminLayout) => {
  return (
    <div className={`admin-layout-container ${inter.className}`}>
      {children}
    </div>
  );
};

export default AdminLayout;
