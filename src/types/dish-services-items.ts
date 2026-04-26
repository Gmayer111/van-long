import { getAllDishsServiceItems } from "src/app/actions/dishs-service/dish-services.actions";

export type TDishsServicesItems = Awaited<
  ReturnType<typeof getAllDishsServiceItems>
>;
