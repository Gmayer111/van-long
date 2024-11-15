import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import React from "react";
import DashboardSidebar, {
  TSidebarItems,
} from "src/components/dashboard/dashboard-sidebar/dashboard-sidebar.component";

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
  ];
  return (
    <div className="dashboard-layout">
      <DashboardSidebar sidebarItems={sidebarItems} />
      {children}
    </div>
  );
};

export default DashboardLayout;
