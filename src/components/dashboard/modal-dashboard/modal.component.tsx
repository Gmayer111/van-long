import React, { ReactNode, useRef } from "react";
import { TrashIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { UseClickOutside } from "src/hooks/use-click-outside";
import ButtonForm from "src/components/form/form-fields/button/button-form.component";

export type TModalProps = {
  children: ReactNode;
  closeModal: () => void;
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

  UseClickOutside({ ref: modalRef, callBack: closeModal });
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
            <ButtonForm hasIconButton={true} onClick={closeModal}>
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
