import {
  ArrowRightEndOnRectangleIcon,
  FaceSmileIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import React, { ReactNode } from "react";
import DashboardSidenav, {
  TMenuItems,
} from "src/components/dashboard/dashboard-sidenav/dashboard-sidenav.component";
import { getAllDishServices } from "src/app/actions/dishs-service/dish-services.actions";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const dishServices = await getAllDishServices();

  if (!dishServices) return <div> ...</div>;

  const sidenavItems: TMenuItems[] = [
    {
      menuItems: [
        {
          content: "Restaurant",
          path: `/fr/carte`,
          icon: <ArrowRightEndOnRectangleIcon />,
        },
      ],
    },
    {
      menuItems: dishServices.map((dishService, index) => {
        let alternateIcon = index % 2;
        return {
          content: dishService.titleFR,
          path: `/admin/dashboard/${dishService.slug}/dishs`,
          icon: alternateIcon === 0 ? <FaceSmileIcon /> : <HeartIcon />,
        };
      }),
    },
  ];

  return (
    <div className="dashboard-layout">
      <DashboardSidenav sidenavItems={sidenavItems} />
      {children}
    </div>
  );
};

export default DashboardLayout;
