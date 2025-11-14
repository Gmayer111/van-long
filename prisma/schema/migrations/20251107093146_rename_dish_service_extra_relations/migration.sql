-- DropForeignKey
ALTER TABLE "DishServicesOnExtras" DROP CONSTRAINT "DishServicesOnExtras_dishServiceId_fkey";

-- DropForeignKey
ALTER TABLE "DishServicesOnExtras" DROP CONSTRAINT "DishServicesOnExtras_extraId_fkey";

-- AddForeignKey
ALTER TABLE "DishServicesOnExtras" ADD CONSTRAINT "DishServicesOnExtras_dishServiceId_fkey" FOREIGN KEY ("dishServiceId") REFERENCES "DishService"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DishServicesOnExtras" ADD CONSTRAINT "DishServicesOnExtras_extraId_fkey" FOREIGN KEY ("extraId") REFERENCES "Extra"("id") ON DELETE CASCADE ON UPDATE CASCADE;
