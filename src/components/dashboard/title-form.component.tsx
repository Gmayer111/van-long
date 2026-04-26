import { Dispatch, SetStateAction, useEffect } from "react";
import ButtonForm from "../form/form-fields/button/button-form.component";
import InputForm from "../form/form-fields/input/input-form.component";
import { usePathname } from "next/navigation";
import { useTitleProvider } from "src/app/providers/dish-service-title.provider";
import { TDishsServicesItems } from "src/types/dish-services-items";

export type TTitleForm = {
  handleEditTitle: (formData: FormData) => void;
  dishsService: TDishsServicesItems;
  showEditTitle: boolean;
  setShowEditTitle: Dispatch<SetStateAction<boolean>>;
};

const TitleForm = ({
  handleEditTitle,
  dishsService,
  showEditTitle,
  setShowEditTitle,
}: TTitleForm) => {
  const { setShowTitle } = useTitleProvider();
  const pathname = usePathname();

  // detect when change page to reset the setShowTitle state
  useEffect(() => {
    setShowTitle(true);
  }, [pathname]);

  if (!dishsService) return null;
  console.log("showEditTitle", showEditTitle);

  return (
    <div className={showEditTitle ? "block-show-edit-title" : ""}>
      {showEditTitle && (
        <div className="edit-title">
          <div className={showEditTitle ? "edit-title-form-container" : ""}>
            <form action={handleEditTitle}>
              <InputForm
                label="Titre en FR"
                inputType="text"
                defaultValue={dishsService.titleFR}
                name="titleFR"
              />
              <InputForm
                label="Titre en EN"
                inputType="text"
                defaultValue={dishsService.titleEN}
                name="titleEN"
              />
              <ButtonForm colorButton="primary" type="submit">
                Confirmer
              </ButtonForm>
            </form>
          </div>
        </div>
      )}
      <div className="buttons-block-edit-title">
        <ButtonForm
          colorButton="ghost"
          onClick={() => {
            setShowTitle(showEditTitle);
            setShowEditTitle((prev) => !prev);
          }}
        >
          {!showEditTitle ? "Modifier le titre" : "Annuler"}
        </ButtonForm>
      </div>
    </div>
  );
};

export default TitleForm;
