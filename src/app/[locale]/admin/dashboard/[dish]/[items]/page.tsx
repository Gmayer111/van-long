import { getAllDishsPictures } from "src/app/actions/dishs-service/dish-services.actions";
import DishsDashboard from "src/components/dashboard/dishs-items/dishs-dashboard.component";
import PicturesDashboard from "src/components/dashboard/dishs-items/pictures-dashboard.component";

export default async function page({
  params,
}: {
  params: Promise<{ dish: string; items: string }>;
}) {
  const urlParams = await params;

  const dishsService = await getAllDishsPictures({
    pathnameParams: urlParams.dish,
    dishs: urlParams.items === "dishs" && true,
    pictures: urlParams.items === "pictures" && true,
  });

  if (!dishsService) return <div>Chargement...</div>;

  const dishs = dishsService?.dishs;
  const pictures = dishsService?.pictures;

  const tabItems = [
    {
      content: "dishs",
      path: `/admin/dashboard/${dishsService.title}/dishs`,
    },
    {
      content: "pictures",
      path: `/admin/dashboard/${dishsService.title}/pictures`,
    },
  ];

  return dishs ? (
    <DishsDashboard
      tabItems={tabItems}
      dishServiceTitle={dishsService?.title}
      dishServiceId={dishsService?.id}
      dishs={dishs}
    />
  ) : (
    <PicturesDashboard
      tabItems={tabItems}
      dishServiceTitle={dishsService?.title}
      dishServiceId={dishsService?.id}
      pictures={pictures}
    />
  );
}
