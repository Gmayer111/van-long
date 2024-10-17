import React, { forwardRef, useId } from "react";
import { TFieldItem } from "../../form";
import LabelForm from "../../common/label-form.component";
import ErrorMessage from "../../common/error-message.component";

type TextAreaFormRef = HTMLTextAreaElement;

const TextareaForm = forwardRef<
  TextAreaFormRef,
  Omit<TFieldItem, "fieldElement">
>(
  (
    { name, placeholder, disabled, label, errorMessage, ...otherProps },
    ref
  ) => {
    const id = useId();

    return (
      <div className="textarea-container">
        <LabelForm label={label} id={id} />
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          ref={ref}
          className="textarea-form"
          {...otherProps}
        />
        <ErrorMessage errorMessage={errorMessage} />
      </div>
    );
  }
);

export default TextareaForm;
