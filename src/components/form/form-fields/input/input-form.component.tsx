import React, { forwardRef, useId } from "react";
import { TFieldItem, TInputForm } from "../../form";
import LabelForm from "../../common/label-form.component";
import ErrorMessage from "../../common/error-message.component";

type InputFormRef = HTMLInputElement;

const InputForm = forwardRef<
  InputFormRef,
  Omit<TFieldItem, "fieldElement"> & TInputForm
>(
  (
    {
      name,
      placeholder,
      disabled = false,
      inputType,
      label,
      errorMessage,
      ...otherProps
    },
    ref
  ) => {
    const id = useId();

    return (
      <div className="input-container">
        <LabelForm label={label} id={id} />
        <input
          id={id}
          name={name}
          type={inputType}
          placeholder={placeholder}
          disabled={disabled}
          ref={ref}
          className="input-form"
          aria-label={label}
          {...otherProps}
        />
        <ErrorMessage errorMessage={errorMessage} />
      </div>
    );
  }
);

export default InputForm;
