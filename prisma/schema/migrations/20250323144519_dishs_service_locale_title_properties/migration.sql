/*
  Warnings:

  - You are about to drop the column `title` on the `DishService` table. All the data in the column will be lost.
  - Added the required column `titleEN` to the `DishService` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleFR` to the `DishService` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DishService" DROP COLUMN "title",
ADD COLUMN     "titleEN" TEXT NOT NULL,
ADD COLUMN     "titleFR" TEXT NOT NULL;
