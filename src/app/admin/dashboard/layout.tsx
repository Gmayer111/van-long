import { FaceSmileIcon, HeartIcon } from "@heroicons/react/24/solid";
import React from "react";
import DashboardSidebar from "src/components/dashboard/dashboard-sidebar/dashboard-sidebar.component";
import { getAllDishServices } from "src/app/actions/dishs-service/dish-services.actions";
import { ToastProvider } from "../../providers/toast.provider";

type TDashboardLayout = {
  children: React.ReactNode;
};

const DashboardLayout = async ({ children }: TDashboardLayout) => {
  const dishServices = await getAllDishServices();

  if (!dishServices) return <div>Chargement...</div>;

  const sidebarItems = dishServices.map((dishService, index) => {
    let alternateIcon = index % 2;
    return {
      content: dishService.title,
      path: `/admin/dashboard/${dishService.title}/dishs`,
      icon: alternateIcon === 0 ? <FaceSmileIcon /> : <HeartIcon />,
    };
  });
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
