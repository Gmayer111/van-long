import { getAllDishsServiceItems } from "src/app/actions/dishs-service/dish-services.actions";
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
          dishServiceTitle={dishsService.titleFR}
          dishServiceId={dishsService.id}
          extras={dishsService.extras}
        />
      );

    default:
      break;
  }
}
