"use client";
import React, { useEffect, useState } from "react";
import { TTableGeneric } from "src/components/table/table.component";
import { TFields } from "../../form/form";
import TableDashboard from "../table-dashboard.component";
import { useToast } from "src/app/providers/toast.provider";
import {
  createExtra,
  deleteExtra,
  updateExtra,
} from "src/app/actions/extras/extras.actions";

type TExtra = {
  id: number;
  labelFR: string;
  labelEN: string;
  dishServiceId?: number;
  updatedAt?: Date;
  createdAt?: Date;
};

export type TTableData = TTableGeneric<
  TExtra & {
    actions: string;
  }
>;

export type TExtrasDashboardProps = {
  extras: TExtra[] | undefined;
  dishServiceId: number | undefined;
  dishServiceTitle: string;
};

const ExtrasDashboard = ({
  dishServiceTitle,
  extras,
  dishServiceId,
}: TExtrasDashboardProps) => {
  const [selectedExtra, setSelectedExtra] = useState<TExtra | undefined>(
    undefined
  );
  const [modalActionForm, setModalActionForm] = useState("");
  const { showToast } = useToast();

  useEffect(() => {
    if (modalActionForm === "createModal") {
      setSelectedExtra(undefined);
    }
  }, [modalActionForm]);

  if (!extras) return <div>Chargement des extras ...</div>;

  const fields: TFields[] = [
    {
      columnSide: "left",
      items: [
        {
          fieldElement: "input",
          inputType: "text",
          placeholder: "* Servis avec du riz nature",
          defaultValue: selectedExtra && selectedExtra.labelFR,
          label: "Extra en FR",
          name: "labelFR",
        },
      ],
    },
    {
      columnSide: "right",
      items: [
        {
          fieldElement: "input",
          inputType: "text",
          placeholder: "* Served w/ Jasmine rice",
          defaultValue: selectedExtra && selectedExtra.labelEN,
          label: "Extra en EN",
          name: "labelEN",
        },
      ],
    },
  ];

  const handleSubmitExtra = async (formData: FormData) => {
    if (modalActionForm === "createModal" && dishServiceId) {
      const result = await createExtra(
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
    if (modalActionForm === "editModal" && selectedExtra) {
      const result = await updateExtra(
        selectedExtra.id,
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

  const handleDeleteExtra = async () => {
    if (selectedExtra) {
      const result = await deleteExtra(selectedExtra?.id, dishServiceTitle);
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
      title={dishServiceTitle}
      data={extras as Array<TTableData>}
      fields={fields}
      columns={[
        {
          key: "labelFR",
          header: "Extra en FR",
        },
        {
          key: "labelEN",
          header: "Extra en EN",
        },
        {
          key: "actions",
          header: "Actions",
        },
      ]}
      modalActionForm={modalActionForm}
      setModalActionForm={setModalActionForm}
      handleDeleteModalAction={handleDeleteExtra}
      handleCreatEditModalFormAction={handleSubmitExtra}
      selectedItem={setSelectedExtra}
    />
  );
};

export default ExtrasDashboard;
