/*
  Warnings:

  - You are about to drop the column `englishLabel` on the `Dish` table. All the data in the column will be lost.
  - You are about to drop the column `frenchLabel` on the `Dish` table. All the data in the column will be lost.
  - You are about to drop the column `englishDescription` on the `Picture` table. All the data in the column will be lost.
  - You are about to drop the column `frenchDescription` on the `Picture` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[labelFR]` on the table `Dish` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[labelEN]` on the table `Dish` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `labelEN` to the `Dish` table without a default value. This is not possible if the table is not empty.
  - Added the required column `labelFR` to the `Dish` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionEN` to the `Picture` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionFR` to the `Picture` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Dish_englishLabel_key";

-- DropIndex
DROP INDEX "Dish_frenchLabel_key";

-- AlterTable
ALTER TABLE "Dish" DROP COLUMN "englishLabel",
DROP COLUMN "frenchLabel",
ADD COLUMN     "labelEN" TEXT NOT NULL,
ADD COLUMN     "labelFR" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Picture" DROP COLUMN "englishDescription",
DROP COLUMN "frenchDescription",
ADD COLUMN     "descriptionEN" TEXT NOT NULL,
ADD COLUMN     "descriptionFR" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Dish_labelFR_key" ON "Dish"("labelFR");

-- CreateIndex
CREATE UNIQUE INDEX "Dish_labelEN_key" ON "Dish"("labelEN");
