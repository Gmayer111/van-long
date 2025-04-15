import { getAllDishsServiceItems } from "src/app/actions/dishs-service/dish-services.actions";
import DishsDashboard from "src/components/dashboard/dashboard-items/dishs-dashboard.component";
import ExtrasDashboard from "src/components/dashboard/dashboard-items/extras-dashboard.component";
import PicturesDashboard from "src/components/dashboard/dashboard-items/pictures-dashboard.component";

export default async function page({
  params,
}: {
  params: Promise<{ dish: string; items: string }>;
}) {
  const urlParams = await params;
  const urlParamItems = urlParams.items;

  const dishsService = await getAllDishsServiceItems({
    pathnameParams: urlParams.dish,
    dishs: urlParamItems === "dishs",
    pictures: urlParamItems === "pictures",
    extras: urlParamItems === "extras",
  });

  if (!dishsService) return <div>Chargement...</div>;

  const tabItems = [
    {
      content: "dishs",
      path: `/admin/dashboard/${dishsService.slug}/dishs`,
    },
    {
      content: "pictures",
      path: `/admin/dashboard/${dishsService.slug}/pictures`,
    },
    {
      content: "extras",
      path: `/admin/dashboard/${dishsService.slug}/extras`,
    },
  ];

  switch (urlParamItems) {
    case "dishs":
      return (
        <DishsDashboard
          tabItems={tabItems}
          dishServiceTitle={dishsService?.titleFR}
          dishServiceId={dishsService?.id}
          dishs={dishsService.dishs}
        />
      );
    case "pictures":
      return (
        <PicturesDashboard
          tabItems={tabItems}
          dishServiceTitle={dishsService?.titleFR}
          dishServiceId={dishsService?.id}
          pictures={dishsService.pictures}
        />
      );
    case "extras":
      return (
        <ExtrasDashboard
          tabItems={tabItems}
          dishServiceTitle={dishsService?.titleFR}
          dishServiceId={dishsService?.id}
          extras={dishsService.extras}
        />
      );

    default:
      break;
  }
}
