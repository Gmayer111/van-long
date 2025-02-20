"use client";
import React, { useEffect, useState } from "react";
import { TTableGeneric } from "src/components/table/table.component";
import { TFields } from "../../form/form";
import TableDashboard from "../table-dashboard.component";
import { TTabProps } from "src/components/tab/tab.component";
import {
  createDish,
  deleteDish,
  updateDish,
} from "src/app/actions/dishs/dishs.actions";
import { useToast } from "src/app/providers/toast.provider";

type TDish = {
  id: number;
  label: string;
  price: number;
  dishServiceId?: number;
  updatedAt?: Date;
  createdAt?: Date;
};

export type TTableData = TTableGeneric<
  TDish & {
    actions: string;
  }
>;

export type TDishsDashboardProps = {
  dishs: TDish[] | undefined;
  dishServiceId: number | undefined;
  dishServiceTitle: string | undefined;
};

const DishsDashboard = ({
  dishServiceTitle,
  dishs,
  dishServiceId,
  tabItems,
}: TDishsDashboardProps & TTabProps) => {
  const [selectedDish, setSelectedDish] = useState<TDish | undefined>(
    undefined
  );
  const [modalActionForm, setModalActionForm] = useState("");
  const { showToast } = useToast();

  useEffect(() => {
    if (modalActionForm === "createModal") {
      setSelectedDish(undefined);
    }
  }, [modalActionForm]);

  if (!dishs) return <div>Chargement...</div>;

  const fields: TFields[] = [
    {
      columnSide: "left",
      items: [
        {
          fieldElement: "input",
          inputType: "text",
          placeholder: "Rouleaux ...",
          defaultValue: selectedDish && selectedDish.label,
          label: "Nom de l'entrée",
          name: "label",
        },
      ],
    },
    {
      columnSide: "right",
      items: [
        {
          fieldElement: "input",
          inputType: "number",
          placeholder: "10€",
          defaultValue: selectedDish && selectedDish.price,
          label: "Prix de l'entrée",
          name: "price",
        },
      ],
    },
  ];

  const handleSubmitAuthor = async (formData: FormData) => {
    if (modalActionForm === "createModal" && dishServiceId) {
      const result = await createDish(
        dishServiceId,
        formData,
        dishServiceTitle
      );
      if (result?.error) {
        showToast({ message: result?.error, type: "alert" });
      } else {
        showToast({ message: "Ajout effectué", type: "success" });
      }
      setModalActionForm("");
    }
    if (modalActionForm === "editModal" && selectedDish) {
      const result = await updateDish(
        selectedDish.label,
        formData,
        dishServiceTitle
      );
      if (result?.error) {
        showToast({ message: result?.error, type: "alert" });
      } else {
        showToast({ message: "Modification effectuée", type: "success" });
      }
      setModalActionForm("");
    }
  };

  const handleDeleteAuthor = async () => {
    if (selectedDish) {
      const result = await deleteDish(selectedDish?.id, dishServiceTitle);
      if (result?.error) {
        showToast({ message: result?.error, type: "alert" });
      } else {
        showToast({ message: "Suppression effectuée", type: "success" });
      }
      setModalActionForm("");
    }
  };

  return (
    <TableDashboard
      tabItems={tabItems}
      title={`Les ${dishServiceTitle}`}
      data={dishs as Array<TTableData>}
      fields={fields}
      columns={[
        {
          key: "label",
          header: "Nom",
        },
        {
          key: "price",
          header: "Prix",
        },
        {
          key: "actions",
          header: "Actions",
        },
      ]}
      modalActionForm={modalActionForm}
      setModalActionForm={setModalActionForm}
      handleDeleteModalAction={handleDeleteAuthor}
      handleCreatEditModalFormAction={handleSubmitAuthor}
      selectedItem={setSelectedDish}
    />
  );
};

export default DishsDashboard;
