import { getAllDishsServiceItems } from "src/app/actions/dishs-service/dish-services.actions";
import { getAllExtras } from "src/app/actions/extras/extras.actions";
import DishServicesDashboard from "src/components/dashboard/dashboard-items/dish-services-dashboard.component";

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

  const tabItems = [
    {
      content: "dishs",
      path: `/admin/dashboard/${slug}/dishs`,
    },
    {
      content: "pictures",
      path: `/admin/dashboard/${slug}/pictures`,
    },
    {
      content: "extras",
      path: `/admin/dashboard/${slug}/extras`,
    },
  ];

  const dishServiceTitle = dishsService.titleFR.replace("Nos", "Les");

  return (
    <div>
      <DishServicesDashboard
        dishsService={dishsService}
        extrasItems={extrasItems}
        items={items}
        tabItems={tabItems}
        title={dishServiceTitle}
      />
    </div>
  );
}
