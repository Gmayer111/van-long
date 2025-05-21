"use client";
import React, { ReactNode } from "react";
import { useParams } from "next/navigation";
import { useDishServiceTitle } from "src/app/providers/dish-service-title.provider";
import Tab from "src/components/tab/tab.component";

const layout = ({ children }: { children: ReactNode }) => {
  const params = useParams<{ slug: string }>();
  const { dishServiceTitle } = useDishServiceTitle();
  const slugParam = params.slug;

  const tabItems = [
    {
      content: "dishs",
      path: `/admin/dashboard/${slugParam}/dishs`,
    },
    {
      content: "pictures",
      path: `/admin/dashboard/${slugParam}/pictures`,
    },
    {
      content: "extras",
      path: `/admin/dashboard/${slugParam}/extras`,
    },
  ];

  return (
    <div className="table-dashboard-container">
      <h1>Les {dishServiceTitle}</h1>
      <Tab tabItems={tabItems} />
      {children}
    </div>
  );
};

export default layout;
