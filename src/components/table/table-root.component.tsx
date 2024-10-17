import React, { ReactNode } from "react";

type TTableRootProps = {
  children: ReactNode;
};

const TableRoot = ({ children }: TTableRootProps) => {
  return <div className="table-root-container">{children}</div>;
};

export default TableRoot;
