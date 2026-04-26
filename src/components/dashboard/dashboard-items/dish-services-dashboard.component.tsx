"use client";
import DishsDashboard from "./dishs-dashboard.component";
import ExtrasDashboard from "./extras-dashboard.component";
import PicturesDashboard from "./pictures-dashboard.component";
import { updateDishServiceTitle } from "src/app/actions/dishs-service/dish-services.actions";
import { useToast } from "src/app/providers/toast.provider";
import { useState } from "react";
import { TDishsServicesItems } from "src/types/dish-services-items";
import { useTitleProvider } from "src/app/providers/dish-service-title.provider";
import TitleForm from "../title-form.component";

export type TDishServicesDashboardProps = {
  items: "dishs" | "pictures" | "extras";
  title: string;
  dishsService: TDishsServicesItems;
  tabItems: {
    content: string;
    path: string;
  }[];
  extrasItems: any;
};

const DishServicesDashboard = ({
  items,
  title,
  dishsService,
  tabItems,
  extrasItems,
}: TDishServicesDashboardProps) => {
  const { showToast } = useToast();
  const [showEditTitle, setShowEditTitle] = useState(false);
  const { setShowTitle } = useTitleProvider();

  if (!dishsService) return null;

  const handleEditTitle = async (formData: FormData) => {
    const result = await updateDishServiceTitle(
      dishsService?.id,
      formData,
      dishsService.titleEN,
    );

    if (result === undefined) {
      setShowEditTitle(false);
      setShowTitle(true);
    }

    if (result?.error) {
      showToast({ message: result?.error, type: "alert" });
    } else {
      showToast({ message: "Modification effectuée", type: "success" });
      setShowEditTitle(false);
      setShowTitle(true);
    }
  };

  const DishServicesItems = () => {
    switch (items) {
      case "dishs":
        return (
          <DishsDashboard
            dishServiceTitle={title}
            dishServiceId={dishsService.id}
            dishs={dishsService.dishs}
            tabItems={tabItems}
          />
        );
      case "pictures":
        return (
          <PicturesDashboard
            dishServiceTitle={title}
            dishServiceId={dishsService.id}
            pictures={dishsService.pictures}
            tabItems={tabItems}
          />
        );
      case "extras":
        return (
          <ExtrasDashboard
            extras={extrasItems.extras}
            dishServiceTitle={title}
            dishServiceId={dishsService.id}
            dishServiceExtras={extrasItems.dishServiceExtras}
            tabItems={tabItems}
          />
        );

      default:
        break;
    }
  };

  return (
    <>
      <TitleForm
        dishsService={dishsService}
        handleEditTitle={handleEditTitle}
        showEditTitle={showEditTitle}
        setShowEditTitle={setShowEditTitle}
      />
      <DishServicesItems />
    </>
  );
};

export default DishServicesDashboard;
