import { useTranslations } from "next-intl";
import CloseIcon from "public/assets/icons/close-icon";
import { useRef } from "react";
import { UseClickOutside } from "src/hooks/use-click-outside";

type TModalComponentProps = {
  isOpen?: boolean;
  toggle: VoidFunction;
};

const ModalComponent = ({ isOpen, toggle }: TModalComponentProps) => {
  const dialogRef = useRef(null);
  const t = useTranslations("ModalComponent");

  UseClickOutside({ ref: dialogRef, callBack: toggle });

  if (!isOpen) return null;

  return (
    isOpen && (
      <dialog ref={dialogRef}>
        <button aria-label="dialogButton" onClick={() => toggle()}>
          <CloseIcon iconStroke="black" />
        </button>
        <div className="bottomModal">
          <h2>{t("takeAway")}</h2>
          <p>
            {t.rich("mainParagraph", {
              spanLines: (chunks) => <span>{chunks}</span>,
            })}
          </p>
          <div>{t("visaAccepted")}</div>
        </div>
      </dialog>
    )
  );
};

export default ModalComponent;
