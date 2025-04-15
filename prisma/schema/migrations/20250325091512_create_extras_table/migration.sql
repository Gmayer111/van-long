-- CreateTable
CREATE TABLE "Extra" (
    "id" SERIAL NOT NULL,
    "labelFR" TEXT NOT NULL,
    "labelEN" TEXT NOT NULL,
    "dishServiceId" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Extra_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Extra_labelFR_key" ON "Extra"("labelFR");

-- CreateIndex
CREATE UNIQUE INDEX "Extra_labelEN_key" ON "Extra"("labelEN");

-- AddForeignKey
ALTER TABLE "Extra" ADD CONSTRAINT "Extra_dishServiceId_fkey" FOREIGN KEY ("dishServiceId") REFERENCES "DishService"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
