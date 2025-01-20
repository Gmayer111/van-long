import Image from "next/image";
import { useEffect, useState } from "react";

type TTableCellsProps<T> = {
  rowContent: T;
};

export const TableCells = <T,>({ rowContent }: TTableCellsProps<T>) => {
  const [typeOfRowContent, setTypeOfRowContent] = useState("");

  const rowIsPicture = ["jpg", "jpeg"].some((pictureExtension) =>
    rowContent?.toString().includes(pictureExtension)
  );

  useEffect(() => {
    if (rowIsPicture) setTypeOfRowContent("isPicture");
  }, [typeOfRowContent]);

  switch (typeOfRowContent) {
    case "isPicture":
      return (
        <Image
          width={200}
          height={200}
          src={rowContent as string}
          alt="Image"
        />
      );
    default:
      return rowContent;
  }
};
