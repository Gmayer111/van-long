import { BellAlertIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import ButtonForm from "../form/form-fields/button/button-form.component";
import { useToast } from "src/app/[locale]/admin/providers/toast.provider";

export type TToastProps = {
  type: "success" | "alert" | undefined;
  message: string;
};

const ICONSTYPE = {
  success: {
    icon: <BellAlertIcon />,
    colorIconClassName: "success-icon",
  },
  alert: {
    icon: <BellAlertIcon />,
    colorIconClassName: "danger-icon",
  },
};

export const Toast = ({ message, type }: TToastProps) => {
  const { hiddenToast } = useToast();

  setTimeout(() => {
    hiddenToast();
  }, 5000);

  return (
    <div className="toast-container" role="alert">
      <div
        className={`toast-icon-container ${type && ICONSTYPE[type].colorIconClassName}`}
      >
        {type && ICONSTYPE[type].icon}
      </div>
      <div className="toast-content-container">{message}</div>
      <div className="toast-btn-container" aria-label="close">
        <ButtonForm hasIconButton={true} onClick={() => hiddenToast()}>
          <XMarkIcon />
        </ButtonForm>
      </div>
    </div>
  );
};

export default Toast;
