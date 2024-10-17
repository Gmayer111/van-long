import React from "react";
import { TButtonForm } from "../../form";

const ButtonForm = React.forwardRef<HTMLButtonElement, TButtonForm>(
  (
    {
      isLoading,
      children,
      onClick,
      type,
      isDisabled,
      hasIconButton,
      colorButton,
    },
    ref
  ) => {
    return (
      <div className="button-container">
        <button
          className={`${
            hasIconButton ? "dropwdown-icon-button" : "button-form"
          } ${colorButton}`}
          onClick={onClick}
          ref={ref}
          type={type}
          disabled={isLoading || isDisabled}
        >
          {children}
        </button>
      </div>
    );
  }
);

export default ButtonForm;
