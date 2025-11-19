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
import { createDishServicesOnExtras } from "src/app/actions/dishs-services-on-extras/dishs-services-on-extras.actions";

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
  dishServiceExtras: TExtra[] | undefined;
  extras: TExtra[] | undefined;
  dishServiceId: number | undefined;
  dishServiceTitle: string;
};

const ExtrasDashboard = ({
  dishServiceTitle,
  dishServiceExtras,
  dishServiceId,
  extras,
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

  const fields: TFields[] = [
    {
      columnSide: "left",
      items: [
        {
          fieldElement: "input",
          inputType: "text",
          placeholder: "* Servis avec du riz nature",
          defaultValue: selectedExtra && selectedExtra.labelFR,
          label: "Ajouter un nouveau extra en FR",
          name: "labelFR",
        },
        {
          fieldElement: "select",
          name: "extraId",
          label: "Sélectionner un extra existant",
          selectOptions: extras?.map((extra) => ({
            content: extra.labelFR,
            value: extra.id,
          })),
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
          label: "Ajouter un nouveau extra en EN",
          name: "labelEN",
        },
      ],
    },
  ];

  const handleSubmitExtra = async (formData: FormData) => {
    const extraId = Number(formData.get("extraId"));

    if (modalActionForm === "createModal" && dishServiceId) {
      if (extraId !== 0) {
        const result = await createDishServicesOnExtras(
          dishServiceId,
          extraId,
          dishServiceTitle
        );
        if (result?.error) {
          showToast({ message: result?.error, type: "alert" });
        } else {
          showToast({ message: "Ajout existant effectué", type: "success" });
        }
      } else {
        const result = await createExtra(
          dishServiceId,
          formData,
          dishServiceTitle
        );
        if (result?.error) {
          showToast({ message: result?.error, type: "alert" });
        } else {
          showToast({ message: "Nouvel ajout effectué", type: "success" });
        }
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
      data={dishServiceExtras as Array<TTableData>}
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
