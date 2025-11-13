import { getAllDishsServiceItems } from "src/app/actions/dishs-service/dish-services.actions";
import { getAllExtras } from "src/app/actions/extras/extras.actions";
import DishsDashboard from "src/components/dashboard/dashboard-items/dishs-dashboard.component";
import ExtrasDashboard from "src/components/dashboard/dashboard-items/extras-dashboard.component";
import PicturesDashboard from "src/components/dashboard/dashboard-items/pictures-dashboard.component";

export default async function page({
  params,
}: {
  params: Promise<{ slug: string; items: "dishs" | "pictures" | "extras" }>;
}) {
  const { slug, items } = await params;

  const dishsService = await getAllDishsServiceItems({
    pathnameParams: slug,
    dishs: items === "dishs",
    pictures: items === "pictures",
    extras: items === "extras",
  });

  if (!dishsService) return <div>Chargement...</div>;

  const extrasItems = {
    dishServiceExtras: dishsService.extras.map((extra) => extra.extra),
    extras: await getAllExtras(),
  };

  switch (items) {
    case "dishs":
      return (
        <DishsDashboard
          dishServiceTitle={dishsService.titleFR}
          dishServiceId={dishsService.id}
          dishs={dishsService.dishs}
        />
      );
    case "pictures":
      return (
        <PicturesDashboard
          dishServiceTitle={dishsService.titleFR}
          dishServiceId={dishsService.id}
          pictures={dishsService.pictures}
        />
      );
    case "extras":
      return (
        <ExtrasDashboard
          extras={extrasItems.extras}
          dishServiceTitle={dishsService.titleFR}
          dishServiceId={dishsService.id}
          dishServiceExtras={extrasItems.dishServiceExtras}
        />
      );

    default:
      break;
  }
}
