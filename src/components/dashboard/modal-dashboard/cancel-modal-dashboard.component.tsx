import React from "react";
import Modal, { TModalProps } from "./modal.component";
import ButtonForm from "src/components/form/form-fields/button/button-form.component";

export type TCreateModalProps = Pick<
  TModalProps,
  "closeModal" | "modalHeaderTitle"
> & {
  displayModal: boolean;
  handleDeleteItem: VoidFunction;
};

const CancelModalDashboard = ({
  displayModal,
  closeModal,
  modalHeaderTitle,
  handleDeleteItem,
}: TCreateModalProps) => {
  if (!displayModal) return null;

  return (
    <Modal
      isCancelModal={true}
      closeModal={closeModal}
      modalHeaderTitle={modalHeaderTitle}
    >
      <div className="cancel-content-modal-container">
        <p>Etes-vous sur de vouloir supprimer cet article ?</p>
        <div>
          <ButtonForm colorButton="neutral" onClick={closeModal}>
            Non, merci
          </ButtonForm>
          <ButtonForm colorButton="alert" onClick={handleDeleteItem}>
            Oui, je suis sur
          </ButtonForm>
        </div>
      </div>
    </Modal>
  );
};

export default CancelModalDashboard;
