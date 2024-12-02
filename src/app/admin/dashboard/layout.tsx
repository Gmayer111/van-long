"use client";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import React from "react";
import DashboardSidebar, {
  TSidebarItems,
} from "src/components/dashboard/dashboard-sidebar/dashboard-sidebar.component";
import { ToastProvider } from "../providers/toast.provider";

type TDashboardLayout = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: TDashboardLayout) => {
  const sidebarItems: Array<TSidebarItems> = [
    {
      content: "Entrées",
      path: "/admin/dashboard/starters",
      icon: <RocketLaunchIcon />,
    },
    {
      content: "Soupes",
      path: "/admin/dashboard/soup",
      icon: <RocketLaunchIcon />,
    },
  ];
  return (
    <ToastProvider>
      <div className="dashboard-layout">
        <DashboardSidebar sidebarItems={sidebarItems} />
        {children}
      </div>
    </ToastProvider>
  );
};

export default DashboardLayout;
