import React from "react";
import InputForm from "./form-fields/input/input-form.component";
import TextareaForm from "./form-fields/textarea/textarea-form.component";
import SelectForm from "./form-fields/select/select-form.component";
import { TFields } from "./form";

export type TFormItemsProps = {
  fieldItems: TFields[];
};

const FormItems = ({ fieldItems }: TFormItemsProps) => {
  const fieldPosition = (fieldItem: TFields) => {
    return fieldItem.items.map((item) => {
      switch (item.fieldElement) {
        case "input":
          return (
            <InputForm
              key={item.name}
              inputType={item.inputType}
              placeholder={item.placeholder}
              label={item.label}
              name={item.name}
            />
          );
        case "textarea":
          return (
            <TextareaForm
              key={item.name}
              placeholder={item.placeholder}
              label={item.label}
              name={item.name}
            />
          );
        case "select":
          return (
            <SelectForm
              key={item.name}
              multiple={item.multiple}
              selectOptions={item.selectOptions}
              placeholder={item.placeholder}
              label={item.label}
              name={item.name}
            />
          );
        default:
          break;
      }
    });
  };

  return (
    <div className="form-items-container">
      {fieldItems.map((fieldItem) => {
        return fieldItem.columnSide === "left" ? (
          <div key={fieldItem.columnSide}>{fieldPosition(fieldItem)}</div>
        ) : (
          <div key={fieldItem.columnSide}>{fieldPosition(fieldItem)}</div>
        );
      })}
    </div>
  );
};

export default FormItems;
