/*
  Warnings:

  - You are about to drop the column `label` on the `Dish` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Picture` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[frenchLabel]` on the table `Dish` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[englishLabel]` on the table `Dish` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `englishLabel` to the `Dish` table without a default value. This is not possible if the table is not empty.
  - Added the required column `frenchLabel` to the `Dish` table without a default value. This is not possible if the table is not empty.
  - Added the required column `englishDescription` to the `Picture` table without a default value. This is not possible if the table is not empty.
  - Added the required column `frenchDescription` to the `Picture` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Dish_label_key";

-- AlterTable
ALTER TABLE "Dish" DROP COLUMN "label",
ADD COLUMN     "englishLabel" TEXT NOT NULL,
ADD COLUMN     "frenchLabel" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Picture" DROP COLUMN "description",
ADD COLUMN     "englishDescription" TEXT NOT NULL,
ADD COLUMN     "frenchDescription" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Dish_frenchLabel_key" ON "Dish"("frenchLabel");

-- CreateIndex
CREATE UNIQUE INDEX "Dish_englishLabel_key" ON "Dish"("englishLabel");
