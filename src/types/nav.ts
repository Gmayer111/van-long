import { ReactNode } from "react";

export type TLabelNavValues =
  | "ACCUEIL"
  | "HOME"
  | "LE RESTAURANT"
  | "RESTAURANT"
  | "LA CARTE"
  | "MENU"
  | "NOUS TROUVER"
  | "FIND US";

export type TLinkItemList = {
  label: string | ReactNode;
  path: string;
};
