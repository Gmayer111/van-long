import React from "react";
import DishsDashboard from "src/components/dashboard/dishs/dishs-dashboard.component";
import { getDishsService } from "../../actions/dishs/dishs.actions";

export default async function page({
  params,
}: {
  params: Promise<{ dish: string }>;
}) {
  const dish = (await params).dish;
  const dishsService = await getDishsService(dish);

  if (!dishsService) return <div>Chargement...</div>;

  const dishs = dishsService?.dishs;

  return (
    <DishsDashboard
      dishServiceTitle={dishsService?.title}
      dishServiceId={dishsService?.id}
      dishs={dishs}
    />
  );
}
