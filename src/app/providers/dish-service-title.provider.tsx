"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export const DishServiceTitleContext = createContext<{
  showTitle: boolean;
  setShowTitle: Dispatch<SetStateAction<boolean>>;
}>({
  showTitle: true,
  setShowTitle: () => {},
});

export const DishServiceTitleProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [showTitle, setShowTitle] = useState<boolean>(true);

  return (
    <DishServiceTitleContext.Provider value={{ showTitle, setShowTitle }}>
      {children}
    </DishServiceTitleContext.Provider>
  );
};

export const useTitleProvider = () => useContext(DishServiceTitleContext);
