/*
  Warnings:

  - A unique constraint covering the columns `[imageUrl]` on the table `Picture` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Picture_imageUrl_key" ON "Picture"("imageUrl");
