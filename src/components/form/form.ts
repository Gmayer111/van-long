import React from "react";

export type TFields = {
  items: (TFieldItem & TInputForm & TSelectForm)[];
  columnSide?: "left" | "right";
};

export type TFieldItem = {
  fieldElement: TFieldElement;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  errorMessage?: string;
};

export type TFieldElement = "input" | "select" | "multi-select" | "textarea";

export type TInputForm = {
  inputType?: TFieldType;
  defaultValue?: string | number;
};

export type TFieldType =
  | "text"
  | "email"
  | "password"
  | "checkbox"
  | "date"
  | "radio"
  | "tel"
  | "file"
  | "number";

export type TSelectForm = {
  selectOptions?: selectOption[];
  multiple?: boolean;
};

type selectOption = {
  value: number | string;
  content: string;
};

export type TButtonForm = {
  children?: React.ReactNode;
  type?: TButtonType;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: () => Promise<void> | void;
  hasIconButton?: boolean;
  colorButton?: "neutral" | "alert" | "primary";
};

export type TButtonType = "submit" | "reset" | "button" | undefined;
