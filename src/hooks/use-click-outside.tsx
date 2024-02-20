import React, { MutableRefObject, useEffect } from "react";

export const UseClickOutside = ({
  ref,
  callBack,
}: {
  ref: MutableRefObject<any>;
  callBack: VoidFunction;
}) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callBack();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);
};
