"use client";
import React from "react";
import TableRoot from "../table/table-root.component";
import TableHeader from "../table/table-header.component";
import ButtonForm from "../form/form-fields/button/button-form.component";
import Table, { TTableProps } from "../table/table.component";

export type TTableDashboardProps = {
  dashboardTitle?: string;
  selectedItem: (value: any) => void;
  handleAction: (value: string) => void;
};

const TableDashboard = <T, K extends keyof T>({
  data,
  columns,
  dashboardTitle,
  selectedItem,
  handleAction,
}: TTableProps<T, K> & TTableDashboardProps) => {
  return (
    <div>
      <h1>{dashboardTitle}</h1>
      <TableRoot>
        <TableHeader>
          <ButtonForm type="button" onClick={() => handleAction("openModal")}>
            Ajouter
          </ButtonForm>
        </TableHeader>
        <Table
          selectedItem={selectedItem}
          columns={columns}
          data={data}
          handleAction={handleAction}
        />
      </TableRoot>
    </div>
  );
};

export default TableDashboard;
