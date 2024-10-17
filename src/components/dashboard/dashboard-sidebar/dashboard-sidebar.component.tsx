"use client";
import Link from "next/link";
import React, { ReactNode } from "react";

type TSidebarItems = {
  path: string;
  icon: ReactNode;
  content: string;
};

const sidebarItems: Array<TSidebarItems> = [];

const DashboardSidebar = () => {
  return (
    <aside className="dashboard-sidebar-container">
      <div>
        <ul>
          {sidebarItems.map((sidebarItem, index) => (
            <li key={`${sidebarItem}-${index}`}>
              <Link href={sidebarItem.path}>
                {sidebarItem.icon}
                <span>{sidebarItem.content}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
