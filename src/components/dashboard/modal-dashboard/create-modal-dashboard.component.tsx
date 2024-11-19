import React, { Dispatch, SetStateAction } from "react";
import Modal, { TModalProps } from "./modal.component";
import FormRoot from "src/components/form/form-root.component";
import FormItems from "src/components/form/form-items.component";
import ButtonForm from "src/components/form/form-fields/button/button-form.component";
import { TFields } from "src/components/form/form";

export type TCreateModalProps = Pick<
  TModalProps,
  "modalHeaderTitle"
> & {
  modalFields: TFields[];
  isCreateEditModal: string;
  handleCreateEditAction: (formData: FormData) => void;
  isCloseModal: Dispatch<SetStateAction<string>>
};

const CreateModalDashboard = ({
  modalFields,
  isCloseModal,
  modalHeaderTitle,
  handleCreateEditAction,
  isCreateEditModal,
}: TCreateModalProps) => {
  if (!isCreateEditModal) return null;

  return (
    isCreateEditModal && (
      <Modal closeModal={isCloseModal} modalHeaderTitle={modalHeaderTitle}>
        <FormRoot handleAction={handleCreateEditAction} isModalForm={true}>
          <FormItems fieldItems={modalFields} />
          <div className="buttons-action-modal-container">
            <ButtonForm
              type={"submit"}
              children={
                isCreateEditModal === "editModal" ? "Modifier" : "Ajouter"
              }
            />
            <ButtonForm
              type={"button"}
              children="Annuler"
              onClick={() => isCloseModal("")}
              colorButton="alert"
            />
          </div>
        </FormRoot>
      </Modal>
    )
  );
};

export default CreateModalDashboard;
