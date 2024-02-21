export type TMenuItems = {
  title: string;
  picture?: TPicture[];
  items: TItem[];
};

export type TPicture = {
  path: string;
  description: string;
};

export type TItem = {
  label: string;
  price: string;
};
