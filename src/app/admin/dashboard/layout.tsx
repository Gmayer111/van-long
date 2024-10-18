import React from "react";
import DashboardSidebar from "src/components/dashboard/dashboard-sidebar/dashboard-sidebar.component";

type TDashboardLayout = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: TDashboardLayout) => {
  return (
    <div className="dashboard-layout">
      <DashboardSidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
