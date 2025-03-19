"use client";
import Link from "next/link";
import React, { ReactNode } from "react";

export type TDashboardSidenavProps = {
  sidenavItems: Array<TMenuItems>;
};

export type TMenuItems = {
  menuItems: Array<TSidenavItems>;
};

export type TSidenavItems = {
  path: string;
  content: string;
  icon: ReactNode;
};

const DashboardSidenav = ({ sidenavItems }: TDashboardSidenavProps) => {
  return (
    <aside className="dashboard-sidebar-container">
      <div>
        {sidenavItems.map((sidenavItem) => (
          <ul>
            {sidenavItem.menuItems.map((item, index) => (
              <li key={`${item}-${index}`}>
                <Link href={item.path}>
                  {item.icon}
                  <span>{item.content}</span>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
  );
};

export default DashboardSidenav;
