/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Picture` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[pictureUrl]` on the table `Picture` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pictureUrl` to the `Picture` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Picture_imageUrl_key";

-- AlterTable
ALTER TABLE "Picture" DROP COLUMN "imageUrl",
ADD COLUMN     "pictureUrl" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Picture_pictureUrl_key" ON "Picture"("pictureUrl");
