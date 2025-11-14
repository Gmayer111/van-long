"use client";
import React, { useEffect, useState } from "react";
import { TTableGeneric } from "src/components/table/table.component";
import { TFields } from "../../form/form";
import TableDashboard from "../table-dashboard.component";
import {
  createPicture,
  deletePicture,
  updatePicture,
} from "src/app/actions/pictures/pictures.actions";
import { useToast } from "src/app/providers/toast.provider";

type TPicture = {
  id: number;
  pictureUrl: string;
  descriptionFR: string;
  descriptionEN: string;
  dishServiceId?: number | null;
  updatedAt?: Date;
  createdAt?: Date;
};

export type TTableData = TTableGeneric<
  TPicture & {
    actions: string;
  }
>;

export type TPicturesDashboardProps = {
  pictures: TPicture[] | undefined;
  dishServiceId: number | undefined;
  dishServiceTitle: string;
};

const PicturesDashboard = ({
  dishServiceTitle,
  pictures,
  dishServiceId,
}: TPicturesDashboardProps) => {
  const [selectedPicture, setSelectedPicture] = useState<TPicture | undefined>(
    undefined
  );
  const [modalActionForm, setModalActionForm] = useState("");
  const { showToast } = useToast();

  useEffect(() => {
    if (modalActionForm === "createModal") {
      setSelectedPicture(undefined);
    }
  }, [modalActionForm]);

  const fields: TFields[] = [
    {
      columnSide: "left",
      items: [
        {
          fieldElement: "input",
          inputType: "file",
          placeholder: "/chemin/vers/image",
          defaultValue: selectedPicture && selectedPicture.pictureUrl,
          label: "Url de l'image",
          name: "pictureUrl",
        },
      ],
    },
    {
      columnSide: "right",
      items: [
        {
          fieldElement: "input",
          inputType: "text",
          placeholder: "Rouleau de printemps",
          defaultValue: selectedPicture && selectedPicture.descriptionFR,
          label: "Description de l'image",
          name: "descriptionFR",
        },
        {
          fieldElement: "input",
          inputType: "text",
          placeholder: "Rouleau de printemps",
          defaultValue: selectedPicture && selectedPicture.descriptionEN,
          label: "Description de l'image",
          name: "descriptionEN",
        },
      ],
    },
  ];

  const handleSubmitAuthor = async (formData: FormData) => {
    if (modalActionForm === "createModal" && dishServiceId) {
      const result = await createPicture(
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
    if (modalActionForm === "editModal" && selectedPicture) {
      const result = await updatePicture(
        selectedPicture?.pictureUrl,
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
    if (selectedPicture) {
      const result = await deletePicture(
        selectedPicture?.id,
        selectedPicture.pictureUrl
      );
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
      data={pictures as Array<TTableData>}
      fields={fields}
      columns={[
        {
          key: "pictureUrl",
          header: "URL de l'image",
        },
        {
          key: "descriptionEN",
          header: "Description de l'image en EN",
        },
        {
          key: "descriptionFR",
          header: "Description de l'image en FR",
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
      selectedItem={setSelectedPicture}
    />
  );
};

export default PicturesDashboard;
