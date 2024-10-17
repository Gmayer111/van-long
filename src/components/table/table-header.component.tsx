import React from "react";

type TTableHeaderProps = {
  children: React.ReactNode;
};

const TableHeader = ({ children }: TTableHeaderProps) => {
  return <div className="table-header-container">{children}</div>;
};

export default TableHeader;
