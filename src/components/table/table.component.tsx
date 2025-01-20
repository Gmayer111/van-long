"use client";
import React, { ReactNode } from "react";
import { TableCells } from "./table-cells.component";

export type TTableProps<T, K extends keyof T> = {
  columns: Array<TColumnDefinitionType<T, K>>;
  data: Array<T>;
  selectedItem: (value: T) => void;
  handleAction: (value: any) => void;
};

export type TColumnDefinitionType<T, K extends keyof T> = {
  key: K;
  header?: string | number | ReactNode | [];
};

export type TTableGeneric<T> = {
  [key in keyof T]:
    | {
        data: string | number | boolean | undefined | null;
      }
    | ReactNode
    | object;
};

const Table = <T, K extends keyof T>({
  data,
  columns,
  selectedItem,
  handleAction,
}: TTableProps<T, K>) => {
  const handleClickTableRow = (row: T) => {
    selectedItem(row);
    handleAction("editModal");
  };

  const handleStopClickEventTableRow = (
    e: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>,
    column: any,
    row: T
  ) => {
    if (column === "actions") {
      e.stopPropagation();
      selectedItem(row);
    }
  };

  return (
    <section>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={`column-${index}`}>{column.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((row, index) => (
              <tr onClick={() => handleClickTableRow(row)} key={`row-${index}`}>
                {columns.map((column, index2) => {
                  const rowContent = row[column.key];

                  return (
                    <td
                      key={`cell-${index2}`}
                      onClick={(e) =>
                        handleStopClickEventTableRow(e, column.key, row)
                      }
                    >
                      <TableCells rowContent={rowContent} />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
