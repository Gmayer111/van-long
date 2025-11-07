/*
  Warnings:

  - You are about to drop the column `dishServiceId` on the `Extra` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Extra" DROP CONSTRAINT "Extra_dishServiceId_fkey";

-- AlterTable
ALTER TABLE "Extra" DROP COLUMN "dishServiceId";

-- CreateTable
CREATE TABLE "DishServicesOnExtras" (
    "dishServiceId" INTEGER NOT NULL,
    "extraId" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DishServicesOnExtras_pkey" PRIMARY KEY ("dishServiceId","extraId")
);

-- AddForeignKey
ALTER TABLE "DishServicesOnExtras" ADD CONSTRAINT "DishServicesOnExtras_dishServiceId_fkey" FOREIGN KEY ("dishServiceId") REFERENCES "DishService"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DishServicesOnExtras" ADD CONSTRAINT "DishServicesOnExtras_extraId_fkey" FOREIGN KEY ("extraId") REFERENCES "Extra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
