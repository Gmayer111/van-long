"use client";
import React, { useRef, useState } from "react";
import { TButtonForm } from "../../form";
import ButtonForm from "../button/button-form.component";
import { UseClickOutside } from "src/hooks/use-click-outside";

type TDropdownButtonProps = {
  listItems?: TListItem[];
};

export type TListItem = {
  content: string;
  onClickAction: VoidFunction;
};

const DropdownButton = React.forwardRef<
  HTMLButtonElement,
  TButtonForm & TDropdownButtonProps
>(({ isLoading, children, isDisabled, hasIconButton, listItems }, ref) => {
  const [displayList, setDisplayList] = useState<boolean>();
  const dropdownButtonRef = useRef(null);

  const onToggleList = () => {
    setDisplayList(false);
  };

  UseClickOutside({ ref: dropdownButtonRef, callBack: onToggleList });

  return (
    <div ref={dropdownButtonRef} className="dropwdown-button-container">
      <ButtonForm
        hasIconButton={hasIconButton}
        onClick={() => setDisplayList(true)}
        isLoading={isLoading}
        isDisabled={isDisabled}
        ref={ref}
        type="button"
      >
        {hasIconButton ? (
          <svg
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
        ) : (
          children
        )}
      </ButtonForm>
      {displayList && (
        <div className="dropdown-list-container">
          <ul>
            {listItems?.map((listItem, index) => (
              <li
                key={`index-${listItem.content}`}
                onClick={() => {
                  setDisplayList(false);
                  listItem.onClickAction();
                }}
              >
                {listItem.content}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default DropdownButton;
