/*
  Warnings:

  - Added the required column `slug` to the `DishService` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DishService" ADD COLUMN     "slug" TEXT NOT NULL,
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;
