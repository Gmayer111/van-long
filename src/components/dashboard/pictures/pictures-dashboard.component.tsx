"use client";
import React, { useEffect, useState } from "react";
import { TTableGeneric } from "src/components/table/table.component";
import { TFields } from "../../form/form";
import TableDashboard from "../table-dashboard.component";
import { useToast } from "src/app/admin/providers/toast.provider";
import {
  createPicture,
  deletePicture,
  updatePicture,
} from "src/app/admin/actions/pictures/pictures.actions";

type TPicture = {
  id: number;
  imageUrl: string;
  description: string;
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
  dishServiceTitle: string | undefined;
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

  if (!pictures) return <div>Chargement...</div>;

  const fields: TFields[] = [
    {
      columnSide: "left",
      items: [
        {
          fieldElement: "input",
          inputType: "text",
          placeholder: "/chemin/vers/image",
          defaultValue: selectedPicture && selectedPicture.imageUrl,
          label: "Url de l'image",
          name: "imageUrl",
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
          defaultValue: selectedPicture && selectedPicture.description,
          label: "Description de l'image",
          name: "description",
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
        selectedPicture?.imageUrl,
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
      const result = await deletePicture(selectedPicture?.id, dishServiceTitle);
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
      title={`Les ${dishServiceTitle}`}
      data={pictures as Array<TTableData>}
      fields={fields}
      columns={[
        {
          key: "imageUrl",
          header: "URL de l'image",
        },
        {
          key: "description",
          header: "Description de l'image",
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