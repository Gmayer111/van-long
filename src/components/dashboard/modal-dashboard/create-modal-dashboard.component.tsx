import React from "react";
import Modal, { TModalProps } from "./modal.component";
import FormRoot from "src/components/form/form-root.component";
import FormItems from "src/components/form/form-items.component";
import ButtonForm from "src/components/form/form-fields/button/button-form.component";
import { TFields } from "src/components/form/form";

export type TCreateModalProps = Pick<
  TModalProps,
  "closeModal" | "modalHeaderTitle"
> & {
  modalFields: TFields[];
  displayModal: boolean;
  isEditModal?: boolean;
  handleSubmit: () => void;
};

const CreateModalDashboard = ({
  modalFields,
  displayModal,
  closeModal,
  modalHeaderTitle,
  isEditModal,
  handleSubmit,
}: TCreateModalProps) => {
  if (!displayModal) return null;

  return (
    <Modal closeModal={closeModal} modalHeaderTitle={modalHeaderTitle}>
      <FormRoot onSubmit={handleSubmit} isModalForm={true}>
        <FormItems fieldItems={modalFields} />
        <div className="buttons-action-modal-container">
          <ButtonForm
            type={"submit"}
            children={isEditModal ? "Modifier" : "Ajouter"}
          />
          <ButtonForm
            type={"button"}
            children="Annuler"
            onClick={closeModal}
            colorButton="alert"
          />
        </div>
      </FormRoot>
    </Modal>
  );
};

export default CreateModalDashboard;
