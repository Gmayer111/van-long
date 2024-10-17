import React, { forwardRef, useId } from "react";
import { TFieldItem, TSelectForm } from "../../form";
import LabelForm from "../../common/label-form.component";
import ErrorMessage from "../../common/error-message.component";

type SelectFormRef = HTMLSelectElement;

const SelectForm = forwardRef<
  SelectFormRef,
  Omit<TFieldItem, "fieldElement"> & TSelectForm
>(
  (
    {
      name,
      disabled = false,
      label,
      errorMessage,
      selectOptions,
      multiple,
      ...otherProps
    },
    ref
  ) => {
    const id = useId();

    return (
      <div className="select-container">
        <LabelForm label={label} id={id} />
        <select
          multiple={multiple}
          id={id}
          name={name}
          disabled={disabled}
          ref={ref}
          className="select-form"
          {...otherProps}
        >
          <option value="">Sélectionnez une option</option>
          {selectOptions?.map((selectOption) => (
            <option key={`${selectOption.value}`} value={selectOption.value}>
              {selectOption.content}
            </option>
          ))}
        </select>
        <ErrorMessage errorMessage={errorMessage} />
      </div>
    );
  }
);

export default SelectForm;
