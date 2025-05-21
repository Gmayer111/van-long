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
    <aside className="dashboard-sidenav-container">
      <div>
        {sidenavItems.map((sidenavItem, index) => (
          <ul key={index}>
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
