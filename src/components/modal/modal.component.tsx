import CloseIcon from "public/assets/icons/close-icon";
import { useRef } from "react";
import { UseClickOutside } from "src/hooks/use-click-outside";

type TModalComponentProps = {
  isOpen?: boolean;
  toggle: VoidFunction;
};

const ModalComponent = ({ isOpen, toggle }: TModalComponentProps) => {
  const dialogRef = useRef(null);

  UseClickOutside({ ref: dialogRef, callBack: toggle });

  if (!isOpen) return null;

  return (
    isOpen && (
      <dialog ref={dialogRef}>
        <button aria-label="dialogButton" onClick={() => toggle()}>
          <CloseIcon iconStroke="black" />
        </button>
        <div className="bottomModal">
          <h2>Ventes à emporter</h2>
          <p>
            Vous pouvez venir commander sur place ou nous appeler au{" "}
            <span>01 43 36 05 16</span>. <br />
            N’oubliez pas d’apporter votre sac en papier ! <br /> L’équipe du
            restaurant.
          </p>
          <div>CB acceptée à partir de 15€</div>
        </div>
      </dialog>
    )
  );
};

export default ModalComponent;
