import Link from "next/link";
import React from "react";

export type TTabProps = {
  tabItems: TTabItem[];
};

type TTabItem = {
  content: string;
  path: string;
};

const Tab = ({ tabItems }: TTabProps) => {
  return (
    <ul className="tab-container" aria-label="tabitems">
      {tabItems.map((content, index) => (
        <li className="tab-list-constainer" key={`${content}-${index}`}>
          <Link href={content.path}>{content.content}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Tab;
