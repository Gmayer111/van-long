import React, { Dispatch, SetStateAction } from "react";
import Modal, { TModalProps } from "./modal.component";
import ButtonForm from "src/components/form/form-fields/button/button-form.component";

export type TCreateModalProps = Pick<TModalProps, "modalHeaderTitle"> & {
  handleDeleteItem: VoidFunction;
  isDeleteModal: string;
  isCloseModal: Dispatch<SetStateAction<string>>;
};

const CancelModalDashboard = ({
  isCloseModal,
  modalHeaderTitle,
  isDeleteModal,
  handleDeleteItem,
}: TCreateModalProps) => {
  if (!isDeleteModal) return null;

  return (
    isDeleteModal && (
      <Modal
        isCancelModal={true}
        closeModal={isCloseModal}
        modalHeaderTitle={modalHeaderTitle}
      >
        <div className="cancel-content-modal-container">
          <p>Etes-vous sur de vouloir supprimer cet article ?</p>
          <div>
            <ButtonForm colorButton="neutral" onClick={() => isCloseModal("")}>
              Non, merci
            </ButtonForm>
            <ButtonForm colorButton="alert" onClick={handleDeleteItem}>
              Oui, je suis sur
            </ButtonForm>
          </div>
        </div>
      </Modal>
    )
  );
};

export default CancelModalDashboard;
