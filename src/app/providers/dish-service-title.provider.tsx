"use client";
import { createContext, ReactNode, useContext, useState } from "react";

export const DishServiceTitleContext = createContext<{
  getTitle?: (title?: string) => void;
  dishServiceTitle?: string;
}>({
  getTitle: () => {},
  dishServiceTitle: undefined,
});

export const DishServiceTitleProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [dishServiceTitle, setDishServiceTitle] = useState<
    string | undefined
  >();

  const getTitle = (title?: string) => {
    setDishServiceTitle(title);
  };

  return (
    <DishServiceTitleContext.Provider value={{ getTitle, dishServiceTitle }}>
      {children}
    </DishServiceTitleContext.Provider>
  );
};

export const useDishServiceTitle = () => useContext(DishServiceTitleContext);
