-- CreateTable
CREATE TABLE "DishService" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DishService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dish" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "dishServiceId" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Dish_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Picture" (
    "id" SERIAL NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dishServiceId" INTEGER,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Picture_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dish_label_key" ON "Dish"("label");

-- CreateIndex
CREATE INDEX "Dish_label_idx" ON "Dish"("label");

-- AddForeignKey
ALTER TABLE "Dish" ADD CONSTRAINT "Dish_dishServiceId_fkey" FOREIGN KEY ("dishServiceId") REFERENCES "DishService"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Picture" ADD CONSTRAINT "Picture_dishServiceId_fkey" FOREIGN KEY ("dishServiceId") REFERENCES "DishService"("id") ON DELETE SET NULL ON UPDATE CASCADE;
