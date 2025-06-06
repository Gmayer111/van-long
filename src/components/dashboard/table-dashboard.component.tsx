"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import TableRoot from "../table/table-root.component";
import TableHeader from "../table/table-header.component";
import ButtonForm from "../form/form-fields/button/button-form.component";
import Table, { TTableProps } from "../table/table.component";
import CreateModalDashboard from "./modal-dashboard/create-modal-dashboard.component";
import CancelModalDashboard from "./modal-dashboard/cancel-modal-dashboard.component";
import { TFields } from "../form/form";
import DropdownButton from "../form/form-fields/dropdown-button/dropdown-button.component";
import { useDishServiceTitle } from "src/app/providers/dish-service-title.provider";
import { useParams } from "next/navigation";

export type TTableDashboardProps = {
  title: string;
  fields: TFields[];
  selectedItem: (value: any) => void;
  handleCreatEditModalFormAction: (formData: FormData) => void;
  handleDeleteModalAction: () => void;
  setModalActionForm: Dispatch<SetStateAction<string>>;
  modalActionForm: string;
};

const TableDashboard = <T, K extends keyof T>({
  data,
  columns,
  fields,
  title,
  selectedItem,
  handleCreatEditModalFormAction,
  handleDeleteModalAction,
  setModalActionForm,
  modalActionForm,
}: Omit<TTableProps<T, K>, "handleAction" | "selectedItem"> &
  TTableDashboardProps) => {
  const { items } = useParams<{ items: string }>();
  const [displayModal, setDisplayModal] = useState("");
  const [isCreateEditModal, setIsCreateEditModal] = useState("");
  const [isDeleteModal, setIsDeleteModal] = useState("");
  const { getTitle } = useDishServiceTitle();

  useEffect(() => {
    if (getTitle) {
      getTitle(title);
    }
  }, [title]);

  useEffect(() => {
    if (displayModal === "createModal" || displayModal === "editModal") {
      setIsCreateEditModal(displayModal);
      setModalActionForm(displayModal);
      setDisplayModal("");
    }

    if (displayModal === "deleteModal") {
      setIsDeleteModal(displayModal);
      setModalActionForm(displayModal);
      setDisplayModal("");
    }
  }, [displayModal]);

  useEffect(() => {
    if (modalActionForm === "") {
      setIsCreateEditModal("");
      setIsDeleteModal("");
    }
  }, [modalActionForm]);

  const dataRows = data.map((value) => ({
    ...value,
    actions: (
      <DropdownButton
        listItems={[
          {
            content: "Modifier",
            onClickAction: () => setDisplayModal("editModal"),
          },
          {
            content: "Supprimer",
            onClickAction: () => setDisplayModal("deleteModal"),
          },
        ]}
        type="button"
        hasIconButton={true}
      />
    ),
  }));

  return (
    <div>
      <TableRoot>
        <TableHeader>
          <ButtonForm
            type="button"
            onClick={() => setDisplayModal("createModal")}
          >
            Ajouter
          </ButtonForm>
        </TableHeader>

        <Table
          selectedItem={selectedItem}
          columns={columns}
          data={dataRows}
          handleAction={() => setDisplayModal("editModal")}
        />
      </TableRoot>
      <CreateModalDashboard
        modalFields={fields}
        isCreateEditModal={isCreateEditModal}
        isCloseModal={setIsCreateEditModal}
        handleCreateEditAction={handleCreatEditModalFormAction}
        modalHeaderTitle={
          isCreateEditModal === "createModal"
            ? `Ajouter ${items} dans les ${title}`
            : `Modifier ${items} dans les ${title}`
        }
      />
      <CancelModalDashboard
        isCloseModal={setIsDeleteModal}
        isDeleteModal={isDeleteModal}
        handleDeleteItem={handleDeleteModalAction}
      />
    </div>
  );
};

export default TableDashboard;
