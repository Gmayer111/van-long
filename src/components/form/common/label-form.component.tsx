import React, { forwardRef } from "react";

export type TLabelProps = {
  label?: string;
  id?: string;
};

export type LabelRef = HTMLLabelElement;

const LabelForm = forwardRef<LabelRef, TLabelProps>(({ label, id }, ref) => {
  if (!label) return null;

  return (
    <div>
      <label ref={ref} className="label-form" htmlFor={id}>
        {label}
      </label>
    </div>
  );
});

export default LabelForm;
