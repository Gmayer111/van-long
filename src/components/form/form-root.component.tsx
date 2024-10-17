import React from "react";
import Button from "./form-fields/button/button-form.component";

export type TFormRootProps = {
  children: React.ReactNode;
  handleSubmit: () => void;
  title?: string;
  paragraph?: string;
  isLoading?: boolean;
  isModalForm?: boolean;
};

const FormRoot = ({
  children,
  title,
  paragraph,
  handleSubmit,
  isLoading = false,
  isModalForm,
}: TFormRootProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-header-container">
        <h1>{title}</h1>
        {paragraph && <p>{paragraph}</p>}
      </div>
      {children}
      {!isModalForm && (
        <div>
          <Button
            type={"submit"}
            isLoading={isLoading}
            children="Se connecter"
          />
        </div>
      )}
    </form>
  );
};

export default FormRoot;
