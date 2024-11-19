import React, { Dispatch, ReactNode, SetStateAction, useRef } from "react";
import { TrashIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { UseClickOutside } from "src/hooks/use-click-outside";
import ButtonForm from "src/components/form/form-fields/button/button-form.component";

export type TModalProps = {
  children: ReactNode;
  closeModal: Dispatch<SetStateAction<string>>;
  modalHeaderTitle?: string;
  isCancelModal?: boolean;
};

const Modal = ({
  children,
  closeModal,
  modalHeaderTitle,
  isCancelModal,
}: TModalProps) => {
  const modalRef = useRef(null);

  const handleCloseModal = () => {
    closeModal("");
  };

  UseClickOutside({ ref: modalRef, callBack: handleCloseModal });
  return (
    <div className="modal-container">
      <div>
        <div
          ref={modalRef}
          className={`${
            isCancelModal && "cancel-modal-container"
          } modal-content-container`}
        >
          <div className="modal-header-container">
            <h3>{modalHeaderTitle}</h3>
            <ButtonForm hasIconButton={true} onClick={handleCloseModal}>
              <XMarkIcon />
            </ButtonForm>
            {isCancelModal && (
              <div className="trashIcon-modal-container">
                <TrashIcon />
              </div>
            )}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
